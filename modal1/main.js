
let modalContainer = document.getElementById('mc');

let btn = document.getElementById('btn');

let x = document.getElementById('close')

btn.onclick = function() {
    modalContainer.style.display = 'flex';
    modalContainer.style.justifyContent = 'center';
    modalContainer.style.alignContent = 'center';
}   


x.onclick = function() {
    modalContainer.style.display = 'none';
}