const Conquista = require("../conquista");

// Vetor de Conquistas
let conquistas = [
  new Conquista({ id: 1, nome: "Rainha imortal", descricao: "Obtenha um Ace com a habilidade 'Imperatriz' ativada" }),
  new Conquista({ id: 2, nome: "Pego pela faca!", descricao: "Obtenha 100 kills com a faca" }),
  new Conquista({ id: 3, nome: "Direto na Cabeça!", descricao: "Obtenha 10000 headshots" }),
  new Conquista({ id: 4, nome: "Taran tan tan", descricao: "Obtenha seu primeiro Ace" }),
  new Conquista({ id: 5, nome: "Rich", descricao: "Obtenha sua primeira skin" }),
  new Conquista({ id: 6, nome: "Desarmador Profissional", descricao: "Desarme a Spike 50 vezes em partidas classificadas" }),
  new Conquista({ id: 7, nome: "Demolidor", descricao: "Detone a Spike 50 vezes em partidas classificadas" }),
  new Conquista({ id: 8, nome: "Blindado", descricao: "Receba 1000 de dano em uma única rodada sem morrer" }),
  new Conquista({ id: 9, nome: "Opressor", descricao: "Elimine um inimigo com a habilidade de silenciamento ativa" }),
  new Conquista({ id: 10, nome: "Na Mira", descricao: "Faça 100 headshots em partidas classificadas" }),
  new Conquista({ id: 11, nome: "Batedor de Recordes", descricao: "Complete uma partida com o maior número de abates da história do seu time" }),
  new Conquista({ id: 12, nome: "Estrategista", descricao: "Vença uma partida sem que nenhuma Spike seja plantada" }),
  new Conquista({ id: 13, nome: "Anjo da Guarda", descricao: "Reviva 50 aliados em partidas classificadas" }),
  new Conquista({ id: 14, nome: "Imortal", descricao: "Termine uma partida sem morrer" }),
  new Conquista({ id: 15, nome: "Pulso Rápido", descricao: "Elimine 3 inimigos em menos de 5 segundos" }),
  new Conquista({ id: 16, nome: "Tático", descricao: "Ganhe 50 partidas apenas com eliminações e não por plantar a Spike" }),
  new Conquista({ id: 17, nome: "Caçador Implacável", descricao: "Elimine 50 inimigos usando apenas armas de precisão" }),
  new Conquista({ id: 18, nome: "Caçador de Cabeças", descricao: "Faça 100 eliminações com headshot" }),
  new Conquista({ id: 19, nome: "Assassino Silencioso", descricao: "Faça 100 eliminações com armas silenciosas" }),
  new Conquista({ id: 20, nome: "Mestre das Emboscadas", descricao: "Elimine 50 inimigos pelas costas" })
  ];

class ConquistasDAO {
  // Retorna a lista de conquistas
  listar() {
    return conquistas;
  }

  // Retorna um conquista filtrado peloa sua ID
  buscarPorId(id) {
    return conquistas.find(conquista => conquista.id === id);
  }

  // Verifica existe uma instância de conquista com aquele id
  exist(id) {
    return this.buscarPorId(id) ? true : false;
  }

  // Cria e armazena um novo conquista
  criar(conquista) {
    conquista.id = conquistas[conquistas.length - 1].id + 1;
    conquistas.push(conquista);
    return parseInt(conquista.id);
  }

  // Atualiza um conquista
  atualizar(id, conquistaAtualizado) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas[index] = conquistaAtualizado;
    }
  }

  // Deleta um conquista
  deletar(id) {
    const index = conquistas.findIndex(conquista => conquista.id === id);
    if (index !== -1) {
      conquistas.splice(index, 1);
    }
  }
}

module.exports = new ConquistasDAO();
