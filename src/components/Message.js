
import React,{Component} from 'react';
import * as types from '../constants/Message';
class Message extends Component{
 render(){ 
   const {cart} = this.props;
   return(

    <h3>
        <span className="badge amber darken-2">{cart.length<=0?types.MSG_CART_EMPTY:types.MSG_WELCOME}</span>
    </h3>

   )

  }
}

export default Message;
