import { Navigate, useNavigate, useParams } from "react-router-dom";
import Rview from "./R-view/R-view";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import "./Overview.scss";
import { Context } from "../../utils/context";

const Overview = () => {
  const { handleAddToFav, user, setShowAccount, set_user_for_profile } =
    useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  let { data } = useFetch(`/api/alls?populate=*&[filters][id]=${id}`);
  const product = data ?? data.data.length > 0 ? data.data[0] : data.data;

  console.log(product);

  const nologin = () => {
    alert("Login first");
    setShowAccount(true);
  };

  const call_profile = () => {
    if (user) {
      navigate(`/p/${product.username}`);
    } else {
      nologin();
    }
  };

  return (
    <>
      {product && (
        <div className="Overview-main-content">
          <div className="layout">
            <div className="Overview-page">
              <div className="left">
                {product.img && (
                  <img
                    alt=""
                    src={process.env.REACT_APP_DEV_URL + product.img.url}
                  />
                )}
              </div>
              <div className="right">
                <div className="header-info">
                  <div className="name">{product.contact}</div>
                  <span className="category">Category: {product.type}</span>
                  <span className="price">Price: रू {product.price}</span>
                  <span className="location">Location: {product.location}</span>
                  <span className="desc">{product.desc}</span>
                </div>

                <div className="owner-info">
                  <div className="owner-label">Owner:</div>
                  <div
                    className="username"
                    onClick={() => {
                      set_user_for_profile(product.username);
                      call_profile();
                    }}
                  >
                    {product.username}
                  </div>
                </div>

                <div className="cart-buttons">
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      if (!user) {
                        nologin();
                      } else {
                        handleAddToFav(data);
                      }
                    }}
                  >
                    <AiOutlineHeart size={20} />
                    ADD TO FAVORITES
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Rview type={product.type} />
        </div>
      )}
    </>
  );
};

export default Overview;
