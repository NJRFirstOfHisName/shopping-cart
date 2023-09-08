import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import FetchCatalog from "./components/FetchCatalog";

function App() {
  const { catalog, error, loading } = FetchCatalog();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  console.log(catalog);

  return (
    <div className="container">
      <Product productData={catalog[0]} />
      <Product productData={catalog[1]} />
      <Product productData={catalog[2]} />
      <Product productData={catalog[3]} />
      <Product productData={catalog[4]} />
    </div>
  );
}

export default App;
