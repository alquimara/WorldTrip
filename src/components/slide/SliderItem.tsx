import {Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'



interface slideItemProps {
  url:string,
  title:string,
  subtitle:string,
}

export const SliderItem = ({title,subtitle,url}:slideItemProps) => {
  return (
    <>
    <Flex  backdropFilter='auto' backdropBrightness='50%'
    position="absolute" 
    align="center" 
    justifyContent="center" 
    w="100%" h="100%" 
    direction="column"
    >
    <Text 
    color="color.second-dark" 
    fontWeight="700" 
    fontSize={["1.5rem","3rem"]}
    >
      {title}
    </Text>
    <Text 
    color="color.second-ligth" 
    fontSize={["0.87rem","1.5rem"]} 
    fontWeight="700" 
    >
      {subtitle}
    </Text>
    </Flex>
    <Image src={url} alt={title} boxSize="100%" objectFit="cover"/>
    </>
  )
}
