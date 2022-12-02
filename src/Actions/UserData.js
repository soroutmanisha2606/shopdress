export  const UserData = (dispatch)=>{

    // return(dispatch,getState)=>{
       async function GetData(){
        let res = await fetch('https://cartikkg-shop-dress-up-new.onrender.com/users');
        let data= await res.json();
    
        dispatch({
            type:"USERDATA",
            payload:data
        })

       }
       GetData()
}