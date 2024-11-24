'use stick'

for (let button of document.forms['controlForm'].elements) {
    // for (let button of document.getElementById('controlForm').children) {
    button.addEventListener('click', (e) => {
        button.blur();
    });

    button.addEventListener('focus', (e) => {
        button.nextElementSibling.classList.add('focusedButton');
    });

    button.addEventListener('blur', (e) => {
        button.nextElementSibling.classList.remove('focusedButton');
    });
}

