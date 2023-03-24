import { Box, CardBody, Flex,Text,Image, Card } from '@chakra-ui/react'
import React from 'react'


interface CardPaisProps{
  title:string,
  subtitle:string,
  url:string,
  bandeira:string,
}
export const CardPais = ({title,subtitle,url,bandeira}:CardPaisProps) => {
  return (
    <Card>
      <Image src={url}
      alt={subtitle} height="10.81rem" width="100%" objectFit="cover" 
      borderRadius='4px 4px 0px 0px'
      _hover={{
        filter:"auto",
        brightness: '50%',
        cursor: 'pointer '
        
      }}
      />
      <CardBody border='1px solid rgba(255, 186, 8, 0.5)' borderRadius='0px 0px 4px 4px' width="100%" padding="0" bg="color.
      background" borderTop='none'>
        <Flex align="center" justifyContent="space-between" px="1.5rem">
          <Box mt="1.12rem" mb="1.56rem" fontFamily='Barlow'>
            <Text fontSize="1.25rem" lineHeight="1.56rem" fontWeight="600" color="color.second">
             {title}
            </Text>
            <Text fontSize="1rem" lineHeight="1.62rem" color='color.tertiary' mt="0.75rem">
              {subtitle}
            </Text>
          </Box>
        <Image src={bandeira} borderRadius="full"/>
        </Flex>
      </CardBody>
  </Card>
  )
}


