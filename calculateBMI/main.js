


function calculateBMI(height, weight){
    let bmi = (weight / (height * height))
    document.getElementById('showBMI').innerText = bmi.toFixed(2)
    
}


document.getElementById('btn').onclick = function(evt) {
    evt.preventDefault()
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    calculateBMI(height, weight)
    
}
    
