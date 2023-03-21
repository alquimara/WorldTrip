
import { Box, Flex ,Text,Stack, HStack} from '@chakra-ui/react'
import React from 'react'
import { Type } from './Type'

export const TravelType = () => {
  return (
    <Flex  mt="80px" justify="center">
      <HStack spacing="130px">
      <Type img='/image/cocktail.svg' title='vida noturna' alt='icon drink'/>
      <Type img='/image/surf.svg' title='praia' alt='icon praia'/>
      <Type img='/image/building.svg' title='moderno' alt='icon monumento moderno'/>
      <Type img='/image/museum.svg' title='clássico' alt='icon monumento classico'/>
      <Type img='/image/earth.svg' title='e mais...' alt='icon terra'/>
      </HStack>
    </Flex>
  )
}
