const elements = document.querySelectorAll('.js-element');
elements.forEach(function (element) {
    element.addEventListener('click', () => {
        element.classList.toggle('is-animated');
    });
});