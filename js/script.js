const dino = document.querySelector('.dino');
const background = document.querySelector('.bg-dino');
let isJumping = false;
let isGameOver = false;
let position = 0; 

function handleKeyUP(event) {
    if (event.keyCode === 32) {
        if (!isJumping)
        jump();
    }
}

function gameOverEvent(event) {
    if(event.keyCode === 13) {
        location.reload();
    }

}

function jump() {
     isJumping = true;
        let upInterval = setInterval(() => {
            if (position >= 150) {

                clearInterval(upInterval);

                let downInterval = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(downInterval);
                        isJumping = false;
                    } else {
                        position -= 20;
                        dino.style.bottom = position + 'px'
                    }
                }, 20);

            } else {
                
                position += 20;
                dino.style.bottom = position + 'px'
            }
        }, 20);

}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1240; 
    let randomTime = Math.random() * 6000; 
    
    if (isGameOver) return;

    cactus.style.left = cactusPosition +'px';
    cactus.classList.add('cactus');
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if( cactusPosition <- 60) {
            clearInterval(leftInterval);
             background.removeChild(cactus);
            } else if ( cactusPosition > 350 && cactusPosition < 410 && position < 60) {
                clearInterval(leftInterval);
                document.body.innerHTML = '<h1 class ="game-over"> Fim de Jogo <br> Pressione Enter para Jogar Novamente. </h1>';
                document.addEventListener('keyup', gameOverEvent)
            } else {
                cactusPosition -= 10;
                cactus.style.left = cactusPosition + 'px';
            }
        }, 10);
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUP)

