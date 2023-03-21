import React from 'react'
import {Box, Flex,Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Slide = () => {
  return (
    <Flex justify="center">
      <Flex height="450px" width="1240px">
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
          <Flex position="absolute" align="center" justifyContent="center" w="100%" h="100%">
            <Text color="color.primary" fontWeight="600" fontSize="20px">
              Slide
            </Text>
          </Flex>
          <img src='/image/europa.svg' alt='europa'/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      </Flex>
  
  </Flex>
  )
}
