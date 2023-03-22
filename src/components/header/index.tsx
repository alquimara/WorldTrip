import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <Flex h={["3.12rem","3.12rem","6.25rem"]} w="100%" align="center" justify="center">
    <Image src="/image/logo.svg" alt="logo" width={["5rem","5rem","11.5rem"]} height={["1.25rem","1.25rem","2.87rem"]}/>
    </Flex>
  )
}
