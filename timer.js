var display= document.getElementById('display');



var btn = document.querySelector("#inputButton");

var tempo = localStorage.getItem('valueTempo');

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
var f;
switch (numRounds){
  case '1':
    f=1;
    break;
  case '2':
    f=2;
    break;
  case '3':
    f=3;
    break;
 
  default:
    f=2;

}

switch (restTime){
  case '00:30':
    r=30;
    break;
  case '00:50':
    r=50;
    break;
  case '01:00':
    r=60;
    break;
 
  default:
    r=30;

}




var comecar= document.getElementById('comecar');

var cronometroSeg;

var segundoAtual;
var minutoAtual;
var vencedor;
var interval;
function instawin(){
  if(blue > red+20){
    vencedor= "Por diferença de Pontos: Azul";
    over();
    
  }
  else
  if(red>blue+20){
    vencedor= "Por diferença de Pontos: Vermelho"; 
    over();
  }
  if (blueF>=10){
    vencedor= "Azul fez 10 faltas: Vermelho"; 
    over();
  }
  if (redF>=10){
    vencedor= "Vermelho fez 10 faltas: Azul"; 
    over();
  }
  
}
function over(){
  {
    alert(vencedor + "  Venceu!");
    clearInterval(interval);
}
}
function start(){
  zerar();  
  minutoAtual=minutos;
  segundoAtual=segundos;
  
  document.getElementById("display").innerHTML = minutoAtual + ":" + segundoAtual;
  interval = setInterval(function(){
           
        segundoAtual--;
        instawin();
        if (segundoAtual<=0){
            if (minutoAtual>0){
            minutoAtual--;
            segundoAtual=59;
            }
            
        else
            {
              if(blue>red){
                vencedor="Azul";
              }else if(red>blue){
                vencedor="Vermelho"
              }else{ 
                 vencedor="Empate: Ninguém"
              }
              over();
            }
        }
        document.getElementById("display").innerHTML = minutoAtual + ":" + segundoAtual;

    },1000)}

    
function intervalo(){
        var descanso=30;}