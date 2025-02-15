import "../../../Overview/R-view/R-view.scss";

import React, { useContext } from "react";
import { useEffect, useState } from "react";

import { Context } from "../../../../utils/context";
import { fetchDataFromApi } from "../../../../utils/api";
import { removeDataFromApi, update_data_to_api } from "../../../../utils/api";
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
  const handleupdate = async (id, status) => {
    const formData = {
      book_status: status,
    };
    const res = await update_data_to_api(`/api/alls/` + id, formData);
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <button
                          className="reject-btn"
                          style={{ borderRadius: "40px" }}
                          onClick={() => handleDelete(item.documentId)}
                        >
                          Delete
                        </button>
                        {!item.book_status ? (
                          <button
                            className="reject-btn"
                            style={{ borderRadius: "40px" }}
                            onClick={() => handleupdate(item.documentId, true)}
                          >
                            Mark Booked
                          </button>
                        ) : (
                          <button
                            className="reject-btn"
                            style={{ borderRadius: "40px" }}
                            onClick={() => handleupdate(item.documentId, false)}
                          >
                            UnMark booking
                          </button>
                        )}
                      </div>
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
