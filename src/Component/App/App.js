// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";
// import PaymentPage from "../Component/PaymentPage/PaymentPage";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Carddetails from "../PaymentPage/Carddetails";
import { BasicUsage } from "../PaymentPage/PaymentModal";
import PaymentPage from "../PaymentPage/PaymentPage";
import { Successfull } from "../PaymentPage/successfull";
import Navbar from "../TESTING/DROP";

function App() {
  const [complete,setcomplete]=React.useState(false);
  const [payment,setpayment]=useState(false);
  return (
    <div className="App">
     {/* <Navbar/> */}
     {/* <Navbar/> */}
   <BasicUsage/>
    {/* <PaymentPage/>
<br/>
<br/>
<br/>
    <Carddetails/>
    <br/>
<br/>
<br/>
    <Successfull/>
    <br/> */}
<br/>
<br/>
  {/* {payment===true?<Carddetails/>:<PaymentPage setpayment={setpayment} payment={payment}/>} */}
      {/* {complete===true?<Successfull/>:<Carddetails complete={complete} setcomplete={setcomplete}/>} */}
    
     <br/>
     <br/>
    
    </div>
  );
}

export default App;
