import React from "react";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { Products } from "./pages/Products/Products";
import { Warehouses } from "./pages/Warehouses/Warehouses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
