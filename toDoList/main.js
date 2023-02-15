// button for add new task 
const btn = document.getElementById('btn');
btn.addEventListener('click', addToList)

// create array for tasks
let list = localStorage.getItem('list')
if (list && list.length > 0){
    var arr = JSON.parse(list) 

}else{
    var arr = []
}

// create array for deleted item
let deletedList = localStorage.getItem('deletedList')
if (deletedList && deletedList.length > 0){
    var delArr = JSON.parse(deletedList) 

}else{
    var delArr = []
}

// create array for deleted item
let checkedList = localStorage.getItem('checkedList')
if (checkedList && checkedList.length > 0){
    var checkArr = JSON.parse(checkedList) 

}else{
    var checkArr = []
}

// read from localStorage and create list items 
for (let key in arr){
    createItem(arr[key])    
}

// creating item of list
function createItem(obj){
    // Create the required tags
    let li = document.createElement('li');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', obj.id);

    // create icon 
    let imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', 'delete.png');
    imgDelete.setAttribute('id', obj.id);
    let imgEdit = document.createElement('img');
    imgEdit.setAttribute('src', 'edit.png');
    imgEdit.setAttribute('id', obj.id);
    
    let txt = document.createTextNode(obj.value);
    // add to query 
    span.appendChild(txt);
    div.appendChild(check)
    div.appendChild(span);
    div.appendChild(imgDelete);
    div.appendChild(imgEdit);
    li.appendChild(div);
    document.getElementById('list').appendChild(li);
}

// add new task to list 
function addToList(){
    let task = document.getElementById('input');
    if (task.value !== ''){
        let toDo = {
            id:(new Date()).getTime(),
            value: task.value,
            checked: false,
        }
        arr.push(toDo)
        localStorage.setItem('list', JSON.stringify(arr));
        createItem(toDo)
        task.value = '';
    }
}

function checked(check, id){
    if (check.checked == true){
        for (let key in arr){
            if (arr[key].id == id){
                arr.splice(arr.findIndex(arr[key]), 1);
                console.log(arr);
            }
        }
    }
}

function deleted(){

}

function edited(){

}