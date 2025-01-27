// const deleteItem = async (id) => {
//   try {
//     await axios.delete(`${process.env.REACT_APP_DEV_URL}/alls/${id}`);
//     setAlls((prevAlls) => prevAlls.filter((item) => item.id !== id));
//   } catch (error) {
//     console.error("Error deleting item:", error);
//   }
// };
import "./admin.css";

import React from "react";

const Admin = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>Admin Panel</h1>
        <button className="logout-btn">LogIn</button>
        <button className="logout-btn">Logout</button>
      </header>
      <div className="admin-container">
        <aside className="admin-sidebar">
          <nav>
            <ul>
              <li>
                <a href="/admin/verify_post">Verify User</a>
              </li>
              <li>
                <a href="/admin/delete_user">Delete User</a>
              </li>
              <li>
                <a href="/admin/delete_post">Delete Post</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
};

export default Admin;
