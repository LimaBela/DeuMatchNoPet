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

app.use(express.static(path.join(__dirname, '..', 'public')));

// Bootstrap via NPM
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));

// Bootstrap Icons via NPM
app.use('/bootstrap-icons', express.static(path.join(__dirname, '../node_modules/bootstrap-icons/font')));

// Tom Select via NPM
app.use('/tom-select', express.static(path.join(__dirname, '../node_modules/tom-select/dist')));

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

app.use('/api/auth', authRoutes);

app.use('/', protectedRoutes);

module.exports = app;