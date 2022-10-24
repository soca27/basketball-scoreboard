// score home p
let scoreHome = document.getElementById('score-home');
// variable penampung nilai;
let countScoreHome = 0;
//score guest p
let scoreGuest = document.getElementById('score-guest');
// variable penampung nilai;
let countScoreGuest = 0;

// event listener  
// bagian score home 
function btnHome1() {
    countScoreHome +=1;
    scoreHome.textContent = countScoreHome;
    highlight();
}

function btnHome2() {
    countScoreHome +=2;
    scoreHome.textContent = countScoreHome;
    highlight();
}


function btnHome3() {
    countScoreHome +=3;
    scoreHome.textContent = countScoreHome;
    highlight();
}



//event listener bagian guest score
function btnGuest1() {
    countScoreGuest +=1;
    scoreGuest.textContent = countScoreGuest;
    highlight();
}

function btnGuest2() {
    countScoreGuest +=2;
    scoreGuest.textContent = countScoreGuest;
     highlight();
}


function btnGuest3() {
    countScoreGuest +=3;
    scoreGuest.textContent = countScoreGuest;
    highlight();
}

function reset() {
    countScoreGuest = 0;
    countScoreHome = 0;
    
    scoreGuest.textContent = 0;
    scoreHome.textContent = 0;
    scoreHome.style.backgroundColor = 'black';
    scoreHome.style.backgroundColor = 'black';
}

function highlight() {
    if(countScoreHome < countScoreGuest) {
        scoreGuest.style.backgroundColor = 'white';
        scoreHome.style.backgroundColor = 'black';
    } else if(countScoreGuest < countScoreHome) {
        scoreHome.style.backgroundColor = 'white';
        scoreGuest.style.backgroundColor = '';
    } else if(countScoreHome == countScoreGuest){
          scoreGuest.style.backgroundColor = '';
          scoreHome.style.backgroundColor = '';
    } else {
        console.log('error');
    }
}
