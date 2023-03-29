window.onload = () => {
    console.log('This is your first program executing!');
}

let param = document.querySelector('div');
param.addEventListener('click', pop);

function pop() {
    let name = prompt('Enter a new name');
    param.textContent = "Hello, " + name;
}