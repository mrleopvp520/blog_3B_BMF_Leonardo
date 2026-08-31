document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões de reação
    const btnCurtir = document.querySelector('.botoes-reacao button[aria-label="Curtir"]');
    const btnDescurtir = document.querySelector('.botoes-reacao button[aria-label="Não curtir"]');

    // Lógica e animação do botão Curtir ❤️
    if (btnCurtir) {
        btnCurtir.addEventListener('click', () => {
            const span = btnCurtir.querySelector('span');
            span.textContent = parseInt(span.textContent) + 1;

            btnCurtir.classList.add('animar-curtiu');
            btnCurtir.addEventListener('animationend', () => {
                btnCurtir.classList.remove('animar-curtiu');
            }, { once: true });
        });
    }

    // Lógica e animação do botão Não Curtir 👎
    if (btnDescurtir) {
        btnDescurtir.addEventListener('click', () => {
            const span = btnDescurtir.querySelector('span');
            span.textContent = parseInt(span.textContent) + 1;

            btnDescurtir.classList.add('animar-descurtiu');
            btnDescurtir.addEventListener('animationend', () => {
                btnDescurtir.classList.remove('animar-descurtiu');
            }, { once: true });
        });
    }
});