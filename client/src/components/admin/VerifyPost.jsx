import "./VerifyPost.css";

import React, { useEffect, useState } from "react";
import { fetchDataFromApi, removeDataFromApi } from "../../utils/api";

import axios from "axios";
import useFetch from "../hooks/useFetch";

const VerifyPost = () => {
  const { data, setData } = useFetch(
    "/api/alls?populate=*&filters[verification]=false"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!data) return null;

  const handleVerify = async (id) => {
    try {
      setLoading(true);
      // Step 1: Fetch the record

      const fetchResponse = await fetchDataFromApi(
        `/api/alls?populate=*&filters[id]=${id}`
      );
      console.log(fetchResponse.data[0]);
      const updatedRecord = {
        desc: fetchResponse.data[0].desc,
        img: fetchResponse.data[0].img,
        location: fetchResponse.data[0].location,
        price: fetchResponse.data[0].price,
        title: fetchResponse.data[0].title,
        type: fetchResponse.data[0].type,
        username: fetchResponse.data[0].username,
        verification: true,
      };

      // Step 2: Delete the record from Strapi
      const res = await removeDataFromApi(`/api/alls/` + id);
      console.log(res);

      // Step 3: Post the updated record (mark verification as true)

      // const postResponse = await axios.post("http://localhost:1337/api/alls", {
      //   data: updatedRecord,
      // });

      // Step 4: Update the local state with the new data
      // setData((prevData) => ({
      //   ...prevData,
      //   data: prevData.data
      //     .filter((item) => item.id !== id)
      //     .concat(postResponse.data),
      // }));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error processing the record");
      console.error("Error:", error);
    }
  };

  const handleImageClick = (imgUrl) => {
    window.open(imgUrl, "_blank");
  };

  const handleDelete = () => {};
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
              <td>{item.description}</td>
              <td>
                <button
                  className="verify-btn"
                  onClick={() => handleVerify(item.id)}
                  disabled={item.verification} // Disable if already verified
                >
                  {item.verification ? "Verified" : "Verify"}
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleDelete(item.id)}
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
