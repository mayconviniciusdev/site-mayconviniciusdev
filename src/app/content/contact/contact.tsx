import { Element } from "react-scroll"

import { ButtonForm } from "@/components/button"
import { SocialForm } from "@/components/social"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"

import { ContactFormType } from "@/types/contactFormType"

export const Contact = () => {
  const isValidPhoneNumber = (value: string) => {
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(value);}

  const isValidMessage = (value: string) => {
    const messageRegex = /^[a-zA-Z0-9\s]+$/;
    return messageRegex.test(value);}
  
  const ContactSchema = z.object({
  name: z.string().min(3, {message: 'Precisa de pelo menos 3 letras'}).max(20, {message: 'O máximo de letras é 20'}),
  email: z.string().email({message: 'Digite um e-mail válido...'}),
  tel: z.string().refine(value => isValidPhoneNumber(value), {message: 'Digite um número de telefone válido...'}),
  message: z.string().min(15, {message: 'Sua mensagem deve ser mais comprida'}).refine(value => isValidMessage(value), {message: 'A mensagem não pode conter caracteres especiais'})})

  const { register, formState: { errors } } = useForm<ContactFormType>({ resolver: zodResolver(ContactSchema)});
  
  return (
    <Element name="contact">
      <div className="bg-gradient-to-r from-blue to-blue-cyan py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mx-4">
            <h2 className="font-bold text-white">CONTATO</h2>
            <p className="py-2 text-base text-white/80">Sinta-se a vontade de entrar em contato comigo, seja para conversar sobre suas dúvidas, para dicas de livros, séries e filmes ou até mesmo para um bate-papo sobre sua ideia ou necessidade!</p>

            <form className="mt-8">
              <input 
              {...register('name')}
              placeholder="Como você se chama?"
              className="w-full py-2 pl-4 mb-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
              {errors.name && <p>{errors.name.message as string}</p>}

              <div className="grid grid-cols-2 gap-x-4">
                <input 
                {...register('email')}
                placeholder="Seu melhor e-mail..."
                className="py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
                {errors.email && <p>{errors.email.message as string}</p>}

                <input
                {...register('tel')}
                placeholder="Agora seu Whatsapp..."
                className="py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
                {errors.tel && <p>{errors.tel.message as string}</p>}
              </div>

              <textarea 
                {...register('message')}
                placeholder="Fale um pouco sobre sua ideia ou necessidade!" id="message" 
                className="w-full py-2 pl-4 my-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white">
              </textarea>
              {errors.message && <p>{errors.message.message as string}</p>}

              <div className="text-center"><ButtonForm/></div>
              <div className="flex mt-4"><SocialForm githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/></div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  )
}