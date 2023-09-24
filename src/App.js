import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

import'../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Header from './common/header/Header';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Pages from "./pages/Pages";
import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Footer from './common/Footer/Footer';
import SignUp from './components/login/Sign Up';
import About from './common/header/about.jsx';
import Contact from './common/header/contact.jsx';
import AddProduct from './components/newarrivals/AddProduct';
import Buy from './common/cart/buy';

function App() {
  //__________fetch data from data base__________
  const {productItems} = Data ;
  const {shopItems} = Sdata ;
  const [cartItem,setCardItem]= useState([])

const addToCard=(product)=>{
  const productExist=cartItem.find((item)=>item.id===product.id);
  if(productExist){
    setCardItem(cartItem.map((item) =>
      (item.id===product.id?
      {...productExist,qty:productExist.qty+1}:item)))
  }
  else {
    
    
    setCardItem([...cartItem, { ...product, qty: 1 }])
  }
}
// const decreaseQty = (product) => {
  
//   const productExist=cartItem.find((item)=>item.id===product.id);
//   if (productExist.qty === 1) {
//     setCardItem(cartItem.filter((item) => item.id !== product.id))
//   } else {
//     setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)))
//   }
// }
const decreaseQty=(product)=>{
  const productExist=cartItem.find((item)=>item.id===product.id);
  if(productExist.qty===1){
    setCardItem(cartItem.filter((item)=>item.id !==product.id))
  }else{
    setCardItem(cartItem.map((item)=>(item.id===product.id ?{...productExist,qty:productExist.qty-1}:item)))
  }
}
const removeCard=(product)=>{
  setCardItem(cartItem.filter((item)=>item.id !==product.id))
}
/****************************** ***************************************/

      /////////////////////////////////////////////////




          
/************************************** */

  return (
    <>
    <Router>
    <Header cartItem={cartItem} />
      <Switch>
      <Route path='/' exact>
      <Pages productItems={productItems} addToCard={addToCard} shopItems={shopItems}/>
      </Route>
      <Route path='/about'><About></About></Route>
      <Route path='/contact'><Contact></Contact></Route>
      <Route path='/cart'>
      <Cart cartItem={cartItem} addToCard={addToCard} decreaseQty={decreaseQty} removeCard={removeCard}/>
      </Route>
      <Route path='/signUp'>
        <SignUp/>
      </Route>
      <Route path='/addProduct'>
        <AddProduct/>
        
      </Route>
      <Route path='/buy'>
        <Buy></Buy>
      </Route>
      
      </Switch>
      <Footer/>
    </Router>
</>
  );
}

export default App;
