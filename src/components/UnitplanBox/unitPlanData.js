import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "서대전 상떼빌 시그니처 타입안내",
  description:
    "서대전 상떼빌 시그니처는 아파트 84㎡A·84㎡B·84㎡C와 주거형 오피스텔 62㎡·63㎡·104㎡·109㎡·110㎡ 타입으로 구성됩니다. 아래에서는 주요 아파트 3개 타입과 오피스텔 3개 타입의 평면을 확인할 수 있습니다.",
  plans: [
    {
      id: "84A",
      type: "84A",
      name: "84A㎡",
      summary:
        "공간 구성과 생활 동선을 효율적으로 계획한 아파트 84A 타입입니다.",
      image: unit01,
      alt: "서대전 상떼빌 시그니처 아파트 84A㎡ 평면도",
      link: "/FloorPlan/84A",
    },
    {
      id: "84B",
      type: "84B",
      name: "84B㎡",
      summary:
        "실용적인 공간 활용과 주거 편의성을 고려한 아파트 84B 타입입니다.",
      image: unit02,
      alt: "서대전 상떼빌 시그니처 아파트 84B㎡ 평면도",
      link: "/FloorPlan/84B",
    },
    {
      id: "84C",
      type: "84C",
      name: "84C㎡",
      summary:
        "가족생활에 필요한 공간과 편리한 생활 동선을 담은 아파트 84C 타입입니다.",
      image: unit03,
      alt: "서대전 상떼빌 시그니처 아파트 84C㎡ 평면도",
      link: "/FloorPlan/84C",
    },
    {
      id: "104OB",
      type: "104OB",
      name: "104OB㎡",
      summary:
        "여유로운 실내 구성과 공간 활용을 고려한 주거형 오피스텔 104OB 타입입니다.",
      image: unit04,
      alt: "서대전 상떼빌 시그니처 오피스텔 104OB㎡ 평면도",
      link: "/FloorPlan/104OB",
    },
    {
      id: "109OA",
      type: "109OA",
      name: "109OA㎡",
      summary:
        "생활 편의성과 효율적인 주거 동선을 고려한 주거형 오피스텔 109OA 타입입니다.",
      image: unit05,
      alt: "서대전 상떼빌 시그니처 오피스텔 109OA㎡ 평면도",
      link: "/FloorPlan/109OA",
    },
    {
      id: "110OC",
      type: "110OC",
      name: "110OC㎡",
      summary:
        "넉넉한 공간 구성과 실용적인 수납 계획을 담은 주거형 오피스텔 110OC 타입입니다.",
      image: unit06,
      alt: "서대전 상떼빌 시그니처 오피스텔 110OC㎡ 평면도",
      link: "/FloorPlan/110OC",
    },
  ],
};