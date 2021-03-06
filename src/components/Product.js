
import React,{Component} from 'react';

class Product extends Component{
    
 render(){ 
     const {product} = this.props;
   return(

              
                <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src={product.image}
                                        className="img-fluid" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a>{product.name}</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        <li>
                                            {/* <i className="fa fa-star"></i> */}
                                            {this.rateStar(product)}
                                       
                                        </li>
                                    </ul>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                    <div className="card-footer">
                                         <span className="left">{product.price}$</span>
                                        <span className="right">
                                            <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart"
                                                onClick={()=>this.addToCart_Button(product)}>
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                  


   )

  }
  rateStar(product){
      var star = []; 
      let i,j;
    for( i=1;i<=product.rate;i++){
        star.push(<i key={i} className="fa fa-star"></i>);
    }
    for( j=1;j<=product.max_rate-product.rate;j++){
        star.push(<i key={j+i} className="fa fa-star-o"></i>);
        console.log(star);
    }
    return star;
  }
  addToCart_Button=(product)=>{
    this.props.onAddToCart(product);
  }
}

export default Product;
