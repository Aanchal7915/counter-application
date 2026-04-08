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


/*

let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onReset() {
  let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "black";
}

*/
