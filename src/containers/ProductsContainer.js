import React,{Component} from 'react';
import Products from './../components/Products';
import Product from './../components/Product';
import {addToCart} from '../actions/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
// import Products from './../components/Products';
class ProductsContainer extends Component{
    render(){
        const {products} =this.props;
         const {onAddToCart} =this.props;
        return (
            <Products >
                 {this.showProducts(products)}
                </Products>
          
        )
    }
    showProducts(products){
        var result = null;
        if(products.length>0){
             result = products.map((product,index)=>{
                return <Product key={index}
                                product={product}
                                onAddToCart ={this.props.onAddToCart}
                />
            })
        }
        return result;
     }
}
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
            max_rate: PropTypes.number.isRequired

        })
    ).isRequired
}
const mapStateToProps =(state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
       onAddToCart: (product,props) =>{
           dispatch(addToCart(product,1));
       }
    }
} 


export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);