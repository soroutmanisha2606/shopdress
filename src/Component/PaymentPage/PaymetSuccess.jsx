import { Box, Button, Center, Heading } from '@chakra-ui/react'
import React from 'react'
//https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif
const PaymetSuccess = () => {
  return (
    <div style={{textAlign:"center"}}>
        <Box>
        {/* <img src='https://i.pinimg.com/originals/69/94/87/699487bb246152a16ccedd1a18814b4e.gif'/> */}
        </Box>
        <Center>
        <Box>
        <img style={{width:"600px",height:"360px"}} src='https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif'/>
            {/* <img style={{width:"600px",height:"270px"}} src='https://i.pinimg.com/originals/69/94/87/699487bb246152a16ccedd1a18814b4e.gif'/> */}
            <Heading color={"#116cfc"} m="10px" fontSize={"5xl"}>Payment Successful</Heading>
             <p>Thankyou for choosing <span style={{color:"black" ,fontSize:"19px",fontWeight:"bolder"}}>ShopDress Up</span></p>
             <Button bg={"none"} border="1px solid #116cfc" color="#116cfc" p={"30px"} m={"30px"} fontSize="2xl">Continue Shopping</Button>
 
        </Box>
        </Center>
    </div>
  )
}

export default PaymetSuccess