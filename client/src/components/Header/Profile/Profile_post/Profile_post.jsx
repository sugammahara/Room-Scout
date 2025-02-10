import "../../../Overview/R-view/R-view.scss";

import React, { useContext } from "react";
import { useEffect, useState } from "react";

import { Context } from "../../../../utils/context";
import { fetchDataFromApi } from "../../../../utils/api";
import { removeDataFromApi } from "../../../../utils/api";
import { useNavigate } from "react-router-dom";

const ProfilePost = ({ useremail }) => {
  const { user_for_profile, user_data } = useContext(Context);
  const Navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = async (id) => {
    const res = await removeDataFromApi(`/api/alls/` + id);
    console.log(res);
    window.location.reload();
  };
  const [data, setData] = useState();
  useEffect(() => {
    fetchdata();
    if (user_for_profile === user_data.username) {
      setShowDelete(true);
    }
  }, [user_for_profile]);

  const fetchdata = async () => {
    const res = await fetchDataFromApi(
      `/api/alls?populate=*&filters[username]=${user_for_profile}&filters[verification]=true`
    );
    setData(res);
  };
  return (
    <div>
      <div className="Rooms-container">
        <div className="sec-heading">Uploads By : </div>
        <div className="Rooms">
          <>
            {data &&
              data?.data?.map((item) => (
                <div className="RelatedRooms-card">
                  <div
                    key={item.id}
                    onClick={() => Navigate(`/o/${item.id}`)}
                    className="thumbnail"
                  >
                    {item.img && (
                      <img
                        src={process.env.REACT_APP_DEV_URL + item.img.url}
                        alt=""
                      />
                    )}
                  </div>

                  <div className="Rooms-details">
                    <span key={item.id} className="location">
                      {item.location}
                    </span>
                    <span key={item.id} className="price">
                      &#8377;{item.price}
                    </span>
                    {showDelete && (
                      <button
                        className="reject-btn"
                        onClick={() => handleDelete(item.documentId)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
