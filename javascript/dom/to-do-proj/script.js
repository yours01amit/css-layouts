const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

console.log(todoBox);


btn.addEventListener('click', ()=>{
    const value = inp.value

    if(value.trim()==="") return;
    todoBox.innerHTML += `<div class="li">
                <h3>${value}</h3>
                <div>
                    <button class="btn edit">Edit</button>
                    <button class="btn del">Delete</button>
                </div>
            </div>`


            inp.value = "";    
});



// 2. Handle Edit and Delete using Event Delegation

todoBox.addEventListener('click',(e)=>{
    const todoItem = e.target.closest(".li");
    if (!todoItem) return;

    const titleElement = todoItem.querySelector("h3");

    if (e.target.classList.contains('del')) {
        todoItem.remove();
    }

    if (e.target.classList.contains('edit')) {
        const currentText = titleElement.innerText;
        const newText = prompt("Edit your todo:", currentText);
        
        if (newText && newText.trim() !== "") {
            titleElement.innerText = newText.trim();
        }
    }
    
});


