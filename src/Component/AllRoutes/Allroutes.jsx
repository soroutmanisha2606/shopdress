import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carddetails from '../PaymentPage/Carddetails'
import { BasicUsage } from '../PaymentPage/PaymentModal'
import PaymentPage from '../PaymentPage/PaymentPage'
import PaymetSuccess from '../PaymentPage/PaymetSuccess'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PaymentPage/>}/>
            <Route path='/carddetails' element={<BasicUsage/>}/>
            <Route path='/success' element={<PaymetSuccess/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes