export default function perguntas() {

  const retangulos = document.querySelectorAll('.retangulo')
  const respostas = document.querySelectorAll('.perguntas p')
console.log(respostas)
  retangulos.forEach((retangulo, index) => {
    retangulo.addEventListener('click', () => {
      retangulos.forEach((retangulo) => {
        retangulo.classList.remove('clicked')
      })
      respostas.forEach((resposta) => {
        resposta.classList.remove('ativo')
        resposta.style.opacity = 0
      })
      respostas[index].classList.add('ativo')
      retangulo.classList.add('clicked')
      setTimeout(() => {
      respostas[index].style.opacity = 1
      },50);
    })
  })
}