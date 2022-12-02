import React, { useEffect, useState } from 'react'
import { Toast, useToast } from '@chakra-ui/react'
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
  Stack,
  Checkbox,
  useColorModeValue,
  HStack,
  InputRightElement,
  InputGroup,
  Text,
} from '@chakra-ui/react'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import CaptionCarousel from './CaptionCarousel';
import { useDispatch, useSelector } from 'react-redux';
import  {UserData}  from '../../Actions/UserData.js';
import { GoogleLogin  } from 'react-google-login';
import { gapi } from 'gapi-script';


export default function Login() {
  const clientId = "500852971355-6upomadqd80rkj5hdbqf8j7pl07q8kpq.apps.googleusercontent.com"
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  });
  const [signUpData, setsignUpData] = useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  });
  let Array=useSelector((state)=>{ return state.ShopDressReducer.User})||[]
  
  let dispatch=useDispatch();
  useEffect(()=>{
    UserData(dispatch)
    const initClient = () => {
      gapi.client.init({
      clientId: clientId,
      scope: ''
    });
 };
 gapi.load('client:auth2', initClient);
  },[])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2, } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const onSuccess = (res) => {
    onClose();
    var token = res.tokenId.slice(0,30)
    localStorage.setItem("TokenID" , token)
    localStorage.setItem("userName" ,res.profileObj.givenName)
};
const onFailure = (err) => {
    console.log('failed:', err);
};
  const handleOnchange = (e)=>{
   const {name,value} = e
   setLoginData({
    ...loginData,
    [name]:value
   })
  }
  const handleOnchange1 = (e)=>{
   const {name,value} = e
   setsignUpData({
    ...signUpData,
    [name]:value
   })
  }

  const login = async ()=>{
    const match = await Array.filter((ele)=>{
      return ele.email==loginData.email && ele.password==loginData.password
    })
    if(match.length===0){
     toaster('error','Wrong Credentials')
    }else{
      toaster('success','Login Successfully')
      onClose()
    }
      
  }
  const signUp = ()=>{
    fetch("https://cartikkg-shop-dress-up-new.onrender.com/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(signUpData)
    }).then( toaster('success','Account Created Successfully') ,onClose2(),onOpen())
  }

  const toaster = (type,msg)=>{
    toast({
      title: msg,
      status: type,
      isClosable: true,
      position:'top-right'
    })
  }

  return (
    <>
      <Button  className="loginbtn" w={'90%'} borderRadius={'none'} py={'2px'} bgGradient='linear(to-r, green.200, green.500)'  onClick={onOpen} border="none" bg="white" paddingBottom="6px" >LOGIN</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={'4xl'}
        
      >
        <ModalOverlay />
        <ModalContent>
        <Box >
          <ModalHeader className='modalHeader' fontSize={'4xl'}>Login to dressUp</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex justifyContent='space-between'>
            <Box className='Carousel__box'>
              <CaptionCarousel/>
              </Box>
            <Box rounded={20} w={400} p={4}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel >Email address</FormLabel>
                  <Input className='inputbdr' type="email" name='email'  onChange={(event)=>{handleOnchange(event.target)}}/>
                </FormControl>
                {/* <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input className='inputbdr' type="password" name='password' onChange={(event)=>{handleOnchange(event.target)}} />
                </FormControl> */}
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input className='inputbdr' name='password' onChange={(event)=>{handleOnchange(event.target)}} type={showPassword1 ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword1((showPassword) => !showPassword)
                        }>
                        {showPassword1 ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button onClick={login}
                   bgGradient='linear(to-r, green.200, green.500)'
                    color={'white'}
                    _hover={{
                      bgGradient:'linear(to-r, green.300, green.600)'
                    }}>
                    Sign in
                  </Button>
                  <GoogleLogin
                      clientId={clientId}
                      buttonText="Sign in with Google"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true}
                  />
                  <Stack pt={6}>
                    <Text align={'center'}>
                      Don't have a account? <Link onClick={() => {
                        onClose(); setTimeout(() => {
                          onOpen2()
                        }, 100);
                      }} color={'blue.400'}>Sign Up</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3}>
              Login
            </Button>
            <Button onClick={onOpen2}>Cancel</Button> */}
            <Box>

            </Box>
          </ModalFooter>
        </Box>
        </ModalContent>
      </Modal>




      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen2} onClose={onClose2} size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <Box >
          <ModalHeader fontSize={'4xl'} className='modalHeader'>Create Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex justifyContent='space-between'>
            <Box  className='Carousel__box'>
              <CaptionCarousel/>
              </Box>
            <Box rounded={20} w={450} p={4}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input className='inputbdr' type="text" name='fname' onChange={(event)=>{handleOnchange1(event.target)}} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input className='inputbdr' type="text" name='lname' onChange={(event)=>{handleOnchange1(event.target)}}/>
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input className='inputbdr' type="email" name='email' onChange={(event)=>{handleOnchange1(event.target)}} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input className='inputbdr' name='password' onChange={(event)=>{handleOnchange1(event.target)}} type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                  onClick={signUp}
                    loadingText="Submitting"
                    size="lg"
                    bgGradient='linear(to-r, green.200, green.500)'
                    color={'white'}
                    _hover={{
                      bgGradient:'linear(to-r, green.300, green.600)'
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link onClick={() => {
                      onClose2(); setTimeout(() => {
                        onOpen()
                      }, 100);
                    }} color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>





    </>
  )

}
