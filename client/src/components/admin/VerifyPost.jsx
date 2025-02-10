import "./VerifyPost.css";

import React, { useEffect, useState } from "react";
import { fetchDataFromApi, removeDataFromApi } from "../../utils/api";

import axios from "axios";
import http from "../../utils/http";
import useFetch from "../hooks/useFetch";

const VerifyPost = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("admin_data"));
    if (!user) {
      window.location.href = "/admin";
    }
  });
  const { data, setData } = useFetch(
    "/api/alls?populate=*&filters[verification]=false"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!data) return null;

  const handleVerify = async (id) => {
    try {
      const updatedRecord = {
        verification: true,
      };
      const postResponse = await axios.put(
        `http://localhost:1337/api/alls/${id}`,
        {
          data: updatedRecord,
        }
      );
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setLoading(false);
      setError("Error processing the record");
      console.error("Error:", error);
    }
  };

  const handleImageClick = (imgUrl) => {
    window.open(imgUrl, "_blank");
  };

  const handleDelete = async (id) => {
    const res = await removeDataFromApi(`/api/alls/` + id);
    window.location.reload();
  };

  return (
    <div className="verify-user-container">
      <h2>Verify Post</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <table className="verify-user-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Username</th>
            <th>Price</th>
            <th>Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                {item.img && (
                  <img
                    className="user-img"
                    src={process.env.REACT_APP_DEV_URL + item.img.url}
                    alt={item.title}
                    onClick={() =>
                      handleImageClick(
                        process.env.REACT_APP_DEV_URL + item.img.url
                      )
                    }
                  />
                )}
              </td>
              <td>{item.contact}</td>
              <td>{item.location}</td>
              <td>{item.username}</td>
              <td>{item.price}</td>
              <td>{item.type}</td>
              <td>{item.desc}</td>
              <td>
                <button
                  className="verify-btn"
                  onClick={() => handleVerify(item.documentId)}
                  disabled={item.verification} // Disable if already verified
                >
                  {item.verification ? "Verified" : "Verify"}
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleDelete(item.documentId)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerifyPost;
