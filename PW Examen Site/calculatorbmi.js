// переменная для отслеживания единиц измерения (true = metric, false = imperial)
let isMetric = true;

// функция для переключения единиц измерения
function toggleUnit() {
    const toggle = document.getElementById('unitToggle');
    toggle.classList.toggle('active');
    isMetric = !toggle.classList.contains('active');

    // обновляется placeholder после введения
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    if (isMetric) {
        weightInput.placeholder = 'Your weight... (kgs)';
        heightInput.placeholder = 'Your height... (cm)';
    } else {
        weightInput.placeholder = 'Your weight... (lbs)';
        heightInput.placeholder = 'Your height... (inches)';
    }

    // очищает поля и результат
    weightInput.value = '';
    heightInput.value = '';
    document.getElementById('result').textContent = '?';
    document.getElementById('bmiCategory').className = 'bmi-category';
}

// функция для расчета BMI
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // проверка валидности данных
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values');
        return;
    }

    let bmi;

    if (isMetric) {
        // метрическая система: BMI = вес(кг) / (рост(м))²
        const heightInMeters = height / 100;
        bmi = weight / (heightInMeters * heightInMeters);
    } else {
        // имперская система: BMI = (вес(lbs) / (рост(inches))²) × 703
        bmi = (weight / (height * height)) * 703;
    }

    // округляем до 1 десятичного знака
    bmi = Math.round(bmi * 10) / 10;

    // отображаем результат
    document.getElementById('result').textContent = bmi;

    // определяем категорию BMI
    showBMICategory(bmi);
}

// функция для отображения категории BMI
function showBMICategory(bmi) {
    const categoryDiv = document.getElementById('bmiCategory');
    let category = '';
    let categoryClass = '';

    if (bmi < 18.5) {
        category = 'Underweight - BMI less than 18.5';
        categoryClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight - BMI 18.5 to 24.9';
        categoryClass = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight - BMI 25 to 29.9';
        categoryClass = 'overweight';
    } else {
        category = 'Obese - BMI 30 or greater';
        categoryClass = 'obese';
    }

    categoryDiv.textContent = category;
    categoryDiv.className = 'bmi-category show ' + categoryClass;
}

// добавляем поддержку Enter для расчета
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('weight').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculateBMI();
    });

    document.getElementById('height').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculateBMI();
    });
});
