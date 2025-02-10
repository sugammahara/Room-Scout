import "./Search.scss";

import React, { useEffect, useState } from "react";

import { MdClose } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [url, setUrl] = useState("");

  const Navigate = useNavigate();

  const onChange = (event) => {
    setQuery(event.target.value);
  };

  const onMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const onMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  useEffect(() => {
    let filterUrl = `/api/alls?populate=*`;

    if (query) {
      filterUrl += `&filters[$or][0][desc][$containsi]=${query}&filters[$or][1][title][$contains]=${query}&filters[$or][2][location][$contains]=${query}&filters[$or][3][username][$contains]=${query}&filters[$or][4][type][$contains]=${query}&filters[verification]=true`;
    }

    if (minPrice) {
      filterUrl += `&filters[price][$gte]=${minPrice}`;
    }

    if (maxPrice) {
      filterUrl += `&filters[price][$lte]=${maxPrice}`;
    }

    setUrl(filterUrl);
  }, [query, minPrice, maxPrice]); // Runs when query, minPrice, or maxPrice changes

  let { data } = useFetch(url);

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for Rooms/Flats"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>

      <div className="price-range">
        <h1>Enter the price Range</h1>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={onMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={onMaxPriceChange}
        />
      </div>

      <div className="search-result-content">
        <div className="start-msg">
          Start typing or set a price range to see results.
        </div>

        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                Navigate(`/o/${item.id}`);
                setShowSearch(false);
              }}
            >
              <div className="image-container">
                {item.img && (
                  <img
                    src={process.env.REACT_APP_DEV_URL + item.img.url}
                    alt=""
                  />
                )}
              </div>
              <div className="prod-details">
                <span className="name">Owner: {item.username}</span>
                <span className="name">Type: {item.type}</span>
                <span className="name">Location: {item.location}</span>
                <span className="price">रू {item.price}</span>
                <span className="desc">Description: {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
