import { ReactNode } from "react";

import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './slider.css'

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export function Slider({children, settings}: SliderProps) {
  return <Swiper modules={[Pagination, A11y, Autoplay]} {...settings}> {children} </Swiper>;
}