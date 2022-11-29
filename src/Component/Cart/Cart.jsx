import React, { useEffect } from 'react'
import "./Cart.css"
import CARTMENU,{IncreaseQTY, DecreaseQTY} from './Cartt'
import { bindActionCreators } from 'redux';
import {Box} from "@chakra-ui/react";

import {FiArrowRightCircle,FiMinus,FiPlus} from "react-icons/fi";
import { GetCartData } from '../../Actions/CartAction';
import { useDispatch , useSelector} from 'react-redux';

export default function Cart() {
  let Array=useSelector((state)=>{ return state.ShopDressReducer.Cart})||[]
  
  let dispatch=useDispatch();
//  let Array=[
//   {
//     id:"1",
//     name: "BHLDN Freya Satin Charmeuse Dress",
//     image_1:
//       "https://images.urbndata.com/is/image/Anthropologie/62549456_031_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
//     image_2:
//       "https://images.urbndata.com/is/image/Anthropologie/62549456_031_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=540",
//     image_3: "image.png",
//     price: "220.0",
//   }
//  ]
  useEffect(()=>{
   let Action= bindActionCreators(GetCartData,dispatch)
   Action();
  },[])
     
  return (
    <div >
      {/* {console.log(Ans)} */}
    <Box id="CARTDI">
        <Box id="CARTDIV_INNER"> <Box bg="white" display="flex" justifyContent="space-around" h="40px" fontSize="25px" alignItems="center"> CART <FiArrowRightCircle onClick={CARTMENU} cursor="pointer" fontSize="25px"/>
        </Box>
        <Box id="cartItems" >
          <ul>
           {
            Array.map((el)=>{
              return <li key={el.id} style={{display:"flex", width:"100%", border:"1px solid black" }}> 
                         
                         <img src={el.image_1} style={{width:"35%"}} />
                         <span style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                         <h3 style={{fontSize:"24px", fontFamily:"Poppins, sans-serif"  }}> {el.name}</h3>
                         <h3>$ {el.price}</h3>
                         <Box display="flex" gap="7px" bg="black" alignItems="center" fontSize="21px" border="2px" w="80px" color="white" ><FiMinus cursor="pointer" onClick={DecreaseQTY}/>1<FiPlus cursor="pointer" onClick={IncreaseQTY}/></Box></span>
                     </li>
            })
           }
           </ul>
        </Box>
        <Box>
           <Box className='CartCPNYImg' bg="black" color="white" fontSize="18px" position="absolute" width="90%" right="4%" bottom="2%">GO TO CART</Box> 
             {/* <hr/> */}
            <h2 style={{textAlign:"center",fontSize:"25px"}} >  SUB TOTAL : 100 Rs.  </h2>
            {/* SUB TOTAL : 100 Rs.  */}
        </Box> 
       </Box>
    </Box>

    </div>
  )
}
