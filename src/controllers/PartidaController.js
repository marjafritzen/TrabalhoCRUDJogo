const Partida = require('../models/partida')
const JogadoresDAO = require('../models/dao/JogadoresDAO');
const PartidaDAO = require('../models/dao/PartidaDAO');

class PartidaController {
  // Cria uma nova partida
   // Cria uma nova partida
   create(req, res) {
    const { timeVencedor, timePerdedor, mvp } = req.body;
  
    // Verifica se todos os IDs dos jogadores existem
    const jogadoresExistem = timeVencedor.concat(timePerdedor, [mvp]).every(id => JogadoresDAO.buscarPorId(id));
    if (!jogadoresExistem) {
      return res.status(404).json({ message: "ID de jogador inválido" });
    }
  
    // Verifica se o MVP está em algum dos times
    const mvpEstaNaPartida = timeVencedor.includes(mvp) || timePerdedor.includes(mvp);
    if (!mvpEstaNaPartida) {
      return res.status(400).json({ message: "O MVP deve estar na partida" });
    }
  
    // Cria a nova partida e obtém o ID da partida criada
    const novaPartidaId = PartidaDAO.criar(new Partida({ timeVencedor, timePerdedor, mvp }));
  
    // Retorna a resposta com o ID da partida criada
    res.status(201).json({ message: "Partida criada com sucesso", idPartida: novaPartidaId });
  }


  // Lista todas as partidas
  list(req, res) {
    const listaPartidas = PartidaDAO.listar();
  
    // Mapeia cada partida na lista
    const partidasComIDENicknames = listaPartidas.map(partida => {
      // Mapeia os IDs dos jogadores vencedores e obtém seus nicknames
      const nicknamesVencedor = partida.timeVencedor.map(id => {
        const jogador = JogadoresDAO.buscarPorId(id);
        return { id: id, nickname: jogador ? jogador.nickName : null };
      });
  
      // Mapeia os IDs dos jogadores perdedores e obtém seus nicknames
      const nicknamesPerdedor = partida.timePerdedor.map(id => {
        const jogador = JogadoresDAO.buscarPorId(id);
        return { id: id, nickname: jogador ? jogador.nickName : null };
      });
  
      // Obtém o nickname do MVP
      const mvp = JogadoresDAO.buscarPorId(partida.mvp);
      const mvpNickname = mvp ? mvp.nickName : null;
  
      // Retorna um objeto com todas as informações da partida, incluindo os nicknames dos jogadores
      return {
        idPartida: partida.idPartida,
        timeVencedor: nicknamesVencedor,
        timePerdedor: nicknamesPerdedor,
        mvp: { id: partida.mvp, nickname: mvpNickname }
      };
    });
  
    res.status(200).json({ partidas: partidasComIDENicknames });
  }

  // Mostra uma partida específica
  show(req, res) {
    const idPartida = parseInt(req.params.id);
    const partida = PartidaDAO.buscarPorId(idPartida);
    if (partida) {
      res.status(200).json({ partida: partida });
    } else {
      res.status(404).json({ message: 'Partida não encontrada' });
    }
  }

  // Atualiza uma partida
  update(req, res) {
    const idPartida = parseInt(req.params.id);
    const { timeVencedor, timePerdedor, mvp } = req.body;
    const partidaAtualizada = new Partida({ idPartida, timeVencedor, timePerdedor, mvp });
    PartidaDAO.atualizar(idPartida, partidaAtualizada);
    res.status(200).json({ message: "Partida atualizada com sucesso", partida: partidaAtualizada });
  }

  // Deleta uma partida
  delete(req, res) {
    const idPartida = parseInt(req.params.id);
    PartidaDAO.deletar(idPartida);
    res.status(200).json({ message: "Partida deletada com sucesso" });
  }
}

module.exports = new PartidaController();