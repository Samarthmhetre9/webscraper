import { useEffect, useState } from "react";
import search from "../assets/icons/search-interface-symbol.png";
//import trash from  "../assets/icons/trash.png";
import check from "../assets/icons/check.png";


function Sidebar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Searches");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log(response);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <div className="flex-wrap overflow-y-auto mt-2">
      <a
        href="/search"
        className="text-decoration-none px-3 py-2 fw-bold bg-light shadow rounded mt-5"
      >
        <img
          src={search}
          alt="search"
          height={16}
          width={16}
          className="text-danger"
        />{" "}
        <span className="text-black">New <span className="text-danger">Search</span></span>
      </a>
      <hr className="mx-3 mt-5" />
      <div className="flex-col flex justify-center items-start">
        {data ? (
          data.map((search) => {
            return (
              <div className="mx-2 my-2 py-2 bg-light rounded shadow-sm">
                <h7 className="">
                  {search.search_prompt.length > 15 ? search.search_prompt.slice(0,20).concat("...") : search.search_prompt}{" "}
                  <img src={check} alt="check" width={16} height={16} className="float-end mx-1" />
                </h7>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
