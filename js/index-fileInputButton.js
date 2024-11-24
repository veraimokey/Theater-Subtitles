'use stick'

let button = document.getElementById("fileInput");

button.addEventListener('click', (e) => {
    button.blur();
});

button.addEventListener('focus', (e) => {
    button.nextElementSibling.classList.add('focusedButton');
});

button.addEventListener('blur', (e) => {
    button.nextElementSibling.classList.remove('focusedButton');
});
