var randomNumber1=Math.random();
var randomNumber2=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
randomNumber2=Math.floor(randomNumber2*6)+1;
var d1=document.getElementsByClassName('img1')[0];
var d2=document.getElementsByClassName('img2')[0];

if(randomNumber1==1){
    d1.src="dice1.png";
    }
    else if(randomNumber1==2){
        d1.src="dice2.png";
    }
    else if(randomNumber1==3){
        d1.src="dice3.png";
    }
    else if(randomNumber1==4){
        d1.src="dice4.png";
    }
    else if(randomNumber1==5){
        d1.src="dice5.png";
    }
    else{
        d1.src="dice6.png";
    }
    if(randomNumber2==1){
        d2.src="dice1.png";
        }
        else if(randomNumber2==2){
            d2.src="dice2.png";
        }
        else if(randomNumber2==3){
            d2.src="dice3.png";
        }
        else if(randomNumber2==4){
            d2.src="dice4.png";
        }
        else if(randomNumber2==5){
            d2.src="dice5.png";
        }
        else{
            d2.src="dice6.png";
        }
                if(randomNumber1==randomNumber2){
                    document.querySelector('h1').textContent="DRAW";
                }
                else if(randomNumber1>randomNumber2){
                    document.querySelector('h1').textContent="PLAYER 1 WINS";
                }
                else{
                    document.querySelector('h1').textContent="PLATER 2 WINS";
                }