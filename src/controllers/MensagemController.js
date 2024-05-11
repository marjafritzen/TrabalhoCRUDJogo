const Mensagem = require("../models/mensagem")
const JogadoresDAO = require("../models/dao/JogadoresDAO");
const MensagemDAO = require("../models/dao/mensagemDAO");

class MensagemController {
   // Cria uma nova mensagem (CREATE)
   
   create(req, res) {
    const { texto, remetente, destinatario } = req.body;
    const dataHora = new Date();

    const novaMensagem = new Mensagem({ texto, remetente, destinatario, dataHora });
    const mensagemId = MensagemDAO.criar(novaMensagem); // Obtenha o ID da nova mensagem

    res.status(201).json({ message: "Mensagem criada com sucesso", mensagemId, mensagem: novaMensagem });
}

// Método para listar todas as mensagens (READ)
list(req, res) {
    const listaMensagens = MensagemDAO.listar().map(mensagem => {
        // Verificar se mensagem.dataHora é uma instância de Date antes de tentar formatá-la
        const dataHoraFormatada = mensagem.dataHora instanceof Date ? mensagem.dataHora.toLocaleString() : null;
        // Retornar a mensagem com a data e hora formatadas
        return { 
            id: mensagem.id, 
            texto: mensagem.texto, 
            remetente: mensagem.remetente, 
            destinatario: mensagem.destinatario, 
            dataHora: dataHoraFormatada 
        };
    });
    res.status(200).json({ mensagens: listaMensagens });
}


// Método para mostrar uma mensagem específica (READ)
show(req, res) {
    const idMensagem = parseInt(req.params.id);
    const mensagem = MensagemDAO.buscarPorId(idMensagem);
    if (mensagem) {
        res.status(200).json({ mensagemId: idMensagem, mensagem });
    } else {
        res.status(404).json({ message: "Mensagem não encontrada" });
    }
}

// Método para atualizar uma mensagem (UPDATE)
update(req, res) {
    const idMensagem = parseInt(req.params.id);
    const { texto, remetente, destinatario } = req.body;
    const mensagemAtualizada = new Mensagem({ texto, remetente, destinatario });
    MensagemDAO.atualizar(idMensagem, mensagemAtualizada);
    res.status(200).json({ message: "Mensagem atualizada com sucesso", mensagemId: idMensagem, mensagem: mensagemAtualizada });
}

// Método para deletar uma mensagem (DELETE)
delete(req, res) {
    const idMensagem = parseInt(req.params.id);
    MensagemDAO.deletar(idMensagem);
    res.status(200).json({ message: "Mensagem deletada com sucesso", mensagemId: idMensagem });
}


}

module.exports = new MensagemController();
