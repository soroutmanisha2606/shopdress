import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Radio,
  Stack,
  Text,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import CARTMENU, {SearchDiv,SearchBar}from "../Cart/Cartt"
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { NavLink, Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
const imgArray = [
  {
    id: 0,
    img: "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-2_120x.jpg?v=1669238424",
    imgLg:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-2_720x.jpg?v=1669238424",
  },
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-5_120x.jpg?v=1669238434",
    imgLg:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-5_720x.jpg?v=1669238434",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-7_120x.jpg?v=1669238448",
    imgLg:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-7_720x.jpg?v=1669238448",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-8_120x.jpg?v=1669238448",
    imgLg:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-8_720x.jpg?v=1669238448",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-6_120x.jpg?v=1669238449",
    imgLg:
      "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_grey_merry_pullover-6_720x.jpg?v=1669238449",
  },
];
// {
//   "id":"1",
//   "name": "BHLDN Freya Satin Charmeuse Dress",
//   "image_1":
//     "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_ivory_merry_pullover_c040af8a-e267-41d4-8fd3-9c4c2fcae40d_540x.jpg?v=1669239241",
//   "image_2":
//     "https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_ivory_merry_pullover_c040af8a-e267-41d4-8fd3-9c4c2fcae40d_540x.jpg?v=1669239241",
//   "image_3": "image.png",
//   "price": "220.0",
//   "size" : "M",
//   "Qty":1
// }
const otherImg = [
  // {
  //   id: 0,
  //   img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_plaid_flannel-4_5f8b1040-5264-4d0f-a184-842f29fdf706_360x.jpg?v=1669395019'
  // },
  // {
  //   id: 1,
  //   img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_cami_tank-5_fdcadb62-33ef-4cd2-af95-052959bf6593_360x.jpg?v=1660337503'
  // },
  // {
  //   id: 2,
  //   img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_black_tiered_romper-2_360x.jpg?v=1659639517'
  // },
  // {
  //   id: 3,
  //   img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_smaocked_maxi_dress-2_360x.jpg?v=1659639754'
  // },
  // {
  //   id: 4,
  //   img: 'https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_tiered_tie_tank-3_360x.jpg?v=1656605911'
  // }
]

function ProductDetails(props) {
  const [prodData, setprodData] = useState({});
  const [sideImg, setsideImage] = useState([]);
  const [extraImg, setextraImage] = useState([]);
  const [lgImg, setlgImg] = useState("");
  const params = useParams()
  useEffect(() => {
    SearchDiv();
    getDetails(3)
    setsideImage(imgArray);
    setlgImg(imgArray[0].imgLg);
    setextraImage(otherImg)
  }, []);

  const handleImg = (img) => {
    setlgImg(img);
  };
  async function AddtoCart(taskk){
    await fetch('https://cartikkg-shop-dress-up-new.onrender.com/cart',{
      method:"POST",
      body: JSON.stringify(taskk),
      headers :{
        "Content-Type":"application/json",
      },
    });
  }
  const getDetails=(id)=>{
    fetch('https://cartikkg-shop-dress-up-new.onrender.com/Product_Data/'+id)
    .then(res=>res.json())
    .then((data)=>{
      setprodData(data)
    })
  }

  return (
    <div>
      <Flex className="makeColumn" justifyContent={"space-between"} m={10}>
        <Box className="innerBox revflex" w="6%" >
          <Stack spacing={4}>
            {sideImg.map((ele, i) => {
              return (
                <NavLink key={ele.id}>
                  <Image
                    height={130}
                    src={ele.img}
                    alt=""
                    onClick={() => {
                      handleImg(ele.imgLg);
                    }}
                  />
                </NavLink>
              );
            })}
          </Stack>
        </Box>
        <Box className="innerBox" w="43%">
          <Image src={lgImg} alt="NA" />
        </Box>
        <Box className="innerBox scroolDiv" w="40%">
          <Stack spacing={6}>
            <Text fontSize={20}>{prodData.name}</Text>
            <Text fontSize={20}>$ {prodData.price}</Text>
            <hr className="hr"></hr>
            <Box>
              <Flex mb={2}>
                <Text fontSize={"sm"}>COLOR —</Text>
                <Text fontSize={"xs"}>Light Grey</Text>
              </Flex>
              <Flex>
                <Box
                  me={"3"}
                  w="45px"
                  h="45px"
                  rounded={"50%"}
                  border={"1px"}
                  p={"4px"}
                  textAlign="center"
                >
                  <Box w="35px" h="35px" rounded={"50%"} bg={"grey"}></Box>
                </Box>
                <Box
                  w="45px"
                  h="45px"
                  rounded={"50%"}
                  border={"1px"}
                  p={"4px"}
                  textAlign="center"
                >
                  <Box w="35px" h="35px" rounded={"50%"} bg={"brown"}></Box>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Text mb={2} fontSize={"xs"}>SIZE</Text>
              <Flex>
                <Button
                  height={"35px"}
                  borderRadius={0}
                  colorScheme="antiquewhite"
                  color={"black"}
                  variant="outline"
                >
                  Small
                </Button>
                <Button
                  height={"35px"}
                  borderRadius={0}
                  mx={2}
                  colorScheme="antiquewhite"
                  color={"black"}
                  variant="outline"
                >
                  Medium
                </Button>
                <Button
                  height={"35px"}
                  borderRadius={0}
                  colorScheme="antiquewhite"
                  color={"black"}
                  variant="outline"
                >
                  Large
                </Button>
              </Flex>
            </Box>
            <Box>
              {
              //  ( prodData.stock?<Radio isChecked={true} colorScheme="green" value="1">
              //   <Text ms={"30px"}>In stock, ready to ship</Text>
              // </Radio>:<Radio isChecked={true} colorScheme="red" value="1">
              //   {/* <Text ms={"30px"}>Out of Stock</Text> */}
              // </Radio>)
              }
              
            </Box>
            <Box textAlign={"center"} border={"1px"}>
              <Button w="100%"  >Add To Cart</Button>
            </Box>
            <Box textAlign={"center"} border={"1px"} bgColor={"#5a31f4"}>
              <Flex justifyContent={"center"} alignItems={"center"} py={1.5}>
                <Text color={"white"} fontSize={"sm"}>
                  Buy with
                </Text>
                <Text
                  mx={2}
                  color={"white"}
                  fontWeight={"bold"}
                  fontSize={"xl"}
                >
                  Shop
                </Text>
                <Button size={"xs"}>Pay</Button>
              </Flex>
            </Box>
            <Box textAlign={"center"}>
              <Link fontSize={"sm"}>More payment options</Link>
            </Box>
            <Box>
              <Text fontSize={'2xl'} fontWeight={'bold'}>Stock Online</Text>
              <Box
                cursor={"pointer"}
                textAlign={"center"}
                py="2"
                border={"1px"}
              >
                <Text>CHECK STORE AVAILABILITY</Text>
              </Box>
            </Box>
            <Flex justifyContent={"space-around"}>
              <Box display={"flex"} alignItems={"center"}>
                <FaFacebookF />
                <Text>Share</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <FaPinterestP />
                <Text>Pin it</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <FaTwitter />
                <Text>Tweet</Text>
              </Box>
            </Flex>
            <Accordion allowToggle border={"1px"}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      Buy Online Pick Up In-Store Hours
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={"8"}>
                    <Text fontSize={"sm"}>
                      Store Hours may very. If you are selecting our Website as
                      your pickup location our hours are:
                    </Text>
                    <Text fontSize={"sm"}>Monday: 9:00AM-5:00PM</Text>
                    <Text fontSize={"sm"}>Tuesday: 9:00AM-5:00PM</Text>
                    <Text fontSize={"sm"}>Wednesday: Closed</Text>
                    <Text fontSize={"sm"}>Thursday: 9:00AM-5:00PM</Text>
                    <Text fontSize={"sm"}>Friday: 9:00AM-3:00PM</Text>
                    <Text fontSize={"sm"}>In-Store Hours. Click Here</Text>
                    <Text fontSize={"sm"}>
                      Have more questions see our FAQ Page. Click Here
                    </Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Box>
              <Text mb={10} fontSize={"sm"}>
                Romance is in the air when you waltz in wearing the A Lot Like
                Love Jumpsuit! This cute jumpsuit is designed with a lightweight
                woven knit. It features a high neckline, a sleeveless bodice,
                and flowy wide pant legs. It also has an open back with a
                functional tie! Style the A Lot Like Love Jumpsuit with booties
                and a clutch for a holiday party! Available in 2 colors.
              </Text>
              <Box ps={10}>
                <ul>
                  <li>Lightweight Woven Knit Fabrication</li>
                  <li>High Neckline</li>
                  <li>Sleeveless</li>
                  <li>Flowy Wide Pant Legs</li>
                  <li>Open Back with Functional Tie</li>
                  <li>100% Polyester</li>
                  <li>Hand Wash Cold, Hang or Line Dry</li>
                  <li>Models are 5'7"+ 5'9.5" and are wearing a Small.</li>
                </ul>
              </Box>
            </Box>

            <Accordion allowToggle border={"1px"}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      Shipping information
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={"8"}>
                    <Text fontSize={"sm"}>
                      All orders ship within 24-48 hours after order is placed.{" "}
                    </Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowToggle border={"1px"}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="center">
                      Have questions about sizing, fit, or styling?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    Send us a chat or give us a call at&nbsp;
                    <a href="tel:6789892006" target="_blank">
                      678-989-2006
                    </a>
                    &nbsp;during business hours 9AM - 5PM EST Monday-Friday!
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>
      </Flex>
      <Box m={4}>
        <Grid templateColumns="repeat(5, 1fr)" gap={0}>
          {otherImg.map((ele, i) => {
            return (
              <GridItem key={ele.id} w="100%" className="grid__box">
                <img src={ele.img} alt="" className="img__width" />
                <a className="img__btn">Text</a>
              </GridItem>
            );
          })}
        </Grid>a
      </Box>
    </div>
  );
}

export default ProductDetails;
