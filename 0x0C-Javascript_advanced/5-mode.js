// changing mode by the user check html file
function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  // paragraph & p tag in js
  let paragraph = document.createElement('p');
  let text = document.createTextNode('Welcome Holberton!');
  paragraph.appendChild(text);
  document.body.appendChild(paragraph);
  // First botton
  let botton_click = document.createElement('button');
  botton_click.innerHTML = 'Spooky';
  botton_click.addEventListener('click', spooky);
  document.body.appendChild(botton_click);
  // Second botton
  botton_click = document.createElement('button');
  botton_click.innerHTML = 'Dark mode';
  botton_click.addEventListener('click', darkMode);
  document.body.appendChild(botton_click);
  // Third botton
  botton_click = document.createElement('button');
  botton_click.innerHTML = 'Scream mode';
  botton_click.addEventListener('click', screamMode);
  document.body.appendChild(botton_click);
}
document.addEventListener("DOMContentLoaded", function(event) {
  main();
})
