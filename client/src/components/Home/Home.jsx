import "./Home.scss";
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Flats from "../Flats/Flats";
import Rooms from "../Rooms/Rooms";
import axios from "axios";
import AboutUs from "../AboutUs/AboutUs";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Rooms heading="Rooms" />
          <Flats heading="Flats" />
        </div>
      </div>
    </div>
  );
};

export default Home;
