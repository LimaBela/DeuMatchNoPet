function abrirLogin() {
    document.getElementById('loginOverlay').style.display = 'flex';
}

function fecharLogin() {
    document.getElementById('loginOverlay').style.display = 'none';
}

function abrirCadastro() {
    document.getElementById('cadastroOverlay').style.display = 'flex';
    document.getElementById('loginOverlay').style.display = 'none';
}

function fecharCadastro() {
    document.getElementById('cadastroOverlay').style.display = 'none';
}

function abrirLoginDeCadastro() {
    abrirLogin();
}

function toggleSenhaCadastro() {
    const input = document.getElementById('senhaCadastro');
    const icone = document.getElementById('iconeOlho');

    if (input.type === 'password') {
        input.type = 'text';
        icone.classList.remove('bi-eye-fill');
        icone.classList.add('bi-eye-slash-fill');
    } else {
        input.type = 'password';
        icone.classList.remove('bi-eye-slash-fill');
        icone.classList.add('bi-eye-fill');
    }
}