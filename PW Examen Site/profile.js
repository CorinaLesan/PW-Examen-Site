// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
    loadSettings();
    setupEventListeners();
});

// Загрузка данных пользователя
function loadUserData() {
    // Проверяем, есть ли данные в localStorage
    const savedUserData = localStorage.getItem('userData');
    const savedAvatar = localStorage.getItem('userAvatar');

    if (savedUserData) {
        const userData = JSON.parse(savedUserData);

        // Заполняем поля формы
        document.getElementById('editFirstName').value = userData.firstName || '';
        document.getElementById('editLastName').value = userData.lastName || '';
        document.getElementById('editUsername').value = userData.username || '';
        document.getElementById('editEmail').value = userData.email || '';
        document.getElementById('editGender').value = userData.gender || 'male';
        document.getElementById('editAge').value = userData.age || '';
        document.getElementById('editHeight').value = userData.height || '';
        document.getElementById('editWeight').value = userData.weight || '';
        document.getElementById('editGoal').value = userData.goal || 'maintain';
        document.getElementById('editActivity').value = userData.activity || 'moderate';
        document.getElementById('editBio').value = userData.bio || '';

        // Обновляем отображение имени и email
        document.getElementById('userName').textContent =
            `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || 'User';
        document.getElementById('userEmail').textContent = userData.email || 'No email provided';

        // Обновляем дату регистрации
        if (userData.registrationDate) {
            document.getElementById('memberSince').textContent = formatDate(
                userData.registrationDate
            );
        }

        // Рассчитываем и обновляем BMI
        updateBMI(userData.height, userData.weight);
    }

    // Загружаем аватар
    if (savedAvatar) {
        document.getElementById('avatarImage').src = savedAvatar;
    }
}

// Загрузка настроек
function loadSettings() {
    const savedSettings = localStorage.getItem('userSettings');

    if (savedSettings) {
        const settings = JSON.parse(savedSettings);

        document.getElementById('themeSelect').value = settings.theme || 'light';
        document.getElementById('notificationsToggle').checked = settings.notifications !== false;
        document.getElementById('emailUpdatesToggle').checked = settings.emailUpdates !== false;
        document.getElementById('remindersSelect').value = settings.reminders || 'daily';
        document.getElementById('unitsSelect').value = settings.units || 'metric';

        // Применяем тему
        applyTheme(settings.theme);

        // Обновляем единицы измерения
        updateUnits(settings.units);
    }
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Загрузка аватара
    document.getElementById('avatarUpload').addEventListener('change', handleAvatarUpload);

    // Удаление аватара
    document.getElementById('removeAvatarBtn').addEventListener('click', confirmRemoveAvatar);

    // Сохранение личных данных
    document.getElementById('personalDataForm').addEventListener('submit', handleSaveData);

    // Отмена редактирования
    document.getElementById('cancelEditBtn').addEventListener('click', resetForm);

    // Сохранение настроек
    document.getElementById('saveSettingsBtn').addEventListener('click', handleSaveSettings);

    // Изменение единиц измерения
    document.getElementById('unitsSelect').addEventListener('change', function () {
        updateUnits(this.value);
    });

    // Изменение темы
    document.getElementById('themeSelect').addEventListener('change', function () {
        applyTheme(this.value);
    });

    // Модальное окно
    document.getElementById('modalCancelBtn').addEventListener('click', closeModal);

    // Закрытие модального окна при клике вне его
    document.getElementById('confirmationModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });
}

// Обработка загрузки аватара
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Проверяем тип файла
    if (!file.type.match('image.*')) {
        showNotification('Please select an image file', 'error');
        return;
    }

    // Проверяем размер файла (максимум 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showNotification('Image size should be less than 5MB', 'error');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const imageUrl = e.target.result;

        // Обновляем изображение аватара
        document.getElementById('avatarImage').src = imageUrl;

        // Сохраняем в localStorage
        localStorage.setItem('userAvatar', imageUrl);

        showNotification('Avatar updated successfully!', 'success');
    };

    reader.readAsDataURL(file);

    // Сбрасываем значение input, чтобы можно было загрузить тот же файл снова
    event.target.value = '';
}

// Подтверждение удаления аватара
function confirmRemoveAvatar() {
    showModal('Remove Avatar', 'Are you sure you want to remove your avatar?', removeAvatar);
}

// Удаление аватара
function removeAvatar() {
    // Устанавливаем аватар по умолчанию
    const defaultAvatar = 'img/default-avatar.png';
    document.getElementById('avatarImage').src = defaultAvatar;

    // Удаляем из localStorage
    localStorage.removeItem('userAvatar');

    showNotification('Avatar removed successfully', 'success');
    closeModal();
}

// Обработка сохранения личных данных
function handleSaveData(event) {
    event.preventDefault();

    // Собираем данные из формы
    const userData = {
        firstName: document.getElementById('editFirstName').value.trim(),
        lastName: document.getElementById('editLastName').value.trim(),
        username: document.getElementById('editUsername').value.trim(),
        email: document.getElementById('editEmail').value.trim(),
        gender: document.getElementById('editGender').value,
        age: parseInt(document.getElementById('editAge').value) || 0,
        height: parseFloat(document.getElementById('editHeight').value) || 0,
        weight: parseFloat(document.getElementById('editWeight').value) || 0,
        goal: document.getElementById('editGoal').value,
        activity: document.getElementById('editActivity').value,
        bio: document.getElementById('editBio').value.trim(),
        registrationDate: new Date().toISOString(), // или берем существующую дату
    };

    // Валидация
    if (!validateUserData(userData)) {
        return;
    }

    // Сохраняем в localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Обновляем отображение
    document.getElementById('userName').textContent = `${userData.firstName} ${userData.lastName}`;
    document.getElementById('userEmail').textContent = userData.email;

    // Обновляем BMI
    updateBMI(userData.height, userData.weight);

    showNotification('Personal data saved successfully!', 'success');
}

// Сброс формы
function resetForm() {
    loadUserData();
    showNotification('Changes discarded', 'info');
}

// Обработка сохранения настроек
function handleSaveSettings() {
    const settings = {
        theme: document.getElementById('themeSelect').value,
        notifications: document.getElementById('notificationsToggle').checked,
        emailUpdates: document.getElementById('emailUpdatesToggle').checked,
        reminders: document.getElementById('remindersSelect').value,
        units: document.getElementById('unitsSelect').value,
    };

    // Сохраняем в localStorage
    localStorage.setItem('userSettings', JSON.stringify(settings));

    showNotification('Settings saved successfully!', 'success');
}

// Валидация данных пользователя
function validateUserData(data) {
    if (!data.firstName || !data.lastName) {
        showNotification('First name and last name are required', 'error');
        return false;
    }

    if (!data.email) {
        showNotification('Email address is required', 'error');
        return false;
    }

    // Простая валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }

    if (data.age < 1 || data.age > 120) {
        showNotification('Please enter a valid age (1-120)', 'error');
        return false;
    }

    if (data.height < 50 || data.height > 250) {
        showNotification('Please enter a valid height (50-250 cm)', 'error');
        return false;
    }

    if (data.weight < 20 || data.weight > 300) {
        showNotification('Please enter a valid weight (20-300 kg)', 'error');
        return false;
    }

    return true;
}

// Обновление единиц измерения
function updateUnits(units) {
    const heightUnit = document.getElementById('heightUnit');
    const weightUnit = document.getElementById('weightUnit');
    const heightInput = document.getElementById('editHeight');
    const weightInput = document.getElementById('editWeight');

    if (units === 'imperial') {
        heightUnit.textContent = 'in';
        weightUnit.textContent = 'lbs';

        // Конвертируем значения, если они существуют
        if (heightInput.value) {
            heightInput.value = Math.round(parseFloat(heightInput.value) / 2.54);
        }
        if (weightInput.value) {
            weightInput.value = Math.round(parseFloat(weightInput.value) * 2.20462);
        }
    } else {
        heightUnit.textContent = 'cm';
        weightUnit.textContent = 'kg';

        // Конвертируем обратно
        if (heightInput.value) {
            heightInput.value = Math.round(parseFloat(heightInput.value) * 2.54);
        }
        if (weightInput.value) {
            weightInput.value = Math.round(parseFloat(weightInput.value) / 2.20462);
        }
    }
}

// Применение темы
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#fff';
    } else if (theme === 'auto') {
        // Проверяем системные настройки
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.style.backgroundColor = prefersDark ? '#1a1a1a' : '#fff';
        document.body.style.color = prefersDark ? '#fff' : '#333';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
    }
}

// Обновление BMI
function updateBMI(height, weight) {
    if (height > 0 && weight > 0) {
        // Конвертируем рост в метры
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        document.getElementById('bmiValue').textContent = bmi.toFixed(1);

        // Обновляем статус BMI
        const bmiStatus = document.querySelector('.progress-status.healthy');
        if (bmi < 18.5) {
            bmiStatus.textContent = 'Underweight';
            bmiStatus.className = 'progress-status underweight';
        } else if (bmi < 25) {
            bmiStatus.textContent = 'Healthy';
            bmiStatus.className = 'progress-status healthy';
        } else if (bmi < 30) {
            bmiStatus.textContent = 'Overweight';
            bmiStatus.className = 'progress-status overweight';
        } else {
            bmiStatus.textContent = 'Obese';
            bmiStatus.className = 'progress-status obese';
        }
    }
}

// Форматирование даты
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// Показ модального окна
function showModal(title, message, confirmCallback) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    document.getElementById('modalConfirmBtn').onclick = confirmCallback;
    document.getElementById('confirmationModal').style.display = 'flex';
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

// Показ уведомлений
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;

    // Устанавливаем цвет в зависимости от типа
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#4CAF50';
            break;
        case 'error':
            notification.style.backgroundColor = '#f44336';
            break;
        case 'info':
            notification.style.backgroundColor = '#2196F3';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ff9800';
            break;
    }

    notification.style.display = 'block';

    // Автоматически скрываем через 3 секунды
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Генерация тестовых данных для демонстрации
function generateDemoData() {
    // Эта функция может быть вызвана для демонстрации, если нет реальных данных
    const demoUserData = {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe_fitness',
        email: 'john.doe@example.com',
        gender: 'male',
        age: 28,
        height: 180,
        weight: 75,
        goal: 'gain-muscle',
        activity: 'active',
        bio: 'Passionate about fitness and bodybuilding. Currently focusing on strength training and muscle growth.',
        registrationDate: new Date('2024-01-15').toISOString(),
    };

    localStorage.setItem('userData', JSON.stringify(demoUserData));
    loadUserData();
}

// Автоматическая генерация демо-данных при первом посещении (можно убрать в продакшене)
if (!localStorage.getItem('userData') && !localStorage.getItem('demoShown')) {
    generateDemoData();
    localStorage.setItem('demoShown', 'true');
}
