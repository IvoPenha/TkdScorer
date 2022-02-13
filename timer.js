var display= document.getElementById('display');

var tempo= document.getElementById('time');

var numRounds = document.getElementById('numRounds');

var restTime = document.getElementById('restTime');

var minutos;

var segundos;

switch (tempo){
  case '01:30':
    minutos=1;
    segundos=30;
    break;
  case '01:00':
    minutos=1;
    segundos=0;
    break;
  case '02:00':
    minutos=2;
    segundos=0;
    break;
  case '02:30':
    minutos=2;
    segundos=30;
    break;  
 case '03:00':
    minutos=3;
    segundos=0;
    break; 
  case '05:00':
    minutos=5;
    segundos=0;
    break;
  default:
    minutos=1;
    segundos=30;

}



var comecar= document.getElementById('comecar');

var cronometroSeg;

var segundoAtual;
var minutoAtual;

var interval;


function start(){
    minutoAtual=minutos;
    segundoAtual=segundos;
    
    document.getElementById("display").innerHTML = minutoAtual + ":" + segundoAtual;
    interval = setInterval(function(){
        
        segundoAtual--;
        if (segundoAtual<=0){
            if (minutoAtual>0){
            minutoAtual--;
            segundoAtual=59;
            }
        else
            {
                alert("Acabou!");
                clearInterval(interval);
            }
        }
        document.getElementById("display").innerHTML = minutoAtual + ":" + segundoAtual;

    },1000)
    
}






/* barra evento
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
             
    }
  })*/
  