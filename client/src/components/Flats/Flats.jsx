import "./Flats.scss";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Flats = ({ heading }) => {
  const Navigate = useNavigate();
  const { data } = useFetch(`/api/alls?populate=*&filters[type]=flats`);
  if (!data) return;
  return (
    <div className="pl-8 Flats-container">
      <div className="sec-heading ">{heading}</div>

      <div className="mb-20 Flats">
        <>
          {data &&
            data.data.map((item) => (
              <div className="RelatedFlats-card">
                <div
                  key={item.id}
                  onClick={() => Navigate(`/o/${item.id}`)}
                  className="thumbnail"
                >
                  {item.img && (
                    <img
                      className="object-contain w-full h-full"
                      src={process.env.REACT_APP_DEV_URL + item.img.url}
                      alt=""
                    />
                  )}
                </div>
                <div className="Flats-details">
                  <div key={item.id} className="location">
                    {item.title}
                  </div>
                  <div key={item.id} className="location">
                    Location: {item.location}
                  </div>
                  <span key={item.id} className="price">
                    रू {item.price}
                  </span>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

export default Flats;
