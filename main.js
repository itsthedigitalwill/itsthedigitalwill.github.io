const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 480,
    reset: true //animations repeat
  });
  
  sr.reveal('.home__name', { origin: 'left', distance: '20px', duration: 1000 });
  sr.reveal('.home__info', { origin: 'bottom', distance: '20px', duration: 1000 });
  