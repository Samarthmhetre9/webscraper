import React, { useState } from "react";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    setIsLoading(true);
      
    fetch("/products/search")
    .then((res) => res.json()) // Note the parentheses after res.json
    .then((data) => {
      // Handle the fetched data here
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
  
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <form
      className="ms-5" 
      onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter product Name"
          className="flex-grow p-2 rounded shadow"
        />

        <button
          type="submit"
          className="btn btn-danger mx-2 px-2 py-2 "
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
  );
};

export default Searchbar;
