// components/Mensagem.jsx
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react"

export function Message({ texto, enviadoPorUsuario, horario }) {
	const [dateShown, setDateShown] = useState(false)
	return (
		<div
			className={`px-4 xl:py-3 py-2 rounded relative w-full hover:cursor-default`}
		>
			<div
				className={`absolute max-w-[60%] min-w-[5%] w-fit p-2 ${enviadoPorUsuario ? 'right-3 ' : ''}`}
				
			>
				<p
					className={`p-2 ${
						enviadoPorUsuario
							? "bg-[#FFD95A] rounded-xl rounded-br-[0px]"
							: "bg-[#f3c323] rounded-xl rounded-bl-[0]"
					}`}
					onClick={() => setDateShown((prev) => !prev)}
				>
					{texto}
				</p>
				{dateShown && (
					<p
						className={`text-[10px] w-full ${
							enviadoPorUsuario ? "text-right" : ""
						}`}
					>
						{format(horario, "d/MM p", { locale: ptBR })}
					</p>
				)}
			</div>
		</div>
	)
}
