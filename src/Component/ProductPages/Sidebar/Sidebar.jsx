import React from 'react';
import "../Sidebar/sidebar.css"

const Sidebar = () => {
  return (
    <div className='a-sidebar'>
      <div>
      <button>A V A I L A B I L I T Y</button> <br />
      <span><input type="checkbox" value="in stock"/> In Stock </span><br />
      <span><input type="checkbox" value="not in stock"/> Not in Stock </span>
      </div>

      <div>
        <button>P R I C E</button>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
       <input type="range" className='range-min' min="0" max="52"/>
       <input type="range" className='range-max' min="0" max="52" />
        </div>
      </div>


    <div>
      <button>C O L O R</button>
    </div>


    <div>
      <button>S I Z E</button>
    </div>
    

    </div>
  )
}

export default Sidebar;