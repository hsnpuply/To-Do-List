const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value===""){
        alert("Please enter a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
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
})
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        inputBox.focus();
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        inputBox.focus();
        saveData();
    }
},false)



function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}


inputBox.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        addTask();
    }
})

showTask();
