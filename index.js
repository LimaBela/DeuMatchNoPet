const pool = require()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => 
{
  res.send('API funcionando!');
});

app.get('/', async (_, res) => 
{
  try 
  {
    const result = await pool.query('SELECT NOW()');
    res.json({ serverTime: result.rows[0].now });
  } 
  catch (err) 
  {
    console.error(err);
    res.status(500).send('Erro ao conectar ao banco!');
  }
});

app.listen(PORT, () => 
{
  console.log(`Servidor rodando na porta ${PORT}!`);
});
