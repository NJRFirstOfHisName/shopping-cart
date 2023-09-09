import { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import FetchCatalog from "./components/FetchCatalog";
import { Link } from "react-router-dom";

function App() {
  const { catalog, error, loading } = FetchCatalog();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  console.log(catalog);
  let catalogArray = [];
  catalog.forEach((product) => {
    const descriptionStart = product.description.slice(0, 100);
    const descriptionEnd = product.description.slice(100);
    product.descriptionStart = descriptionStart;
    product.descriptionEnd = descriptionEnd;
    catalogArray.push(<Product productData={product} />);
  });

  return (
    <>
      <div className="navbar">
        <h1>Navigation</h1>
      </div>
      <div className="container">{catalogArray}</div>
      <p className="footer">
        Layout adapted from{" "}
        <a href="https://codepen.io/aryancodeworm/pen/mdMjbbp">La Saveur</a> by{" "}
        <a href="https://codepen.io/aryancodeworm">Ayran Tayal</a>
      </p>
    </>
  );
}

export default App;
