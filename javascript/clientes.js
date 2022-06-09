export default function clientes() {

  const quant = document.querySelectorAll('.clientes-carro img')
  let atual = 0
  const bola = document.querySelectorAll('.bola')
  let rolagem = true
  bola[0].classList.add('ativo')
  bola.forEach((item, index) => {
    item.addEventListener('click', () => {
      quant[0].style.marginTop = -616*index+'px'
      bola.forEach((item) => {
        item.classList.remove('ativo')
      })
      item.classList.add('ativo')
      rolagem = false
      if(!rolagem) {
        atual = index
      }
      rolagem = false
    })
  })
     setInterval(() => {
       if(rolagem) {
      bola.forEach((item) => {
        item.classList.remove('ativo')
      })
      atual++
      if(atual >= quant.length) {
        atual=0
      } 
      quant[0].style.marginTop = -616*atual+'px'
      bola[atual].classList.add('ativo')
    } else {
      rolagem = true
    }
    }, 4000)

  
}

