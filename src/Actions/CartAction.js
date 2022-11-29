
export  const GetCartData = ()=>{

    return(dispatch,getState)=>{
       async function GetData(){
        let res = await fetch('https://cartikkg-shop-dress-up-new.onrender.com/cart');
        let data= await res.json();
    
        dispatch({
            type:"GETCARTDATA",
            payload:data
        })
       }
       GetData()
        
    }

}