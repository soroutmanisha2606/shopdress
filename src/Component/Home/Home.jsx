import { Box, Grid, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import "./Home.css"
const data = [
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
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {
          state.map((ele)=>{
            return(
        <GridItem w='100%' className='grid__box'  >
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
