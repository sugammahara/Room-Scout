import "./admin.css";
import React from "react";
import { useLocation } from "react-router-dom";

const Admin = ({ children }) => {
  const location = useLocation(); // Get the current route

  const isActive = (path) => location.pathname === path; // Check if route matches

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
                <a
                  href="/admin/verify_post"
                  className={
                    isActive("/admin/verify_post") ? "active-link" : ""
                  }
                >
                  Verify User
                </a>
              </li>
              <li>
                <a
                  href="/admin/delete_user"
                  className={
                    isActive("/admin/delete_user") ? "active-link" : ""
                  }
                >
                  Delete User
                </a>
              </li>
              <li>
                <a
                  href="/admin/delete_post"
                  className={
                    isActive("/admin/delete_post") ? "active-link" : ""
                  }
                >
                  Delete Post
                </a>
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
