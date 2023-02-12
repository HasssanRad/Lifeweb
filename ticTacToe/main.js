



function move(element){
    person += 1
    let xo = (person%2);
    let tl = document.getElementById('tl');
    let t = document.getElementById('t');
    let tr = document.getElementById('tr');
    let ml = document.getElementById('ml');
    let m = document.getElementById('m');
    let mr = document.getElementById('mr');
    let bl = document.getElementById('bl');
    let b = document.getElementById('b');
    let br = document.getElementById('br');
    let gb = document.getElementById('gameBoard')
    
    if (xo == 0) {
        if (element.innerHTML === ""){
            element.innerHTML = "X";
        }
    } else{
        if (element.innerHTML === ""){
            element.innerHTML = "O";
        }
    }


    let h = document.getElementsByClassName('square')
    let s = 0
    for (let i of h){
        if (i.innerHTML !== ""){
            if (s === 8){
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
                alert("No winner !");
                break
            }
            s += 1
        }
    }

    if (tl.innerHTML === 'X'){
        if (t.innerHTML == 'X'){
            if (tr.innerHTML == 'X') {
                alert("Player 2 won ");
                
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
                
    }}}
    
    if (ml.innerHTML === 'X'){
        if (m.innerHTML == 'X'){
            if (mr.innerHTML == 'X') {
                alert("Player 2 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}
    
    if (bl.innerHTML === 'X'){
        if (b.innerHTML == 'X'){
            if (br.innerHTML == 'X') {
                alert("Player 2 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tl.innerHTML === 'X'){
        if (ml.innerHTML == 'X'){
            if (bl.innerHTML == 'X') {
                alert("Player 2 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tr.innerHTML === 'X'){
        if (mr.innerHTML == 'X'){
            if (br.innerHTML == 'X') {
                alert("Player 2 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (t.innerHTML === 'X'){
        if (m.innerHTML == 'X'){
            if (b.innerHTML == 'X') {
                alert("Player 2 won");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tl.innerHTML === 'X'){
        if (m.innerHTML == 'X'){
            if (br.innerHTML == 'X') {
                alert("Player 2 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tr.innerHTML === 'X'){
        if (m.innerHTML == 'X'){
            if (bl.innerHTML == 'X') {
                alert("Player 2 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}


    // **********************************************

    if (tl.innerHTML === 'O'){
        if (t.innerHTML == 'O'){
            if (tr.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}
    
    if (ml.innerHTML === 'O'){
        if (m.innerHTML == 'O'){
            if (mr.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";

    }}}
    
    if (bl.innerHTML === 'O'){
        if (b.innerHTML == 'O'){
            if (br.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tl.innerHTML === 'O'){
        if (ml.innerHTML == 'O'){
            if (bl.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tr.innerHTML === 'O'){
        if (mr.innerHTML == 'O'){
            if (br.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (t.innerHTML === 'O'){
        if (m.innerHTML == 'O'){
            if (b.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tl.innerHTML === 'O'){
        if (m.innerHTML == 'O'){
            if (br.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}

    if (tr.innerHTML === 'O'){
        if (m.innerHTML == 'O'){
            if (bl.innerHTML == 'O') {
                alert("Player 1 won ");
                xo.innerHTML = "";
                tl.innerHTML = "";
                t.innerHTML = "";
                tr.innerHTML = "";
                ml.innerHTML = "";
                m.innerHTML = "";
                mr.innerHTML = "";
                bl.innerHTML = "";
                b.innerHTML = "";
                br.innerHTML = "";
    }}}
}

let person = 0;



    

document.getElementById('tl').onclick = function() {
    move(document.getElementById('tl'))
}

document.getElementById('t').onclick = function() {
    move(document.getElementById('t'))
}
document.getElementById('tr').onclick = function() {
    move(document.getElementById('tr'))
}
document.getElementById('ml').onclick = function() {
    move(document.getElementById('ml'))
}
document.getElementById('m').onclick = function() {
    move(document.getElementById('m'))
}
document.getElementById('mr').onclick = function() {
    move(document.getElementById('mr'))
}
document.getElementById('bl').onclick = function() {
    move(document.getElementById('bl'))
}
document.getElementById('b').onclick = function() {
    move(document.getElementById('b'))
}
document.getElementById('br').onclick = function() {
    move(document.getElementById('br'))
}
