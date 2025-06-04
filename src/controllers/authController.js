
exports.login = async (req, res) => 
{
  try 
  {
    const loginRepo = require('../repositories/Login');
    
    const { emailForm, senhaForm } = req.body;

    if (!emailForm || !senhaForm) 
      return res.status(400).json({ mensagem: 'Campos obrigatórios' });

    const resultado = await loginRepo.read(emailForm);

    if (!resultado) 
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    
    const {emailLogin: emailDB, senha: senhaDB} = resultado;

    if(emailForm === emailDB && senhaForm === senhaDB)
      return res.status(200).json({ mensagem: 'Login bem-sucedido' });
    else
      res.status(401).send('Credenciais inválidas');
  }
  catch (error) 
  {
    console.error('Erro no login:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.signup = async (req, res) => 
{
  try 
  {
    const loginRepo = require('../repositories/Login');
    const doadorRepo = require('../repositories/Doador');
    
  }
  catch (error) 
  {
    console.error('Erro no login:', error);
    res.status(500).send('Erro interno do servidor');
  }
};

exports.forgotPassword = (req, res) => 
{
  // lógica de envio de email de recuperação
};