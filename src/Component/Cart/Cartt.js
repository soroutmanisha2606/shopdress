import store from "../../Store/Store"
import { GetCartData,GetPatchData,GetDeleteData } from '../../Actions/CartAction';
export default function CARTMENU (){
    if(document.getElementById("CARTDI")){
        document.getElementById("CARTDI").id="CARTDIV"
        localStorage.setItem("Cartisopen","true")
    }else{
        document.getElementById("CARTDIV").id="CARTDI";
        localStorage.setItem("Cartisopen","false")
    }
    
}

export const SearchDiv=(dispatch)=>{

   
    if(document.getElementById("SearchDi")){
        document.getElementById("SearchDi").id="SearchDiv"
    
         localStorage.setItem("Searchisopen","true")
    }else{
        dispatch({
            type:"GETCARTDATA",
            payload:[]
        })
        document.getElementById("SearchDiv").id="SearchDi"
        localStorage.setItem("Searchisopen","false")
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
    let res = await fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?q=${qure}`);
    let ans= await res.json();
    // console.log(ans)
    dispatch({
        type:"GETSEACHDATA",
        payload:ans
    })
 
}

export const ApplyCoupon = (e)=>{
    if (e.key === 'Enter') {
        let n=document.getElementById('CouponInput').value;
        // let n=;
        if(n=='Dressup10'){
            let amount =Number( localStorage.getItem('Total_Price'));
            let amound= (amount/100) * 10
            // let amound=
            localStorage.setItem('Total_Price',(amount-amound))
            console.log("ok", (amount-amound) )
            document.getElementById('GDP').innerHTML=`$ ${amount-amound}`
            document.getElementById('ApplyCopounText').innerHTML=`Coupon Applied  `
            document.getElementById('ApplyCopounText').style.background=`#c6f6d5`;
            document.getElementById('ApplyCopounText').style.color=`#133f2b`;
            document.getElementById('ApplyCopounText').style.background=`Coupon Applied  `
        }   
        console.log(n);
    }

    // if
    // let o=e.target.value;
    // if()
     
}