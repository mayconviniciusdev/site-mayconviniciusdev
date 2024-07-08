'use client'

import { Slider } from "@/components/slider"
import { SwiperProps, SwiperSlide } from "swiper/react"


export const Testimonials = () => {
  const settings: SwiperProps = {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {clickable: true},
    autoplay: true,
  }

  return (
    <div className="lg:max-w-4xl max-w-7xl mx-auto py-12">
      <div className="mx-4">
        <h2 className="font-bold text-blue lg:text-center text-start">DEPOIMENTOS</h2>
        <div className="pt-10">
        <Slider settings={settings}>
          <SwiperSlide className="bg-gradient-to-r from-blue-cyan to-blue p-12 rounded-3xl">
            <div className="flex flex-col items-center">
              <p className="text-white text-center text-base">"Sou muito grato por ter encontrado esse profissional pra fazer meu site da forma que imaginei. O bom gosto e dedicação que ele implantou no meu projeto não há dinheiro que pague."</p>
              <div className="flex items-center mt-10">
                <img
                alt="Robson"
                src='/foto-robson.png'
                width={50}
                height={50}
                className="rounded-full"/>
                <p className="ml-4 text-white/80 text-base">Robbs Design</p>
              </div>
            </div>
          </SwiperSlide>
        </Slider>
        </div>
      </div>
    </div>
  )
}