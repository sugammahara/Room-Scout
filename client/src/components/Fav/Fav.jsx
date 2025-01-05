import "./Fav.scss";
import { BsHeartbreak } from "react-icons/bs";
import FavItems from "./FavItems/FavItems";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const { user,favitems,setShowFav,setShowAccount } = useContext(Context);
const navigate = useNavigate();
  const nologin = () => {
    alert("login first");
    navigate("/");
    setShowAccount(true);
    setShowFav(false);
  };

  return (
    <div className="fav-panel">
      {!user && nologin()}
      <div className="opac-layer"></div>
      <div className="fav-content">
        <div className="fav-header">
          <span className="heading">Favorites</span>
          <span className="close-btn">
            <span className="text" onClick={() => setShowFav(false)}>
              close
            </span>
          </span>
        </div>

        {!favitems.length && (
          <div className="empty-cart">
            <BsHeartbreak />
            <span>No Products in the wishlist.</span>
            <button className="return-cta" onClick={()=>setShowFav(false)}>Return to shop.</button>
          </div>
        )}
        <div>
          <FavItems setShowFav={setShowFav}/>
        </div>
      </div>
    </div>
  );
};

export default Fav;
