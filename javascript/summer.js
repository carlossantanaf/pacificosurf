export default function summer() {

  const circuloUmS = document.querySelector('.circuloUmS')
  const circuloDoisS = document.querySelector('.circuloDoisS')
  const summerVertical = document.querySelector('.summerV')
  const summerDeitada = document.querySelector('.summerDeitada')
  circuloUmS.classList.add('selected')

  function focoUmS() {
    this.classList.add('selected')
    circuloDoisS.classList.remove('selected')
    summerVertical.style.opacity = 1;
    summerDeitada.style.opacity = 0;
    setTimeout(() => {
      summerDeitada.style.display = 'none'
      summerVertical.style.display = 'initial'
    },200)
  }
  function focoDoisS() {
    this.classList.add('selected')
    circuloUmS.classList.remove('selected')
    summerVertical.style.opacity = 0;
    summerDeitada.style.opacity = 1;
    setTimeout(() => {
      summerDeitada.style.display = 'initial'
      summerVertical.style.display = 'none'
    },200)
  }
 circuloUmS.addEventListener('click', focoUmS)
 circuloDoisS.addEventListener('click', focoDoisS)

}