export default function animacoes() {
  const sections = document.querySelectorAll('[data-animation]')
  console.log(sections)

  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if(sectionTop < windowMetade) {
        section.classList.add('animar')
      }
    })
  }

  window.addEventListener('scroll', animaScroll)
  
 animaScroll();
  
}