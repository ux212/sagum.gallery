// Import JSON Files
import { WorkData } from "assets/json";

// Import SCSS
import "./Work.page.scss";

export const Work = ({ location }) => {
  let dataNum;

  if (location.state === undefined) {
    dataNum = 0;
  } else {
    dataNum = location.state;
  }

  const selData = WorkData[dataNum];

  const Title = () => {
    const TopScript = () => {
      const LeftScript = () => {
        return (
          <div className="left-script">
            {selData.script[0].split("\n").map((value, index) => {
              return (
                <p key={index}>
                  <span>{value}</span>
                  <br />
                </p>
              );
            })}
          </div>
        );
      };

      const RightScript = () => {
        if (selData.script[1] === undefined) {
          return null;
        } else {
          return (
            <div className="right-script">
              {selData.script[1].split("\n").map((value, index) => {
                return (
                  <p key={index}>
                    <span>{value}</span>
                    <br />
                  </p>
                );
              })}
            </div>
          );
        }
      };
      return (
        <div className="top-script">
          <LeftScript />
          <RightScript />
        </div>
      );
    };

    const BottomScript = () => {
      if (selData.script[2] === undefined) {
        return null;
      } else {
        return (
          <div className="bottom-script">
            {selData.script[2].split("\n").map((value, index) => {
              return (
                <p key={index}>
                  <span>{value}</span>
                  <br />
                </p>
              );
            })}
          </div>
        );
      }
    };

    const TitleImg = () => {
      if (selData.titleImg === undefined) {
        return null;
      } else {
        return <img src={selData.titleImg} alt={selData.name[0]} />;
      }
    };

    return (
      <div className="work-title">
        <h1>{selData.name[0]}</h1>
        {selData.name[0] === "검은방" ? (
          <>
            <a href="https://youtu.be/QeFv6dg-QWY">
              <span className="dark-room">검은방 체험하기</span>
              <span> &gt;</span>
            </a>
          </>
        ) : null}
        <TopScript />
        <TitleImg />
        <BottomScript />
      </div>
    );
  };

  const WorkAppreciate = () => {
    const worksData = selData.works;
    if (worksData[0].img === undefined) {
      return null;
    } else {
      return (
        <>
          <div className="line" />
          <div className="work-appreciate">
            {worksData.map((value, index) => {
              return (
                <div className="work-appreciate-element" key={index}>
                  {value.video === undefined ? (
                    <img src={value.img} alt={value.name} />
                  ) : (
                    <video src={value.video} autoPlay loop />
                  )}
                  <div className="work-explanation">
                    <p className="work-name">{value.name}</p>
                    <div className="work-form">
                      {value.form?.split("\n").map((value, index) => (
                        <p key={index}>{value}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    }
  };

  return (
    <div className="work">
      <Title />
      <WorkAppreciate />
      <button
        className="scroll-up"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p>Scroll up</p>
      </button>
    </div>
  );
};
