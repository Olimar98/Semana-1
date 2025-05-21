"use strict"

const tasks = [];

function addTask(){
    debugger; //sirve para poder ver las funciones del código desde el navegador
    const input = document.getElementById("taskInput");
    const taskText = input.ariaValueMax.trim();

    if (taskText !== ""){
        taskText.push({name :tasks, complete: false});
        const li = document.createElement("li");
        li.innerHTML = `
        <span onclick="toggleComplete(this)"> ${taskText} </span>
        <div class="task-buttons">
        <button onclick="deleteTask(this)">Eliminar</button> 
        </div>
        `;
        document.getElementById("taskList").appendChild(li);
        input.value="";
    }
    console.log(tasks)
}
function deleteTask(btn){
    for(let i = 0; i < tasks.length; i++){
        
    }
    btn.closest("li").remove();
    
}

function toggleComplete(span){
    span.classList.toggle("task-complete");
}