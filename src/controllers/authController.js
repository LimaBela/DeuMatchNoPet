const loginRepo = require('../repositories/Login');
const doadorRepo = require('../repositories/Doador');
const bcrypt = require('bcrypt');
const { safe } = require('../utils');

exports.login = async (req, res) => 
{
  try 
  {
    const { email_login, senha} = req.body;

    if (!email_login|| !senha) 
      return res.status(400).json({ mensagem: 'Campos obrigatórios ausentes!' });

    const resultado = await loginRepo.read(email_login); //checa se o email existe e se sim, retorna a senha

    if (!resultado) 
      return res.status(404).json({ mensagem: 'Usuário ou senha incorretos' });
    
    const senhaCorreta = await bcrypt.compare(senha, resultado.senha);

    if(!senhaCorreta)
      return res.status(401).send('Credenciais inválidas');

    req.session.userId = resultado.id_login;

    return res.redirect('/meu_perfil.html');
  }
  catch (error) 
  {
    console.error('Erro no login:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.signup = async (req, res) => 
{
  const { nome, email_login, email_contato, telefone, cep, numero, /*foto,*/ senha} = req.body;

  if (!nome || !email_login || !email_contato || !telefone || !cep || !numero || /*!foto ||*/ !senha)
    return res.status(400).send('Campos obrigatórios ausentes');

  const hash = await bcrypt.hash(senha, 10);

  const [loginErr, loginRes] = await safe(loginRepo.create({email_login, senha: hash}))

  if(loginErr)
  {
    console.error('Erro no cadastro de login:', loginErr);
    return res.status(400).send('Erro de cadastro de login');
  } 
  
  const id_login = loginRes.id_login;

  const [doadorErr] = await safe(doadorRepo.create({nome, cep, numero, telefone, email_contato, foto: null, id_login}));
  
  if(doadorErr)
  {
    const [rollbackErr] = await safe(loginRepo.delete(email_login));
    
    if(rollbackErr) console.error('Erro no rollback do login:', rollbackErr);

    console.error('Erro no cadastro de doador:', doadorErr);
    return res.status(400).send('Erro de cadastro de doador');
  }     

  req.session.userId = id_login;

  return res.redirect('/meu_perfil.html');
};

exports.forgotPassword = (req, res) => 
{
  // lógica de envio de email de recuperação
};