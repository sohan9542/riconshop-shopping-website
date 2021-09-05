import React from "react";
import NavbarHeader from "./Component/Navbar/Navbar";
import NavTop from "./Component/NavTop/NavTop";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";
import { createContext } from 'react'
import AddedProducts from "./Component/AddedProducts/AddedProducts";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Category from "./Component/Category/Category";
import Wishlist from "./Component/Wishlist/Wishlist";
import Contact from "./Component/Contact/Contact";
import Login from "./Component/LogIn/Login";
import Signup from './Component/SignUp/Signup.jsx'

export const RapperContent = createContext()




function App() {


  const [wishProduct, setWishProduct] = useState([])
  const [selectProduct, setSelectProduct] = useState([])

  // selected functions
  const handleProduct = (product) => {
    const add__Another_ID = {
      ...product
    }
    const newProduct = [...selectProduct, add__Another_ID]

    setSelectProduct(newProduct)
  }
  const handleRemove = (e) => {
    const filterProduct = selectProduct.filter(pd => pd.id !== e)
    setSelectProduct(filterProduct)
  }
  const removeAll = () => {
    setSelectProduct([])
  }

  // wishes functions
  const removeAllwishes = () => {
    setWishProduct([])
  }
  const handleWishRemove = (e) => {
    const filterProduct = wishProduct.filter(pd => pd.id !== e)
    setWishProduct(filterProduct)
  }
  const handleWishList = (product) => {
    const newWishtlist = [...wishProduct, product]
    setWishProduct(newWishtlist)
  }



  return (
    <RapperContent.Provider value={{ selectProduct, wishProduct }}>
      <Router>
        <NavTop />
        <NavbarHeader />
        <Switch>
          <Route exact path='/'>
            <Home handleProduct={handleProduct} handleWishList={handleWishList} />
          </Route>
          <Route exact path='/addedProducts' >
            <AddedProducts handleRemove={handleRemove} removeAll={removeAll} />
          </Route>
          <Route path="/description/:id">
            <ProductDetails handleProduct={handleProduct} handleWishList={handleWishList} />
          </Route>
          <Route path='/categories'>
            <Category />
          </Route>
          <Route path="/wishList">
            <Wishlist removeAllwishes={removeAllwishes} handleProduct={handleProduct} handleWishRemove={handleWishRemove} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </RapperContent.Provider>
  );
}

export default App;
