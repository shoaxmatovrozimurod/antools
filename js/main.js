const menuToggle = document.getElementById('menuToggle');
const headerNav = document.getElementById('headerNav');
const navLinks = document.querySelectorAll('.header__item__link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    headerNav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    });
});