document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navMenu = document.getElementById('nav-menu');

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

  /*========REMOVE MENU MOBILE==================*/
  const navLinks = document.querySelectorAll('.nav__link');
  
  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  };

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', linkAction);
  });

  /*========SHADOW HEADER==================*/
  const shadowHeader = () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header.classList.add('shadow-header');
    } else {
      header.classList.remove('shadow-header');
    }
  };
  window.addEventListener('scroll', shadowHeader);

  /*========FORM STATE AND SUBMISSION==================*/
  const formData = {
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: ""
  };

  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');

  const handleInputChange = (e) => {
    formData[e.target.name] = e.target.value;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tm9nwo4', 'template_ov6q2j4', '#contact-form', 'jJQhfdsSHMG5ac5R2', formData)
      .then(() => {
        contactMessage.textContent = 'Message sent successfully.';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();
      })
      .catch(() => {
        contactMessage.textContent = 'Message not sent (service error).';
      });
  };

  contactForm.addEventListener('submit', sendEmail);

  /*========SCROLL UP==================*/
  const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  };

  window.addEventListener('scroll', scrollUp);

  /*========SCROLL SECTIONS ACTIVE LINK==================*/
  const sections = document.querySelectorAll('section[id]');

  const scrollArchive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector(`.nav__link[href="#${sectionId}"]`);

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    });
  };

  window.addEventListener('scroll', scrollArchive);
});

