import * as types from '../constants/ActionTypes';

export const addToCart = (product,quantity)=>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const plusButton = (product,quantity) => {
    return{
        type: types.PLUS_BUTTON,
        quantity,
        product
    }
}
export const substractButton = (product,quantity) => {
    return {
        type: types.SUBTRACT_BUTTON,
        quantity,
        product
    }
}
export const removeItem= (product)=>({
    type: types.REMOVE_ITEM,
    product
})
       

           
      
