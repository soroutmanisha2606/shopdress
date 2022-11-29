import React from 'react';
import dress from "./dress.json";

const Plist = () => {
  console.log(dress);
  return (<>
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
  </>
  )
}

export default Plist;