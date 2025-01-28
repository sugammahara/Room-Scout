import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import AboutUs from "./components/AboutUs/AboutUs";
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/admin/AdminLogin";
import ContactUs from "./components/ContactUs/ContactUs";
import { Context } from "./utils/context";
import DeletePost from "./components/admin/DeletePost";
import DeleteUser from "./components/admin/DeleteUser";
import Flats from "./components/Flats/Flats";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Overview from "./components/Overview/Overview";
import Profile from "./components/Header/Profile/Profile";
import Rooms from "./components/Rooms/Rooms";
import VerifyPost from "./components/admin/VerifyPost";

function App() {
  const ClientLayout = ({ children }) => (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );

  const { user_for_profile } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Routes */}
        <Route
          path="/*"
          element={
            <ClientLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/Rooms/:id"
                  element={<Rooms heading={"category-Room"} />}
                />
                <Route
                  path="/Flats/:id"
                  element={<Flats heading={"category-Flat"} />}
                />
                <Route path="/o/:id" element={<Overview />} />
                <Route path="/cu/:id" element={<ContactUs />} />
                <Route path="/au/:id" element={<AboutUs />} />
                <Route
                  path="/p/:id"
                  element={<Profile username={user_for_profile} />}
                />
              </Routes>
            </ClientLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <Admin>
              <Routes>
                <Route path="/verify_post" element={<VerifyPost />} />
                <Route path="/login" element={<AdminLogin />} />
                <Route path="/delete_user" element={<DeleteUser />} />
                <Route path="/delete_post" element={<DeletePost />} />
                <Route
                  path="*"
                  element={<Navigate to="/admin/verify_post" replace />}
                />
              </Routes>
            </Admin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
