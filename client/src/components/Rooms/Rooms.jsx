import "./Rooms.scss";

import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Rooms = ({ heading }) => {
  const Navigate = useNavigate();
  const { data } = useFetch(
    `/api/alls?populate=*&filters[type]=rooms&filters[verification]=true`
  );

  if (!data) return;
  console.log(data);

  return (
    <div className="Rooms-container ">
      <div className="pl-8 sec-heading">{heading}</div>
      <div className="grid grid-cols-5 gap-4 pl-8 Rooms">
        <>
          {data &&
            data.data.map((item, key) => (
              <div className="RelatedRooms-card" key={key}>
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

                <div className="Rooms-details">
                  <div key={item.id} className="location">
                    {item.title}
                  </div>
                  <div key={item.id} className="location">
                    {item.location}
                  </div>
                  <span key={`price-${item.id}`} className="price">
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

export default Rooms;
