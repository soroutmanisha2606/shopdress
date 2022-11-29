import {
  useDisclosure,useMediaQuery ,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Container,
  Box,  AccordionButton,Accordion ,AccordionIcon, AccordionItem,AccordionPanel
} from "@chakra-ui/react";
import LINEMENU from "./Funcations.Nav/OpenClose";
import {BiSearch,BiShoppingBag  } from "react-icons/bi";
import "./Drop.css"
import { Link } from "react-router-dom";
import { FaUser} from "react-icons/fa";
import { FiMenu} from "react-icons/fi";
import {CiUser} from "react-icons/ci";
import {BiArrowFromRight} from "react-icons/bi";
import Login from "../Login/Login";

export default function Navbar() {
  const [isLargerThan1144] = useMediaQuery('(min-width: 1050px)')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();


  const { isOpen: isOpen4,onOpen: onOpen4, onClose: onClose4,} = useDisclosure();
  const { isOpen: isOpen5,onOpen: onOpen5, onClose: onClose5,} = useDisclosure();
  const { isOpen: isOpen6,onOpen: onOpen6, onClose: onClose6,} = useDisclosure();
  const { isOpen: isOpen7,onOpen: onOpen7, onClose: onClose7,} = useDisclosure();
  const { isOpen: isOpen8,onOpen: onOpen8, onClose: onClose8,} = useDisclosure();
  const { isOpen: isOpen9,onOpen: onOpen9, onClose: onClose9,} = useDisclosure();
  return (
    <Box position="sticky" bg="white" top="0%">
      <Box bg="green" h="35px">
      <h1 id="Nav_heading"> 30% OFF EVERYTING WITH CODE : CYBER30 </h1>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        pt="20px"
        pb="15px"
        fontSize="23px" 
        id="LOGODIV"
      >
        {isLargerThan1144?"":<FiMenu cursor="pointer" onClick={LINEMENU}/> }
        <BiSearch cursor="pointer" />
        <img
          src="https://cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136"
          alt=""
          id="Main_Logo"
        />
        <span style={{ display: "flex", gap: "16px"}}>
          {/* <FaUser cursor="pointer" /> <BiShoppingBag cursor="pointer"  /> */}
          <Login cursor="pointer" /> <BiShoppingBag cursor="pointer"  />
        </span>
      </Box>
      <Box display="flex" justifyContent="center" id="MenuSpans">
      {isLargerThan1144 ?<> <Menu isOpen={isOpen}>
        <MenuButton
        ></MenuButton>
          <span     
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className="list_Buttons">Black Friday</span>
          <MenuList 
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            ml="-170px"
            bg="black"
            zIndex="2">
            <Box background="white" width="220%" color="black"  display="flex" mt="-6%"
            justifyContent="space-around" pt="17px"
            >
         <Box display="flex" flexDirection="column">   
           <h2 fontSize="19px"><b> SHOP BY CATEGORIES</b></h2> 
            <Link className="Links" to="/dsgh">Luxe Looks Collection</Link>
            <Link className="Links" to="/dsgh">Christmas Graphics</Link>
            <Link className="Links" to="/dsgh"> Party Shop</Link>
            <Link className="Links"to="/dsgh">Gift Cards</Link>
            <Link className="Links"to="/dsgh">Cozy Gifts</Link>
            <Link className="Links"to="/dsgh"> Gift Ideas For Her</Link>
            <Link className="Links" to="/dsgh"> Loungewear</Link>
            </Box>
            <Box display="flex" flexDirection="column">   
            <h2 fontSize="19px"><b> HOLIDAY DEALS</b></h2>
            <Link className="Links" to="/dsgh">50% Off </Link>
            <Link className="Links" to="/dsgh">50% Off Holiday Deals</Link>
            <Link className="Links" to="/dsgh">$16 Basics</Link>
            <Link className="Links" to="/dsgh">Gifts Under $100</Link>
            <Link className="Links"to="/dsgh">Gifts Under $50</Link>
            <Link className="Links"to="/dsgh"> Gifts Under $30</Link>
            </Box>
          </Box>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen2}>
        <MenuButton
        ></MenuButton>
          <span     

            onMouseEnter={onOpen2}
            onMouseLeave={onClose2}
            className="list_Buttons"  >Holiday Shop</span>
          <MenuList 
            onMouseEnter={onOpen2}
            onMouseLeave={onClose2}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            ml="-340px"
            bg="black"
            zIndex="2">
            <Box background="white" width="220%"    display="flex" mt="-3%"
            justifyContent="space-around" pt="17px"
            >
            
           <Box display="flex" flexDirection="column">    
           <h2 fontSize="19px"><b> HOLIDAY CUSTOMS</b></h2>
            <Link className="Links" to="/dsgh">Christmas</Link>
            <Link className="Links" to="/dsgh">USA</Link>
         
            </Box>
            <Box display="flex" flexDirection="column">   
            <h2 fontSize="19px"><b> GAME DAY</b></h2>
            <Link className="Links" to="/dsgh">Alanta </Link>
            <Link className="Links" to="/dsgh">UGA</Link>
        
            </Box>

            <Box display="flex" flexDirection="column"> 
            <h2 fontSize="19px"><b> FAITH COLLECTION</b></h2>    
            <Link className="Links" to="/dsgh">Alanta </Link>
            <Link className="Links" to="/dsgh">UGA</Link>
        
            </Box>
            <Box display="flex" flexDirection="column">   
            <h2 fontSize="19px"><b> CITY CUSTOMS</b></h2>  
            <Link className="Links" to="/dsgh">Nashville</Link>
            <Link className="Links" to="/dsgh">Charleston</Link>
            <Link className="Links" to="/dsgh">Savannah</Link>
            <Link className="Links" to="/dsgh">Greenville</Link>
            <Link className="Links" to="/dsgh">Dahlonega</Link>
            <Link className="Links" to="/dsgh">Nashville</Link>
            <Link className="Links" to="/dsgh">Charleston</Link>
            </Box>
            <Box display="flex" flexDirection="column"> 
            <h2 fontSize="19px"><b> CUSTOM ACCESSORIES</b></h2>  
            <Link className="Links" to="/dsgh">Custom Hats</Link>
            <Link className="Links" to="/dsgh">Stickers</Link>
            <Link className="Links" to="/dsgh">Buttons</Link>
            <Link className="Links" to="/dsgh">Koozies</Link>
            <Link className="Links" to="/dsgh">Tote Bags</Link>
            </Box>
          </Box>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen3}>
        <MenuButton
        ></MenuButton>
          <span     
            onMouseEnter={onOpen3}
            onMouseLeave={onClose3}
            className="list_Buttons"  >Clothing</span>
          <MenuList 
            onMouseEnter={onOpen3}
            onMouseLeave={onClose3}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            ml="-270px"
            bg="black"
            zIndex="2">
            <Box background="white" width="220%"    display="flex" mt="-5%"
            justifyContent="space-around" pt="17px"
            >
           <Box display="flex" flexDirection="column">    
           <h2 fontSize="19px"><b>TOPS</b></h2>  
            <Link className="Links" to="/dsgh">All Tops</Link>
            <Link className="Links" to="/dsgh">Casual Tops</Link>
            <Link className="Links" to="/dsgh">Graphic Tees</Link>
            <Link className="Links"to="/dsgh">Tunics</Link>
            <Link className="Links"to="/dsgh">Shirt & Blouses</Link>
            <Link className="Links"to="/dsgh"> Tees</Link>
            <Link className="Links" to="/dsgh"> Sweaters & Knits</Link>
            
            </Box>
            <Box display="flex" flexDirection="column">
            <h2 fontSize="19px"><b>ALL BOTTOMS </b></h2>     
            <Link className="Links" to="/dsgh">Denim</Link>
            <Link className="Links" to="/dsgh">Skirts</Link>
            <Link className="Links"to="/dsgh">Pants</Link>
            <Link className="Links"to="/dsgh">Leggings</Link>
            <Link className="Links"to="/dsgh">Shorts</Link>
            </Box>
            <Box display="flex" flexDirection="column">
            <h2 fontSize="19px"><b>DRESSES </b></h2>     
            <Link className="Links" to="/dsgh">All Dresses</Link>
            <Link className="Links" to="/dsgh">Mini Dresses</Link>
            <Link className="Links"to="/dsgh">Midi Dresses</Link>
            <Link className="Links"to="/dsgh">Maxi Dresses</Link>
            <Link className="Links"to="/dsgh">Rompers & Jumpsuits</Link>
            <Link className="Links"to="/dsgh"> Casual Dresses</Link>
            </Box>
          </Box>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen4}>
        <MenuButton
        ></MenuButton>
          <span     

            onMouseEnter={onOpen4}
            onMouseLeave={onClose4}
            className="list_Buttons"  >New Arrivals</span>
          <MenuList 
            onMouseEnter={onOpen4}
            onMouseLeave={onClose4}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            ml="-450px"
            bg="black"
            zIndex="2">
            <Box background="white" width="220%"    display="flex" mt="-4%"
            justifyContent="space-around" pt="17px"
            >
           <Box display="flex" flexDirection="column" >  
           <h2 fontSize="19px"><b> ALL New</b></h2>
            <Link className="Links" to="/dsgh">New Tops</Link>
            <Link className="Links" to="/dsgh">New Dresses</Link>
            <Link className="Links" to="/dsgh">New Bottoms</Link>
            <Link className="Links"to="/dsgh">New Rompers & Jumpsuits</Link>
            <Link className="Links"to="/dsgh">New Accesories</Link>
           
            </Box>
            <Box display="flex" flexDirection="column">
            <h2 fontSize="19px"><b> DU EXCLUSIVE</b></h2>   
            <Link className="Links" to="/dsgh">Game DAy</Link>
            <Link className="Links" to="/dsgh">Nashville</Link>
            <Link className="Links"to="/dsgh">Charleston</Link>
            <Link className="Links"to="/dsgh">Savannah</Link>
            <Link className="Links"to="/dsgh">Greenville</Link>
            <Link className="Links"to="/dsgh">Dahlonega</Link>
            <Link className="Links"to="/dsgh">Hats</Link>
            </Box>
            <Box display="flex" flexDirection="column">
            <h2 fontSize="19px"><b> SHOP BY COLLECTION</b></h2>   
            <Link className="Links" to="/dsgh">FAll Lookbook</Link>
            <Link className="Links" to="/dsgh">Fall Flannels</Link>
            <Link className="Links"to="/dsgh">Game DAy</Link>
            <Link className="Links"to="/dsgh">Matching Sets</Link>
            <Link className="Links"to="/dsgh">Babydoll Fits</Link>
            <Link className="Links"to="/dsgh">Restocks</Link>
            <Link className="Links"to="/dsgh">The Basic Shop</Link>
           
            </Box>
          </Box>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen5}>
        <MenuButton
        ></MenuButton>
          <span     

            onMouseEnter={onOpen5}
            onMouseLeave={onClose5}
            className="list_Buttons"  >Dress</span>
          <MenuList 
            onMouseEnter={onOpen5}
            onMouseLeave={onClose5}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            ml="-470px"
            bg="black"
            zIndex="2">
            <Box background="white" width="220%"    display="flex" mt="-5.5%"
            justifyContent="space-around" pt="17px"
            >
           <Box display="flex" flexDirection="column">    
           <h2 fontSize="19px"><b> ALL DRESS</b></h2>
            <Link className="Links" to="/dsgh">Sale Dresses</Link>
            <Link className="Links" to="/dsgh">Sale Rompers & Jumpsuits</Link>
            <Link className="Links" to="/dsgh"> Sale Tops</Link>
            <Link className="Links"to="/dsgh">Sale Bottoms</Link>
            <Link className="Links"to="/dsgh">Sale Shoes</Link>
            <Link className="Links"to="/dsgh"> Sale Accessories</Link>
            <Link className="Links" to="/dsgh"> Last Call Sales</Link>
            </Box>
            <Box display="flex" flexDirection="column">   
            <h2 fontSize="19px"><b> DRESS BY DISCOUNT</b></h2>
            <Link className="Links" to="/dsgh">Under $20</Link>
            <Link className="Links" to="/dsgh">Under $15</Link>
            <Link className="Links"to="/dsgh">Under $10</Link>
            <Link className="Links"to="/dsgh">Under $5 </Link>
            </Box>
          </Box>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen6} > 
          <MenuButton
        ></MenuButton>
          <span     

            onMouseEnter={onOpen6}
            onMouseLeave={onClose6}
            className="list_Buttons"  >Accessories</span>
          <MenuList 
            onMouseEnter={onOpen6}
            onMouseLeave={onClose6}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            ml="-170px"
            bg="black"
            zIndex="2"
            >
            <Box background="white" width="220%"    display="flex" mt="-8%"
            justifyContent="space-around" pt="17px"
            >
           <Box display="flex" flexDirection="column">    
           <h2 fontSize="19px"><b>ALL ACCESSORIES</b></h2>
            <Link className="Links" to="/dsgh">Hats</Link>
            <Link className="Links" to="/dsgh">Hair Accessories</Link>
            <Link className="Links" to="/dsgh">HandBags</Link>
            <Link className="Links"to="/dsgh">Bandeus & Bralettes</Link>
            <Link className="Links"to="/dsgh">Sunglasses</Link>
            {/* <Link className="Links"to="/dsgh"> Sale Accessories</Link>
            <Link className="Links" to="/dsgh"> Last Call Sales</Link> */}
            </Box>
            <Box display="flex" flexDirection="column">   
            <h2 fontSize="19px"><b> JEWELRY</b></h2>
            <Link className="Links" to="/dsgh">Necklaces</Link>
            <Link className="Links" to="/dsgh">Earings</Link>
            <Link className="Links"to="/dsgh">Bracelets</Link>
            <Link className="Links"to="/dsgh">Rings</Link>
            </Box>
          </Box>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen7}   > 
          <MenuButton
        ></MenuButton>
          <span     

            onMouseEnter={onOpen7}
            onMouseLeave={onClose7}
            className="list_Buttons"  >Shop</span>
          <MenuList 
            onMouseEnter={onOpen7}
            onMouseLeave={onClose7}
            border="none"
            h="10px"
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            mr="320px"
            bg="black"
            zIndex="2"
            >
            <Box background="white" width="220%"    display="flex" mt="-6.5%"
            justifyContent="space-around"
            pt="17px"
            >
           <Box display="flex" flexDirection="column">    
           <h2 ><b> SHOP BY CATEGORY</b></h2>
            <Link className="Links" to="/dsgh">New Markdowns</Link>
            <Link className="Links" to="/dsgh">Sale Dresses</Link>
            <Link className="Links" to="/dsgh"> Sale Rompers & Jumpsuits</Link>
            <Link className="Links"to="/dsgh">Sale Tops</Link>
            <Link className="Links"to="/dsgh">Sale Bottoms</Link>
            <Link className="Links"to="/dsgh"> Sale Shoes</Link>
            <Link className="Links" to="/dsgh"> Sale Accessories</Link>
            {/* <Link className="Links" to="/dsgh"> Last Call Sale</Link> */}
            </Box>
            <Box display="flex" flexDirection="column">   
            <h2 fontSize="19px"><b> SHOP BY PRICE</b></h2>
            <Link className="Links" to="/dsgh">Under $20</Link>
            <Link className="Links" to="/dsgh">Under $15</Link>
            <Link className="Links"to="/dsgh">Under $10</Link>
            <Link className="Links"to="/dsgh">Under $5 </Link>
            </Box>
          </Box>
          </MenuList>
        </Menu>
      <Menu isOpen={isOpen||isOpen2||isOpen3||isOpen4||isOpen5||isOpen6||isOpen7}  position="absolute" id="ide" ><MenuList  bg="white" width="580%" h="360px"m="auto" mt="160px" zIndex="1" ml="28px" border="none"></MenuList> </Menu> </>:  <Box id="NavHomeParent" > 
  <Box id="NavHam" bg="red" h="20px" w="20px"> <BiArrowFromRight id="CLOSEICON" onClick={LINEMENU}/>     <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton bg="green.200">
        <Box flex='1' textAlign='left'>
          Cyber Monday
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display="flex" flexDirection="column"  >
            <Link className="Links" to="/dsgh">New Markdowns</Link>
            <Link className="Links" to="/dsgh">Sale Dresses</Link>
            <Link className="Links" to="/dsgh"> Sale Rompers & Jumpsuits</Link>
            <Link className="Links"to="/dsgh">Sale Tops</Link>
            <Link className="Links"to="/dsgh">Sale Bottoms</Link>
            <Link className="Links"to="/dsgh"> Sale Shoes</Link>
            <Link className="Links" to="/dsgh"> Sale Accessories</Link>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton  bg="red.200">
        <Box flex='1' textAlign='left'>
         Holiday Shop
        </Box>
        <AccordionIcon />
           
      </AccordionButton>
    </h2>

    <AccordionPanel pb={4} display="flex" flexDirection="column" >
     <Link className="Links" to="/dsgh">Under $20</Link>
            <Link className="Links" to="/dsgh">Under $15</Link>
            <Link className="Links"to="/dsgh">Under $10</Link>
            <Link className="Links"to="/dsgh">Under $5 </Link>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton  bg="blue.200">
        <Box flex='1' textAlign='left'>
         EXCLUSIVE
        </Box>
        <AccordionIcon />
           
      </AccordionButton>
    </h2>

    <AccordionPanel pb={4} display="flex" flexDirection="column" >
     <Link className="Links" to="/dsgh">Under $20</Link>
     <Link className="Links"to="/dsgh">New Accesories</Link>
           
      
           {/* <Box display="flex" flexDirection="column"> */}
           <h2 fontSize="19px"><b> </b></h2>   
           <Link className="Links" to="/dsgh">Game DAy</Link>
           <Link className="Links" to="/dsgh">Nashville</Link>
           <Link className="Links"to="/dsgh">Charleston</Link>
           <Link className="Links"to="/dsgh">Savannah</Link>
           <Link className="Links"to="/dsgh">Greenville</Link>
           <Link className="Links"to="/dsgh">Dahlonega</Link>
           <Link className="Links"to="/dsgh">Hats</Link>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
      </Box>

    
      </Box>}
   
      </Box>
     
    </Box>
  );
}
