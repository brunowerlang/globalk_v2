
  // Configuração global do ScrollReveal
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    once: true, // A animação vai acontecer uma vez e não se repetirá
  };

  // Revealing Elements for Header Section
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    delay: 700,
  });

  ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    delay: 800,
  });

  ScrollReveal().reveal(".header__image__card", {
    duration: 1000,
    interval: 500,
    delay: 900,
  });

  // Revealing Elements for Bg Section
  ScrollReveal().reveal(".bg-section .section-title", {
    ...scrollRevealOption,
    delay: 300,
    origin: "bottom",
    opacity: 0,
    distance: "30px",
  });

  ScrollReveal().reveal(".bg-section .sub-title", {
    ...scrollRevealOption,
    delay: 500,
    origin: "bottom",
    opacity: 0,
    distance: "30px",
  });

  ScrollReveal().reveal(".bg-section .brand-card", {
    duration: 1000,
    interval: 300,
    delay: 200,
    origin: "left",
    distance: "30px",
    opacity: 0,
  });

  // Revealing Elements for Left Section (About Us)
  ScrollReveal().reveal(".stack-area .left .title", {
    ...scrollRevealOption,
    delay: 200,
    opacity: 0,
    distance: "30px",
  });

  ScrollReveal().reveal(".stack-area .left .sub-title", {
    ...scrollRevealOption,
    delay: 300,
    opacity: 0,
    distance: "30px",
  });

  ScrollReveal().reveal(".stack-area .left .btn", {
    ...scrollRevealOption,
    delay: 400,
    opacity: 0,
    distance: "30px",
  });

  // Revealing Elements for Sales Section
  ScrollReveal().reveal(".section-title .title", {
    ...scrollRevealOption,
    delay: 200,
    origin: "top", // O título vai subir de cima
    opacity: 0, // Começa invisível
    distance: "30px", // Distância de movimento
  });

  ScrollReveal().reveal(".section-title .sub-title", {
    ...scrollRevealOption,
    delay: 300,
    origin: "top",
    opacity: 0,
    distance: "30px",
  });

  // Revelando os Cards da Seção de Sales
  ScrollReveal().reveal(".card-cases", {
    ...scrollRevealOption,
    interval: 200, // Intervalo entre a animação de cada card
    delay: 600,
    origin: "bottom", // Os cards vão subir de baixo para cima
    opacity: 0, // Começam invisíveis
    distance: "300px", // Distância de movimento
  });

  // Animações para os elementos da seção de contato
  ScrollReveal().reveal('.title', {
    origin: 'left',
    delay: 200
  });

  ScrollReveal().reveal('.text-contact', {
    origin: 'left',
    delay: 400
  });

  ScrollReveal().reveal('.contact-info .information', {
    origin: 'bottom',
    interval: 200,
    delay: 600
  });

  ScrollReveal().reveal('.social-media', {
    origin: 'right',
    delay: 800
  });

  ScrollReveal().reveal('.title-contact', {
    origin: 'left',
    delay: 800
  });

  ScrollReveal().reveal('.input-container input, .input-container textarea', {
    origin: 'right',
    interval: 200,
    delay: 800
  });

  ScrollReveal().reveal('.btn-contact', {
    origin: 'bottom',
    delay: 900
  });

  ScrollReveal().reveal('.circle', {
    origin: 'top',
    interval: 100,
    delay: 1000
  });