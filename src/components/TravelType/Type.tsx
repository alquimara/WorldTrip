import { Flex,Text,Image } from '@chakra-ui/react'
import React from 'react'

interface typeProps{
  img:string,
  title:string,
  alt:string
}

export const Type = ({img,title,alt}:typeProps) => {
  return (
    <Flex justify="center" flexDirection={["row","column"]} align="center">
    <Image src={img} alt={alt} width={["8px","85px"]} height={["8px","85px"]}/>
    <Text mt={[0,6]} ml={[2,0]}  fontSize={["1.12rem","1.5rem"]} fontWeight="600">{title}</Text>
  </Flex>
  )
}
