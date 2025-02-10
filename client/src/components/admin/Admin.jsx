import "./admin.css";

import React, { useEffect, useState } from "react";

import AdminLogin from "./AdminLogin";
import { useLocation } from "react-router-dom";

const Admin = ({ children }) => {
  const location = useLocation(); // Get the current route
  const [user, set_user] = useState();
  const isActive = (path) => location.pathname === path; // Check if route matches
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("admin_data"));
    if (user) {
      set_user(user);
    }
  }, []);
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>Admin Panel</h1> {user && <h1>{user.name}</h1>}
        {user && (
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem("admin_data");
              window.location.reload();
            }}
          >
            LogOut
          </button>
        )}
      </header>
      {user && (
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
                    Verify Post
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
      )}

      {!user && <AdminLogin />}
    </div>
  );
};

export default Admin;
