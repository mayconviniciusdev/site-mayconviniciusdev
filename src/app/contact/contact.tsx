"use client"

import { Element } from "react-scroll"

import { ButtonForm } from "@/components/button"
import { LinktreeWhite } from "@/components/links"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"

import { ContactFormType } from "@/types/contactFormType"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

export const Contact = () => {
  const isValidPhoneNumber = (value: string) => {
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(value);}

  const isValidMessage = (value: string) => {
    const messageRegex = /^[a-zA-Z0-9\s.,!?()\[\]\-\u00C0-\u00FF]+$/;
    return messageRegex.test(value);}
  
  const ContactSchema = z.object({
  name: z.string().min(3, {message: 'Precisa de pelo menos 3 letras'}).max(20, {message: 'O máximo de letras é 20'}),
  email: z.string().email({message: 'Digite um e-mail válido...'}),
  tell: z.string().refine(value => isValidPhoneNumber(value), {message: 'Digite um número de telefone válido...'}),
  message: z.string().min(15, {message: 'Sua mensagem deve ser mais comprida'}).refine(value => isValidMessage(value), {message: 'A mensagem contem caracteres não aceitos'})})

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormType>({ resolver: zodResolver(ContactSchema)});
  const form = useRef<HTMLFormElement>(null);
  const sendEmail: SubmitHandler<ContactFormType> = async (data: ContactFormType) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      tell: data.tell,
      message: data.message}

    if (form.current)
    { try 
      { const response = await emailjs.sendForm('service_49pxid1', 'template_uplm04s', form.current, 'czmTWybfk69vJ7BNb');
      console.log('SUCESSO!', response.text);
      reset();}
      catch (error) { if (error instanceof Error) { console.error('FALHA...', error.message); } } };
  }
  
  
  return (
    <Element name="contact">
      <div className="bg-gradient-to-r from-blue to-blue-cyan py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mx-4">
            <h2 className="font-bold text-white">CONTATO</h2>
            <p className="py-2 text-base text-white/80">Sinta-se a vontade de entrar em contato comigo, seja para conversar sobre suas dúvidas, para dicas de livros, séries e filmes ou até mesmo para um bate-papo sobre sua ideia ou necessidade!</p>

            <form ref={form} onSubmit={handleSubmit(sendEmail)} className="mt-8">
              <div className="my-5">
                <input 
                {...register('name')}
                placeholder="Como você se chama?"
                className="w-full py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
                {errors.name && <p className="text-red-300 mt-1">{errors.name.message as string}</p>}
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-x-4">
                <div className="my-4 md:my-0">
                  <input 
                  {...register('email')}
                  placeholder="Seu melhor e-mail..."
                  className="w-full py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
                  {errors.email && <p className="text-red-300 mt-1">{errors.email.message as string}</p>}
                </div>

                <div className="my-4 md:my-0">
                  <input
                  {...register('tell')}
                  placeholder="Agora seu Whatsapp..."
                  className="w-full py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"/>
                  {errors.tell && <p className="text-red-300 mt-1">{errors.tell.message as string}</p>}
                </div>
              </div>

              <div className="my-5">
                <textarea 
                  {...register('message')}
                  placeholder="Fale um pouco sobre sua ideia ou necessidade!" id="message" 
                  className="w-full py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white">
                </textarea>
                {errors.message && <p className="text-red-300">{errors.message.message as string}</p>}
              </div>

              <div className="text-center"><ButtonForm/></div>
              <div className="flex mt-4"><LinktreeWhite githubIcon={faGithub} linkedinIcon={faLinkedin} instagramIcon={faInstagram}/></div>
            </form>
          </div>
        </div>
      </div>
    </Element>
  )
}