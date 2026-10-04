const menuToggle = document.getElementById('menuToggle');
        const headerNav = document.getElementById('headerNav');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            headerNav.classList.toggle('active');
        });

        document.querySelectorAll('.header__item__link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                headerNav.classList.remove('active');
            });
        });