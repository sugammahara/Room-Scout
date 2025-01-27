import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setquery] = useState("");
  const Navigate = useNavigate();
  const onChange = (event) => {
    setquery(event.target.value);
  };
  let { data } = useFetch(
    `/api/alls?populate=*&filters[$or][0][desc][$containsi]=${query}&filters[$or][1][price][$contains]=${query}&filters[$or][2][title][$contains]=${query}&filters[$or][3][location][$contains]=${query}&filters[$or][4][username][$contains]=${query}`
  );
  if (!query.length) {
    data = null;
  }
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

      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see what you are looking for.
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
                {" "}
              {item.img&&  <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.img.url
                  }
                  alt=""
                />}
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
