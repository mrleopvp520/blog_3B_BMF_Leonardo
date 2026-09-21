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

// Contexto de áudio global
let audioCtx;

function obterAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 1. Som de Clique Elegante (Tom Duplo Melódico)
function tocarSomClique() {
  const ctx = obterAudioContext();
  const agora = ctx.currentTime;

  // Primeiro Tom
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(523.25, agora); // Nota C5
  gain1.gain.setValueAtTime(0.15, agora);
  gain1.gain.exponentialRampToValueAtTime(0.001, agora + 0.08);

  osc1.connect(gain1);
  gain1.connect(ctx.destination);

  osc1.start(agora);
  osc1.stop(agora + 0.08);

  // Segundo Tom (mais agudo, toca um instante depois)
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();

  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(659.25, agora + 0.03); // Nota E5
  gain2.gain.setValueAtTime(0.15, agora + 0.03);
  gain2.gain.exponentialRampToValueAtTime(0.001, agora + 0.12);

  osc2.connect(gain2);
  gain2.connect(ctx.destination);

  osc2.start(agora + 0.03);
  osc2.stop(agora + 0.12);
}

// 2. Som de Hover Suave (Pop Aveludado)
function tocarSomHover() {
  const ctx = obterAudioContext();
  const agora = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(320, agora);
  osc.frequency.exponentialRampToValueAtTime(440, agora + 0.04);

  gain.gain.setValueAtTime(0.04, agora); // Volume bastante subtil
  gain.gain.exponentialRampToValueAtTime(0.001, agora + 0.04);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(agora);
  osc.stop(agora + 0.04);
}

// Associar os eventos aos elementos interativos
document.addEventListener('DOMContentLoaded', () => {
  const elementosClique = document.querySelectorAll('button, .btn, nav a, input[type="submit"]');
  const elementosHover = document.querySelectorAll('nav a, button, .btn');

  elementosClique.forEach(elem => {
    elem.addEventListener('click', tocarSomClique);
  });

  elementosHover.forEach(elem => {
    elem.addEventListener('mouseenter', tocarSomHover);
  });
});