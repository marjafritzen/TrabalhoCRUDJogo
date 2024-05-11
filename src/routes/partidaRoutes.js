const express = require('express');
const router = express.Router();
const PartidaController = require('../controllers/PartidaController');

// Rota para criar uma nova partida (CREATE)
router.post('/', PartidaController.create);

// Rota para listar todas as partidas (READ)
router.get('/', PartidaController.list);

// Rota para mostrar uma partida específica (READ)
router.get('/:id', PartidaController.show);

// Rota para atualizar uma partida (UPDATE)
router.put('/:id', PartidaController.update);

// Rota para deletar uma partida (DELETE)
router.delete('/:id', PartidaController.delete);

module.exports = router;
