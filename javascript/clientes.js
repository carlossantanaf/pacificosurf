export default function clientes() {

  const imgs = document.querySelectorAll('.clientes-carro img');
  const bolas = document.querySelectorAll('.bola');
  imgs[0].classList.add('ativo')
  bolas[0].classList.add('ativo')
  let rolar = true

  let i = 1;
 
  setInterval(() => {
    if(rolar) {
      bolas[i].click()
      if(i < bolas.length){
        i++
      } 
      if(i >= bolas.length) {
        i = 0
      }
    } 
  }, 2000)

  bolas.forEach((bola, index) => {
    bola.addEventListener('click', () => {
      i = index
      rolar = false
      bolas.forEach((bola) => {
        bola.classList.remove('ativo')
      })
      bola.classList.add('ativo')
    setTimeout(() => {
      imgs.forEach((img) => {
        img.classList.remove('ativo')
      })
      imgs[index].classList.add('ativo')
    }, 200)
    imgs.forEach((img) => {
      if(img.classList.contains('ativo')) {
        img.style.opacity = 0
       
      }
    imgs[index].style.opacity = 1
   
    })
    setTimeout(() => {
      rolar = true
    },2000)

    })
    
  })



}





