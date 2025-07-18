import Navigator from "../component/Navigator"
import enterIcon from "../assets/enter-icon.png"

export default function Chats() {
	return (
		<div className="bg-[url(./assets/chain-wallpaper.png)] flex flex-col h-dvh">
			<Navigator />
			<div className="flex w-full gap-7 h-full p-5 text-2xl">
				<div className="containerContacts flex flex-col gap-y-5 w-1/4 h-full">
					<div className="contacts h-3/4 bg-[#FFF7D4] rounded-4xl shadow-2xl">
						<p className={titlesStyle}>Contacts</p>
					</div>
					<div className="newContact h-1/4 bg-[#FFF7D4] rounded-2xl shadow-2xl flex flex-col items-center">
						<p className={titlesStyle}>Reach more friends</p>
						<div className="flex justify-center items-end h-1/4 mt-3 gap-2">
							<input
								type="text"
								placeholder="Hash Id"
								className="w-5/6 h-full mt-3 border-1 rounded-md p-2 border-amber-900"
							/>
							<button className="w-10 bg-amber-500 p-1 h-full rounded-md hover:cursor-pointer">
								<img
									src={enterIcon}
									alt="icone de enter"
									className="w-full"
								/>
							</button>
						</div>
						<p>Usuário encontrado?</p>
					</div>
				</div>
				<div className="chat h-full bg-[#FFF7D4] w-3/4 rounded-2xl shadow-2xl">
					<p className={titlesStyle}>BlockChain Talking</p>
				</div>
			</div>
		</div>
	)
}

const titlesStyle =
	"font-semibold w-full rounded-t-2xl text-center bg-[#C07F00] p-2"
