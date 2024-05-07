const mensagem = require("../mensagem")


let mensagens = [
    new mensagem({ id: 1, data: new Date('2020-01-22: 23:53'), texto: "Bora outra?", remetente: 1, destinatario: 2 }),
    new mensagem({ id: 2, data: new Date('2023-07-15: 23:19'), texto: "Vamos jogar uma partida de Valorant hoje à noite?", remetente: 2, destinatario: 1 }),
    new mensagem({ id: 3, data: new Date('2022-12-31: 22:15'), texto: "Preciso de um quinto jogador para nosso time em Valorant. Você está dentro?", remetente: 3, destinatario: 4 }),
    new mensagem({ id: 4, data: new Date('2020-10-25: 19:17'), texto: "Qual é o seu agente favorito em Valorant?", remetente: 4, destinatario: 3 }),
    new mensagem({ id: 5, data: new Date('2010-01-31: 21:01'), texto: "Estou treinando minha precisão no Aim Lab para melhorar em Valorant.", remetente: 5, destinatario: 6 }),
    new mensagem({ id: 6, data: new Date('2019-09-02: 02:12'), texto: "Você viu os patch notes mais recentes do Valorant?", remetente: 6, destinatario: 5 }),
    new mensagem({ id: 7, data: new Date('2018-03-10: 18:37'), texto: "Quero aprender mais sobre estratégias de jogo em Valorant. Você tem algumas dicas?", remetente: 7, destinatario: 8 }),
    new mensagem({ id: 8, data: new Date('2006-02-12: 04:21'), texto: "Vamos assistir aos jogos profissionais de Valorant juntos neste fim de semana?", remetente: 8, destinatario: 7 }),
    new mensagem({ id: 9, data: new Date('2021-07-18: 05:12'), texto: "Estou planejando uma maratona de Valorant para o próximo sábado. Você está dentro?", remetente: 9, destinatario: 10 }),
    new mensagem({ id: 10, data: new Date('2020-02-02: 23:09'), texto: "Tenho algumas estratégias novas que quero experimentar em Valorant. Você quer jogar junto?", remetente: 10, destinatario: 9 }),
    new mensagem({ id: 11, data: new Date('2010-12-18: 20:34'), texto: "Estou assistindo a tutoriais no YouTube para melhorar minha jogabilidade em Valorant.", remetente: 11, destinatario: 12 }),
    new mensagem({ id: 12, data: new Date('2008-12-28: 20:43'), texto: "Você já experimentou o novo mapa em Valorant? É incrível!", remetente: 12, destinatario: 11 }),
    new mensagem({ id: 13, data: new Date('2001-06-17: 12:34'), texto: "Vamos montar um time competitivo em Valorant e participar de torneios?", remetente: 13, destinatario: 14 }),
    new mensagem({ id: 14, data: new Date('2011-01-24: 18:12'), texto: "Estou praticando meu spray control no Valorant. Quer treinar junto?", remetente: 14, destinatario: 13 }),
    new mensagem({ id: 15, data: new Date('2000-11-13: 01:17'), texto: "Quero discutir as melhores armas em Valorant. Qual é a sua preferida?", remetente: 15, destinatario: 16 }),
    new mensagem({ id: 16, data: new Date('2020-10-30: 08:33'), texto: "Você já dominou o controle de recuo das armas em Valorant?", remetente: 16, destinatario: 15 }),
    new mensagem({ id: 17, data: new Date('2020-07-12: 10:32'), texto: "Vamos formar um grupo de estudo sobre os agentes em Valorant?", remetente: 17, destinatario: 18 }),
    new mensagem({ id: 18, data: new Date('2005-06-22: 01:43'), texto: "Estou revisando os agentes em Valorant para aprimorar minha compreensão do jogo.", remetente: 18, destinatario: 17 }),
    new mensagem({ id: 19, data: new Date('2024-03-10: 21:28'), texto: "Estou ansioso para a próxima atualização de Valorant. Você viu os teasers?", remetente: 19, destinatario: 20 }),
    new mensagem({ id: 20, data: new Date('2024-04-23: 00:04'), texto: "Vamos assistir às partidas de Valorant no Twitch juntos esta noite?", remetente: 20, destinatario: 19 })


];

class MensagemDAO {
    // Método para criar uma nova mensagem
    criar(mensagem) {
        mensagem.id = mensagens.length + 1;
        mensagem.dataHora = new Date(); // Adicionando a data e hora atuais
        mensagens.push(mensagem);
        return mensagem.id;
    }

    listar() {
        return mensagens;
    }

    buscarPorId(id) {
        return mensagens.find(mensagem => mensagem.id === id);
    }

    atualizar(id, mensagemAtualizada) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens[index] = mensagemAtualizada;
        }
    }

    deletar(id) {
        const index = mensagens.findIndex(mensagem => mensagem.id === id);
        if (index !== -1) {
            mensagens.splice(index, 1);
        }
    }
}

module.exports = new MensagemDAO();
