// script.js
document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('myBox');

    box.addEventListener('mouseover', () => {
        box.classList.add('hovered');
    });

    box.addEventListener('mouseout', () => {
        box.classList.remove('hovered');
    });
});
