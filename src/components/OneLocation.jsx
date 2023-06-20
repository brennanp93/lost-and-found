import { useParams, useNavigate } from "react-router-dom";

export default function OneLocation({ locations, lostItems }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let oneLocation = locations?.find((location) => location?._id === id);
  let singleBeachItems = lostItems.filter(
    (beachItem) => beachItem?.location === id
  );
  console.log(singleBeachItems);

  return (
    <>
      <h2>{oneLocation?.name}</h2>
    </>
  );
}
