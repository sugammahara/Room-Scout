import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingFav } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import Search from "./Search/Search";
import Fav from "../Fav/Fav";
import Upload from "../Upload/Upload";
import "./Header.scss";
import Accounts from "../accounts/accounts";
import { Context } from "../../utils/context";


const Header = () => {
  const navigate = useNavigate();
  const {user, checkuser} = useContext(Context);
  const {user_data, set_user_for_profile} = useContext(Context);


  const {ShowFav, setShowFav} = useContext(Context);
  const {ShowSearch, setShowSearch} = useContext(Context);
  const {ShowAccount, setShowAccount} = useContext(Context);
  const {ShowUpload, setShowUpload} = useContext(Context);
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="fixed top-0 w-full bg-red-300 drop-shadow main-header ">
        <div className="header-content">
          <ul className="left">
            <li>
              <div
                onClick={() => navigate("/")}
                className="text-xl justify-self-auto main"
              >
                Room Scout
              </div>
            </li>

            <li onClick={() => goToHome()}>Home</li>
            <li onClick={() => navigate("/Rooms/:id")}>Rooms</li>
            <li onClick={() => navigate("/Flats/:id")}>Flats</li>
            <li onClick={() => navigate("/Cu/:id")}>Contact Us</li>
            <li onClick={() => navigate("/au/:id")}>About us</li>

          </ul>


          <div className="right">
          <div  className="upload-btn" onClick={()=>setShowUpload(true)}> Upload </div>
            <HiOutlineSearch onClick={() => setShowSearch(true)} />
            <MdOutlineFavoriteBorder onClick={() => setShowFav(true)} />
            <RiAccountCircleLine onClick={() => setShowAccount(true)} />

         {user &&  <div className="username" onClick={()=>{set_user_for_profile(user_data.username);navigate('/p/:id')}}> {user_data.name} </div>}

          </div>


        </div>
      </div>
      {ShowFav && <Fav/>}
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
      {ShowAccount && <Accounts setShowAccount={setShowAccount} />}
      {ShowUpload && <Upload setShowUpload={setShowUpload} setShowAccount={setShowAccount} />}

    </div>
  );
};

export default Header;
