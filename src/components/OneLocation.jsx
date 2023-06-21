import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function OneLocation({ locations, lostItems, allUsers }) {
  const [lostBeachItems, setLostBeachItems] = useState()
  const { id } = useParams();
  const navigate = useNavigate();
  let oneLocation = locations?.find((location) => location?._id === id);
  let singleBeachItems = lostItems?.filter((beachItem) => beachItem?.location === id);


  console.log(singleBeachItems)

  return (
    <>
      <div className="beach-items-page">
        <h2>{oneLocation?.name}</h2>
        {!singleBeachItems?.length ? (
          <h3>No Lost Items Here</h3>
        ) : (
          <div className="beach-items-container">
            {singleBeachItems.map((item, idx) => (
              <div className="beach-items-tile" key={item?._id}>
                <h3 key={item?._id}>{item?.name}</h3>
                <p> {item?.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
