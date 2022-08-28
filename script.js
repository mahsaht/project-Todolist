let $ = document;

let inputElem = $.querySelector("input");

let addTodoForm = $.querySelector(".add");

let todosUlElem = $.querySelector('.todos')

function addNewTodo(newTodoValue) {
    let newTodoLi = $.createElement('li')
    newTodoLi.className = 'list-group-item d-flex justify-content-between align-items-center'

    let newTodoTitleSpan = $.createElement('span')
    newTodoTitleSpan.innerHTML = newTodoValue
    let newTodoTrash = $.createElement('i')
    newTodoTrash.className = 'fa fa-trash-o delete'

    newTodoLi.addEventListener('click', function (event){
       event.target.parentElement.remove();
    });



    newTodoLi.append(newTodoTitleSpan,newTodoTrash)

    todosUlElem.append(newTodoLi)

    console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function(event){
    event.preventDefault();
});

inputElem.addEventListener("keydown", function(event){
     let newTodoValue = event.target.value.trim();
     
     
     

    if(event.keyCode === 13){
        if(newTodoValue){
            inputElem.value = ''
            addNewTodo(newTodoValue);
        }
    }
  

});
