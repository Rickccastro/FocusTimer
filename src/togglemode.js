let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', function ToggleMode(event) {

    /*faz a troca das classes */
    document.documentElement.classList.toggle('darkMode')

    /*pega o estado em q está a classe true quando ativo e false desativado*/
    /*se darkmode for true ele vai receber light , se n dark */
    const mode = darkMode ? 'light' : 'dark';

    /*troca o texto dentro do span com base na variavel a cima */
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

    /*faz a troca do boolean da variavel*/
    darkMode = !darkMode

})

