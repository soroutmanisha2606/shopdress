import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


export function Display(state){
  return  <div className='list-item'>
  {state.map((e)=>{
    return <>
    <div>
  <div  className="image-box">
    <div className="imageshow">
    <img src={e.image_1} alt="" />
    <div className="imagehide">
    <img src={e.image_2} className="hover-img" alt="" />
<Link to="/product" className='quickView'>Quick View</Link>
    </div>
    </div>
  </div>

  <div className='a-text-details'>

    <p>{e.name}</p>
    <p>$ {e.price}</p>
  </div>

    </div>
    </>
  })}

  </div>
}

const Plist = ({array,sold,setState}) => {

// const [state,setState] = useState([]);
useEffect(()=>{
fetch('https://cartikkg-shop-dress-up-new.onrender.com/Product_Data')
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
})

},[])








  // console.log(dress);
  return (<>
  <div className='main-box-a'>
    <div className='select-box-a'>
<p>{array.length} Products</p>

      <select id='select' onClick={sold}> 
        <option >Sort</option>
        <option value="sold">Best Selling</option>
        <option value="name">Alphabetically, A-Z</option>
        <option value="za">Alphabetically, Z-A</option>
        <option value="hl">Price, High to Low</option>
        <option value="price">Price, Low to High</option>
        <option value="manufacture_date">Date, Old to New</option>
        <option value="no">Date, New to Old</option>
        </select>
    </div>

 <div className='list-item'>
  {array.map((e)=>{
    return <>
    <div>
  <div  className="image-box">
    <div className="imageshow">
    <img src={e.image_1} alt="" />
    <div className="imagehide">
    <img src={e.image_2} className="hover-img" alt="" />
     <Link to={`/Productspage/${e.id}`} className='quickView'>Quick View</Link>
    </div>
    </div>
  </div>

  <div className='a-text-details'>

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