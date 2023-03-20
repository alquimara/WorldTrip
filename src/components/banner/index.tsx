
import { Box, Heading, Text, Flex,Stack } from '@chakra-ui/react';
import React from 'react'

export const Banner = () => {
  return (
    <Flex position="relative" >
      <img src="/image/banner.svg" width="100%"/>
      <Flex position="absolute" justifyContent="center" mt="80px" w="100%" align="center" >
        <Stack spacing="205px" direction="row">
        <Box color="color.background"  maxWidth="450px">
        <Heading fontSize="36px" fontWeight="500" textAlign="left" lineHeight="54px">5 Continentes,<br/>
        infinitas possibilidades.</Heading>
        <Text mt="20px">Chegou a hora de tirar do papela viagem que você sempre sonhou. </Text>
        </Box>
        <img src='/image/aviao.svg'alt='aviao'/>
        </Stack>
        
      </Flex>
    </Flex>
  )
}
