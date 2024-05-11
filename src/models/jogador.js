const Estatistica = require("../models/estatistica")
const EstatisticasDAO = require('../models/dao/EstatisticasDAO');
const ConquistasDAO = require("./dao/ConquistasDAO");

class Jogador {
  // Construtur da classe Jogador. Recebe um objeto com todas as propriedades do objeto
  constructor({ id, nickName, nome, classificacao, estatisticas, conquistas }) {
    this.id = id ? id : -1;
    this.nickName = nickName;
    this.nome = nome;
    this.classificacao = classificacao ? classificacao : -1;
    this.estatisticas = estatisticas ? estatisticas : EstatisticasDAO.criar(new Estatistica({}))
    this.conquistas = conquistas ? conquistas : []
  }

  verbose() {
    // Cria uma cópia do jogador
    let jogador = JSON.parse(JSON.stringify(this))

    // Atribui as estatisticas ao jogador
    jogador.estatisticas = EstatisticasDAO.buscarPorId(this.estatisticas)

    if (this.conquistas.length != 0) {
      for (let i = 0; i < this.conquistas.length; i++) {
        jogador.conquistas[i] = ConquistasDAO.buscarPorId(this.conquistas[i])
      }
    }

    // Retorna o Jogador com as estatisticas
    return jogador
  }

  infoImportante() {
    let jogadorImportante = {
      id: this.id,
      nome: this.nome,
      nickName: this.nickName
    }
    return jogadorImportante
  }
}



module.exports = Jogador;
