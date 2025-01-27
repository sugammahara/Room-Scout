import React, { useContext } from 'react'
import "../../../Overview/R-view/R-view.scss"
import { Context } from '../../../../utils/context';
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
const ProfilePost = () => {
    const {user_for_profile}= useContext(Context);
const Navigate = useNavigate();
    let { data } = useFetch( `/api/alls?populate=*&filters[username]=${user_for_profile}`);

  return (
    <div>
      <div className="Rooms-container">
      <div className="sec-heading">Uploads By : {user_for_profile}</div>
      <div className="Rooms">
        <>
          {data &&
            data?.data?.map((item) => (
              <div className="RelatedRooms-card">
                <div
                  key={item.id}
                  onClick={() => Navigate(`/o/${item.id}`)}
                  className="thumbnail"
                >
                {item.img &&  <img
                    src={
                      process.env.REACT_APP_DEV_URL +
                      item.img.url
                    }
                    alt=""
                  />
}

                </div>

                <div className="Rooms-details">
                <span key={item.id} className="location">
                    {item.location}
                  </span>
                  <span key={item.id} className="price">
                    &#8377;{item.price}
                  </span>
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
    </div>
  )
}

export default ProfilePost
