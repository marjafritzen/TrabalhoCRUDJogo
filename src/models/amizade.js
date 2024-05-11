class Amizade {
  constructor({ id, amigos }) {
      this.id = id;
      this.amigos = amigos ? amigos : [];
  }

  verbose() {
      const amigosComNicknames = this.amigos.map(amigo => {
          const jogador = JogadoresDAO.buscarPorId(amigo.id);
          return jogador ? { id: amigo.id, nickname: jogador.nickName } : null;
      });
      return { id: this.id, amigos: amigosComNicknames };
  }
}

module.exports = Amizade;