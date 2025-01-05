import "./R-view.scss";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
const Rview = ({ type }) => {
  const { id } = useParams();
  const Navigate = useNavigate();
  let { data } = useFetch(
    `/api/alls?populate=*&filters[type]=${type}&filters[id][$ne]=${id}`
  );

  return (
    <div className="Rooms-container">
      <div className="sec-heading">{type}</div>
      <div className="Rooms">
        <>
          {data &&
            data.data.map((item) => (
              <div key={item.id} className="RelatedRooms-card">
                <div
                  onClick={() => Navigate(`/o/${item.id} `)}
                  className="thumbnail"
                >
                  {item.attributes.img.data && (
                    <img
                      src={
                        process.env.REACT_APP_DEV_URL +
                        item.attributes.img.data[0].attributes.url
                      }
                      alt=""
                    />
                  )}
                </div>

                <div className="Rooms-details">
                  <span className="location">{item.attributes.location}</span>
                  <span className="price">&#8377;{item.attributes.price}</span>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

export default Rview;
