let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('#list-container');

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something");
  }
  else {
    let task = document.createElement('li');
    task.innerHTML = inputBox.value;
    listContainer.appendChild(task);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    task.appendChild(span);
  }
  inputBox.value = '';
  saveTask();
}

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    saveTask();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveTask();

  }
},false)

function saveTask(){
  localStorage.setItem('Tasks', listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem('Tasks')
}

showTask();