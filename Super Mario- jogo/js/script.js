const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let count = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/fim.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '60px'
    
        count = 0; 
        clearInterval(loop);  
    
        
    }
    count++;
    score.innerHTML = `SCORE:${count}`;

}, 10);

document.addEventListener('keydown', jump);