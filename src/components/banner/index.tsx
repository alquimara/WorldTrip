
import { Box, Heading, Text, Flex,Stack, Image, useBreakpointValue } from '@chakra-ui/react';
import React from 'react'
interface bannerProps{
  dataMobile?: boolean
}
export const Banner = ({dataMobile =true}:bannerProps) => {
  return (
    <Flex  backgroundImage="/image/banner.svg" width="100%" backgroundSize="cover" height={["10.18rem","10.18rem","20.93rem"]}>
      <Flex mt={[7,7,20]} mx={["1rem","1rem","8.75rem"]} align="center" width="100%">
        <Box maxWidth={["95%","45%"]} textAlign="left">
        <Heading color="color.background" fontSize={["1.25rem","1.25rem","2.25rem"]} fontWeight="500" lineHeight={["1.87rem","1.87rem","3.37rem"]}>5 Continentes,<br/>
        infinitas possibilidades.</Heading>
        <Text pt={[2,2,5]} pb={[7,7,"4.37rem"]} color="color.second-ligth" fontWeight="400" fontSize={["0.87rem","0.87rem","1.25rem"]}>Chegou a hora de tirar do papela viagem que você sempre sonhou. </Text>
        </Box>
        {dataMobile &&  <Box position="absolute" top="11.25rem" right="8.75rem">
          <Image src='/image/aviao.svg'alt='aviao'/>
        </Box>}
      </Flex>
    </Flex>
  )
}
