import React from 'react';
import dress from "./dress.json";

const Plist = () => {



  console.log(dress);
  return (<>
  <div className='main-box-a'>
    <div className='select-box-a'>
<p>{dress.length} Products</p>

      <select > 
        <option value="">Sort</option>
        <option value="">Best Selling</option>
        <option value="">Alphabetically, A-Z</option>
        <option value="">Alphabetically, Z-A</option>
        <option value="">Price, High to Low</option>
        <option value="">Price, Low to High</option>
        </select>
    </div>

    <div className='list-item'>
    {dress.map((e)=>{
      return <>
      <div>
    <div  className="image-box">
      <div className="imageshow">
      <img src={e.image_1} alt="" />
      <div className="imagehide">
      <img src={e.image_2} className="hover-img" alt="" />
      </div>
      </div>
    </div>

    <div>

      <p>{e.name}</p>
      <p>$ {e.price}</p>
    </div>

      </div>
      </>
    })}

    </div>



    </div>
  </>
  )
}

export default Plist;