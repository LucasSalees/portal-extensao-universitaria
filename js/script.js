// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os elementos importantes da barra de navegação
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Adiciona um ouvinte de evento de clique ao documento inteiro
    document.addEventListener('click', function(event) {
        
        // Verifica se o menu responsivo está atualmente aberto (visível)
        // A classe 'show' é adicionada pelo Bootstrap quando o menu abre
        const isMenuOpen = navbarCollapse.classList.contains('show');

        // Verifica se o elemento que foi clicado (event.target) está FORA da navbar.
        // O método .closest('.navbar') procura o ancestral mais próximo que seja '.navbar'.
        // Se não encontrar (ou seja, for null), significa que o clique foi fora.
        const isClickOutsideNavbar = event.target.closest('.navbar') === null;

        // CONDIÇÃO PRINCIPAL:
        // Se o menu estiver aberto E o clique foi fora da navbar...
        if (isMenuOpen && isClickOutsideNavbar) {
            
            // ...então, feche o menu.
            // A maneira mais segura de fazer isso é usar a própria API do Bootstrap
            // para garantir que todas as classes e atributos ARIA sejam atualizados corretamente.
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false // Opção para garantir que ele apenas feche, e não abra de novo
            });
            bsCollapse.hide();
        }
    });

});