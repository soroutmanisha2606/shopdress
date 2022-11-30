// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";
// import PaymentPage from "../Component/PaymentPage/PaymentPage";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Carddetails from "../PaymentPage/Carddetails";
import { BasicUsage } from "../PaymentPage/PaymentModal";
import PaymentPage from "../PaymentPage/PaymentPage";
import PaymetSuccess from "../PaymentPage/PaymetSuccess";

import Navbar from "../TESTING/DROP";

function App() {
 
  return (
    <div className="App">
   <Footer/>
   <br/>
   <br/>
   <BasicUsage/>
   <br/>
   <br/>
   <PaymentPage/>
   <br/>
   <br/>
   <PaymetSuccess/>
  {/* {payment===true?<Carddetails/>:<PaymentPage setpayment={setpayment} payment={payment}/>} */}
      {/* {complete===true?<Successfull/>:<Carddetails complete={complete} setcomplete={setcomplete}/>} */}
    
    
    
    </div>
  );
}

export default App;
