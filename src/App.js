import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Providers from "./pages/Providers";
import Stock from "./pages/Stock";
import History from "./pages/History";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" axact element={<Home />} />

        <Route path="/product" element={<Product />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/providers" element={<Providers />} />

        <Route path="/stock" element={<Stock />} />

        <Route path="/history" element={<History />} />

        <Route path="*" element={<Home />} />

      </Routes> 
    </BrowserRouter>
    
  )
};

export default App;