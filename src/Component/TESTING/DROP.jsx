import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Container,
  Box,
} from "@chakra-ui/react";
import "./Drop.css"
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBasket, FaSearch } from "react-icons/fa";
// import { useDisclosure } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Login from "../Login/Login";

export default function Navbar() {
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
    <Box bg="grey">
      <Box bg="green.800" h="35px">
        {" "}
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        pt="20px"
        pb="15px"
        fontSize="26px" 
      >
        <FaSearch />{" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136"
          alt=""
        />{" "}
        <span style={{ display: "flex", gap: "16px"}}>
          {/* <FaUser  /> <FaShoppingBasket /> */}
          <Login  /> <FaShoppingBasket />
        </span>
      </Box>
      <Box display="flex" justifyContent="center" id="MenuSpans">
        <Menu isOpen={isOpen}>
          <MenuButton>
            
          </MenuButton>
          <span 
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className="list_Buttons" >Accessories</span>
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}  border="none"
            width="100%"
            position="absolute"         
            top="-8px"   
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            
            bg="grey">
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen2}>
          <MenuButton
          
          >
          
          </MenuButton>
          <span 
            onMouseEnter={onOpen2}
            onMouseLeave={onClose2}
            className="list_Buttons" >Accessories</span>
          <MenuList
            onMouseEnter={onOpen2}
            onMouseLeave={onClose2}
            border="none"
            width="100%"
            position="absolute"         
            top="-8px"   
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            
            bg="grey"
          >
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen3}>
          <MenuButton
       
          >
           
          </MenuButton>
          <span 
            onMouseEnter={onOpen3}
            onMouseLeave={onClose3}
            className="list_Buttons" >Accessories</span>
          <MenuList
            onMouseEnter={onOpen3}
            onMouseLeave={onClose3}
            w="500px"
            border="none"
          >
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen4}>
          <MenuButton>
           
          </MenuButton>
          <span 
            onMouseEnter={onOpen4}
            onMouseLeave={onClose4}
            className="list_Buttons" >Accessories</span>
          <MenuList
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onMouseEnter={onOpen4}
            onMouseLeave={onClose4}
            color="green"
            border="none"
            width="100%"
            position="absolute"         
            top="-8px"   
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            
            bg="grey"
          >
            <MenuItem textAlign="center" width="fit-content" w="200px">
              Menu Item 1
            </MenuItem>
            <MenuItem _hover={{ bg: "green", color: "white" }}>
              Menu Item 2
            </MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen5}>
          <MenuButton>
           
          </MenuButton>
          <span 
            onMouseEnter={onOpen5}
            onMouseLeave={onClose5}
            className="list_Buttons" >Accessories</span>
          <MenuList
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onMouseEnter={onOpen5}
            onMouseLeave={onClose5}
            color="green"
            border="none"
            width="100%"
            position="absolute"         
            top="-8px"   
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            
            bg="grey"
          >
            <MenuItem textAlign="center" width="fit-content" w="200px">
              Menu Item 1
            </MenuItem>
            <MenuItem _hover={{ bg: "green", color: "white" }}>
              Menu Item 2
            </MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem>Menu Item 3</MenuItem>
          </MenuList>
        </Menu>
        <Menu isOpen={isOpen6}>
          <MenuButton
        ></MenuButton>
          <span     

            onMouseEnter={onOpen6}
            onMouseLeave={onClose6}
            className="list_Buttons"  >Holiday Shop</span>
          <MenuList 
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onMouseEnter={onOpen6}
            onMouseLeave={onClose6}
            color="green"
            // bg="white"
            border="none"
            width="100%"
            position="absolute"         
            top="-8px"   
            fontSize="14px"
            gap="0"
            borderRadius="0%"
            
            bg="grey"
           
          >
            
            <Link className="Links" to="/dsgh"> sfsadg</Link>
            <Link className="Links" to="/dsgh"> sfsadg</Link>
            <Link className="Links"to="/dsgh"> sfsadg</Link>
            <Link className="Links"to="/dsgh"> sfsadg</Link>
            <Link className="Links"to="/dsgh"> sfsadg</Link>
            <Link className="Links" to="/dsgh"> sfsadg</Link>
          
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
