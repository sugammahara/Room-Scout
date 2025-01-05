import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();
const AppContext = ({ children }) => {



  const [favitems, setfavitems] = useState([]);




  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  
  const [user, checkuser] = useState(false);
  const [login, checklogin] = useState(true);
  const [signup, checksignup] = useState(false);
  const [user_data, set_user_data] = useState("");





  const [ShowFav, setShowFav] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const [ShowAccount, setShowAccount] = useState(false);
  const [ShowUpload, setShowUpload] = useState(false);

  useEffect(() => {}, [favitems]);




  const handleAddToFav = (rooms) => {
    let items = [...favitems];
    let index = items.findIndex((p) => p.id === rooms.id);
    if (index !== -1) {
      alert("Already in Favorites");
    } else {
      items = [...items, rooms];
      alert("Added Sucessfully");
    }
    setfavitems(items);
  };


  const [user_for_profile, set_user_for_profile] = useState('');
  



  const handleRemoveFromFav = (rooms) => {
    let items = [...favitems];
    items = items.filter((p) => p.id !== rooms.id);
    setfavitems(items);
  };




  return (
    <Context.Provider
      value={{ favitems, setfavitems, handleAddToFav, handleRemoveFromFav,
      email,setEmail,
    password,setPassword,
  user,checkuser,
login,checklogin,
signup,checksignup,
user_data,set_user_data,
ShowFav, setShowFav,
ShowSearch, setShowSearch,
ShowAccount, setShowAccount,
ShowUpload, setShowUpload,
user_for_profile, set_user_for_profile
}}
    >
      {children}
    </Context.Provider>
  );
};
export default AppContext;
