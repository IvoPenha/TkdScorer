
 function ptred(){
    red = red+1;
    document.getElementById('redscore').innerHTML = red;    
 }

 
 function twoPtRed(){
    red = red+2;
    document.getElementById('redscore').innerHTML = red;    
 }

 function threePtRed(){
    red = red+3;
    document.getElementById('redscore').innerHTML = red;    
 }
 

 function redFault(){
   redF++;
   document.getElementById('redF').innerHTML = redF;
   ptblue();
 }
 function minusptred(){
   if (red >0){    
   red--;   
   }else{
      alert("nao pode diminuir de 0")
   }
   document.getElementById('redscore').innerHTML = red;  
}  
 
 function minusRedF(){
    if(redF>0){
       redF--;
       minusptblue()
    }else{
       alert("can't undo a fault that hasn't been marked")
    }
    document.getElementById('redF').innerHTML = redF;
 }

 