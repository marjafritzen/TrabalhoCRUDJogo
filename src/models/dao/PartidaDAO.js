const Partida = require("../partida")

let partidas = [
  new Partida({ id: 1, timeVencedor: [4, 5, 3], timePerdedor: [1, 2, 6], mvp: 2 }),
  new Partida({ id: 2, timeVencedor: [1, 4, 7], timePerdedor: [2, 3, 8], mvp: 3 }),
  new Partida({ id: 3, timeVencedor: [3, 6, 9], timePerdedor: [10, 11, 12], mvp: 10 }),
  new Partida({ id: 4, timeVencedor: [11, 12, 13], timePerdedor: [4, 5, 14], mvp: 12 }),
  new Partida({ id: 5, timeVencedor: [15, 16, 17], timePerdedor: [6, 7, 18], mvp: 16 }),
  new Partida({ id: 6, timeVencedor: [8, 19, 20], timePerdedor: [9, 10, 19], mvp: 20 }),
  new Partida({ id: 7, timeVencedor: [2, 15, 18], timePerdedor: [1, 3, 20], mvp: 15 }),
  new Partida({ id: 8, timeVencedor: [7, 11, 14], timePerdedor: [5, 6, 17], mvp: 7 }),
  new Partida({ id: 9, timeVencedor: [9, 12, 16], timePerdedor: [8, 10, 13], mvp: 9 }),
  new Partida({ id: 10, timeVencedor: [3, 5, 20], timePerdedor: [2, 4, 18], mvp: 5 }),
  new Partida({ id: 11, timeVencedor: [1, 6, 12], timePerdedor: [7, 8, 14], mvp: 1 }),
  new Partida({ id: 12, timeVencedor: [16, 19, 17], timePerdedor: [13, 15, 20], mvp: 16 }),
  new Partida({ id: 13, timeVencedor: [10, 13, 18], timePerdedor: [9, 11, 19], mvp: 13 }),
  new Partida({ id: 14, timeVencedor: [4, 8, 15], timePerdedor: [3, 5, 16], mvp: 4 }),
  new Partida({ id: 15, timeVencedor: [1, 9, 20], timePerdedor: [2, 7, 17], mvp: 1 }),
  new Partida({ id: 16, timeVencedor: [14, 17, 19], timePerdedor: [6, 10, 18], mvp: 14 }),
  new Partida({ id: 17, timeVencedor: [2, 11, 12], timePerdedor: [1, 8, 20], mvp: 2 }),
  new Partida({ id: 18, timeVencedor: [3, 4, 13], timePerdedor: [5, 6, 15], mvp: 3 }),
  new Partida({ id: 19, timeVencedor: [7, 16, 18], timePerdedor: [9, 14, 19], mvp: 7 }),
  new Partida({ id: 20, timeVencedor: [1, 10, 20], timePerdedor: [2, 12, 17], mvp: 10 }),

]; // Armazena as partidas

class PartidaDAO {
  // Método para criar uma nova partida
  criar(partida) {
    // Atribui um ID à partida antes de adicioná-la à lista de partidas
    partida.idPartida = partidas.length + 1;
    partidas.push(partida);
    // Retorna um objeto com o ID da partida criada
    return { idPartida: partida.idPartida };
  }

  // Método para listar todas as partidas
  listar() {
    // Mapeia cada partida para incluir o ID da partida
    return partidas.map(partida => {
      return {
        idPartida: partida.idPartida,
        timeVencedor: partida.timeVencedor,
        timePerdedor: partida.timePerdedor,
        mvp: partida.mvp
      };
    });
  }

  // Método para buscar uma partida pelo ID
  buscarPorId(idPartida) {
    return partidas.find(partida => partida.idPartida === idPartida); // Retorna a partida correspondente ao ID fornecido
  }

  // Método para atualizar uma partida
  atualizar(idPartida, partidaAtualizada) {
    // Encontra a partida correspondente ao ID fornecido e atualiza seus dados com os da partida atualizada
    const index = partidas.findIndex(partida => partida.idPartida === idPartida);
    if (index !== -1) {
      partidas[index] = partidaAtualizada;
    }
  }

  // Método para deletar uma partida
  deletar(idPartida) {
    // Remove a partida correspondente ao ID fornecido da lista de partidas
    partidas = partidas.filter(partida => partida.idPartida !== idPartida);
  }
}

module.exports = new PartidaDAO();
