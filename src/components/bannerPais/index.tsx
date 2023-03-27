import { Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'


interface bannerpaisProps{
  url:string;
  title:string;
}
export const BannerPais = ({url,title}:bannerpaisProps) => {

  return (
    <Flex
    height={["150px",'500px']}
    width="100%" 
    backgroundImage={url} 
    backgroundSize="cover"
    backgroundPosition='center'
    >
    <Flex align={["center","end"]} 
    justifyContent={["center", "start"]} 
    backdropFilter='auto' 
    backdropBrightness='50%' 
    boxSize='100%'>
      <Text 
        pl={["0","140px"]}  
        pb={["0","59px"]}  
        color="color.second-dark" 
        fontSize={["28px","48px"]} 
        fontWeight="600">
          {title}
      </Text>
    </Flex> 
    </Flex>
    
      )
    }
