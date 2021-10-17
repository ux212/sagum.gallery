import Thumbnail from "assets/img/Thumbnails/music-and-movie.png";
import Wish from "assets/img/MusicAndMovie/wish.png";
import ForgotU from "assets/img/MusicAndMovie/forgot.png";
import Fall from "assets/img/MusicAndMovie/fall.png";
import Valhalla from "assets/img/MusicAndMovie/valhalla.png";
import Delusion from "assets/img/MusicAndMovie/delusion.png";
import DelusionVideo from "assets/video/delusion.mp4";

export const MusicAndMovieData = {
  id: 1,
  name: ["음영뎐: 음악과 영화", "Music and Movie"],
  thumbnail: Thumbnail,
  script: [
    "기술과 법률 그리고 의학 같은 것들은 삶을\n유지하는데 필요한 것이라고 합니다. 그러나\n사랑과 낭만, 예술과 같은 미적 요소들은 삶의\n목적 그 자체가 된다고 하죠.\n\n영화 <죽은 시인의 사회>에서 언급된 내용입니다.\n그만큼 우리 삶에 많은 영향을 끼치는 ‘음악과 영화’를\n저희만의 방식으로 표현하고 이야기해 보려 합니다.",
  ],
  works: [
    { name: "소원", img: Wish, form: "(500mm x 500mm),\n그래픽 인쇄" },
    { name: "Forgot U", img: ForgotU, form: "(500mm x 500mm),\n그래픽 인쇄" },
    { name: "낙하", img: Fall, form: "(500mm x 500mm),\n그래픽 인쇄" },
    { name: "발할라", img: Valhalla, form: "(500mm x 500mm),\n그래픽 인쇄" },
    {
      name: "망상",
      img: Delusion,
      video: DelusionVideo,
      form: "(800mm x 500mm),\n프로젝터로 맵핑",
    },
  ],
};
