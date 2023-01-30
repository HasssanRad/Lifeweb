const colors = [
  {name:'crimson',hex: '#E1103F'},
  {name:'deepPink',hex: '#FF1190'},
  {name:'capri',hex: '#01bff9'},
  {name:'sunGlow',hex: '#fed535'},
  {name:'lightGray',hex: '#d4d3cf'},
  {name:'pink',hex: '#ffc0c8'},
  {name:'deepSaffron',hex: '#fea42c'},
  {name:'maximumBlueGreen',hex: '#1dd1c6'},
  {name:'lemonChiffon',hex: '#fcfac9'},
  {name:'indigo',hex: '#4a017c'}
];

function setColor(color){
  document.body.style.backgroundColor = color.hex;
  document.querySelector('.colorName').innerHTML = color.name;

  var actives = document.querySelector('.active')
  if (actives !== null)
  {
    actives.classList.remove('active')
  } 
  var obj = document.getElementById('button_colors'+color.hex)

  if(obj !== null) {
    obj.classList.add('active')
  }

}

  for (let color of colors){
  const button = document.createElement('button');
  button.style.backgroundColor = color.hex;
  button.id = 'button_colors'+ color.hex;

  button.onclick = function () {
    setColor(color);
  }


  document.querySelector('div.colors').appendChild(button);
};


document.body.onload = function() {
  let randomNum = Math.floor(Math.random() * colors.length)
  let clr = colors[randomNum]
  setColor(clr)
}

