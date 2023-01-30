const colors = new Map([
  ['crimson', '#E1103F'],
  ['deepPink', '#FF1190'],
  ['capri', '#01bff9'],
  ['sunGlow', '#fed535'],
  ['lightGray', '#d4d3cf'],
  ['pink' , '#ffc0c8'],
  ['deepSaffron', '#fea42c'],
  ['maximumBlueGreen', '#1dd1c6'],
  ['lemonChiffon', '#fcfac9'],
  ['indigo', '#4a017c']
]);



function setColor(color){
  document.body.style.backgroundColor = color[1];
  document.querySelector('.colorName').innerHTML = color[0];
}


  for (let color of colors){
  const button = document.createElement('button');
  button.style.backgroundColor = color[1];
  button.setAttribute('data-color', color[1]);

  button.onclick = function () {
    setColor(color);
  }

  document.querySelector('div.colors').appendChild(button);
};


