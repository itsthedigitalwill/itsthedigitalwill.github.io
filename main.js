
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
        navClose = document.getElementById('nav-close');
        navMenu = document.getElementById('nav-menu');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
      });
    }
  
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  });

  /*========REMOVE MENU MOBILE==================*/
  const navLink = document.querySelectorAll('nav__link')

  const LinkAction = () =>{

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', LinkAction))


 /*========SHAOW HEADER==================*/
 const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader);

 /*========SHAOW HEADER==================*/
 const contactForm = document.getElementById('contact-form')
 const contactMessage = document.getElementById('contact-message')
 
 const sendEmail = (e) => {
     e.preventDefault()
 
     // serviceId - templateID- #form- publicKey
     emailjs.sendForm('service_tm9nwo4', 'template_ov6q2j4', '#contact-form', 'jJQhfdsSHMG5ac5R2')
         .then(() =>{
             // show sent message
             contactMessage.textContent = 'message sent successfully.'
 
             // remove message after 5 seconds
             setTimeout(() =>{
                 contactMessage.textContent = ''
             }, 5000)

             contactForm.reset()

         }, () =>{

          //show error message
          contactMessage.textContent = 'message not sent (service error)'

         })
 }

 contactForm.addEventListener('submit', sendEmail)


  /*========SCROLL UP==================*/

const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*========SSCROLL SECTIONS ACTIVE LINK==================*/
const sections = document.querySelectorAll('section[id]');

const scrollArchive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollArchive);






 



  

