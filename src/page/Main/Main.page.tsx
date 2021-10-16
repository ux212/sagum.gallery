// Import Libraries
import { useState } from "react";
import { Link } from "react-router-dom";

// Import JSON
import { WorkData } from "assets/json";

// Import SCSS
import "./Main.page.scss";

export const Main = () => {
  const [hoverBtnThumbnail, setHoverBtn] = useState<undefined | string[]>();

  const WorkList = () => {
    return (
      <div className="flex-1">
        {WorkData.map((value, index) => {
          return (
            <div key={index}>
              <div className="inline-block">
                <Link
                  to={{
                    pathname: "/work",
                    state: index,
                  }}
                  onMouseEnter={() =>
                    setHoverBtn([value.thumbnail, value.name[0]])
                  }
                  onMouseLeave={() => setHoverBtn(undefined)}
                  className="font-bold text-8xl float-left mr-3 mb-4 underline hover:text-shadow"
                >
                  <h2>{value.name[0]}</h2>
                </Link>
                <p className="font-medium text-4xl float-right">0{value.id}</p>
              </div>
              <p className="font-medium text-4xl">{value.name[1]}</p>
            </div>
          );
        })}
      </div>
    );
  };

  const WorkThumbnail = () => {
    return (
      <div className="">
        {hoverBtnThumbnail === undefined ? null : (
          <img
            className="max-w-3xl float-right"
            src={hoverBtnThumbnail[0]}
            alt={hoverBtnThumbnail[1]}
          />
        )}
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
