export default function stageUm() {
  const celular = window.matchMedia('(max-width: 600px)');
  const open = document.querySelector('.open')
  const close = document.querySelector('.close')
  const menu = document.querySelector('.menuR')
  if(celular.matches) {

    function openCLick() {
      menu.classList.add('ativo')
      this.style.display = 'none'
      close.style.display = 'initial'
    }
  open.classList.contains
    function closeCLick() {
      menu.classList.remove('ativo')
      open.style.display = 'initial'
      close.style.display = 'none'
    }

    function windowClick(event) {
      if((event.target.classList.contains('menuR') || event.target.classList.contains('close') || event.target.classList.contains('open')) === false && close.style.display === 'initial'){
        closeCLick()
      }
      console.log(event.target)
    }

    open.addEventListener('click', openCLick)
    close.addEventListener('click', closeCLick)
    window.addEventListener('click', windowClick)
  } else {
    
  }
};
