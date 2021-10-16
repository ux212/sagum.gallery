import Thumbnail from "assets/img/Thumbnails/ordinary-exhibition.png";
import Title from "assets/img/Title/ordinary-exhibition.png";
import Family from "assets/img/OrdinaryExhibition/family.png";
import Generalization from "assets/img/OrdinaryExhibition/generalization.png";
import Education from "assets/img/OrdinaryExhibition/education.png";
import Ordinary from "assets/img/OrdinaryExhibition/ordinary.png";

export const OrdinaryExhibitionData = {
  id: 2,
  name: ["평범한 전시", "Ordinary Exhibition"],
  thumbnail: Thumbnail,
  script: [
    "평범한게 무엇 일까요?\n\n뛰어나지 않고 색이 없는 것?\n 아니면 기본? 혹은 중간?\n\n한 소년은 말했습니다. 튀지 않고 무난한 것,\n미움받지 않고 모나지 않고.\n\n또 한 노인은 말했습니다.\n평범은 바랄때 오지 않는 것이라고.",
    "어떤 사업가가 말했습니다.\n사회 기득권층이 만들어 놓은 프레임이라고.\n\n한 회사원이 말했습니다.\n익숙해지는 것 이라고.\n\n지나가던 예술가가 말했습니다.\n사회성을 위한 몸부림이라고.\n\n어딘가 굴러다니는 비관론자가 말했습니다.\n다들 평범 하지도 않으면서 우린 평범하다 라는\n말을 하며 뭉쳐 있는 것이라고.",
    "자, 다들 같은 사회에서 살아가는 사람들이지만\n생각하는 개념이 다릅니다.\n\n그래서 이번에 진행해볼 실험은\n“평범함에 대한 평범하지 않은 정의” 입니다.\n’평범하다'라는 단어를 너무 쉽게 생각하고 지나치시지는 않았나요?\n흔히 지나가며 쓰던 말은 그 뜻을 뜯어보면 정말 모호하고\n어려운 개념이기도 합니다.\n\n당신이 생각하는 평범은 무엇인가요?\n",
  ],
  titleImg: Title,
  works: [
    { name: "가족", img: Family, form: "(1000mm x 800mm), 캔버스에 인쇄" },
    {
      name: "일반화",
      img: Generalization,
      form: "(1000mm x 800mm), 캔버스에 인쇄",
    },
    { name: "교육", img: Education, form: "(700mm x 500mm), 캔버스에 인쇄" },
    { name: "평범", img: Ordinary, form: "(300mm x 300mm) * 3, 캔버스에 인쇄" },
  ],
};
