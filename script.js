document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // 1. Menu Responsivo (Hamburger)
    // ------------------------------------------
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const header = document.querySelector('.fixed-header');

    hamburgerBtn.addEventListener('click', () => {
        // Alterna a classe 'is-active' no menu mobile
        mobileNav.classList.toggle('is-active');
        
        // Altera o ícone do botão
        const icon = hamburgerBtn.querySelector('i');
        if (mobileNav.classList.contains('is-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Ícone X para fechar
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Ícone Hamburger
        }
    });

    // Fecha o menu mobile ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('is-active');
            hamburgerBtn.querySelector('i').classList.remove('fa-times');
            hamburgerBtn.querySelector('i').classList.add('fa-bars');
        });
    });


    // ------------------------------------------
    // 2. Modal Simples ("Ver Próximo Jogo")
    // ------------------------------------------
    const modal = document.getElementById('next-game-modal');
    const btn = document.getElementById('btn-proximo-jogo');
    const span = document.getElementsByClassName('close-button')[0];

    // Abre o modal
    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }

    // Fecha o modal pelo botão X
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // ------------------------------------------
    // 3. Scroll Suave entre Seções
    // ------------------------------------------
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição de destino com o offset do cabeçalho fixo
                const headerHeight = header.offsetHeight;
                const offsetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth" // Habilita o scroll suave
                });
            }
        });
    });

});