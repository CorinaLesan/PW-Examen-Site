// Гамбургер-меню для мобильных устройств
document.addEventListener('DOMContentLoaded', function () {
    // Создаем кнопку меню
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';

    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    // Вставляем кнопку меню после логотипа
    const logo = document.querySelector('.logo');
    logo.parentNode.insertBefore(menuToggle, logo.nextSibling);

    // Обработчик клика по кнопке меню
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Закрытие меню при клике на ссылку
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '☰';
            }
        });
    });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '☰';
        }
    });
});
