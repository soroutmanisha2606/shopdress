import React from 'react';
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



const Sidebar = () => {
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
     <input type="checkbox" value="true" /> In Stock 
     <input type="checkbox" value="false" /> Not In Stock
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


    <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
  <RangeSliderTrack bg='#f2f2f2.100'>
    <RangeSliderFilledTrack bg='black' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={4} index={0} />
  <RangeSliderThumb boxSize={4} index={1} />
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>


</Accordion>

    </div>
  )
}

export default Sidebar;