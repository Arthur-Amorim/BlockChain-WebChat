import React from "react"
import brokenChain from "../assets/broken-chain.png"
import { Link } from "react-router"

const ErrorPage = () => {
	return (
		<div className="error-page gap-y-10 text-center flex flex-col items-center mt-50">
			<h1 className="text-5xl text-[#4C3D3D]">Error to load page</h1>
			<img src={brokenChain} alt="broken chain" className="w-70"/>
			<Link to="/">
				<p className="text-blue-600 hover:cursor-pointer font-semibold">
					Voltar para a página inicial
				</p>
			</Link>
		</div>
	)
}

export default ErrorPage
