// переменная для отслеживания единиц измерения (true = metric, false = imperial)
let isMetric = true;

// функция для переключения единиц измерения
function toggleUnit() {
    const toggle = document.getElementById('unitToggle');
    toggle.classList.toggle('active');
    isMetric = !toggle.classList.contains('active');

    document.getElementById('unit').textContent = isMetric ? 'kgs' : 'lbs';

    const weight = parseFloat(document.getElementById('weight').value);
    const reps = parseInt(document.getElementById('reps').value);
    if (weight && reps) {
        calculate();
    }
}

// функция для расчета 1RM (используем формулу Epley)
function calculate() {
    const weight = parseFloat(document.getElementById('weight').value);
    const reps = parseInt(document.getElementById('reps').value);

    if (!weight || !reps || weight <= 0 || reps <= 0) {
        alert('Please enter valid weight and reps values');
        return;
    }

    if (reps > 20) {
        alert('For accurate results, use 20 reps or less');
        return;
    }

    // формула Epley: 1RM = weight × (1 + reps/30)
    let oneRepMax;
    if (reps === 1) {
        oneRepMax = weight;
    } else {
        oneRepMax = weight * (1 + reps / 30);
    }

    oneRepMax = Math.round(oneRepMax);

    document.getElementById('result').innerHTML =
        oneRepMax + ' <span id="unit">' + (isMetric ? 'kgs' : 'lbs') + '</span>';
}

function viewDetails() {
    const weight = parseFloat(document.getElementById('weight').value);
    const reps = parseInt(document.getElementById('reps').value);

    if (!weight || !reps) {
        alert('Please calculate your 1RM first');
        return;
    }

    alert(
        'Calculation Details:\n\n' +
            'Weight Lifted: ' +
            weight +
            (isMetric ? ' kg' : ' lbs') +
            '\n' +
            'Reps: ' +
            reps +
            '\n' +
            'Formula Used: Epley Formula\n' +
            '1RM = Weight × (1 + Reps/30)'
    );
}

function saveResults() {
    const result = document.getElementById('result').textContent;
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;

    if (!weight || !reps) {
        alert('Please calculate your 1RM first');
        return;
    }

    const data = {
        date: new Date().toLocaleDateString(),
        weight: weight,
        reps: reps,
        oneRepMax: result,
        unit: isMetric ? 'kg' : 'lbs',
    };

    let savedResults = JSON.parse(localStorage.getItem('1rmResults') || '[]');
    savedResults.push(data);
    localStorage.setItem('1rmResults', JSON.stringify(savedResults));

    alert('Results saved successfully!');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('weight').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculate();
    });

    document.getElementById('reps').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculate();
    });
});
