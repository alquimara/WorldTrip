import { Box,Text } from '@chakra-ui/react'
import React from 'react'
interface ArticleProps{
  article:string
}
export const TextArticle = ({article}:ArticleProps) => {
  return (
    <Text fontSize={["14px","24px"]} fontWeight="400" textAlign="justify" lineHeight={["21px","36px"]} color="color.second" maxWidth="100%">
    {article}
    </Text>
  )
}
