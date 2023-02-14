

let countX = 0;
let countO = 0;
let countDraw = 0;



let person = 0;
list = Array(9).fill(0);


function move(element){
    let flag = true
    
    if (list[0] === list[1] && list[0] === list[2] && list[0] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[0] == 'X'){
            countX += 1
        }else if (list[0] == 'O'){
            countO += 1
        }
        
    }
    else if (list[0] === list[3] && list[0] === list[6] && list[0] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[0] == 'X'){
            countX += 1
        }else if (list[0] == 'O'){
            countO += 1
            }
    }
    else if (list[0] === list[4] && list[0] === list[8] && list[0] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[0] == 'X'){
                countX += 1
            }else if (list[0] == 'O'){
                countO += 1
            }
    }
    else if (list[1] === list[4] && list[1] === list[7] && list[1] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[1] == 'X'){
            countX += 1
        }else if (list[1] == 'O'){
            countO += 1
        }
    }
    else if (list[2] === list[5] && list[2] === list[8] && list[2] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[2] == 'X'){
            countX += 1
        }else if (list[2] == 'O'){
            countO += 1
        }
    }
    else if (list[2] === list[4] && list[2] === list[6] && list[2] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[2] == 'X'){
            countX += 1
            }else if (list[2] == 'O'){
                countO += 1
            }
    }
    else if (list[3] === list[4] && list[3] === list[5] && list[3] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[3] == 'X'){
            countX += 1
        }else if (list[3] == 'O'){
            countO += 1
        }
    }
    else if (list[6] === list[7] && list[6] === list[8] && list[6] !== 0){
        document.querySelector('body').addEventListener("click",createCells);
        flag = false
        if (list[6] == 'X'){
            countX += 1
        }else if (list[6] == 'O'){
            countO += 1
        }
    }
    
    if (!(list.includes(0)) && flag){
        countDraw += 1
        document.querySelector('body').addEventListener("click",createCells);
    }

    let xo = person%2 ;
    let id = element.target.id;
    let index = id.split('_')[1];

    if (xo == 1){
        if (document.getElementById(id).innerHTML == ''){
            person += 1
            document.getElementById(id).innerHTML = 'X';
            list[index-1] = 'X';
        }
    }else{
        if (document.getElementById(id).innerHTML == ''){
            person += 1
            document.getElementById(id).innerHTML = 'O';
            list[index-1] = 'O';
        }
    }
    
    if (!(list.includes(0))){
        document.getElementById('showWinner').innerHTML = 'No winner !';
    }
    
    if (list[0] === list[1] && list[0] === list[2] && list[0] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[0]} won (:`;
        document.getElementById('divNum_1').style.color = 'green';
        document.getElementById('divNum_2').style.color = 'green';
        document.getElementById('divNum_3').style.color = 'green';
    }else if (list[0] === list[3] && list[0] === list[6] && list[0] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[0]} won (:`;
        document.getElementById('divNum_1').style.color = 'green';
        document.getElementById('divNum_4').style.color = 'green';
        document.getElementById('divNum_7').style.color = 'green';
    }else if (list[0] === list[4] && list[0] === list[8] && list[0] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[0]} won (:`;
        document.getElementById('divNum_1').style.color = 'green';
        document.getElementById('divNum_5').style.color = 'green';
        document.getElementById('divNum_9').style.color = 'green';
    }else if (list[1] === list[4] && list[1] === list[7] && list[1] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[1]} won (:`;
        document.getElementById('divNum_2').style.color = 'green';
        document.getElementById('divNum_5').style.color = 'green';
        document.getElementById('divNum_8').style.color = 'green';
    }else if (list[2] === list[5] && list[2] === list[8] && list[2] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[2]} won (:`;
        document.getElementById('divNum_3').style.color = 'green';
        document.getElementById('divNum_6').style.color = 'green';
        document.getElementById('divNum_9').style.color = 'green';
    }else if (list[2] === list[4] && list[2] === list[6] && list[2] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[2]} won (:`;
        document.getElementById('divNum_3').style.color = 'green';
        document.getElementById('divNum_5').style.color = 'green';
        document.getElementById('divNum_7').style.color = 'green';
    }else if (list[3] === list[4] && list[3] === list[5] && list[3] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[3]} won (:`;
        document.getElementById('divNum_4').style.color = 'green';
        document.getElementById('divNum_5').style.color = 'green';
        document.getElementById('divNum_6').style.color = 'green';
    }else if (list[6] === list[7] && list[6] === list[8] && list[6] !== 0){
        document.getElementById('showWinner').innerHTML = `Player ${list[6]} won (:`;
        document.getElementById('divNum_7').style.color = 'green';
        document.getElementById('divNum_8').style.color = 'green';
        document.getElementById('divNum_9').style.color = 'green';
    }
    
    
    document.getElementById('x').innerHTML = `X: ${countX}`;
    document.getElementById('o').innerHTML = `O: ${countO}`;
    document.getElementById('draw').innerHTML = `draw: ${countDraw}`;
    
    
}




function createCells(){
    let count = 0;
    list = [];
    list = Array(9).fill(0);
    document.getElementById('gameBoard').innerHTML = "";
    document.getElementById('showWinner').innerHTML = "";
    document.querySelector('body').removeEventListener("click",createCells);
    for (let cell in list){
        count += 1 ;
        const div = document.createElement('div');
        div.id = `divNum_${count}`;
        div.innerHTML = '';

        div.addEventListener("click", move);
        
        document.getElementById('gameBoard').appendChild(div);
    }
}

createCells()


