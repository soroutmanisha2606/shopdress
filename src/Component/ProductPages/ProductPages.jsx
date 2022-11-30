import React from 'react'
import "./ProductPages.css"

import Plist from './Plist';
import Sidebar from './Sidebar/Sidebar';

export default function ProductPages() {
  return (
    <div className='a-Main-Box'>
      <div  className='a-side-nav'> <Sidebar/></div>      
      <div className="a-list-items"><Plist/></div>
     
    </div>
  )
}
