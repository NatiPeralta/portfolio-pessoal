const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    hamburguer.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburguer.classList.toggle('active');
    });

    // Fecha o menu quando um link for clicado
    document.querySelectorAll('.nav-link').forEach(link =>
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburguer.classList.remove('active');
        })
    );

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // Quanto do elemento deve estar visível

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealOnScroll);

// Executa no carregamento inicial
revealOnScroll();