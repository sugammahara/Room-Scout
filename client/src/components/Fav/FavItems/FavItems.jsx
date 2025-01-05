import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import newsletter from "../../../assets/newsletter-bg.jpeg";
import "./FavItems.scss";
import { Context } from "../../../utils/context";
import { useNavigate } from "react-router-dom";

const FavItems = ({setShowFav}) => {
  const { favitems, handleRemoveFromFav } = useContext(Context);
const navigate = useNavigate();
  return (
    <div className="cart-products">
      {favitems &&
        favitems.map((item) => (
          <div key={item.id} onClick={()=>{navigate(`/o/${item.id}`);
          setShowFav(false);}} className="search-result-item">
            <div className="image-container">
             {item.attributes.img.data&& <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  item.attributes.img.data[0].attributes.url
                }
                alt=""
              />}
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.type}</span>
              <span className="name">{item.attributes.location}</span>
              <MdClose
                className="close-btn"
                onClick={() => handleRemoveFromFav(item)}
              />

              <div className="text">
                <span>रू {item.attributes.price}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FavItems;
