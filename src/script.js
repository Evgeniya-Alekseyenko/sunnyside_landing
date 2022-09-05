let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

if (window.innerWidth >= 768) {
    menuBtn.style.display = 'none';
}

if (menuBtn.style.display === 'none') {
    menuBtn.style.display = 'block';
} else {
    menuBtn.style.display = 'none';
}
