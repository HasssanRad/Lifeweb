
const btn = document.getElementById('btn');
btn.addEventListener('click', addToList)

let list = localStorage.getItem('list')
if (list && list.length > 0){
    var arr = JSON.parse(list) 

}else{
    var arr = []
}

for (let key in arr){
    console.log(arr[key]);
    let li = document.createElement('li');
    let txt = document.createTextNode(arr[key].value);
    li.appendChild(txt)
    document.getElementById('list').appendChild(li)
}

function addToList(){
    let task = document.getElementById('input');
    let li = document.createElement('li');
    let txt = document.createTextNode(task.value);
    if (task.value !== ''){
        let toDo = {
            id:(new Date()).getTime(),
            value: task.value,
            checked: false,
        }
        arr.push(toDo)
        localStorage.setItem('list', JSON.stringify(arr));
        task.value = '';
        li.appendChild(txt)
        document.getElementById('list').appendChild(li)
    }
}

