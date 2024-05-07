const { Router } = require("express");
const router = new Router();

// Importa e utiliza as rotas de jogadores
const jogadoresRoutes = require('./jogadoresRoutes');
router.use('/jogadores', jogadoresRoutes);

// Importa e utiliza as rotas de conquistas
const conquistasRoutes = require('./conquistasRoutes');
router.use('/conquistas', conquistasRoutes);

// Importa e utiliza as rotas de estatisticas
const estatisticasRoutes = require('./estatisticasRoutes');
router.use('/estatisticas', estatisticasRoutes);

// Importa e utiliza as rotas de amizade
const amizadeRoutes = require('./amizadeRoutes');
router.use('/amizade', amizadeRoutes);

const mensagemRoutes = require('./mensagemRoutes');
router.use('/mensagem', mensagemRoutes);

const partidaRoutes = require('./partidaRoutes');
router.use('/partidas', partidaRoutes);



module.exports = router;
