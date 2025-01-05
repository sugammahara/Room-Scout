import "./Flats.scss";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const Flats = ({heading}) => {
  const Navigate = useNavigate();
  const { data } = useFetch(`/api/alls?populate=*&filters[type]=flats`);
  if (!data) return;
  return (
    <div className="Flats-container pl-8">
      <div className="sec-heading ">{heading}</div>

      <div className="Flats mb-20">
        <>
          {data &&
            data.data.map((item) => (
              <div className="RelatedFlats-card">
                <div
                  key={item.id}
                  onClick={() => Navigate(`/o/${item.id}`)}
                  className="thumbnail"
                >{item.attributes.img.data && 
                  <img
                    className="object-contain w-full h-full"
                    src={ 
                      process.env.REACT_APP_DEV_URL +
                      item.attributes.img.data[0].attributes.url
                    }
                    alt=""
                  />}
                </div>
                <div className="Flats-details">
                <div key={item.id} className="location">
                {item.attributes.location}
                  </div>
                  <span key={item.id} className="price">
                    रू {item.attributes.price}
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
