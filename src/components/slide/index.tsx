import React from 'react'
import {Box, Flex,Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderItem } from './SliderItem';

export const Slide = () => {
  return (
    <Flex justify="center">
      <Flex height="28.12rem" width={["100%","77.5rem"]}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderItem url='/image/europa.jpg' title='Europa' subtitle='o continente mais antigo.'/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem url='/image/americaSul.jpg' title='America do Sul' subtitle='o continente mais antigo.' alt='America do Norte'/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem url='/image/africa.jpg' title='Africa' subtitle='o continente mais antigo.' alt='africa'/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem url='/image/asia.jpg' title='Ásia' subtitle='o continente mais antigo.' alt='asia'/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem url='/image/oceania.jpg' title='Oceania' subtitle='o continente mais antigo.' alt='oceania'/>
        </SwiperSlide>
      </Swiper>
      </Flex>
  
  </Flex>
  )
}
