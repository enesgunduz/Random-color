const body = document.querySelector('body');
const container = document.querySelector('.container');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const home = document.querySelector('.home');
const cancel = document.querySelector('.cancel');
const modal = document.querySelector('.modal');

document.addEventListener('keydown',press);
document.addEventListener('DOMContentLoaded',domLoaded)

function colorRandom(){
    let x = Math.random() * 256;
    let y = Math.random() * 256;
    let z = Math.random() * 256;

    x = Math.floor(x);
    y = Math.floor(y);
    z = Math.floor(z);

    return `rgb(${x},${y},${z})`;
}

function press(e){
    if(e.key === ' '){
        one.style.backgroundColor = colorRandom();
        one.textContent = one.style.backgroundColor;

        two.style.backgroundColor = colorRandom();
        two.textContent = two.style.backgroundColor;

        three.style.backgroundColor = colorRandom();
        three.textContent = three.style.backgroundColor;

        four.style.backgroundColor = colorRandom();
        four.textContent = four.style.backgroundColor;
    };
};


function domLoaded(){
    cancel.addEventListener('click',function(){
        modal.style.display = 'none';
    })

}