const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
let date = new Date();



let time= date.toLocaleString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
});


function addTask(){
    if(inputBox.value===""){
        inputBox.focus();
        alert("Please enter a task");
    }else{
        let li = document.createElement("li");
        let p = document.createElement("p")
        p.setAttribute("class","p-taskDescription")
        p.innerHTML= inputBox.value;
        li.appendChild(p);
        listContainer.appendChild(li);
        let close_btn = document.createElement("span")
        close_btn.innerHTML = "\u00d7"
        li.appendChild(close_btn)
        saveData();
    }
    inputBox.value=''
    saveData();
    inputBox.focus();
}

listContainer.addEventListener('dblclick',(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.remove();
    inputBox.focus();
        saveData();
    }
});

listContainer.addEventListener("click",(e)=>{
    inputBox.focus();

    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
    if(e.target.classList.contains('checked')){
        let task_done_time = document.createElement("h4");
        task_done_time.setAttribute("class","task_done");
        task_done_time.innerHTML = "Task Done in : "+ time;
        e.target.appendChild(task_done_time);
    }else{
        let task_done_time = document.querySelector(".task_done");
        task_done_time.parentNode.removeChild(task_done_time);
    }
    inputBox.focus();
    saveData();
    }
     if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        inputBox.focus();
        saveData();
    }
},false);

// clearData()

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")

}

function clearData(){
    localStorage.setItem("data",listContainer.innerHTML="")
}



inputBox.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
})

showTask();

