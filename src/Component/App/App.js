// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";
// import PaymentPage from "../Component/PaymentPage/PaymentPage";
import React, { useState } from "react";
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
>>>>>>> 95503a08648944cf9b7711055914257e41be44d8

import Navbar from "../TESTING/DROP";

function App() {
 
  return (
    <div className="App">
<<<<<<< HEAD
   <BasicUsage/>
    <Practice/>
   {/* // <PaymentPage/> */}
=======
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
