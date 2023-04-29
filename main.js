const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const filterBtn = document.querySelector("#filter-select")

const itens = document.querySelector("#itens-left");


const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#completed");
const clearCompleted = document.querySelector("#clear-completed");
const todos = document.querySelectorAll(".todo");

const body = document.querySelector("#body");
const buttonMode = document.querySelector("#button-mode");

//bodyMode.setProperty('--back--black', 'hsl(0, 0%, 98%)' )
//(bodyMode.setProperty('--back--black', 'Very Dark Blue: hsl(235, 21%, 11%)')

let oldInputValue;

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    
    
    const todoTitle = document.createElement("p");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const spanSpan = document.createElement("span");
    todo.appendChild(spanSpan);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("circle1");
    
    spanSpan.appendChild(doneBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("circle2");
    
    spanSpan.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("circle3");
    
    spanSpan.appendChild(editBtn);

    todoList.appendChild(todo);

 

    todoInput.value = "";
    todoInput.focus();
    };
  
    const toggleForms = () => {
        editForm.classList.toggle("hide");
        todoList.classList.toggle("hide");
            
    }

    const updateTodo = (text) => {
        const todos = document.querySelectorAll(".todo")

        todos.forEach((todo)=>{

            let todoTitle = todo.querySelector("p");
            if(todoTitle.innerText === oldInputValue){
                todoTitle.innerText = text;
            }
        })
        
    }
    
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
        
    const inputValue = todoInput.value;

    if(inputValue) {
        saveTodo(inputValue);
    }
    i
});
document.addEventListener("click", (e) =>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("p")){
        todoTitle = parentEl.querySelector("p").innerText || "";
    }

    if(targetEl.classList.contains("circle1")){
        parentEl.classList.toggle("done");
        
        
    }
    
    if(targetEl.classList.contains("circle3")){
        toggleForms()

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
    if(targetEl.classList.contains("circle2")){
        parentEl.remove();
    }

});

cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    toggleForms()
});

editForm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue);
    }

    toggleForms()
});

  active.addEventListener("click", (e)=>{
    const todos = document.querySelectorAll(".todo")
    const filterValue = e.target.value;
        todos.forEach((todo)=>{

            switch (filterValue) {
                case "active":
                  todos.forEach((todo) =>
                  !todo.classList.contains("done")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none")
                );
                  break;
                default:
              
              }
        })})
  completed.addEventListener("click", (e)=>{
    const todos = document.querySelectorAll(".todo")
    const filterValue = e.target.value;
        todos.forEach((todo)=>{

            switch (filterValue) {
                case "completed":
                  todos.forEach((todo) =>
                  todo.classList.contains("done")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "none")
                );
                  break;
                default:
              
              }
        })})
  all.addEventListener("click", (e)=>{
    const todos = document.querySelectorAll(".todo")
    const filterValue = e.target.value;
        todos.forEach((todo)=>{

            switch (filterValue) {
                case "all":
                  todos.forEach((todo) =>
                  todo.classList.contains("done")
                    ? (todo.style.display = "flex")
                    : (todo.style.display = "flex")
                );
                  break;
                default:
              
              }
        })})
  clearCompleted.addEventListener("click", (e)=>{
    const todos = document.querySelectorAll(".todo")
    const filterValue = e.target.value;
    
        todos.forEach((todo)=>{
            function clearC(){
                switch (filterValue) {
                    case "clearcompleted":
                      todos.forEach((todo) =>
                      todo.classList.contains("done")
                        ? (todo.remove())
                        : (todo.style.display = "flex")
                    );
                      break;
                    default:
                  
                  }
            }
              clearC()
        })})

  let bodyMode = document.documentElement.style;
  function modeToggle(){
    if(buttonMode.classList.contains("button-nigth")){
      buttonMode.classList.remove("button-nigth")
      buttonMode.classList.add("button-ligth")
      bodyMode.setProperty('--back--black', 'hsl(236, 33%, 92%)' );
      bodyMode.setProperty('--back--black2', 'hsl(0, 0%, 98%)');
      bodyMode.setProperty('--color-text', 'hsl(235, 9%, 25%)');
      bodyMode.setProperty('--img-back1',  'url(images/bg-desktop-light.jpg)');
      bodyMode.setProperty('--check', 'url(images/marca-dark.png)');
      bodyMode.setProperty('--close', 'url(images/close-dark.png)');
      bodyMode.setProperty('--edit', 'url(images/edit-dark.png)');
      
    }
   }
  function modeToggleTwo(){
    if(buttonMode.classList.contains("button-ligth")){
      buttonMode.classList.add("button-nigth")
      buttonMode.classList.remove("button-ligth")
      bodyMode.setProperty('--back--black', 'hsl(235, 21%, 11%)' );
      bodyMode.setProperty('--back--black2', 'hsl(235, 24%, 19%)');
      bodyMode.setProperty('--color-text', '#fff');
      bodyMode.setProperty('--img-back1',  'url(images/bg-desktop-dark.jpg)');
      bodyMode.setProperty('--check', 'url(images/marca-ligth.png)');
      bodyMode.setProperty('--close', 'url(images/close-ligth.png)');
      bodyMode.setProperty('--edit', 'url(images/edit-ligth.png)');
    }
   }
   buttonMode.addEventListener("click", (e) =>{
    
      if(buttonMode.classList.contains("button-nigth")){
        modeToggle()
      }
      else{
        modeToggleTwo()
      }
   })

         
       
                      


        
  
 

