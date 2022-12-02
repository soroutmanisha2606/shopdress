import React, { useEffect } from 'react';
import "../Sidebar/sidebar.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { useState  } from 'react';
import { Display } from '../Plist';


const Sidebar = ({filterCheckbox,filterCheckbox2,SizeL,SizeM,SizeS}) => {
  // let [state,setState] =useState([]);

// useEffect(()=>{

//   fetch('https://cartikkg-shop-dress-up-new.onrender.com/Product_Data')
//   .then((res)=>res.json())
//   .then((res)=> setState(res))
//   .catch((err)=> console.log(err));
// },[])




  return (
    <div className='a-sidebar'>
     <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         A V A I L A B I L I T Y
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div>

     <input type="checkbox" id='inp1' onChange={filterCheckbox}/> In Stock 
      </div>
      <div>

     <input type="checkbox" id='inp2' onChange={filterCheckbox2} /> Not In Stock
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          P R I C E
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

  <div className='priceFlex'><p>$ 0</p> <p>$ 500</p></div>
    <RangeSlider defaultValue={[120, 240]} id="slide" min={0} max={300} step={30}>
  <RangeSliderTrack bg='gray.100'>
    <RangeSliderFilledTrack bg='black' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={4} index={0} bg="black" />
  <RangeSliderThumb boxSize={4} index={1} bg="black" />
</RangeSlider>


    </AccordionPanel>
  </AccordionItem>

  <AccordionItem   className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          C O L O R
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          S I Z E
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>

     <input type="checkbox" onChange={SizeL}/> Large
      </div>
      <div>

     <input type="checkbox"  onChange={SizeM}/> Medium
      </div>
      <div>

     <input type="checkbox"  onChange={SizeS}/> Small
      </div>
    </AccordionPanel>
  </AccordionItem>


</Accordion>

    </div>
  )
}

export default Sidebar;