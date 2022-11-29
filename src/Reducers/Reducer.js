let Data={
    Cart:[]
}
export default function ShopDressReducer(state=Data, action){
    switch(action.type){
    case "GETCARTDATA": {
            // console.log(action.payload)
              return{
                ...state,
                Cart:action.payload
              }
        }
        default:{
            return{
                state
            }
        }
    }
}