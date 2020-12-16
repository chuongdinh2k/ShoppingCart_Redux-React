import React,{Component} from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component{
    render(){
          const cart=this.props.cart;
        return (           
                       <section className="section">
                           <div className="table-responsive">
                               <table className="table product-table">
                                   <thead>
                                       <tr>
                                           <th></th>
                                           <th>Sản Phẩm</th>
                                           <th>Giá</th>
                                           <th>Số Lượng</th>
                                           <th>Tổng Cộng</th>
                                           <th></th>
                                       </tr>
                                   </thead>
                                   <tbody>
                                     {/* cart item */}
                                     {this.props.children}
                                     <CartResult cart={cart}/>
                                    </tbody>
                               </table>
                           </div>
                       </section>
       
        )
    }
    // showItems=(cart)=>{
    //    let result=null;
    //     result = cart.map((product,index)=>{
    //         return(
    //             <CartItem 
    //                 key={index}
    //                 product={product}
    //                     />
    //         )
    //     });
    //     return result;
    // }

}
export default Cart;