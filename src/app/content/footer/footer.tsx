import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 text-sm text-center">
      <div className="mx-4 text-blue-cyan font-bold">
        <button className="flex items-center mx-auto">VOLTAR PARA CIMA <FontAwesomeIcon icon={faArrowUp} className="w-4 ml-1"/></button>
        <p className="mt-4">MAYCON VINÍCIUS, PROGRAMADOR FRONTEND. RIO GRANDE DO SUL.</p>
        <p className="text-blue">contato@mayconviniciusdev.com</p>
        </div>
    </div>
  )
}