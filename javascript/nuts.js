export default function nuts() {

  const circuloUmN = document.querySelector('.circuloUmN');
  const circuloDoisN = document.querySelector('.circuloDoisN');
  const nutsVertical = document.querySelector('.nutsV')
  const nutsDeitada = document.querySelector('.nutsDeitada');
  circuloUmN.classList.add('selected')

  function focoUmN() {
    this.classList.add('selected')
    circuloDoisN.classList.remove('selected')
    nutsVertical.style.opacity = 1
    nutsDeitada.style.opacity = 0
    setTimeout(() => {
    nutsVertical.style.display = 'initial'
    nutsDeitada.style.display = 'none'
  },200)
  }
  function focoDoisN() {
    this.classList.add('selected')
    circuloUmN.classList.remove('selected')
   setTimeout(() => { 
     nutsVertical.style.display = 'none'
     nutsDeitada.style.display = 'initial'
  },200)
  nutsVertical.style.opacity = 0
  nutsDeitada.style.opacity = 1
  }
 circuloUmN.addEventListener('click', focoUmN);
 circuloDoisN.addEventListener('click', focoDoisN);

}