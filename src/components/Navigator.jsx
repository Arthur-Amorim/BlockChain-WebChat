import logo from "../assets/logo.png"
import EthereumPrice from "./EthereumPrice"

const Navigator = () => {
	return (
		<nav className="w-full bg-[#C07F00] flex items-center gap-3 px-3 py-2 h-[60px] justify-between">
			<div className="Logoname flex items-center">
				<img src={logo} alt="logo" className="w-20" />
				<p className="text-gray-900 font-semibold">
					BlockChain Talking
				</p>
			</div>

               <EthereumPrice />
		</nav>
	)
}

export default Navigator
