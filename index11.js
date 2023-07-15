let p = document.querySelector('input');
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
b1.addEventListener('click', function() {
    p.disabled = true;
});
b2.addEventListener('click', function() {
    p.disabled = false;
});