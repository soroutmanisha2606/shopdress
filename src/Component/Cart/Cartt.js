import store from "../../Store/Store"
import { GetCartData,GetPatchData,GetDeleteData } from '../../Actions/CartAction';
export default function CARTMENU (){
    if(document.getElementById("CARTDI")){
        document.getElementById("CARTDI").id="CARTDIV"
    }else{
        document.getElementById("CARTDIV").id="CARTDI"
    }
    
}

export const SearchDiv=()=>{
    if(document.getElementById("SearchDi")){
        document.getElementById("SearchDi").id="SearchDiv"
    }else{
        document.getElementById("SearchDiv").id="SearchDi"
    }
}


export const DecreaseQTY=(id,dispatch)=>{
    let temp=[]
    let Array=store.getState().ShopDressReducer.Cart;
    console.log("ok-des");
    Array.map((el, index,ar)=>{
        if(el.id==id){
           if(Number(el.Qty)>1){
             el.Qty= Number(el.Qty)-1; 
              GetPatchData(el, el.id);
           }else{
             GetDeleteData(el.id,index,Array,dispatch);
           }
        }
    })
    temp=[...Array]
    dispatch({
        type:"GETCARTDATA",
        payload:temp
    })
    
}



export const IncreaseQTY=(id,dispatch, Array)=>{
    let temp=[]
     Array.map((el)=>{
        if(el.id==id){
            
            el.Qty= Number(el.Qty)+1;
            
            
            GetPatchData(el,id);
        }
     })

        temp=[...Array]
        dispatch({
            type:"GETCARTDATA",
            payload:temp
        })
}


export const SearchBar=(dispatch)=>{
    let ans=debounced(FetchSearhData,500,dispatch);
    ans();
    console.log("e.target.value")
}
function debounced(fn, delay, dispatch) {
    let Timeout;
    return function() {
        console.log("fgf");
      if (Timeout) clearTimeout(Timeout);

      Timeout = setTimeout(function () {
        fn(dispatch);
      }, delay);
    };
    // df();
} 
async function FetchSearhData(dispatch){
    let qure=document.getElementById('inputSearch').value;
    let res = await fetch(`https://cartikkg-shop-dress-up-new.onrender.com/Product_Data?q=${qure}`);
    let ans= await res.json();
    // console.log(ans)
    dispatch({
        type:"GETSEACHDATA",
        payload:ans
    })
 
}