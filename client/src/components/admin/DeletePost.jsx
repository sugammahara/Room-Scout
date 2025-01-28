import React, { useEffect } from "react";

import { removeDataFromApi } from "../../utils/api";
import useFetch from "../hooks/useFetch";

const DeletePost = () => {
  const { data, setData } = useFetch(
    "/api/alls?populate=*&filters[verification]=true"
  );
  const handleImageClick = (imgUrl) => {
    window.open(imgUrl, "_blank");
  };
  const handleDelete = async (id) => {
    const res = await removeDataFromApi(`/api/alls/` + id);
    console.log(res);
    window.location.reload();
  };
  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("admin_data"));
      if (!user) {
        window.location.href = "/admin/login";
      }
    });
  return (
    <div className="verify-user-container">
      <h2>Delete Post </h2>
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
                  className="reject-btn"
                  onClick={() => handleDelete(item.documentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeletePost;
