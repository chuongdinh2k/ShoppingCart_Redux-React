
import React,{Component} from 'react';
import Product from './Product';
class Products extends Component{
    // showProducts(products){
    //     var result = null;
    //     if(products.length>0){
    //          result = products.map((product,index)=>{
    //             return <Product key={index}
    //                             product={product}
    //             />
    //         })
    //     }
    //     return result;
    //  }
 render(){ 
    //  const {products} = this.props;
    const {addToCart} = this.props;
   return(
            <div>
       
                {/* <!-- Products --> */}
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {/* Lists Product */}
                        {this.props.children}
                    </div>
                </section>
                 </div>

   )

  }
}

export default Products;
