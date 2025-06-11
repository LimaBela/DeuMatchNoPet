const express = require('express');
const session = require('express-session');
const sessionConfig = require('./config/session');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const path = require('path');
const pool = require('./config/db');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use('/api/auth', authRoutes);
app.use('/', protectedRoutes);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/home', (_, res) => 
{
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/time', async (_, res) => 
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

module.exports = app;