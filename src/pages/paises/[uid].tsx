
import { BannerPais } from '@/components/bannerPais'
import { CardPais } from '@/components/cardPais'
import { InfoPais } from '@/components/infoPais'
import { TextArticle } from '@/components/TextArticle'
import { Box,  Grid, GridItem, Heading,HStack,Text,Flex,Button, Icon, Popover, PopoverTrigger, PopoverContent ,PopoverBody, useBoolean} from '@chakra-ui/react'
import React from 'react'
import { FiChevronLeft,FiInfo} from "react-icons/fi";
import Link from 'next/link'
import { getPrismicClient } from '@/service/prismic'



interface Continente{
  uid:string,
  banner:string,
  title:string,
  content:string,
  paises:string,
  linguas:string,
  cidademais:{
    title:string,
    subtitle:string,
    url:string,
    bandeira:string
  }[]
}
interface ContinenteProps{
  continente:Continente
}


export default function Continente({continente}:ContinenteProps){
  const [clicado,setClicado] = useBoolean();

  return(
  <Flex direction='column' mb="2.18rem">
    <Link href="/" legacyBehavior>
    <Box as="a">
    <Icon as={FiChevronLeft} 
    position="absolute" 
    top={["1.06rem","2.12rem"]} 
    left={["1rem","8.75rem"]} 
    fontSize={["1.12rem","2.18rem"]}
    _hover={{
      color:'gray.400',
      cursor:'pointer'
    }}
    />
    </Box>
    </Link>

    {continente && <>
    <BannerPais title={continente.title} url={continente.banner}/>
    <Flex justifyContent="center"  mx={["1rem","8.75rem"]} direction="column">
      <Grid 
      templateColumns={['1fr','repeat(2,1fr)']}
      my={['2rem','5rem']} 
      gap={['1rem','4.37rem']} 
      alignItems="center"
      >
        <GridItem>
          <TextArticle article={continente.content[0]}/>
        </GridItem>
        <GridItem>
          <Flex direction="row">
          <HStack spacing="2.62rem">
            <InfoPais nome='Países' numero={continente.paises}/>
            <InfoPais nome='Línguas' numero={continente.linguas}/>
            <InfoPais nome='Cidade +visitadas' numero={String(continente.cidademais.length)}/>
          </HStack>
        <Popover isLazy
        isOpen={clicado}
        onOpen={setClicado.on}
        onClose={setClicado.off}
        >
          <PopoverTrigger>
          <Button  
          size="1.12rem" alignSelf='end' 
          mb={["0.30rem","0.5rem"]} ml="0.55rem"
          > 
          <Icon stroke={clicado ?"color.primary":"rgba(153, 153, 153, 0.5)"} 
          fill="color.background"
          as={FiInfo}
          _hover={{
            stroke:'color.primary'
          }}
          />
          </Button>
          </PopoverTrigger>
          <PopoverContent borderColor='color.primary'>
            <PopoverBody>
            São as cidades mais visitadas desse continente.
            </PopoverBody>
          </PopoverContent>
          </Popover>
          </Flex>
        </GridItem>
      </Grid>
      <Text fontSize={["1.5rem","2.25rem"]} lineHeight={["2.25rem","3.37rem"]} mb={["1.25rem","2.5rem"]}>
        Cidade mais visitadas
      </Text>
      <Grid templateColumns={['16rem','repeat(4,16rem)']} gap="2.81rem" justifyContent='center'>
        {continente.cidademais && continente.cidademais.map((cidade)=>(
          <GridItem key={cidade.title}>
          <CardPais 
          title={cidade.title} 
          subtitle={cidade.subtitle}
          url={cidade.url} 
          bandeira={cidade.bandeira}
          />
        </GridItem>
        ))}
      </Grid>
    </Flex>
    </> }

  </Flex>
  )
}
export const getStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const continentes = await prismic.getByType('continente');
  const paths = continentes.results.map((cont =>{
    return {
      params: {
        uid: cont.uid
      }
    }
  }))
  return{
    paths,
    fallback:true
  }

};

export const getStaticProps = async ({params}) => {

  const prismic = getPrismicClient({});
  const {uid} = params;
  const response = await prismic.getByUID('continentes',String(uid),{});

  const continente ={
    uid:uid,
    title:response.data.title,
    banner:response.data.banner.url,
    content:response.data.content.map((conte)=>{
      return conte.text
    }),
    paises:response.data.paises,
    linguas:response.data.linguas,
    cidademais: response.data.cidademais.map((cidade)=>{
      return{
        title:cidade.title,
        subtitle:cidade.subtitle,
        url:cidade.image.url,
        bandeira:cidade.bandeira.url
      }
    })
  }

return{
  props:{
    continente
  },
  redirect: 60 * 30 
}
};


