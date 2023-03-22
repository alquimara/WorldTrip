
import { Box, Flex ,Text,Stack, HStack, Grid, GridItem} from '@chakra-ui/react'
import React from 'react'
import { Type } from './Type'
interface TravelProps{
  dataMobile?: boolean
}
export const TravelType = ({dataMobile = true}:TravelProps) => {
  return (
    <Flex justify="center" mt="7.12rem">
    <Grid templateColumns={['repeat(2, auto)','repeat(5,auto)']} gap={["3rem","9rem"]}>
      <GridItem>
        <Type img= {dataMobile ?'/image/cocktail.svg':'/image/circulo.svg'} title='vida noturna' alt='icon drink' />
      </GridItem>
      <GridItem>
      <Type img={dataMobile?'/image/surf.svg':'/image/circulo.svg'} title='praia' alt='icon praia'/>
      </GridItem>
      <GridItem>
      <Type img={dataMobile?'/image/building.svg':'/image/circulo.svg'} title='moderno' alt='icon monumento moderno'/>
      </GridItem>
      <GridItem>
      <Type img={dataMobile ?'/image/museum.svg':'/image/circulo.svg'} title='clássico' alt='icon monumento classico'/>
      </GridItem>
      <GridItem colSpan={[2,1]}>
      <Type img={dataMobile ? '/image/earth.svg':'/image/circulo.svg' } title='e mais...' alt='icon terra' />
      </GridItem>
    </Grid>
    </Flex>
  )
}
