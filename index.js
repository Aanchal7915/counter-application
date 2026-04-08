function increment() {
    let count= parseInt(document.getElementById("counter").textContent)+1;
    document.getElementById("counter").textContent=count;
    if(count>0){
    document.getElementById("counter").style.color="green";
    }
    if(count==0){
    document.getElementById("counter").style.color="black";
    }
    
}

function reset() {
    document.getElementById("counter").textContent=0;
    document.getElementById("counter").style.color="black";
     
    
}

function decrement() {
   
    let count= parseInt(document.getElementById("counter").textContent)-1;
    document.getElementById("counter").textContent=count;
    if(count<0){
    document.getElementById("counter").style.color="red";
    }
    if(count==0){
    document.getElementById("counter").style.color="black";
    }
    
}
