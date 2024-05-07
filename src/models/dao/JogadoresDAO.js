const Jogador = require("../jogador")

// Vetor de Jogadores
let jogadores = [
  new Jogador({ id: 1, nome: "Vitória de Lázaro Floriani", nickName: "Konan", classificacao: 1, estatisticas: 1, conquistas: [1, 2, 4] }),
  new Jogador({ id: 2, nome: "Vítor Gabriel Dias Lopes", nickName: "SenkoBR", classificacao: 4, estatisticas: 2, conquistas: [5, 2, 3] }),
  new Jogador({ id: 3, nome: "Letícia Medeiros", nickName: "LizzyGore", classificacao: 5, estatisticas: 3, conquistas: [3, 4, 5] }),
  new Jogador({ id: 4, nome: "Matheus Luan Fritzen", nickName: "FRODOGORDOx", classificacao: 2, estatisticas: 4, conquistas: [2] }),
  new Jogador({ id: 5, nome: "Marja Vitória Nikoseit Fritzen ", nickName: "xayah", classificacao: 3, estatisticas: 5, conquistas: [4] }),
  new Jogador({ id: 6, nome: "Felipe Silva", nickName: "ShadowKiller", classificacao: 10, estatisticas: 15, conquistas: [1, 4, 7] }),
  new Jogador({ id: 7, nome: "Ana Souza", nickName: "BlazeQueen", classificacao: 7, estatisticas: 8, conquistas: [2, 5, 8] }),
  new Jogador({ id: 8, nome: "Lucas Almeida", nickName: "FuriousKnight", classificacao: 12, estatisticas: 18, conquistas: [3, 6, 9] }),
  new Jogador({ id: 9, nome: "Juliana Oliveira", nickName: "SteelGoddess", classificacao: 9, estatisticas: 12, conquistas: [4, 7, 10] }),
  new Jogador({ id: 10, nome: "Rafael Santos", nickName: "RapidFalcon", classificacao: 15, estatisticas: 5, conquistas: [5, 8, 11] }),
  new Jogador({ id: 11, nome: "Carolina Lima", nickName: "SavageWidow", classificacao: 18, estatisticas: 16, conquistas: [6, 9, 12] }),
  new Jogador({ id: 12, nome: "Bruno Costa", nickName: "PhantomSlayer", classificacao: 6, estatisticas: 10, conquistas: [7, 10, 13] }),
  new Jogador({ id: 13, nome: "Gabriela Silva", nickName: "ViperQueen", classificacao: 20, estatisticas: 14, conquistas: [8, 11, 14] }),
  new Jogador({ id: 14, nome: "Rodrigo Oliveira", nickName: "Skywalker", classificacao: 3, estatisticas: 7, conquistas: [9, 12, 15] }),
  new Jogador({ id: 15, nome: "Fernanda Santos", nickName: "DarkPhoenix", classificacao: 17, estatisticas: 19, conquistas: [10, 13, 1] }),
  new Jogador({ id: 16, nome: "Eduardo Costa", nickName: "ThunderStrike", classificacao: 8, estatisticas: 2, conquistas: [11, 14, 2] }),
  new Jogador({ id: 17, nome: "Mariana Oliveira", nickName: "IceBlade", classificacao: 14, estatisticas: 6, conquistas: [12, 15, 3] }),
  new Jogador({ id: 18, nome: "Leonardo Almeida", nickName: "NovaKnight", classificacao: 11, estatisticas: 11, conquistas: [13, 1, 4] }),
  new Jogador({ id: 19, nome: "Camila Silva", nickName: "AngelWings", classificacao: 5, estatisticas: 17, conquistas: [14, 2, 5] }),
  new Jogador({ id: 20, nome: "Ricardo Oliveira", nickName: "DeathReaper", classificacao: 16, estatisticas: 9, conquistas: [15, 3, 6] })


];

class JogadoresDAO {
  // Retorna a lista de jogadores
  listar() {
    return jogadores;
  }

  // Retorna um jogador filtrado peloa sua ID
  buscarPorId(id) {
    return jogadores.find(jogador => jogador.id === id);
  }

  // Verifica existe uma instância de jogadores com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo jogador
  criar(jogador) {
    jogador.id = jogadores[jogadores.length - 1].id + 1;
    jogadores.push(jogador);
    return parseInt(jogador.id);
  }

  // Atualiza um jogador
  atualizar(id, jogadorAtualizado) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores[index] = jogadorAtualizado;
    }
  }

  // Deleta um jogador
  deletar(id) {
    const index = jogadores.findIndex(jogador => jogador.id === id);
    if (index !== -1) {
      jogadores.splice(index, 1);
    }
  }
}

module.exports = new JogadoresDAO();
