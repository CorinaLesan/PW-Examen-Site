document.addEventListener('DOMContentLoaded', function () {
    // получить элементы аватара
    const avatarBox = document.querySelector('.avatar-placeholder');
    const removeBtn = document.querySelector('.remove-avatar-btn');

    // нажмать чтобы загрузить изображение
    avatarBox.addEventListener('click', function () {
        // создать скрытый файл ввода
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        // когда пользователь выбирает изображение
        fileInput.addEventListener('change', function () {
            if (this.files && this.files[0]) {
                const file = this.files[0];

                // Пповеряет является ли это изображением
                if (!file.type.startsWith('image/')) {
                    alert('Please select an image file (JPG, PNG, etc.)');
                    return;
                }

                // показывает изображение
                const reader = new FileReader();
                reader.onload = function (e) {
                    // очистить местозаполнитель
                    avatarBox.innerHTML = '';

                    // создает и добавляет изображение
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = 'Profile photo';

                    // ставит изображение под круг
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.borderRadius = '50%';
                    img.style.objectFit = 'cover';

                    avatarBox.appendChild(img);

                    // показывает кнопку удаления
                    removeBtn.style.display = 'block';

                    // сохраняет в памяти браузера
                    localStorage.setItem('myAvatar', e.target.result);
                };

                reader.readAsDataURL(file);
            }
        });

        // нажать на ввод файла
        fileInput.click();
    });

    // удаляет кнопку аватара
    removeBtn.addEventListener('click', function () {
        if (confirm('Delete your profile photo?')) {
            // восстанавливает аватар по умолчанию
            avatarBox.innerHTML = '<span class="avatar-icon">👤</span>';

            // скрывает кнопку удаления
            removeBtn.style.display = 'none';

            // удаляет из памяти браузера
            localStorage.removeItem('myAvatar');
        }
    });

    // загружает сохраненный аватар при открытии страницы
    const savedAvatar = localStorage.getItem('myAvatar');
    if (savedAvatar) {
        avatarBox.innerHTML = '';
        const img = document.createElement('img');
        img.src = savedAvatar;
        img.alt = 'Profile photo';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        avatarBox.appendChild(img);
        removeBtn.style.display = 'block';
    }
});
