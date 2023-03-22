import { Divider, Flex } from '@chakra-ui/react'
import React from 'react'

export const TracoDivider = () => {
  return (
    <Flex width="100%" justifyContent="center">
      <Divider width={["3.75rem","5.62rem"]} border={["1px solid","2px solid"]} borderRadius="1px" mt={[9,20]} ml={[5,10]}/>
    </Flex>
    
  )
}
