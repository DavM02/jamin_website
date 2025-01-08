import React from "react";
import { Route, Routes } from "react-router-dom";
import CatalogPage from "./Catalog/CatalogPage";
import ProductPage from "./Product/ProductPage";
 

export default function CatalogRoute() {
 


  return (
    <Routes>
      <Route path="/:catalog" element={<CatalogPage />} />
      <Route path="/:catalog/:product" element={<ProductPage />} />
    </Routes>
  );
}
