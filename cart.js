import {ADD_TO_CART,PLUS_BUTTON,SUBTRACT_BUTTON,REMOVE_ITEM} from './../constants/ActionTypes';
const data =JSON.parse(localStorage.getItem('CART'));
const initialState = data?data:[];
// const initialState=[];

const cart = (state=initialState,action)=>{
    const {product,quantity} = action;
    var index =-1;
    switch(action.type){
        case ADD_TO_CART:
            
            index = findProductIndexCart(state,product);
             if(index >-1){    
                state[index].quantity+=quantity;
            }
             else{
                state.push({
                    product,
                    quantity
                })
          }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
           
        case PLUS_BUTTON:
            // index = findProductIndexCart(state,product);
            //  index = findProductIndexCart(state,product);
            //  if(index!==-1) {
               for(var i=0;i<state.length;i++){
                    if(state[i].product.id === product.id){
                        state[i].quantity+=quantity;
                    }
               }
            //  }
             localStorage.setItem('CART',JSON.stringify(state));
           return [...state]; 
           //
        case SUBTRACT_BUTTON:{
            for(var i=0;i<state.length;i++){
                if(state[i].product.id === product.id){
                    if(state[i].quantity>0){
                        state[i].quantity-=quantity;
                    }
                    if(state[i].quantity===0){
                        state.splice(i,1);
                    }
                }
           }
           localStorage.setItem('CART',JSON.stringify(state));
           return [...state];
        }
        case REMOVE_ITEM:
            for(var i=0;i<state.length;i++){
                if(state[i].product.id === product.id){          
                        state.splice(i,1);          
                }
           }
           localStorage.setItem('CART',JSON.stringify(state));
           return [...state];
         default:
                
                 return [...state];
    }
}
 const findProductIndexCart = (cart,product)=>{
     let index = -1;
    for(var i=0;i<cart.length;i++){
        if(cart[i].product.id === product.id){
            index = i;
            break;
        }
    }
    return index;
}
export default cart;