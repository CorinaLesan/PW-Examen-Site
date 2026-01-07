document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Закрытие меню при клике на ссылку
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Закрытие выпадающих меню при клике вне их
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.drop-down-second')) {
            const dropdowns = document.querySelectorAll('.dropdown-menu, .drop-down-menu-second');
            dropdowns.forEach((dropdown) => {
                dropdown.style.display = 'none';
            });
        }
    });
});
