

 function ptblue(){
    blue++;
    document.getElementById('bluescore').innerHTML = blue;    
 }

 
 function twoPtBlue(){
    
    blue = blue+2;
    document.getElementById('bluescore').innerHTML = blue;    
 }

 function threePtBlue(){
    blue = blue+3;
    document.getElementById('bluescore').innerHTML = blue;    
 }
 
 function blueFault(){
    blueF++;
    document.getElementById('blueF').innerHTML = blueF;
    ptred();
    
 }

 function minusptblue(){
   if (blue >0){    
   blue--;   
   }else{
      alert("nao pode diminuir de 0")
   }
   document.getElementById('bluescore').innerHTML = blue;  
}  
 
function minusBlueF(){
   if(blueF>0){
      blueF--;
      minusptred()
   }else{
      alert("can't undo a fault that hasn't been marked")
   }
   document.getElementById('blueF').innerHTML = blueF;
}


 