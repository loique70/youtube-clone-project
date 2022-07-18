//Variables

let todo1 = "Get groceries";
let todo2 = "Wash car";
let todo3 = "Make diner";
let todo4 = 'Loique is online'
let button = "Click Me";
let title = "MyTodo App";
//array 
let uppers = ['loique','nangna'];
let todos = ['get glocerries','let us bult a green world','together we can'];
console.log(todos);
todos.push('Keep going')
let final = [];
let finals = [];
function toUpper(upers){
    upers.forEach(function(elt){
        let result = elt.toUpperCase();
        final.push(result)
        console.log(final)
    })
}

function arrayDouble(arr){
    arr.forEach(function(el){
        let relt = el.slice();
        finals.push(relt)
        finals.push(relt)
        console.log(finals)
    })
}


function arraySum(arrs){
    let total = 0;
    arrs.forEach(function(els,index){
        total = total + els
        console.log(total)
    })
    // for(let i =0; i<arrs.length; i++){
    //     total = total + arrs[i]
    // }
    //console.log(total)
}
todos.forEach(function(todoTitle){
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
})
// function AddTodo(todoTitle){
//     // Add an element in html page using javascript
//     let element = document.createElement('h5');
//     element.innerText = todoTitle;
//     document.body.appendChild(element);
// };

// function greeting(firstNane){
//     console.log(`Hello ${firstNane}`);
// };

// function toUper(str){
//     let result = str.toUpperCase();
//     console.log(result);
// };

// function conveterIncheToCentimeter(length){
//     if(typeof length === 'number' && length !== isNaN()){
//         let result = length*2.54;
//         console.log(result);
//     } else{
//         alert('Enter a valid decimal number as example 2.5 rather than 2,5 thanks!')
//     }
   
// }

// conveterIncheToCentimeter(5,5)
// toUper('loique')
// greeting('Loiquee');
// AddTodo(todos);
// AddTodo(todo3);
// AddTodo(todo2);
// AddTodo(todo4);
// AddTodo('Loique is big boss');
toUpper(uppers)
arrayDouble(uppers)
arraySum([1,3,2])
let buttons = document.createElement('button');
buttons.innerText = button;
document.body.appendChild(buttons);

let titles = document.getElementById('loic');
titles.innerText = title;