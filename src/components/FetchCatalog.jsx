import { useState, useEffect } from "react";

const FetchCatalog = () => {
  const [catalog, setCatalog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setCatalog(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { catalog, error, loading };
};

export default FetchCatalog;
