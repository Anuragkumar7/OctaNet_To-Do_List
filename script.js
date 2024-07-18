const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task");
        
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let editspan = document.createElement("btn");
        editspan.innerHTML = "\u270E";
        
        editspan.onclick = editTask;
        li.appendChild(editspan); 

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.onclick = deleteTask;
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function editTask(event){
    let listItem = event.target.parentElement;
    let taskText = listItem.firstChild;

    let newText = prompt("Edit Task: ", taskText.textContent);
    if(newText != null){
        taskText.textContent = newText;
        saveData();
    }
}

function deleteTask(event){
    let listItem = event.target.parentElement;
    listItem.remove();
    saveData();
}

listContainer.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }

}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
   
}
showTask();