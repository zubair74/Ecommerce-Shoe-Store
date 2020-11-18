import React from "react";

import Navbar from "./navbar";
// import Crousel from "./crousel";
import Footer from "./footer";
import Login from "./Signin";
import Signup from "./Signup";
import Cards from './cards'
import Cart from './cart'
import ProductDetails from "./ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes({shoes,SignupInfo,signupstatus,loginInfo,addCart,
  count,
  cart,
  searchShoe,shoe,
  findShoe,shoeData, getProd}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar cart={cart} count={count} searchShoe = {searchShoe}/>
          
          <Cards shoes = {shoes} shoeData = {shoeData} findShoe = {findShoe} addCart={addCart}/>
          <Footer/>
         
        </Route>

        <Route exact path="/login">
          <Navbar />
          <Login loginInfo = {loginInfo}/>
          <Footer />
        </Route>

        <Route path="/signup">
          <Navbar />
          <Signup SignupInfo = {SignupInfo} signupstatus = {signupstatus}/>
          <Footer />
        </Route>

        <Route path="/cart">
          <Cart cart={cart} count={count} getProd = {getProd}/>
        </Route>

        <Route exact path="/products/:id">
          <ProductDetails shoe={shoe} addCart = {addCart} count={count}/>
        </Route>

       
      </Switch>
    </Router>
  );
}

export default Routes;