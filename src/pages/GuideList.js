import React from "react";
import { useGuidesContext } from "../hooks/useGuidesContext";
import { useAuthContext } from "../hooks/useAuthContext";

const GuideList = () => {
  const { guides } = useGuidesContext();
  const { user } = useAuthContext();

  console.log(user);
  console.log(guides);
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <ul className="collapsible z-depth-0 guides" style={{ border: "none" }}>
        {user &&
          guides &&
          guides.map((guide) => (
            <li key={guide.id}>
              <div className="collapsible-header grey lighten-4">
                {guide.title}
              </div>
              <div className="collapsible-body white">
                <span>{guide.content || "No description available"}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GuideList;
