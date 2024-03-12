'use client'
import React from 'react';

import { Slider } from '@/components/slider';
import { SwiperProps, SwiperSlide } from "swiper/react";

import Image from 'next/image';
import banner from '../../../../public/banner.png'
import logo from '../../../../public/logo.png'

export const Banner = () => {
  const settings: SwiperProps = {
    slidesPerView: 1,
    pagination: {clickable: true},
    autoplay: true,
  }

  return (
    <div>
      <Slider settings={settings}>
        <SwiperSlide>
          <div 
          style={{position: 'relative', width: '100%', height: '630px'}}>
            <Image
            src={banner}
            alt="Banner"
            quality={100}
            layout="fill"
            objectFit="cover"/>
            
            <div 
            style={{position: 'absolute', width: '150px', height: '150px',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
              <Image
              src={logo}
              alt="Logo"
              quality={100}
              layout="fill"
              objectFit="contain"/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
          style={{position: 'relative', width: '100%', height: '630px'}}>
              <Image
              src={banner}
              alt="Banner"
              quality={100}
              layout="fill"
              objectFit="cover"/>
              
              <div 
              style={{position: 'absolute', top: '50%',
              left: '50%', transform: 'translate(-50%, -50%)'}}>
                <div className=' text-white text-2xl font-bold'>
                  <h2>Programação,</h2>
                  <h2>Desenvolvimento e </h2>
                  <h2>Tecnologia!</h2>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Slider>
    </div>
  );
}