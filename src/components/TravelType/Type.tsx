import { Flex,Text } from '@chakra-ui/react'
import React from 'react'

interface typeProps{
  img:string,
  title:string,
  alt:string
}

export const Type = ({img,title,alt}:typeProps) => {
  return (
    <Flex justify="center" flexDirection="column" align="center">
    <img src={img} alt={alt} width="85px" height="85px"/>
    <Text textAlign="center" mt={6} fontSize="1.5rem" fontWeight="600">{title}</Text>
  </Flex>
  )
}
