const express = require('express');
const router = express.Router();
const AmizadeController = require('../controllers/AmizadeController');

// Rota para criar uma nova amizade (CREATE)
router.post('/', AmizadeController.create);

// Rota para listar todas as amizades (READ)
router.get('/', AmizadeController.list);

// Rota para mostrar uma amizade (READ)
router.get('/:id', AmizadeController.show);

// Rota para atualizar uma amizade (UPDATE)
router.put('/:id', AmizadeController.update);

// Rota para deletar uma amizade (DELETE)
router.delete('/:id', AmizadeController.delete);

module.exports = router;
