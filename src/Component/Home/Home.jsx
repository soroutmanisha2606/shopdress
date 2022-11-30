import { Box, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./Home.css"
const data = [
  {
    Image:'	https://cdn.shopify.com/s/files/1/0339/0901/collections/Exclusives_block_360x.jpg?v=1669385965',
    text:"Test Data"
  },
  {
    Image:'	https://cdn.shopify.com/s/files/1/0339/0901/collections/NEW_SWEATERS_360x.jpg?v=1669225841',
    text:"Test Data"
  },
  {
    Image:'https://i.picsum.photos/id/591/200/200.jpg?hmac=5agpVWsRchY0DObXs23vYWjjgqLZEBhqSvTwfCAcyng',
    text:"Test Data"
  },
  {
    Image:'https://i.picsum.photos/id/591/200/200.jpg?hmac=5agpVWsRchY0DObXs23vYWjjgqLZEBhqSvTwfCAcyng',
    text:"Test Data"
  },
  {
    Image:'https://i.picsum.photos/id/591/200/200.jpg?hmac=5agpVWsRchY0DObXs23vYWjjgqLZEBhqSvTwfCAcyng',
    text:"Test Data"
  },
  {
    Image:'https://i.picsum.photos/id/591/200/200.jpg?hmac=5agpVWsRchY0DObXs23vYWjjgqLZEBhqSvTwfCAcyng',
    text:"Test Data"
  },
]
export default function Home() {
  const [state,setState]=useState([])
  useEffect(()=>{
    setState(data)
  },[])
  return (
    <Box  p={5}>
      <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {
          state.map((ele,i)=>{
            return(
        <GridItem key={i} w='100%' className='grid__box'  >
          <img src={ele.Image} alt="" className='img__width' />
          <a className='img__btn'>{ele.text}</a>
        </GridItem>
            )
          })
        }
      </Grid>
    </Box>
  )
}
