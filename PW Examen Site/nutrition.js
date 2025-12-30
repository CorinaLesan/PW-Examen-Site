// ========================================
// ДАННЫЕ И СОСТОЯНИЕ ПРИЛОЖЕНИЯ
// ========================================

// База продуктов с эмодзи
const foodDatabase = [
    // Белки
    {
        name: 'Chicken Breast',
        category: 'protein',
        calories: 165,
        protein: 31,
        carbs: 0,
        fats: 3.6,
        serving: 100,
        emoji: '🍗',
    },
    {
        name: 'Salmon',
        category: 'protein',
        calories: 208,
        protein: 20,
        carbs: 0,
        fats: 13,
        serving: 100,
        emoji: '🐟',
    },
    {
        name: 'Eggs',
        category: 'protein',
        calories: 155,
        protein: 13,
        carbs: 1.1,
        fats: 11,
        serving: 100,
        emoji: '🥚',
    },
    {
        name: 'Tuna',
        category: 'protein',
        calories: 132,
        protein: 28,
        carbs: 0,
        fats: 1.3,
        serving: 100,
        emoji: '🐟',
    },
    {
        name: 'Turkey Breast',
        category: 'protein',
        calories: 135,
        protein: 30,
        carbs: 0,
        fats: 0.7,
        serving: 100,
        emoji: '🦃',
    },
    {
        name: 'Beef Steak',
        category: 'protein',
        calories: 271,
        protein: 25,
        carbs: 0,
        fats: 19,
        serving: 100,
        emoji: '🥩',
    },
    {
        name: 'Pork Chop',
        category: 'protein',
        calories: 242,
        protein: 27,
        carbs: 0,
        fats: 14,
        serving: 100,
        emoji: '🥓',
    },
    {
        name: 'Shrimp',
        category: 'protein',
        calories: 99,
        protein: 24,
        carbs: 0.2,
        fats: 0.3,
        serving: 100,
        emoji: '🦐',
    },
    {
        name: 'Protein Powder',
        category: 'protein',
        calories: 120,
        protein: 24,
        carbs: 3,
        fats: 1.5,
        serving: 30,
        emoji: '💪',
    },
    {
        name: 'Tofu',
        category: 'protein',
        calories: 76,
        protein: 8,
        carbs: 1.9,
        fats: 4.8,
        serving: 100,
        emoji: '🥢',
    },

    // Овощи
    {
        name: 'Broccoli',
        category: 'vegetables',
        calories: 34,
        protein: 2.8,
        carbs: 7,
        fats: 0.4,
        serving: 100,
        emoji: '🥦',
    },
    {
        name: 'Spinach',
        category: 'vegetables',
        calories: 23,
        protein: 2.9,
        carbs: 3.6,
        fats: 0.4,
        serving: 100,
        emoji: '🥬',
    },
    {
        name: 'Tomato',
        category: 'vegetables',
        calories: 18,
        protein: 0.9,
        carbs: 3.9,
        fats: 0.2,
        serving: 100,
        emoji: '🍅',
    },
    {
        name: 'Cucumber',
        category: 'vegetables',
        calories: 15,
        protein: 0.7,
        carbs: 3.6,
        fats: 0.1,
        serving: 100,
        emoji: '🥒',
    },
    {
        name: 'Bell Pepper',
        category: 'vegetables',
        calories: 31,
        protein: 1,
        carbs: 6,
        fats: 0.3,
        serving: 100,
        emoji: '🫑',
    },
    {
        name: 'Carrots',
        category: 'vegetables',
        calories: 41,
        protein: 0.9,
        carbs: 10,
        fats: 0.2,
        serving: 100,
        emoji: '🥕',
    },
    {
        name: 'Lettuce',
        category: 'vegetables',
        calories: 15,
        protein: 1.4,
        carbs: 2.9,
        fats: 0.2,
        serving: 100,
        emoji: '🥬',
    },
    {
        name: 'Asparagus',
        category: 'vegetables',
        calories: 20,
        protein: 2.2,
        carbs: 3.9,
        fats: 0.1,
        serving: 100,
        emoji: '🌿',
    },
    {
        name: 'Mushrooms',
        category: 'vegetables',
        calories: 22,
        protein: 3.1,
        carbs: 3.3,
        fats: 0.3,
        serving: 100,
        emoji: '🍄',
    },
    {
        name: 'Onion',
        category: 'vegetables',
        calories: 40,
        protein: 1.1,
        carbs: 9,
        fats: 0.1,
        serving: 100,
        emoji: '🧅',
    },
    {
        name: 'Garlic',
        category: 'vegetables',
        calories: 149,
        protein: 6.4,
        carbs: 33,
        fats: 0.5,
        serving: 100,
        emoji: '🧄',
    },
    {
        name: 'Cauliflower',
        category: 'vegetables',
        calories: 25,
        protein: 1.9,
        carbs: 5,
        fats: 0.3,
        serving: 100,
        emoji: '🥦',
    },
    {
        name: 'Zucchini',
        category: 'vegetables',
        calories: 17,
        protein: 1.2,
        carbs: 3.1,
        fats: 0.3,
        serving: 100,
        emoji: '🥒',
    },
    {
        name: 'Eggplant',
        category: 'vegetables',
        calories: 25,
        protein: 1,
        carbs: 6,
        fats: 0.2,
        serving: 100,
        emoji: '🍆',
    },

    // Фрукты
    {
        name: 'Apple',
        category: 'fruits',
        calories: 52,
        protein: 0.3,
        carbs: 14,
        fats: 0.2,
        serving: 100,
        emoji: '🍎',
    },
    {
        name: 'Banana',
        category: 'fruits',
        calories: 89,
        protein: 1.1,
        carbs: 23,
        fats: 0.3,
        serving: 100,
        emoji: '🍌',
    },
    {
        name: 'Orange',
        category: 'fruits',
        calories: 47,
        protein: 0.9,
        carbs: 12,
        fats: 0.1,
        serving: 100,
        emoji: '🍊',
    },
    {
        name: 'Strawberries',
        category: 'fruits',
        calories: 32,
        protein: 0.7,
        carbs: 8,
        fats: 0.3,
        serving: 100,
        emoji: '🍓',
    },
    {
        name: 'Blueberries',
        category: 'fruits',
        calories: 57,
        protein: 0.7,
        carbs: 14,
        fats: 0.3,
        serving: 100,
        emoji: '🫐',
    },
    {
        name: 'Grapes',
        category: 'fruits',
        calories: 69,
        protein: 0.7,
        carbs: 18,
        fats: 0.2,
        serving: 100,
        emoji: '🍇',
    },
    {
        name: 'Watermelon',
        category: 'fruits',
        calories: 30,
        protein: 0.6,
        carbs: 8,
        fats: 0.2,
        serving: 100,
        emoji: '🍉',
    },
    {
        name: 'Mango',
        category: 'fruits',
        calories: 60,
        protein: 0.8,
        carbs: 15,
        fats: 0.4,
        serving: 100,
        emoji: '🥭',
    },
    {
        name: 'Pineapple',
        category: 'fruits',
        calories: 50,
        protein: 0.5,
        carbs: 13,
        fats: 0.1,
        serving: 100,
        emoji: '🍍',
    },
    {
        name: 'Peach',
        category: 'fruits',
        calories: 39,
        protein: 0.9,
        carbs: 10,
        fats: 0.3,
        serving: 100,
        emoji: '🍑',
    },
    {
        name: 'Pear',
        category: 'fruits',
        calories: 57,
        protein: 0.4,
        carbs: 15,
        fats: 0.1,
        serving: 100,
        emoji: '🍐',
    },
    {
        name: 'Cherries',
        category: 'fruits',
        calories: 50,
        protein: 1,
        carbs: 12,
        fats: 0.3,
        serving: 100,
        emoji: '🍒',
    },
    {
        name: 'Kiwi',
        category: 'fruits',
        calories: 61,
        protein: 1.1,
        carbs: 15,
        fats: 0.5,
        serving: 100,
        emoji: '🥝',
    },
    {
        name: 'Lemon',
        category: 'fruits',
        calories: 29,
        protein: 1.1,
        carbs: 9,
        fats: 0.3,
        serving: 100,
        emoji: '🍋',
    },
    {
        name: 'Raspberries',
        category: 'fruits',
        calories: 52,
        protein: 1.2,
        carbs: 12,
        fats: 0.7,
        serving: 100,
        emoji: '🫐',
    },
    {
        name: 'Blackberries',
        category: 'fruits',
        calories: 43,
        protein: 1.4,
        carbs: 10,
        fats: 0.5,
        serving: 100,
        emoji: '🫐',
    },

    // Зерновые
    {
        name: 'Brown Rice',
        category: 'grains',
        calories: 111,
        protein: 2.6,
        carbs: 23,
        fats: 0.9,
        serving: 100,
        emoji: '🍚',
    },
    {
        name: 'White Rice',
        category: 'grains',
        calories: 130,
        protein: 2.7,
        carbs: 28,
        fats: 0.3,
        serving: 100,
        emoji: '🍚',
    },
    {
        name: 'Oatmeal',
        category: 'grains',
        calories: 389,
        protein: 17,
        carbs: 66,
        fats: 7,
        serving: 100,
        emoji: '🥣',
    },
    {
        name: 'Whole Wheat Bread',
        category: 'grains',
        calories: 247,
        protein: 13,
        carbs: 41,
        fats: 3.4,
        serving: 100,
        emoji: '🍞',
    },
    {
        name: 'Quinoa',
        category: 'grains',
        calories: 120,
        protein: 4.4,
        carbs: 21,
        fats: 1.9,
        serving: 100,
        emoji: '🌾',
    },
    {
        name: 'Pasta',
        category: 'grains',
        calories: 131,
        protein: 5,
        carbs: 25,
        fats: 1.1,
        serving: 100,
        emoji: '🍝',
    },
    {
        name: 'Sweet Potato',
        category: 'grains',
        calories: 86,
        protein: 1.6,
        carbs: 20,
        fats: 0.1,
        serving: 100,
        emoji: '🍠',
    },
    {
        name: 'White Potato',
        category: 'grains',
        calories: 77,
        protein: 2,
        carbs: 17,
        fats: 0.1,
        serving: 100,
        emoji: '🥔',
    },
    {
        name: 'Corn',
        category: 'grains',
        calories: 86,
        protein: 3.3,
        carbs: 19,
        fats: 1.4,
        serving: 100,
        emoji: '🌽',
    },
    {
        name: 'Bagel',
        category: 'grains',
        calories: 257,
        protein: 10,
        carbs: 50,
        fats: 1.5,
        serving: 100,
        emoji: '🥯',
    },
    {
        name: 'Cereal',
        category: 'grains',
        calories: 379,
        protein: 8,
        carbs: 84,
        fats: 2,
        serving: 100,
        emoji: '🥣',
    },

    // Молочные продукты
    {
        name: 'Greek Yogurt',
        category: 'dairy',
        calories: 59,
        protein: 10,
        carbs: 3.6,
        fats: 0.4,
        serving: 100,
        emoji: '🥛',
    },
    {
        name: 'Milk',
        category: 'dairy',
        calories: 42,
        protein: 3.4,
        carbs: 5,
        fats: 1,
        serving: 100,
        emoji: '🥛',
    },
    {
        name: 'Cottage Cheese',
        category: 'dairy',
        calories: 98,
        protein: 11,
        carbs: 3.4,
        fats: 4.3,
        serving: 100,
        emoji: '🧀',
    },
    {
        name: 'Cheddar Cheese',
        category: 'dairy',
        calories: 403,
        protein: 25,
        carbs: 1.3,
        fats: 33,
        serving: 100,
        emoji: '🧀',
    },
    {
        name: 'Mozzarella',
        category: 'dairy',
        calories: 280,
        protein: 28,
        carbs: 3.1,
        fats: 17,
        serving: 100,
        emoji: '🧀',
    },
    {
        name: 'Butter',
        category: 'dairy',
        calories: 717,
        protein: 0.9,
        carbs: 0.1,
        fats: 81,
        serving: 100,
        emoji: '🧈',
    },
    {
        name: 'Cream Cheese',
        category: 'dairy',
        calories: 342,
        protein: 6,
        carbs: 6,
        fats: 34,
        serving: 100,
        emoji: '🧀',
    },
    {
        name: 'Parmesan',
        category: 'dairy',
        calories: 431,
        protein: 38,
        carbs: 4,
        fats: 29,
        serving: 100,
        emoji: '🧀',
    },

    // Снеки и другое
    {
        name: 'Almonds',
        category: 'snacks',
        calories: 579,
        protein: 21,
        carbs: 22,
        fats: 50,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Peanut Butter',
        category: 'snacks',
        calories: 588,
        protein: 25,
        carbs: 20,
        fats: 50,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Walnuts',
        category: 'snacks',
        calories: 654,
        protein: 15,
        carbs: 14,
        fats: 65,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Cashews',
        category: 'snacks',
        calories: 553,
        protein: 18,
        carbs: 30,
        fats: 44,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Avocado',
        category: 'snacks',
        calories: 160,
        protein: 2,
        carbs: 9,
        fats: 15,
        serving: 100,
        emoji: '🥑',
    },
    {
        name: 'Dark Chocolate',
        category: 'snacks',
        calories: 546,
        protein: 5,
        carbs: 61,
        fats: 31,
        serving: 100,
        emoji: '🍫',
    },
    {
        name: 'Protein Bar',
        category: 'snacks',
        calories: 200,
        protein: 20,
        carbs: 22,
        fats: 7,
        serving: 60,
        emoji: '🍫',
    },
    {
        name: 'Honey',
        category: 'snacks',
        calories: 304,
        protein: 0.3,
        carbs: 82,
        fats: 0,
        serving: 100,
        emoji: '🍯',
    },
    {
        name: 'Olive Oil',
        category: 'snacks',
        calories: 884,
        protein: 0,
        carbs: 0,
        fats: 100,
        serving: 100,
        emoji: '🫒',
    },
    {
        name: 'Peanuts',
        category: 'snacks',
        calories: 567,
        protein: 26,
        carbs: 16,
        fats: 49,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Pistachios',
        category: 'snacks',
        calories: 560,
        protein: 20,
        carbs: 28,
        fats: 45,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Sunflower Seeds',
        category: 'snacks',
        calories: 584,
        protein: 21,
        carbs: 20,
        fats: 51,
        serving: 100,
        emoji: '🌻',
    },
    {
        name: 'Granola',
        category: 'snacks',
        calories: 471,
        protein: 10,
        carbs: 64,
        fats: 20,
        serving: 100,
        emoji: '🥣',
    },
    {
        name: 'Trail Mix',
        category: 'snacks',
        calories: 462,
        protein: 13,
        carbs: 45,
        fats: 29,
        serving: 100,
        emoji: '🥜',
    },
    {
        name: 'Popcorn',
        category: 'snacks',
        calories: 387,
        protein: 13,
        carbs: 78,
        fats: 4,
        serving: 100,
        emoji: '🍿',
    },
];

// Состояние приложения
let todayMeals = {
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
};

let selectedFood = null;
let currentCategory = 'all';
let currentWeekOffset = 0;
let mealPlan = {};

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    loadUserData();
    loadTodayMeals();
    displayFoodDatabase();
    updateDailyStats();
    loadMealPlan();
});

// ========================================
// ЗАГРУЗКА ДАННЫХ ПОЛЬЗОВАТЕЛЯ
// ========================================

function loadUserData() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData && userData.calories) {
        document.getElementById('dailyGoal').textContent = userData.calories;
        document.getElementById('remaining').textContent = userData.calories;
    }
}

// ========================================
// УПРАВЛЕНИЕ ТАБАМИ
// ========================================

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active'));
    document
        .querySelectorAll('.content-section')
        .forEach((section) => section.classList.remove('active'));

    event.target.classList.add('active');

    if (tab === 'today') {
        document.getElementById('todayTab').classList.add('active');
    } else if (tab === 'database') {
        document.getElementById('databaseTab').classList.add('active');
    } else if (tab === 'mealplan') {
        document.getElementById('mealplanTab').classList.add('active');
    }
}

// ========================================
// TODAY'S MEALS - СЕГОДНЯШНИЕ ПРИЕМЫ ПИЩИ
// ========================================

function loadTodayMeals() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem(`meals_${today}`);

    if (saved) {
        todayMeals = JSON.parse(saved);
        displayTodayMeals();
    }
}

function saveTodayMeals() {
    const today = new Date().toDateString();
    localStorage.setItem(`meals_${today}`, JSON.stringify(todayMeals));
}

function displayTodayMeals() {
    ['breakfast', 'lunch', 'dinner', 'snacks'].forEach((meal) => {
        const container = document.getElementById(`${meal}List`);
        container.innerHTML = '';

        let mealTotal = 0;

        todayMeals[meal].forEach((item, index) => {
            const calories = Math.round(item.calories);
            mealTotal += calories;

            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            foodItem.innerHTML = `
                <div class="food-info">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 32px;">${item.emoji || '🍽️'}</span>
                        <div>
                            <h4>${item.name}</h4>
                            <p>${Math.round(item.serving)}g | P: ${Math.round(
                item.protein
            )}g | C: ${Math.round(item.carbs)}g | F: ${Math.round(item.fats)}g</p>
                        </div>
                    </div>
                </div>
                <div class="food-actions">
                    <span class="food-calories">${calories} cal</span>
                    <button onclick="removeFoodFromMeal('${meal}', ${index})">×</button>
                </div>
            `;
            container.appendChild(foodItem);
        });

        document.getElementById(`${meal}Total`).textContent = mealTotal;
    });

    updateDailyStats();
}

function removeFoodFromMeal(meal, index) {
    todayMeals[meal].splice(index, 1);
    saveTodayMeals();
    displayTodayMeals();
}

// ========================================
// СТАТИСТИКА И ПРОГРЕСС
// ========================================

function updateDailyStats() {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;

    Object.values(todayMeals).forEach((meal) => {
        meal.forEach((item) => {
            totalCalories += item.calories;
            totalProtein += item.protein;
            totalCarbs += item.carbs;
            totalFats += item.fats;
        });
    });

    const dailyGoal = parseInt(document.getElementById('dailyGoal').textContent);
    const remaining = dailyGoal - totalCalories;

    document.getElementById('consumed').textContent = Math.round(totalCalories);
    document.getElementById('remaining').textContent = Math.round(remaining);

    const progress = Math.min((totalCalories / dailyGoal) * 100, 100);
    document.getElementById('progressBar').style.width = progress + '%';

    if (progress > 100) {
        document.getElementById('progressBar').style.background =
            'linear-gradient(90deg, #f44336, #e91e63)';
    } else {
        document.getElementById('progressBar').style.background =
            'linear-gradient(90deg, #4caf50, #8bc34a)';
    }

    document.getElementById('protein').textContent = Math.round(totalProtein);
    document.getElementById('carbs').textContent = Math.round(totalCarbs);
    document.getElementById('fats').textContent = Math.round(totalFats);

    const proteinGoal = (dailyGoal * 0.3) / 4;
    const carbsGoal = (dailyGoal * 0.4) / 4;
    const fatsGoal = (dailyGoal * 0.3) / 9;

    document.getElementById('proteinBar').style.width =
        Math.min((totalProtein / proteinGoal) * 100, 100) + '%';
    document.getElementById('carbsBar').style.width =
        Math.min((totalCarbs / carbsGoal) * 100, 100) + '%';
    document.getElementById('fatsBar').style.width =
        Math.min((totalFats / fatsGoal) * 100, 100) + '%';
}

// ========================================
// FOOD DATABASE - БАЗА ПРОДУКТОВ
// ========================================

function displayFoodDatabase(filter = 'all', searchTerm = '') {
    const container = document.getElementById('foodDatabase');
    container.innerHTML = '';

    let filteredFoods = foodDatabase;

    if (filter !== 'all') {
        filteredFoods = filteredFoods.filter((food) => food.category === filter);
    }

    if (searchTerm) {
        filteredFoods = filteredFoods.filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    filteredFoods.forEach((food) => {
        const card = document.createElement('div');
        card.className = 'database-food-card';
        card.onclick = () => selectFoodFromDatabase(food);
        card.innerHTML = `
            <div class="food-emoji">${food.emoji}</div>
            <h4>${food.name}</h4>
            <p>Protein: ${food.protein}g</p>
            <p>Carbs: ${food.carbs}g</p>
            <p>Fats: ${food.fats}g</p>
            <p class="calories">${food.calories} cal</p>
            <p style="font-size: 12px; color: #999;">per ${food.serving}g</p>
        `;
        container.appendChild(card);
    });

    if (filteredFoods.length === 0) {
        container.innerHTML =
            '<p style="text-align: center; color: #999; padding: 40px;">No foods found</p>';
    }
}

function filterCategory(category) {
    currentCategory = category;

    document.querySelectorAll('.category-btn').forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add('active');

    displayFoodDatabase(category);
}

function searchFoodDatabase() {
    const searchTerm = document.getElementById('searchFood').value;
    displayFoodDatabase(currentCategory, searchTerm);
}

function selectFoodFromDatabase(food) {
    selectedFood = food;
    openAddFoodModal();
}

// ========================================
// MODAL - ДОБАВЛЕНИЕ ЕДЫ
// ========================================

function openAddFoodModal() {
    const modal = document.getElementById('addFoodModal');
    modal.classList.add('show');

    if (selectedFood) {
        displayModalFoodList([selectedFood]);
        document.getElementById('servingSize').value = selectedFood.serving;
    } else {
        displayModalFoodList(foodDatabase.slice(0, 10));
    }
}

function closeAddFoodModal() {
    const modal = document.getElementById('addFoodModal');
    modal.classList.remove('show');
    selectedFood = null;
    document.getElementById('modalSearchFood').value = '';
}

function searchInModal() {
    const searchTerm = document.getElementById('modalSearchFood').value;
    const filtered = foodDatabase.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayModalFoodList(filtered);
}

function displayModalFoodList(foods) {
    const container = document.getElementById('modalFoodList');
    container.innerHTML = '';

    foods.forEach((food) => {
        const item = document.createElement('div');
        item.className = 'modal-food-item';
        if (selectedFood && selectedFood.name === food.name) {
            item.classList.add('selected');
        }
        item.onclick = () => selectModalFood(food, item);
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 28px;">${food.emoji}</span>
                <div>
                    <strong>${food.name}</strong><br>
                    <small>${food.calories} cal | P: ${food.protein}g | C: ${food.carbs}g | F: ${food.fats}g</small>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

function selectModalFood(food, element) {
    selectedFood = food;
    document.getElementById('servingSize').value = food.serving;

    document.querySelectorAll('.modal-food-item').forEach((item) => {
        item.classList.remove('selected');
    });
    element.classList.add('selected');
}

function addFoodToMeal() {
    if (!selectedFood) {
        alert('Please select a food');
        return;
    }

    const mealType = document.getElementById('mealType').value;
    const servingSize = parseFloat(document.getElementById('servingSize').value);

    if (!servingSize || servingSize <= 0) {
        alert('Please enter a valid serving size');
        return;
    }

    const ratio = servingSize / selectedFood.serving;

    const foodItem = {
        name: selectedFood.name,
        emoji: selectedFood.emoji,
        serving: servingSize,
        calories: selectedFood.calories * ratio,
        protein: selectedFood.protein * ratio,
        carbs: selectedFood.carbs * ratio,
        fats: selectedFood.fats * ratio,
    };

    todayMeals[mealType].push(foodItem);

    saveTodayMeals();
    displayTodayMeals();
    closeAddFoodModal();

    document.querySelectorAll('.tab-btn')[0].click();
}

// ========================================
// MEAL PLAN - ПЛАН ПИТАНИЯ
// ========================================

function loadMealPlan() {
    const saved = localStorage.getItem('mealPlan');
    if (saved) {
        mealPlan = JSON.parse(saved);
    }
    displayMealPlan();
}

function saveMealPlan() {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
}

function displayMealPlan() {
    updateWeekDisplay();

    const container = document.getElementById('mealPlanGrid');
    container.innerHTML = '';

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const weekKey = getWeekKey();

    days.forEach((day) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';

        const dayMeals = mealPlan[weekKey]?.[day] || { breakfast: [], lunch: [], dinner: [] };

        let mealsHTML = '';
        let totalCals = 0;

        ['breakfast', 'lunch', 'dinner'].forEach((meal) => {
            if (dayMeals[meal] && dayMeals[meal].length > 0) {
                mealsHTML += `<p style="margin-bottom: 10px;"><strong style="color: #d32f2f;">${
                    meal.charAt(0).toUpperCase() + meal.slice(1)
                }:</strong><br>`;
                dayMeals[meal].forEach((food) => {
                    const cals = Math.round(food.calories);
                    totalCals += cals;
                    mealsHTML += `<span style="font-size: 16px;">${food.emoji}</span> ${food.name} (${cals} cal)<br>`;
                });
                mealsHTML += '</p>';
            }
        });

        if (!mealsHTML) {
            mealsHTML =
                '<p style="color: #999; font-style: italic; text-align: center; padding: 20px;">No meals planned</p>';
        } else {
            mealsHTML += `<p style="text-align: center; font-weight: 700; color: #333; margin-top: 15px; padding-top: 15px; border-top: 2px solid #e0e0e0;">Total: ${totalCals} cal</p>`;
        }

        dayCard.innerHTML = `
            <h3>${day}</h3>
            <div class="day-meals">${mealsHTML}</div>
        `;

        container.appendChild(dayCard);
    });
}

function getWeekKey() {
    const today = new Date();
    today.setDate(today.getDate() + currentWeekOffset * 7);
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay() + 1));
    return weekStart.toISOString().split('T')[0];
}
