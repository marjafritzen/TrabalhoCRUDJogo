class Mensagem {
    constructor({ id, texto, remetente, destinatario }) {
        this.id = id;
        this.texto = texto;
        this.remetente = remetente;
        this.destinatario = destinatario;
    }
}

module.exports = Mensagem;
