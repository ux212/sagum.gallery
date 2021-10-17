// Import Libraries
import { useState } from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

// Import JSON
import { WorkData } from "assets/json";

// Import SCSS
import "./Main.page.scss";

export const Main = () => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isHover, setHover] = useState(false);

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
                    setHover(true);
                    setHoverIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                    setTimeout(() => setHoverIndex(0), 500);
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
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <img
            style={isHover ? { opacity: 1 } : { opacity: 0 }}
            src={WorkData[hoverIndex].thumbnail}
            alt={hoverIndex?.toString()}
            key={hoverIndex?.toString()}
          />
        </CSSTransitionGroup>
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
