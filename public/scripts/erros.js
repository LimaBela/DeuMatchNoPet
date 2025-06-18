const params = new URLSearchParams(window.location.search);

switch(params.get('erro'))
{
    case 'especieRead':
        alert('Erro de servidor durante cadastro da espécie');
        break;
    case 'racaRead':
        alert('Erro de servidor durante cadastro da raça');
        break;
    case 'racaExistente':
        alert('Essa raça já existe, selecione a opção no formulário!');
        break;
    case 'especieExistente':
        alert('Essa especie já existe, selecione a opção no formulário!');
        break;
    case 'cadastroAnimal':
        alert('Erro de servidor durante cadastro do animal');
        break;
    case 'loginIncorreto':
        alert('Login Incorreto!');
        break;
}

    


if (params.get('sucesso') === '1') {
alert('Raça cadastrada com sucesso');
}
