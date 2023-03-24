
import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({

  colors:{
    color:{
    "background":"#fff",
    "primary":"#FFBA08",
    "second":"#47585B",
    "tertiary":"#999999;",
    "second-ligth":"#DADADA",
    "second-dark":"#F5F8FA",
    }
    },
    fonts:{
      body:'Poppins',
      heading:'Poppins',

    },
  styles:{
    global:{
      body:{
        bg:'color.background',
        color:'color.second'
      }
    }
  }
})