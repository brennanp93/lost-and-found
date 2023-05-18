import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewItemForm() {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    location: "",
    user: "",
    dateLost: "",
  });
  return (
    <>
      <div>
        <form onSubmit={""}>
          <h5>Item Name:</h5>
          <div>
            <input
              type="text"
              name="companyName"
              value="VALUE"
              onChange="ONCHANGE"
              required
              autoComplete="off"
              placeholder="Company Name"
            />
          </div>
          <h5>Item Description</h5>
          <div>
            <input
              type="text"
              name="jobTitle"
              value="VALUE"
              onChange="ONCHANGE"
              required
              autoComplete="off"
              placeholder="Job Title"
            />
          </div>
          <h5>Date Lost:</h5>
          <div>
            <input type="date" name="dateApplied" value="VALUE" onChange="ONCHANGE" required autoComplete="off" />
          </div>
          <h5>Item Description:</h5>
          <div>
            <textarea
              type="text"
              name="jobDescription"
              value="VALUE"
              onChange="ONCHANGE"
              autoComplete="off"
              placeholder="Job Description"
              cols={40}
              rows={10}
            />
          </div>
          <button type="submit">
            <img src="./add-new.png" alt="" />
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
