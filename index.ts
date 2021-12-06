// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const botao = document.createElement('button');
botao.innerText = 'iniciar serial';
botao.onclick = async () => {
  console.log('--start');
  const response = await navigator.serial.requestPort();
  console.log(response);
  const ports = await navigator.serial.getPorts();
  console.log(ports);

  for (const port of ports) {
    const info = port.getInfo();
    console.log(info, port);
  }
};
appDiv.appendChild(botao);
