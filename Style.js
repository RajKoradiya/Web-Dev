let buttun = document.querySelector('button');
buttun.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Student name');
    buttun.textContent = 'My Name is' + name;
}