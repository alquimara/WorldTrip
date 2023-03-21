import { Banner } from '@/components/banner'
import { TracoDivider } from '@/components/divider'
import { Header } from '@/components/header'
import { TitleImport } from '@/components/Heading'
import { Slide } from '@/components/slide'
import { TravelType } from '@/components/TravelType'
import { Flex,Divider,Heading } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main >
        <Flex direction="column" mb="40px">
          <Header/>
          <Banner/>
          <TravelType/>
          <TracoDivider/>
          <TitleImport/>
         <Slide/>
          
          
        </Flex>
      </main>
    </>
  )
}
