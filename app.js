const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    //start game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        });
    }

    //play match
    const playMatch = () =>{
        const options = document.querySelectorAll('.options button');
        const pHand = document.querySelector('.player-hand');
        const cHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        const cOptions = ['rock', 'paper', 'scissors'];

        hands.forEach(hand=>{
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });

        options.forEach(option => {
            option.addEventListener('click', function () { 
                //computer option
                let cNumber = Math.floor(Math.random() * 3);
                const cChoice = cOptions[cNumber]

                setTimeout(() => {
                    //panggil function perbandingan
                    comparation(this.textContent, cChoice);

                    //panggil update score
                    updateScore()
                    
                    //update gambar
                    pHand.src = `./assets/${this.textContent}.png`;
                    cHand.src = `./assets/${cChoice}.png`;
                }, 2000);

                //animasi
                pHand.style.animation = "shakePlayer 2s ease";
                cHand.style.animation = "shakeComputer 2s ease";
             });
        });
    }

    const updateScore = ()=>{
    let pTotal = document.querySelector('.player-score p');
    let cTotal = document.querySelector('.computer-score p');
    pTotal.textContent = pScore;
    cTotal.textContent = cScore;
    }

    const comparation = (pChoice, cChoice)=>{
        //ganti pemenang
        const winner = document.querySelector('.winner');
        //perbandingan
        if(pChoice === cChoice){
            winner.textContent=`Seri`;
            return;
        }else if(pChoice === 'rock'){
            if (cChoice === 'scissors') {
                winner.textContent = `Anda Menang`;
                pScore++
                return;
            }else{
                winner.textContent = `Computer Menang`;
                cScore++
                return;
            }
        }else if(pChoice === 'paper'){
            if (cChoice === 'rock') {
                winner.textContent = `Anda Menang`;
                pScore++
                return;
            }else{
                winner.textContent = `Computer Menang`;
                cScore++
                return;
            }
        }else if(pChoice === 'scissors'){
            if (cChoice === 'paper') {
                winner.textContent = `Anda Menang`;
                pScore++
                return;
            }else{
                winner.textContent = `Computer Menang`;
                cScore++
                return;
            }
        }
    }

    //Start inner function
    startGame();
    playMatch();
};

//start main
game();