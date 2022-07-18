//MODEL 
//if localStorage has a todo array, then use it 
//otherwise use the default array

let todos;
//Retrieve localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'))

//Check if it'sman array
if(Array.isArray(savedTodos)){
    todos = savedTodos;
} else{ 
   todos = [
        {title:'Get groceries',dueDate:'2022=-10-04',id:'id1'},
        {title:'Wash car',dueDate:'2022-31-05',id:'id2'},
        {title:'Make dinner',dueDate:'2022-08-09',id:'id3'}
    ];
};

render();

//CONTROLLER
function addTodo(){
    const textBox = document.getElementById('todo-title');
    const title = textBox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    createTodo(title,dueDate)
    render()
}

//CREQTE TODO  
function createTodo(title,dueDate){
    const id = '' + new Date().getTime();
    todos.push(
        {
            title:title,
            dueDate:dueDate,
            id:id
        }
    );
    saveTodo()
}
//DELETE TO
function removeTodo(idTodelete){
    todos = todos.filter(function(todo){
        if(todo.id === idTodelete){
            return false;
        }else{
            return true;
        }
    });
    saveTodo()
}

/*localStorage is take two parameters: key and string to return.
Note that a localStorage has two functions setItem() and getItem()*/

function saveTodo(){
    localStorage.setItem('todos',JSON.stringify(todos))
}
function deleteTodo(event){
    const deleteButton = event.target;
    const idTodelete = deleteButton.id;
    removeTodo(idTodelete)
    render();
}

//VIEW
function render(){
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function(elt){
        const element = document.getElementById('todo-list');
        const newElement = document.createElement('div');
        newElement.innerText = `${elt.title} ${elt.dueDate}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = elt.id;

        newElement.appendChild(deleteButton);
        element.appendChild(newElement)
    })
}

