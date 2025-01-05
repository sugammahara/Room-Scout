import React, { useContext } from "react";
import img from "../../../assets/img.webp";
import { Context } from "../../../utils/context";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import ProfilePost from "./Profile_post/Profile_post";
const Profile = () => {
  const Navigate = useNavigate();
  const {setShowAccount,user_for_profile } = useContext(Context);

  const { data } = useFetch(
    `/api/owners?populate=*&filters[username]=${user_for_profile}`
  );
  
  return (
    <div> 

<div class="flex items-center  justify-center">

  {data?.data?.map(() => (
    
    <div class="max-w-xs">
      
      <bR/><bR/><bR/><bR/><bR/>

      
       <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
          {data.data[0].attributes.img.data && ( <img class="w-32 h-32 rounded-full mx-auto" src={process.env.REACT_APP_DEV_URL +
                data.data[0].attributes.img.data[0].attributes.url} alt=""/>)}
         </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{data.data[0].attributes.name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Owner</p>
            </div>
            <table class="text-xs my-3">
                <tbody>
               
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Username</td>
                    <td class="px-2 py-2">{data.data[0].attributes.username}</td>
                </tr>
            </tbody></table>

           
        </div>
        </div>

</div>

  ))}


          
      </div>
      <ProfilePost/>

        
      </div>
    
  );
};

export default Profile;
