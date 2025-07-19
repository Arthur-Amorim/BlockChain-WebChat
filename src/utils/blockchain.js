import Web3 from "web3";
import abi from "./abi.json"; // coloque o arquivo `Abi.json` aqui
const contractAddress = "0x363dec84e35935DDb31D2Cac0eF03cD44DBeF0dc";

const web3 = new Web3(window.ethereum || "http://localhost:7545");

// Configuração de transação padrão
web3.eth.transactionBlockTimeout = 50;
web3.eth.transactionPollingTimeout = 480;
web3.eth.defaultCommon = {
  customChain: {
    name: 'ganache',
    networkId: 5777,
    chainId: 1337
  },
  baseChain: 'mainnet',
  hardfork: 'london'
};

const contract = new web3.eth.Contract(abi, contractAddress);

export async function getContas() {
  try {
    return await web3.eth.getAccounts();
  } catch (err) {
    console.error("Erro ao buscar contas:", err);
    return [];
  }
}

export async function buscarMensagens(endereco1, endereco2) {
  try {
    const eventos = await contract.getPastEvents("MessageSent", {
      fromBlock: "earliest",
      toBlock: "latest",
    });

    // Filtra apenas as mensagens entre os dois endereços
    const mensagens = eventos
      .filter((event) => {
        const { from, to } = event.returnValues;
        return (
          (from === endereco1 && to === endereco2) ||
          (from === endereco2 && to === endereco1)
        );
      })

      .map((event) => {
        const { from, content, timestamp } = event.returnValues;
        return {
          texto: content,
          enviadoPorUsuario: from === endereco1,
          horario: timestamp,
        };
      });

    return mensagens;
  } catch (err) {
    console.error("Erro ao buscar mensagens:", err);
    return [];
  }
}

export async function enviarMensagem(de, para, texto) {
  // Verificação: campos obrigatórios
  if (!de || !para || !texto || texto.trim() === "") {
    alert("Remetente, destinatário e texto da mensagem são obrigatórios.");
    return null;
  }

  // // Verificação: endereço de destino válido
  // if (!web3.utils.isAddress(para)) { {
  // 	alert("O endereço do destinatário é inválido.");
  // 	return null;
  // }

  // Verificação: contrato carregado
  if (!contract || !contract.methods || !contract.methods.sendMessage) {
    alert("Contrato não carregado corretamente.");
    return null;
  }

  // (Opcional) Verificação: tamanho da mensagem
  if (texto.length > 256) {
    alert("A mensagem é muito longa. Limite de 256 caracteres.");
    return null;
  }

  const dataHora = new Date();
  const data = dataHora.toLocaleDateString("pt-BR");
  const hora = dataHora.toLocaleTimeString("pt-BR");
  const timestamp = `${data} ${hora}`;

  try {
    await contract.methods
      .sendMessage(para, texto)
      .send({ from: de });
    return {
      texto,
      enviadoPorUsuario: true,
      horario: timestamp,
    };
  } catch (err) {
    console.error("Erro ao enviar mensagem:", err);
    alert("Erro ao enviar a mensagem. Verifique o console para detalhes.");
    return null;
  }
}
