import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { Container, Col } from 'react-bootstrap';

const Searchpage = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await fetch("http://localhost:8000/products/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchData: searchPrompt,
        }),
      })
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex mx-2 my-3">
      <Col md={2}>
        <Sidebar />
      </Col>
      <Col>
        <div className="d-flex mx-5 px-2 mt-2">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchPrompt}
              onChange={(e) => setSearchPrompt(e.target.value)}
              placeholder="Enter product Name"
              className="form-control p-2 rounded shadow"
            />

            <button
              type="submit"
              className="btn btn-danger mx-2 px-2 py-2 "
              disabled={searchPrompt === ""}
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
        <section className="trending-section">
          <div className="container">
            <h2 className="section-text my-5 mx-5">Search Results</h2>
            <div className="row">
              {data ? (
                data.map((product) => (
                  <div className="col-md-4">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div>No search results</div>
              )}
            </div>
          </div>
        </section>
      </Col>
    </Container>
  );
};

export default Searchpage;
