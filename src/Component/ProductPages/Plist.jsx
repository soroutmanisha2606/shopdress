import React, { useEffect, useState } from 'react';
import dress from "./dress.json";

const Plist = () => {

const [state,setState] = useState([]);
useEffect(()=>{
fetch('https://cartikkg-shop-dress-up-new.onrender.com/Product_Data')
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
  setState(data);
})

},[])



function sold(){
  let select = document.getElementById("select").value;
  console.log("select")
  // if(select==="" || select ==="" || select === "manufacture_date")
  fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?_sort=${select}&_order=asc`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data);
  setState(data);
  Display();
})
}

function Display(){
  return  <div className='list-item'>
  {state.map((e)=>{
    return <>
    <div>
  <div  className="image-box">
    <div className="imageshow">
    <img src={e.image_1} alt="" />
    <div className="imagehide">
    <img src={e.image_2} className="hover-img" alt="" />
<a href="" className='quickView'>Quick</a>
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


  // console.log(dress);
  return (<>
  <div className='main-box-a'>
    <div className='select-box-a'>
<p>{state.length} Products</p>

      <select id='select' onChange={sold} > 
        <option >Sort</option>
        <option value="sold">Best Selling</option>
        <option value="name">Alphabetically, A-Z</option>
        <option value="">Alphabetically, Z-A</option>
        <option value="">Price, High to Low</option>
        <option value="price">Price, Low to High</option>
        <option value="manufacture_date">Date, Old to New</option>
        <option value="">Date, New to Old</option>
        </select>
    </div>

   <Display/>



    </div>
  </>
  )
}

export default Plist;