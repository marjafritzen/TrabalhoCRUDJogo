class Estatisticas {
  constructor({ id, pontuacao, jogosJogados, jogosVencidos, jogosPerdidos }) {
    this.id = id ? id : 0;
    this.pontuacao = pontuacao ? pontuacao : 0;
    this.jogosJogados = jogosJogados ? jogosJogados : 0;
    this.jogosVencidos = jogosVencidos ? jogosVencidos : 0;
    this.jogosPerdidos = jogosPerdidos ? jogosPerdidos : 0;
  }

  calculaEstatisticas() {
    // Calcula a quantidade de jogos jogados
    this.jogosJogados = this.jogosPerdidos + this.jogosVencidos;

    // Calcula a pontuação com base nos jogos ganhos e perdidos
    this.pontuacao = (this.jogosVencidos * 10) - (this.jogosPerdidos * 5);

    // Garante que a pontuação não seja negativa
    if (this.pontuacao < 0) {
      this.pontuacao = 0;
    }
  }


}


module.exports = Estatisticas
