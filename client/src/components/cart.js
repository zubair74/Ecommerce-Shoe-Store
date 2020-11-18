import React from "react";
import "../styles.css";

import Navbar from "./navbar";

import Footer from "./footer";

import { useHistory } from "react-router-dom";

import CartItems from './cart items'




export default function Cart({cart,count, getProd}) {
  // console.log(mycart)


  return(
    <div>
      <Navbar count = {count}/>
      <div>
      <CartItems cart = {cart} getProd = {getProd}/>
      </div>
      <Footer/>
    </div>


  );
}