import React,{Component} from 'react';
import Message from '../components/Message';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import {plusButton,substractButton,removeItem} from '../actions/index';
import {connect} from 'react-redux';

class CartsContainer extends Component{
    render(){
        const {cart} = this.props;
         const {plusButton} =this.props;
        return (
            <div>
                <Message cart={cart}/>
                <Cart cart={cart}>
                    {this.showItems(cart)}
                    
                </Cart>
            </div>
        )
    }
    showItems=(cart)=>{
           let result=null;
        //    let {plusButton} = this.props.plusButton;
            result = cart.map((item,index)=>{
                return(
                    <CartItem 
                        key={index}
                        item={item}
                        plusButton={this.props.plusButton}
                        substractButton={this.props.substractButton} 
                        removeItem = {this.props.removeItem}   /> 
                )
            });
            return result;
        }
    
}
const mapStateToProps = (state)=>{
    
    return{
        cart:state.cart
    }
}
const mapDispatchToProps =(dispatch)=>({
    
       plusButton: (product) =>dispatch(plusButton(product,1)),
       substractButton: (product)=>dispatch(substractButton(product,1)),
       removeItem: (product)=>dispatch(removeItem(product))

    
} )
export default connect(mapStateToProps,mapDispatchToProps)(CartsContainer);