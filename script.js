// Pegando os elementos da tela
const modal = document.getElementById('modal-config');
const btnConfig = document.getElementById('btn-config');
const btnFechar = document.getElementById('btn-fechar');
const btnSalvar = document.getElementById('btn-salvar');
const inputNome = document.getElementById('username');
const selectCor = document.getElementById('theme-color');
const tituloBoasVindas = document.getElementById('welcome-title');

// Função para abrir e fechar a janelinha de perfil
btnConfig.addEventListener('click', () => modal.style.display = 'flex');
btnFechar.addEventListener('click', () => modal.style.display = 'none');

// Função que roda quando a pessoa salva as configurações
btnSalvar.addEventListener('click', () => {
    const nomeDigitado = inputNome.value;
    const corEscolhida = selectCor.value;

    // Se a pessoa digitou algo, altera o "Seja Bem Vindo"
    if (nomeDigitado.trim() !== "") {
        tituloBoasVindas.innerText = `Olá, ${nomeDigitado}`;
        localStorage.setItem('usuarioNome', nomeDigitado); // Salva no navegador
    }

    // Aplica a cor escolhida no site todo
    document.documentElement.style.setProperty('--cor-tema', corEscolhida);
    localStorage.setItem('usuarioCor', corEscolhida); // Salva no navegador

    // Fecha a janelinha
    modal.style.display = 'none';
});

// FUNÇÃO PARA CARREGAR OS DADOS SALVOS QUANDO A PÁGINA ABRE
window.addEventListener('load', () => {
    const nomeSalvo = localStorage.getItem('usuarioNome');
    const corSalva = localStorage.getItem('usuarioCor');

    if (nomeSalvo) {
        tituloBoasVindas.innerText = `Olá, ${nomeSalvo}`;
        inputNome.value = nomeSalvo;
    }
    if (corSalva) {
        document.documentElement.style.setProperty('--cor-tema', corSalva);
        selectCor.value = corSalva;
    }
});