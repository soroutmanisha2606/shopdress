import React,{useState,useEffect} from 'react'
import "./ProductPages.css"
// import

import Plist from './Plist';
import Sidebar from './Sidebar/Sidebar';

export default function ProductPages() {
  const [state,setState] = useState([]);
  const [fixed , setFixed] = useState([]);
useEffect(()=>{
  fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data`).then((res)=>res.json()).then((data)=>{
    // console.log(data);
    setFixed(data);
  })
},[])

console.log(document.getElementById("slide"))

  function filterCheckbox2(e){
    // console.log(check);
    let newData = [];
  
    const {name,checked} = e.target;
  
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    if(inp1.checked==true && inp2.checked==true){
      setState(fixed);
    } // console.log(checked)
    
    else if(e.target.checked==true){
      fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?stock=false`).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setState(data);
      })
    }else{
      fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data`)
      .then((res)=>res.json())
      .then((data)=>{
        // console.log(data);
        setState(data);
    })
  }
  }

  function filterCheckbox(e){
    // console.log(check);
      // let newData = [];
      let inp1 = document.getElementById("inp1");
      let inp2 = document.getElementById("inp2");
      if(inp1.checked==true && inp2.checked==true){
        setState(fixed);
      }

     else if(e.target.checked==true){
        fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?stock=true`).then((res)=>res.json()).then((data)=>{
          console.log(data);
          setState(data);
        })
      }else{
        setState(fixed);
      }
  }



  function SizeL(e){
    console.log(e.target.checked);
  let temp =[];
   if(e.target.checked==true){
    state.map((ele)=>{
      if(ele.size==="L"){
        
      temp.push(ele);
    }
    console.log(temp)
  })
  setState(temp);
    }else{
    setState(fixed);
    }
  }

  
  function SizeM(e){
    console.log(e.target.checked);
  let temp =[];
   if(e.target.checked==true){
    state.map((ele)=>{
      if(ele.size==="M"){
        
      temp.push(ele);
    }
    console.log(temp)
  })
  setState(temp);
    }else{
    setState(fixed);
    }
  }

    
  function SizeS(e){
    console.log(e.target.checked);
  let temp =[];
   if(e.target.checked==true){
    state.map((ele)=>{
      if(ele.size==="S"){
        
      temp.push(ele);
    }
    console.log(temp)
  })
  setState(temp);
    }else{
    setState(fixed);
    }
  }
  
function sold(){
  let select = document.getElementById("select").value;
  // console.log("select")
 if(select==="za"){
  select = "name";
  fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?_sort=${select}&_order=desc`)
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data);
    setState(data);
    // Display(state);
  })
 }else if(select==="no"){
  select = "manufacture_date";

  fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
  // Display(state);
})

  
 }else if(select==="hl"){
  select = "price";

  fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
  // Display(state);
})
 }else{
  fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?_sort=${select}&_order=asc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
  // Display(state);
})


 }

}

  
  return (
    <>
    {/* <div className='blackF'>
               {/* <h3>Black Friday</h3> */}
          {/* </div> */}
    <div className='a-Main-Box'>
          
      <div  className='a-side-nav'> <Sidebar filterCheckbox={filterCheckbox} filterCheckbox2={filterCheckbox2} SizeL={SizeL} SizeM={SizeM} SizeS={SizeS}/></div>      
      <div className="a-list-items"><Plist sold={sold} array={state} setState={setState} /></div>
     
    </div>
    </>
  )
}
