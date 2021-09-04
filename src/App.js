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
export const RapperContent = createContext()




function App() {



  const [selectProduct, setSelectProduct] = useState([])
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





  return (
    <RapperContent.Provider value={selectProduct}>
      <Router>
        <NavTop />
        <NavbarHeader />


        <Switch>
          <Route exact path='/'>
            <Home handleProduct={handleProduct} />
          </Route>
          <Route exact path='/Added_Products' >
            <AddedProducts handleRemove={handleRemove} removeAll={removeAll} />
          </Route>
          <Route path="/description/:id">
            <ProductDetails handleProduct={handleProduct} />
          </Route>
          <Route path='/categories'>
            <Category />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </RapperContent.Provider>
  );
}

export default App;
