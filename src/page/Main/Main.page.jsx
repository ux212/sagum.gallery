// Import Libraries
import { useState } from "react";
import { Link } from "react-router-dom";

// Import JSON
import { WorkData } from "assets/json";

// Import SCSS
import "./Main.page.scss";

export const Main = () => {
  const [hoverThumb, setHoverThumb] = useState(0);

  const WorkList = () => {
    return (
      <div className="work-list">
        {WorkData.map((value, index) => {
          return (
            <div key={index}>
              <div className="title-ko">
                <Link
                  to={{
                    pathname: "/work",
                    state: index,
                  }}
                  onMouseEnter={() => {
                    setHoverThumb([value.thumbnail, value.id[0]]);
                  }}
                  onMouseLeave={() => {
                    setTimeout(() => setHoverThumb(0), 300);
                  }}
                >
                  <h2>{value.name[0]}</h2>
                </Link>
                <p className="index">0{value.id}</p>
              </div>
              <p className="title-en">{value.name[1]}</p>
            </div>
          );
        })}
      </div>
    );
  };

  const WorkThumbnail = () => {
    return (
      <div className="image">
        <img src={hoverThumb[0]} alt={hoverThumb[1]} />
      </div>
    );
  };

  return (
    <div className="main">
      <WorkList />
      <WorkThumbnail />
    </div>
  );
};
