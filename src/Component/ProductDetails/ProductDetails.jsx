import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import './ProductDetails.css'
const imgArray = [
    {
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-2_120x.jpg?v=1669238424',
        imgLg: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-2_720x.jpg?v=1669238424'
    },
    {
        id: 1,
        img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-5_120x.jpg?v=1669238434',
        imgLg: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-5_720x.jpg?v=1669238434'
    },
    {
        id: 2,
        img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-7_120x.jpg?v=1669238448',
        imgLg: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-7_720x.jpg?v=1669238448'
    },
    {
        id: 3,
        img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-8_120x.jpg?v=1669238448',
        imgLg: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-8_720x.jpg?v=1669238448'
    },
    {
        id: 4,
        img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-6_120x.jpg?v=1669238449',
        imgLg:'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-6_720x.jpg?v=1669238449'
    },
]
function ProductDetails(props) {
    const [sideImg, setsideImage] = useState([])
    const [lgImg, setlgImg] = useState('')
    useEffect(() => {
        setsideImage(imgArray)
        setlgImg(imgArray[0].imgLg)
    }, [])

    const handleImg = (img)=>{
        setlgImg(img)
    }
    return (
        <div>
            <Flex  justifyContent={'space-between'} m={10}>
                <Box w='6%'>
                    <Stack spacing={4}>
                {sideImg.map((ele,i)=>{
                    return(
                        <Box key={ele.id} >
                            <Image height={130} src={ele.img} alt="" srcset="" onClick={()=>{handleImg(ele.imgLg)}} />
                        </Box>
                    )
                })}
                </Stack>
                </Box>
                <Box w='43%'>
                    <Image src={lgImg} alt='NA'/>
                </Box>
                <Box w='40%'>
                    <Text   fontSize={20}>Light Grey Merry Pullover</Text>
                    <Text my={6}  fontSize={20}>$ 50.00</Text>
                    <hr className='hr'></hr>
                    <Flex my={6}>
                    <Text fontSize={'sm'}>COLOR —</Text>
                    <Text fontSize={'xs'}>Light Grey</Text>
                    </Flex>
                    <Box w='40px' h='40px' rounded={'50%'} border={'1px'} textAlign='center'>
                       <Box  w='35px' h='35px' rounded={'50%'} bg={'grey'}  ></Box> 
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

export default ProductDetails;