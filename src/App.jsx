import "./App.css"
import { Link } from "react-router"

function App() {
	return (
		<div className="bg-[url(./assets/chain-wallpaper.png)] flex flex-col items-center h-full text-center justify-center text-[#4C3D3D] overflow-hidden">
			<div className="bg-[#FFF7D4] w-2/3 shadow-2xl flex flex-col px-5 items-center gap-y-3 rounded-2xl py-15">
				<h1 className="text-5xl font-semibold mb-3">
					BlockChain Talking
				</h1>
				<h2 className="text-xl">
					Have safe and encrypted conversations in a fast and
					simple way
				</h2>
				<div className="text-lg bg-[#C07F00] w-1/2 text-white font-bold rounded-md flex flex-col items-center gap-y-2 py-8">
					<input
						type="text"
						className={inputStyle}
						placeholder="Insert your hash id"
					/>
					<input
						type="password"
						className={inputStyle}
						placeholder="Insert you password"
					/>
				</div>
				<Link
					to="/chats"
					className="bg-[#C07F00] w-1/2 py-3 text-white rounded-md text-xl font-bold hover:cursor-pointer hover:bg-[#C05e00]"
				>
					<button>Login</button>
				</Link>
			</div>
		</div>
	)
}

const inputStyle =
	"bg-white mb-2 rounded-lg placeholder:text-[#4C3D3D] placeholder:text-sm placeholder:opacity-80 p-2 text-black w-5/6"

export default App
