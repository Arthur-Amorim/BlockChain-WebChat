import Navigator from "../components/Navigator"
import enterIcon from "../assets/enter-icon.png"
import searchIcon from "../assets/search.png"
import { useState, useRef, useEffect } from "react"
import { Message } from "../components/Message"

export default function Chats() {
	const [mensagens, setMensagens] = useState([
		{
			id: "1",
			texto: "Olá! Como vai?",
			enviadoPorUsuario: false,
			horario: new Date(),
		},
		{
			id: "2",
			texto: "Estou bem, obrigado!",
			enviadoPorUsuario: true,
			horario: new Date(),
		},
	])
	console.log(mensagens)
	const [novaMensagem, setNovaMensagem] = useState("")
	const fimDasMensagensRef = useRef(null)

	const enviarMensagem = () => {
		if (novaMensagem.trim() === "") return

		const mensagem = {
			id: Date.now().toString(),
			texto: novaMensagem,
			enviadoPorUsuario: true,
			horario: new Date(),
		}

		setMensagens([...mensagens, mensagem])
		setNovaMensagem("")
	}

	// Scroll automático para a última mensagem
	useEffect(() => {
		fimDasMensagensRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [mensagens])

	return (
		<div className="bg-[url(./assets/chain-wallpaper.png)] flex flex-col h-dvh">
			<Navigator />
			<div className="flex w-full gap-7 h-full p-5 overflow-hidden">
				<div className="containerContacts flex flex-col gap-y-5 w-1/4 h-full">
					<div className="contacts h-2/3 bg-[#FFF7D4] rounded-2xl shadow-2x relative">
						<p className={titlesStyle}>Contacts</p>

						<div className="contacts-list p-3 h-5/6 overflow-scroll mt-[40px]"></div>
					</div>
					<div className="newContact h-1/3 bg-[#FFF7D4] rounded-2xl shadow-2xl flex flex-col items-center gap-y-2 relative">
						<p className={titlesStyle}>Reach more friends</p>
						<div className="flex justify-center h-1/2 items-end gap-2 mt-[50px]">
							<input
								type="text"
								placeholder="Hash Id"
								className="w-5/6 h-1/2 mt-3 border-1 rounded-md p-2 border-amber-900"
							/>
							<button className="w-1/10 flex items-center justify-center bg-amber-300 p-1 h-1/2 rounded-md hover:cursor-pointer">
								<img
									src={searchIcon}
									alt="icone de enter"
									className="w-2/3"
								/>
							</button>
						</div>
						<div className="result text-lg flex h-1/2 items-center justify-center">
							<p className="">Search for user</p>
						</div>
					</div>
				</div>
				<div className="chat h-full bg-[#FFF7D4] w-3/4 rounded-2xl shadow-2xl relative flex flex-col">
					<p className={titlesStyle}>BlockChain Talking</p>
					<div className="chat-messages overflow-scroll flex-grow mb-[100px] break-words gap-y-8 flex flex-col w-full text-black mt-[40px] 2xl:text-[16px] lg:text-[12px]">
						{mensagens.map((mensagem, idx) => (
							<Message
								texto={mensagem.texto}
								enviadoPorUsuario={
									mensagem.enviadoPorUsuario
								}
								horario={mensagem.horario}
								key={idx}
							/>
						))}
						<div ref={fimDasMensagensRef} />
					</div>
					<div className="chat-input w-full absolute bottom-0 left-0 right-0 flex p-2 rounded-b-2xl h-[80px] bg-[#FFD95A] items-center">
						<input
							type="text"
							value={novaMensagem}
							onChange={(e) =>
								setNovaMensagem(e.target.value)
							}
							onKeyUp={(e) =>
								e.key === "Enter" && enviarMensagem()
							}
							className="rounded-full px-7 text-[16px] h-[50px] w-full border bg-white relative"
							placeholder="Type your message..."
						/>
						<button className="w-8 absolute right-5">
							<img
								src={enterIcon}
								alt="enter icon"
								className="w-full"
								onClick={enviarMensagem}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const titlesStyle =
	"font-semibold w-full rounded-t-2xl text-center bg-[#C07F00] p-2 absolute top-0 h-[40px]"
