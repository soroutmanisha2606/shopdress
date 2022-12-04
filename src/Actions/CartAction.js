
export  const GetCartData = (dispatch)=>{

   
       async function GetData(){
        // let res = await fetch('https://dead-gold-binturong-kilt.cyclic.app/cart');
        let data= JSON.parse(localStorage.getItem('CartData'))||[];
    
        dispatch({
            type:"GETCARTDATA",
            payload:data
        })

       }
       GetData()
}
export  const GetPatchData = async (Data,id,dispatch)=>{
    await fetch(`https://dead-gold-binturong-kilt.cyclic.app/cart/${id}`,{
      method:"PATCH",
      body: JSON.stringify(Data),
      headers :{
      "Content-Type":"application/json",
      },   
     });
 

}
export const GetDeleteData = async (id,index,Array,dispatch)=>{
      
      let temp=[]
      Array.splice(index,1);
 
         temp=[...Array]
     
         dispatch({
             type:"GETCARTDATA",
             payload:temp
      })
      await fetch(`https://dead-gold-binturong-kilt.cyclic.app/cart/${id}`,{
         method:'DELETE'
      });
      
      
      
}     
