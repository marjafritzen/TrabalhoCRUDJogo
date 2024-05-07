const express = require('express');
const router = express.Router();
const MensagemController = require('../controllers/MensagemController');

// Rota para criar uma nova mensagem (CREATE)
router.post('/', MensagemController.create);

// Rota para listar todas as mensagens (READ)
router.get('/', MensagemController.list);

// Rota para mostrar uma mensagem específica (READ)
router.get('/:id', MensagemController.show);

// Rota para atualizar uma mensagem (UPDATE)
router.put('/:id', MensagemController.update);

// Rota para deletar uma mensagem (DELETE)
router.delete('/:id', MensagemController.delete);

module.exports = router;
