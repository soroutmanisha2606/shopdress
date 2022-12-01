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
<<<<<<< HEAD
import Practice from "../PaymentPage/practice";
=======
import ProductDetails from "../ProductDetails/ProductDetails";
<<<<<<< HEAD
import ProductPages from "../ProductPages/ProductPages"
=======
>>>>>>> 95503a08648944cf9b7711055914257e41be44d8
>>>>>>> 5f1a53afb32f4db937ad62b9fe9392e94770f34d

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../TESTING/DROP";

function App() {
 
  return (
    <div className="App">

<Navbar/>
<Cart/>
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
   <ProductDetails/>
  
  {/* {payment===true?<Carddetails/>:<PaymentPage setpayment={setpayment} payment={payment}/>} */}
      {/* {complete===true?<Successfull/>:<Carddetails complete={complete} setcomplete={setcomplete}/>} */}
    
    
    
>>>>>>> 95503a08648944cf9b7711055914257e41be44d8
    </div>
  );
}

export default App;
