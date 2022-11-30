import React, { useEffect } from 'react'
import "./Cart.css"
import CARTMENU,{IncreaseQTY, DecreaseQTY} from './Cartt'
import { bindActionCreators } from 'redux';
import {Box} from "@chakra-ui/react";

import {FiArrowRightCircle,FiMinus,FiPlus} from "react-icons/fi";
import { GetCartData,GetPatchData,GetDeleteData } from '../../Actions/CartAction';
import { useDispatch , useSelector} from 'react-redux';

export default function Cart() {
  let Array=useSelector((state)=>{ return state.ShopDressReducer.Cart})||[]
  
  let dispatch=useDispatch();

  useEffect(()=>{
    GetCartData(dispatch);
  //  let Action= bindActionCreators(GetCartData,)
  //  Action();
  },[])
     
  return (
    <div >
      {/* {console.log(Array)} */}
    <Box id="CARTDI">
        <Box id="CARTDIV_INNER"> <Box bg="white" display="flex" justifyContent="space-around" h="40px" fontSize="25px" alignItems="center"> CART <FiArrowRightCircle onClick={CARTMENU} cursor="pointer" fontSize="25px"/>
        </Box>
        <Box id="cartItems" >
          <ul>
           {
            Array.map((el,index)=>{
              return <li key={el.id} style={{display:"flex", width:"100%", borderBottom:"1.5px solid black", paddingRight:"10px" , marginBottom:"10px", paddingBottom:"15px" }}> 
                         
                         <img src={el.image_1} style={{width:"35%",height:"150px", marginRight:"18px"}} />
                         <span style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingBottom:'14px'}}>
                         <p style={{fontSize:"16px", fontFamily:"Poppins, sans-serif" , fontWeight:500 }}> {el.name}</p><Box style={{display:"flex", justifyContent:"space-between"}}><span><b>Size</b> : {el.size}</span>  <span><b>Price</b>  : $ {el.price}</span></Box>
                         <Box display="flex" justifyContent="space-between" alignItems="center">
                         
                         <Box display="flex" gap="7px" bg="black" alignItems="center" fontSize="21px" border="2px" w="83px" color="white" justifyContent="space-around" ><button onClick={()=>{DecreaseQTY(el.id,dispatch)}} style={{border:"none", padding:"0"}}  > -</button><span>{el.Qty} </span> <button onClick={()=>{IncreaseQTY(el.id,dispatch,Array)}}>+</button> </Box>
                         <button style={{background:"green", color:"white", borderRadius:"2px", padding:'1px'}} onClick={()=>{GetDeleteData(el.id, index,Array,dispatch)}}>REMOVE</button> </Box></span>
                     </li>
            })
           }
           </ul>
        </Box>
        <Box textAlign="center" borderTop="1px solid green">
       
           <Box className='CartCPNYImg' bg="black" color="white" fontSize="18px" position="absolute" width="90%" right="4%" bottom="2%">Proceed</Box> 
             {/* <hr/> */}
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"17px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"500"}} > <span>MRP : </span> <span>$ 100 </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"14px", paddingLeft:"14px", paddingRight:"14px", color:"red", fontWeight:"400"}} > <span>Product Discount : </span> <span>-  $ 30 </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"14px", paddingLeft:"14px", paddingRight:"14px", color:"green", fontWeight:"600"}} > <span>Hooray! You saved -  $ 30 on Product Discount</span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"18px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"600"}} > <span>Grand Total : </span> <span>$ 100 </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"15px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"600"}} > <span>Apply Coupon</span> <span><input style={{border:"1px solid green", color:"green", paddingLeft:"12px", fontWeight:"500"}} type="text" placeholder='Enter Coupon'/></span>  </span>
            
        </Box> 
       </Box>
    </Box>

    </div>
  )
}
