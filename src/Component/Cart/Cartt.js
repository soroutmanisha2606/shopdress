export default function CARTMENU (){
    console.log("sgsd   ")
    
    if(document.getElementById("CARTDI")){
        document.getElementById("CARTDI").id="CARTDIV"
    }else{
        document.getElementById("CARTDIV").id="CARTDI"
    }
    
}
export const DecreaseQTY=(e)=>{
     let pre= Number(e.target.parentNode.childNodes[1]);
     e.target.parentNode.childNodes[1]=pre-1;
    
}
export const IncreaseQTY=(e)=>{
    // let pre= Number(e.target.parentNode.childNodes[1]);
    // e.target.parentNode.childNodes[1]=pre+1;
    console.log( e.target.parentNode.childNodes)
}