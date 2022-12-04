import React,{useState,useEffect} from 'react'
import "./ProductPages.css"
// import

import Plist from './Plist';
import Sidebar from './Sidebar/Sidebar';
import { useRef } from 'react';
import { data } from 'jquery';

export default function ProductPages() {
  const [state,setState] = useState([]);
  const [fixed , setFixed] = useState([]);
  const [price,setPrice] = useState([0,500]);
useEffect(()=>{
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data`).then((res)=>res.json()).then((data)=>{
    // console.log(data);
    setFixed(data);
    setState(data);
    scrollToTop();
  })
},[])

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};


  function filterCheckbox2(e){
    // console.log(check);
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    if(inp1.checked==true && inp2.checked==true){
      setState(fixed);
    } // console.log(checked)
    
    else if(e.target.checked==true){
      fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?stock=false`).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setState(data);
      })
    }else{
      fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data`)
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
        fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?stock=true`).then((res)=>res.json()).then((data)=>{
          console.log(data);
          setState(data);
        })
      }else{
        setState(fixed);
      }
  }



  function SizeL(e){
    // let s= document.getElementById("ssize");
  document.getElementById("msize").checked = false;
 document.getElementById("ssize").checked = false;
// if(s.checked===true && m.checked ===true && l.checked===true){
//   setState(fixed);
// }
//  if(s.checked===true && m.checked){
//   setState(fixed);
// }
    // console.log(e.target.checked);
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

    document.getElementById("ssize").checked = false;
 document.getElementById("lsize").checked = false;
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
    document.getElementById("msize").checked = false;
    document.getElementById("lsize").checked = false;
    // console.log(e.target.checked);
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
  




function handlePriceRange(val){
// console.log(val);
fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?price_gte=${val[0]}&price_lte=${val[1]}`).then((res)=>res.json()).then((data)=>{
  // console.log(data);
  setState(data);
})
}


function reset(){
  setState(fixed);
  document.getElementById("inp2").checked = false;
  document.getElementById("inp1").checked = false;
  document.getElementById("ssize").checked = false;
  document.getElementById("msize").checked = false;
  document.getElementById("lsize").checked = false;
  
}


function red(){
    fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=red`).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setState(data);
    })
}

// let greencolor = useRef(false);
function green(){
    fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=green`).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setState(data);
    })
}

function gray(){
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=gray`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    setState(data);
  })
}
function black(){
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=black`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    setState(data);
  })
}

function white(){
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=white`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    setState(data);
  })
}

function sold(){
  let select = document.getElementById("select").value;
  // console.log("select")
 if(select==="za"){
  select = "name";
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
  .then((res)=>res.json())
  .then((data)=>{
    // console.log(data);
    setState(data);
    // Display(state);
  })
 }else if(select==="no"){
  select = "manufacture_date";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
  // Display(state);
})

  
 }else if(select==="hl"){
  select = "price";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
  // Display(state);
})
 }else{
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=asc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);
  // Display(state);
})


 }

}

function sorting() {
  let selected = document.getElementById("select").value;

  // console.log("sorting" + selected);
  // console.log("sorting" + veg);
  // if (selected === "sort") {
  //   setState(data);
  // }
  if (selected === "price") {
    state.sort(function (a, b) {
      // let aa = Number(a.price.replace("₹", ""));
      // let bb = Number(b.price.replace("₹", ""));
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
    setState(state);
  }
  if (selected === "hl") {
    state.sort(function (a, b) {
      // let aa = Number(a.price.replace("₹", ""));
      // let bb = Number(b.price.replace("₹", ""));
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
    setState(state);
  }
  if (selected === "sold") {
    state.sort(function (a, b) {
      if (a.sold > b.sold) return -1;
      if (a.sold< b.sold) return 1;
      return 0;
    });
    setState(state);
  }
  if (selected === "name") {
    state.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    setState(state);
  }
  if (selected === "za") {
    state.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    setState(state);
  }

  if (selected === "manufacture_date") {
    state.sort(function (a, b) {
      if (a.manufacture_date > b.manufacture_date) return 1;
      if (a.manufacture_date < b.manufacture_date) return -1;
      return 0;
    });
    setState(state);
  }
  if (selected === "no") {
    state.sort(function (a, b) {
      if (a.manufacture_date < b.manufacture_date) return 1;
      if (a.manufacture_date > b.manufacture_date) return -1;
      return 0;
    });
    setState(state);
  }
}
  
  
  return (
    <>
    {/* <div className='blackF'>
               {/* <h3>Black Friday</h3> */}
          {/* </div> */}
    <div className='a-Main-Box'>
          
      <div  className='a-side-nav'> <Sidebar filterCheckbox={filterCheckbox} filterCheckbox2={filterCheckbox2} SizeL={SizeL} SizeM={SizeM} SizeS={SizeS} handlePriceRange={handlePriceRange} reset={reset} red={red} green={green} gray={gray} black={black} white={white} /></div>      
      <div className="a-list-items"><Plist sorting={sorting} sold={sold} array={state} setState={setState} /></div>
     
    </div>
    </>
  )
}
