class Mensagem {
    constructor({ id, texto, remetente, destinatario, dataHora }) {
        this.id = id;
        this.texto = texto;
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.dataHora = dataHora;
    }
}

module.exports = Mensagem;
