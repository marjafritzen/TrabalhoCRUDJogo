class Partida {
  constructor({ idPartida, timeVencedor, timePerdedor, mvp }) {
    this.idPartida = idPartida;
    this.timeVencedor = timeVencedor;
    this.timePerdedor = timePerdedor;
    this.mvp = mvp;
  }
}

module.exports = Partida;