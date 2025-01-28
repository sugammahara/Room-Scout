import React, { useEffect } from "react";

import { removeDataFromApi } from "../../utils/api";
import useFetch from "../hooks/useFetch";

const DeleteUser = () => {
  const { data, setData } = useFetch("/api/owners?populate=*");
  const handleImageClick = (imgUrl) => {
    window.open(imgUrl, "_blank");
  };
  const handleDelete = async (id) => {
    const res = await removeDataFromApi(`/api/owners/` + id);
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
      <h2>Delete User </h2>
      <table className="verify-user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.data?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
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

              <td>{item.username}</td>
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

export default DeleteUser;
