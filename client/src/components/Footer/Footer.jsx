import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Footer = () => {
  const Navigate =useNavigate();

  const {ShowFav, setShowFav} = useContext(Context);
  const {ShowSearch, setShowSearch} = useContext(Context);
  const {ShowAccount, setShowAccount} = useContext(Context);
  const {ShowUpload, setShowUpload} = useContext(Context);
  return (
    <div className="footer bg-slate-200 drop-shadow rounded-lg">
      <div className="footer-content">
        <div className="col">
          <div className="title">About Us</div>
          <div className="text">
            We are a group of individuals working to provide you a place to
            search, book and upload your rooms and flats.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Nepal, Dhulikhel, Kavre.</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9813083437</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: room-scout@gmail.com </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Services</div>
          <span className="text">Rent and Buy</span>
          <span className="text">Get rooms with best price</span>
          <span className="text">Easy to reach customers</span>
          <span className="text">Easy to contact landlords </span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={()=>Navigate('/')}>home</span>
          <span className="text"onClick={()=>{Navigate('/rooms/1')}}>Rooms</span>
          <span className="text" onClick={()=>{Navigate('/flats/1')}
          }>Flats</span>
           <span className="text"onClick={()=>Navigate('/cu/1')}>Contact Us</span>
          <span className="text" onClick={()=>Navigate('/au/1')}>About Us</span>
          <span className="text"onClick={()=>setShowUpload(true)}>Upload</span>
          <span className="text" onClick={()=>setShowSearch(true)}>Search</span>
          <span className="text"onClick={()=>setShowFav(true)}>Favorites</span>
         
          <span className="text"onClick={()=>setShowAccount(true)}>Accounts</span>
         
        </div>
      </div>
      <hr class=" border-gray-200 dark:border-gray-700 " />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Room Scout . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
