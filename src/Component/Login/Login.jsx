import React, { useState } from 'react'
import "./Login.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [temp,setTemp]=useState(false)

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const secModal = ()=>{
    onClose()
    setTimeout(() => {
      setTemp(!temp)
    }, 100);
  }
  return (
    <>
      <Button onClick={onOpen}><FaUser /></Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>EMAIL</FormLabel>
              <Input placeholder='Enter Email' />
            </FormControl>

            <FormControl mt={4}>
              <Flex>
                <Box>
                <FormLabel>PASSWORD</FormLabel>
                </Box>
                <Spacer />
                <Box >
                <Link style={{color:'#3182ce'}}>Forgot Password?</Link>
                </Box>
              </Flex>
              <Box>
              </Box>
              <Input placeholder='Enter Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Login
            </Button>
            <Button onClick={secModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={temp===true}
        onClose={secModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Signup</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>EMAIL</FormLabel>
              <Input placeholder='Enter Email' />
            </FormControl>

            <FormControl mt={4}>
              <Flex>
                <Box>
                <FormLabel>PASSWORD</FormLabel>
                </Box>
                <Spacer />
                <Box >
                <Link style={{color:'#3182ce'}}>Forgot Password?</Link>
                </Box>
              </Flex>
              <Box>
              </Box>
              <Input placeholder='Enter Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Login
            </Button>
            <Button onClick={secModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




      
    </>
  )

}
