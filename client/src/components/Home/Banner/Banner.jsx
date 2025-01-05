import "./Banner.scss";
import bannerimg from "../../../assets/bgbanner.jpg";
import banner2 from "../../../assets/banner2.webp";
import banner from "../../../assets/banner.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="mt-2">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2500}
        infiniteLoop={true}
      >
        <div>
          <img className="h-[500px] w-80" src={banner} alt="banner" />
        </div>
        <div>
          <img className="h-[500px]" src={banner2} alt="" />
        </div>
      </Carousel>

    </div>
  );
};

export default Banner;
