import { useParams, useNavigate } from "react-router-dom";

export default function OneLocation({ locations, lostItems, allUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let oneLocation = locations?.find((location) => location?._id === id);
  let singleBeachItems = lostItems?.filter(
    (beachItem) => beachItem?.location === id
  );

  
  
  console.log(allUsers)

  return (
    <>
      <h2>{oneLocation?.name}</h2>
      <div className="items-container">
        {singleBeachItems.map((item, idx) => (
          <div className="item-tile">
            <h3>{item?.name}</h3>
            <p>{item?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
