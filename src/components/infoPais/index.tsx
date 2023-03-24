import { Grid, HStack, Stack,Text, TextProps } from '@chakra-ui/react'
import React from 'react'


interface infoDetalheProps extends TextProps {
  title:string
}
interface infoPaisProps{
  numero:string,
  nome:string

}
export const InfoPais = ({numero,nome}:infoPaisProps) => {
  return (
    <Text>
      <Text color='color.primary' fontSize={["1.5rem","3rem"]} lineHeight={["2.25rem","4.5rem"]} fontWeight="600" align="center">{numero}</Text>
      <Text color='color.second' fontSize={["1.12rem","1.5rem"]} lineHeight={["1.68rem","2.25rem"]} fontWeight={["400","600"]} align="center">{nome}</Text>
    </Text>
  )
}

