// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Button,
// } from '@chakra-ui/react'
// import { useEffect } from 'react'
// import Carddetails from './Carddetails'
// import PaymentPage from './PaymentPage'
// export function BasicUsage() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   useEffect(()=>{
//     onOpen()
//   },[])
//   return (
//     <>
//       <Button onClick={onOpen}></Button>

//       <Modal isOpen={isOpen} onClose={onClose} size={''}>
//         <ModalOverlay />
//         <ModalContent  width={"800px"} >
//           {/* <ModalHeader>Modal Title</ModalHeader> */}
//           <ModalCloseButton />
//           <ModalBody height={"800px"}>
//               <Carddetails  w={500} m="auto"  />
//           </ModalBody>

//           {/* <ModalFooter>
//             <Button colorScheme='blue' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost'>Secondary Action</Button>
//           </ModalFooter> */}
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }