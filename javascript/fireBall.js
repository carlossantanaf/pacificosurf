export default function fireBall() {
  const circuloUm = document.querySelector('.circuloUm')
  const circuloDois = document.querySelector('.circuloDois')
  const fireVertical = document.querySelector('.fireV')
  const fireDeitada = document.querySelector('.fireDeitada')
  circuloUm.classList.add('selected')

  function focoUm() {
    this.classList.add('selected')
    fireVertical.style.display = 'initial'
    circuloDois.classList.remove('selected')
    fireVertical.classList.add('opacity')
    fireDeitada.style.display = 'none'
  }
  function focoDois() {
    this.classList.add('selected')
    circuloUm.classList.remove('selected')
    fireVertical.style.display = 'none'
    fireDeitada.style.display = 'initial'
  }
 circuloUm.addEventListener('click', focoUm)
 circuloDois.addEventListener('click', focoDois)
}