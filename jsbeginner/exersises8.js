 function clickButton(){
    let myButton = document.getElementById('todo-button');
    myButton.innerText = 'Done'
 }

 let count = 0;
 let couter = document.getElementById('counter');
 let counts = document.getElementById('count');
 function changeCount(){
    count = count + 1;
    couter.innerText = count ;
 }

 function changeCounts(){
    count = count - 1;
    couter.innerText = count;
 }

 function handleInput(){
    let getInput = document.getElementById('inputs');
    let getInputs = getInput.value
    let result = document.createElement('div');
    result.innerText = getInputs;
    document.body.appendChild(result);
 }