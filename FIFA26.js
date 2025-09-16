// script.js
// Dodajemy proste funkcje interaktywne np. dla akordeonów

const accItems = document.querySelectorAll('.acc-trigger');
accItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        if(content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

console.log('FIFA Ultra Advanced Site JS loaded');
