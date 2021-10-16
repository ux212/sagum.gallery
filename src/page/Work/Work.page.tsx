// Import JSON Files
import { WorkInfo } from "assets/json";

// Import Types
import { LocProp, WorkProp } from "Types";

export const Work: React.FC<LocProp> = ({ location }) => {
  let dataNum;

  if (location.state === undefined) {
    dataNum = 0;
  } else {
    dataNum = location.state;
  }

  const selInfo: WorkProp = WorkInfo[dataNum];

  const Title = () => {
    return (
      <>
        <h1>{selInfo.name[0]}</h1>
        <div className="script">
          {selInfo.script[0].split("\n").map((value) => {
            return (
              <>
                <h4>{value}</h4>
                <br />
              </>
            );
          })}
        </div>
        {selInfo.titleImg === undefined ? null : (
          <img src={selInfo.titleImg} alt={selInfo.name[0]} />
        )}
      </>
    );
  };

  return (
    <div className="work">
      <Title />
      <div className="line" />
      {selInfo.works.map(() => {
        return <div></div>;
      })}
    </div>
  );
};
