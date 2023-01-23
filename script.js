const promtInput = document.getElementById('promtInput'); //se crean variables, constantes. seleccionando los elemntos de html//
const terminal = document.getElementById('terminal');
const terminalWindow = document.getElementById('terminalWindow');
const date = document.getElementById('date'); //se coloca fecha del dia

promtInput.focus();
date.innerText = new Date().toDateString()
terminalWindow.addEventListener('click', () => promtInput.focus());

promtInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
      enterCommand(event);
    }
  })
  
  const enterCommand = (event) => {
    const promtElement = document.getElementById('promptClone').cloneNode(true);
    promtElement.classList.remove('hidden');
    promtElement.getElementsByClassName('promtCloneInput')[0].innerHTML = event.target.value;
    promtElement.setAttribute('id', null);
    promtElement.getElementsByClassName('promtCloneContent')[0].appendChild(selectCommandBlock(event.target.value));
    terminal.appendChild(promtElement);
    promtInput.value = '';
    promtInput.scrollIntoView({block: 'start'});
  }

  
const selectCommandBlock = (command) => {
    const lowerCommand = command.toLowerCase()
    switch (lowerCommand) {
      case 'help':
      case 'about':
      case 'social':
      case 'skills':
      case 'educacion':
      case 'experiencia':
      case 'proyectos':
        return getCommandTemplate(lowerCommand);//funcion
      case 'clear':
        return clearCommand();//funcion
      default:
        return notFoundCommand(command);//funcion
    }
  }
  
  const getCommandTemplate = (command) => {//primera funcion se llama el bloque por id que se quiere llamar
    const element = document.getElementById(command).cloneNode(true);
    element.classList.remove('hidden');
    element.setAttribute('id', null);
    return element;
  }
  const clearCommand = () => {
    terminal.innerHTML = '';
    const element = document.createElement('span');
    return element;
  }
  

const notFoundCommand = (command) => {
    const element = document.createElement('span');
    element.innerText = `-bash: ${command}: command not found`;
    element.classList.add('error');
    return element;
  }