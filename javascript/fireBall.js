export default function fireBall() {

  const circuloUm = document.querySelector('.circuloUm')
  const circuloDois = document.querySelector('.circuloDois')
  const fireVertical = document.querySelector('.fireV')
  const fireDeitada = document.querySelector('.fireDeitada')
  circuloUm.classList.add('selected')

  function focoUm() {
    this.classList.add('selected')
    setTimeout(() => {
      fireDeitada.style.display = 'none'
      fireVertical.style.display = 'initial'
    },200)
    circuloDois.classList.remove('selected')
    fireVertical.style.opacity = 1;
    fireDeitada.style.opacity = 0;
  }
  function focoDois() {
    this.classList.add('selected')
    circuloUm.classList.remove('selected')
    setTimeout(() => {
      fireVertical.style.display = 'none'
      fireDeitada.style.display = 'initial'
    },200)   
    fireVertical.style.opacity = 0;
    fireDeitada.style.opacity = 1;
  }
 circuloUm.addEventListener('click', focoUm)
 circuloDois.addEventListener('click', focoDois)
 
}