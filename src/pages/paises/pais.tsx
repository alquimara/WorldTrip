import { Banner } from '@/components/banner'
import { BannerPais } from '@/components/bannerPais'
import { CardPais } from '@/components/cardPais'
import { InfoPais } from '@/components/infoPais'
import { TextArticle } from '@/components/TextArticle'
import { Box, Card, Grid, GridItem, Heading,HStack,Text,Flex,Image,Stack, CardBody,CardFooter,Button, Icon, Toast, Popover, PopoverTrigger, PopoverContent ,PopoverBody, useBoolean} from '@chakra-ui/react'

import React, { useState } from 'react'
import { CardTitle } from '../../components/cardPais/index';
import { FiChevronLeft,FiInfo} from "react-icons/fi";
import Link from 'next/link'


export default function Pais(){
  const [clicado,setClicado] = useBoolean();

  return(
  <Flex direction='column' mb="2.18rem">
    <Link href="/" legacyBehavior>
    <Box as="a">
    <Icon as={FiChevronLeft} 
    position="absolute" 
    top={["17px","34px"]} 
    left={["16px","140px"]} 
    fontSize={["18px","35px"]}
    _hover={{
      color:'gray.400',
      cursor:'pointer'
    }}
    />
    </Box>
    </Link>
    <BannerPais title='Europa' url='/image/europa.jpg'/>
    <Flex justifyContent="center"  mx={["1rem","8.75rem"]} direction="column">
      <Grid 
      templateColumns={['1fr','repeat(2,auto)']}
      my={['2rem','5rem']} 
      gap={['1rem','4.37rem']} 
      alignItems="center"
      >
        <GridItem>
          <TextArticle/>
        </GridItem>
        <GridItem>
          <Flex direction="row">
          <HStack direction='row' spacing="2.62rem">
            <InfoPais nome='Países' numero='50'/>
            <InfoPais nome='Línguas' numero='60'/>
            <InfoPais nome='Cidade mais 100' numero='27'/>
          </HStack>
        <Popover isLazy
        isOpen={clicado}
        onOpen={setClicado.on}
        onClose={setClicado.off}
        >
          <PopoverTrigger>
          <Button  
          borderRadius="full" 
          size="1.12rem" alignSelf='end' 
          mb="0.62rem" ml="0.62rem"
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
            São as 100 cidades mais visitadas desse continente.
            </PopoverBody>
          </PopoverContent>
          </Popover>
          </Flex>
        </GridItem>
      </Grid>
      <Text fontSize={["1.5rem","2.25rem"]} lineHeight={["2.25rem","3.37rem"]} mb={["1.25rem","2.5rem"]}>
        Cidade +100
      </Text>
      <Grid templateColumns={['16rem','repeat(4,16rem)']} gap="2.81rem" justifyContent='center'>
        <GridItem>
          <CardPais 
          title='Londres' 
          subtitle='Reino unido' 
          url='/image/Foto.svg' 
          bandeira='/image/reinounido.svg'
          />
        </GridItem>
        <GridItem>
          <CardPais 
          title='Londres' 
          subtitle='Reino unido' 
          url='/image/Foto.svg' 
          bandeira='/image/reinounido.svg'
          />
        </GridItem>
        <GridItem>
          <CardPais 
          title='Londres' 
          subtitle='Reino unido' 
          url='/image/Foto.svg' 
          bandeira='/image/reinounido.svg'
          />
        </GridItem>
        <GridItem>
          <CardPais 
          title='Londres' 
          subtitle='Reino unido' 
          url='/image/Foto.svg' 
          bandeira='/image/reinounido.svg'
          />
        </GridItem>
        <GridItem>
          <CardPais 
          title='Londres' 
          subtitle='Reino unido' 
          url='/image/Foto.svg' 
          bandeira='/image/reinounido.svg'
          />
        </GridItem>
        
      </Grid>
      
    </Flex>
  </Flex>
  )
}

