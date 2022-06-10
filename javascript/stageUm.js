export default function stageUm() {
  const open = document.querySelector('.open')
  const close = document.querySelector('.close')
  const menu = document.querySelector('.menuR')
  
  function openMenu () {
    menu.classList.add('ativo')
    open.classList.add('none')
    close.classList.add('initial')
  }

  function closeMenu() {
    menu.classList.remove('ativo')
    close.classList.remove('initial')
    open.classList.remove('none')
  }

  function closeTarget({target}) {
    if((target.classList.contains('menuR') || target.classList.contains('close') || target.classList.contains('open') || target.classList.contains('header') || target.classList.contains('bola') ||target.classList.contains('logo')) === false && close.classList.contains('initial')) {
      closeMenu()
    }
 
  }
  open.addEventListener('click', openMenu)
  close.addEventListener('click', closeMenu)
  window.addEventListener('click', closeTarget)
};
