
document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
    const button = document.getElementById('interactiveButton');

    button.addEventListener('click', function() {
        element1.style.transform = 'translateX(100px) rotate(45deg)';
        element2.style.transform = 'translateY(-100px) scale(1.5)';
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('element1');
    let isDragging = false;
    let offsetX, offsetY;

    element1.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element1.getBoundingClientRect().left;
        offsetY = e.clientY - element1.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            element1.style.left = `${x}px`;
            element1.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
