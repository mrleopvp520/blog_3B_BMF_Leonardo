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
<!-- SDK do EmailJS -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

<script>
  // Inicialize o EmailJS com a sua Public Key
  emailjs.init("SUA_PUBLIC_KEY_AQUI");

  document.getElementById('meuFormulario').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o recarregamento da página

      // Parâmetros que combinam com os campos do formulário
      const templateParams = {
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          mensagem: document.getElementById('mensagem').value
      };

      // 1. Envia a notificação para você ou gera a resposta
      emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
          .then(function(response) {
              alert('Mensagem enviada com sucesso! Verifique seu e-mail.');
              document.getElementById('meuFormulario').reset();
          }, function(error) {
              alert('Ocorreu um erro ao enviar. Tente novamente.');
              console.log('ERRO:', error);
          });
  });
</script>