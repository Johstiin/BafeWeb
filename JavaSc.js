let previousTitle = document.title;

window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = '¡Vuelve y prepárate algo!';
});

window.addEventListener('focus', () => {
    document.title = previousTitle;
});
