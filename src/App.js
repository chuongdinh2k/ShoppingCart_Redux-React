
import React,{Component} from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartsContainer from './containers/CartsContainer';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
class App extends Component{
 render(){ 
   return(
   <div>
     <div>
        {/* <!-- Header --> */}
        <Header/>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                <ProductsContainer/>
                <CartsContainer/>
                {/* <!-- Cart --> */}
         </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer/>
 </div>
   </div>

   )

  }
}

export default App;
