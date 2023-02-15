
const btn = document.getElementById('btn');
btn.addEventListener('click', addToList)

let list = localStorage.getItem('list')
if (list && list.length > 0){
    var arr = JSON.parse(list) 

}else{
    var arr = []
}

for (let key in arr){
    let li = document.createElement('li');
    let div = document.createElement('div');
    let span = document.createElement('span');
    let check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('id', arr[key].id);

    let imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', 'delete.png');
    imgDelete.setAttribute('id', arr[key].id);
    let imgEdit = document.createElement('img');
    imgEdit.setAttribute('src', 'edit.png');
    imgEdit.setAttribute('id', arr[key].id);
    
    let txt = document.createTextNode(arr[key].value);

    span.appendChild(txt);
    div.appendChild(check)
    div.appendChild(span);
    div.appendChild(imgDelete);
    div.appendChild(imgEdit);
    li.appendChild(div);
    document.getElementById('list').appendChild(li);
    
}



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
        let li = document.createElement('li');
        let div = document.createElement('div');
        let span = document.createElement('span');
        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.setAttribute('id', toDo.id);

        let imgDelete = document.createElement('img');
        imgDelete.setAttribute('src', 'delete.png');
        imgDelete.setAttribute('id',toDo.id);
        let imgEdit = document.createElement('img');
        imgEdit.setAttribute('src', 'edit.png');
        imgEdit.setAttribute('id', toDo.id);
        
        let txt = document.createTextNode(task.value);
        task.value = '';
        span.appendChild(txt);
        div.appendChild(check)
        div.appendChild(span);
        div.appendChild(imgDelete);
        div.appendChild(imgEdit);
        li.appendChild(div);
        document.getElementById('list').appendChild(li);
    }
}

