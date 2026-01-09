document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown, .drop-down-second');

    // Создаем оверлей
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Открытие/закрытие меню
    burgerBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Закрытие меню при клике на оверлей
    overlay.addEventListener('click', function () {
        burgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';

        // Закрываем все дропдауны
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove('active');
        });
    });

    // Открытие дропдаунов на мобильных
    dropdowns.forEach((dropdown) => {
        const link = dropdown.querySelector('a');

        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 767) {
                e.preventDefault();
                dropdown.classList.toggle('active');

                // Закрываем другие дропдауны
                dropdowns.forEach((other) => {
                    if (other !== dropdown) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });

    // Закрытие меню при клике на ссылку (кроме дропдаунов)
    document
        .querySelectorAll('.nav-links a:not(.dropdown > a, .drop-down-second > a)')
        .forEach((link) => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 767) {
                    burgerBtn.classList.remove('active');
                    navLinks.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';

                    // Закрываем все дропдауны
                    dropdowns.forEach((dropdown) => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767) {
            burgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';

            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove('active');
            });
        }
    });
});
