// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";
// import PaymentPage from "../Component/PaymentPage/PaymentPage";
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Carddetails from "../PaymentPage/Carddetails";
import { BasicUsage } from "../PaymentPage/PaymentModal";
import PaymentPage from "../PaymentPage/PaymentPage";
import PaymetSuccess from "../PaymentPage/PaymetSuccess";
import Practice from "../PaymentPage/practice";
import ProductDetails from "../ProductDetails/ProductDetails";

import ProductPages from "../ProductPages/ProductPages"

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../TESTING/DROP";

function App() {
 
  return (
    <div className="App">

<ChakraProvider>

<Navbar/>
<Cart/>
<ProductPages/>
</ChakraProvider>
   {/* <Footer/> */}
   {/* <Login/>
    <br/>
   <br/>
   <BasicUsage/>
   <br/>
   <br/>




   <PaymentPage/>
   <br/>
   <br/>
   <PaymetSuccess/>  */}
   {/* <ProductDetails/> */}
  
  {/* {payment===true?<Carddetails/>:<PaymentPage setpayment={setpayment} payment={payment}/>} */}
      {/* {complete===true?<Successfull/>:<Carddetails complete={complete} setcomplete={setcomplete}/>} */}
    
    
    

    </div>
  );
}

export default App;
