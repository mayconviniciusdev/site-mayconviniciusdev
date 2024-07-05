'use client';
import React from 'react';

import { Slider } from '@/components/slider';
import { SwiperProps, SwiperSlide } from "swiper/react";

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
          <div style={{position: 'relative', width: '100%', maxHeight: '630px'}}>
            <img
            style={{width: '100%', height: '630px', display: 'block', objectFit: 'cover'}}
            src="/banner.png"
            alt="Banner"/>
            
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img
              src='/logo.png'
              alt="Logo"
              style={{maxWidth: '50%', maxHeight: '50%', height: 'auto'}}/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{position: 'relative', width: '100%', height: '630px'}}>
            <img
            style={{width: '100%', height: '630px', display: 'block', objectFit: 'cover'}}
            src='/banner.png'
            alt="Banner"/>
              
            <div style={{position: 'absolute', width: '100%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center',}}>
              <div className='text-white text-2xl font-bold'>
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