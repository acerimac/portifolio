window.sr = ScrollReveal({ reset: true });

sr.reveal('.welcome-title', {
    distance: '60px',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'bottom'
});

sr.reveal('.welcome-description', {
    duration: 1000,
});

sr.reveal('.hero-image', {
    duration: 1500,
});