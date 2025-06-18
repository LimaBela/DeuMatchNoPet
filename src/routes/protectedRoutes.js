const express = require('express');
const path = require('path');
const routeProtection = require('../middlewares/routeProtection');
const router = express.Router();
const animalController = require('../controllers/animalController')


router.get('/meu_perfil', routeProtection, (_, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'private', 'meu_perfil.html'));
});

router.post('/animal/create', routeProtection, animalController.create);

router.get('/animal', routeProtection, animalController.read);

router.get('/animal/especies', routeProtection, animalController.readEspecies);

router.get('/animal/racas', routeProtection, animalController.readRacas);

router.post('/animal/update', routeProtection, animalController.update);

router.post('/animal/delete', routeProtection, animalController.delete);

// outras rotas protegidas aqui

module.exports = router;