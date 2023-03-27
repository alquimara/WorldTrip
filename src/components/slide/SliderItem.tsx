import {Box, Flex,Image,Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'



interface slideItemProps {
  url:string,
  title:string,
  subtitle:string,
  uidUrl:string,
}

export const SliderItem = ({title,subtitle,url,uidUrl}:slideItemProps) => {
  return (
  
    <Link href={uidUrl} legacyBehavior >
      <Box as='a' cursor='pointer'>
    <Flex  backdropFilter='auto' backdropBrightness='50%'
    position="absolute" 
    align="center" 
    justifyContent="center" 
    w="100%" h="100%" 
    direction="column"
    >
    <Box maxWidth={["60%",'80%']} textAlign="center">
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
    </Box>
    </Flex>
    <Image src={url} alt={title} boxSize="100%" objectFit="cover"/>
    </Box>
    </Link>

  )
}
