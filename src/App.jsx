import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import FetchCatalog from "./components/FetchCatalog";

function App() {
  const { catalog, error, loading } = FetchCatalog();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  console.log(catalog, error, loading);

  return <Product productData={catalog[0]} />;
}

export default App;
