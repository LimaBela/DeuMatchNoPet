const express = require('express');
const path = require('path');
const routeProtection = require('../middlewares/routeProtection');
const router = express.Router();

router.get('/meu_perfil', routeProtection, (_, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'private', 'meu_perfil.html'));
});

// outras rotas protegidas aqui

module.exports = router;