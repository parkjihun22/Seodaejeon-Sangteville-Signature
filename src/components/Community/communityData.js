import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 주거 설계",
  description:
    "서대전 상떼빌 시그니처는 공동주택 324세대와 주거형 오피스텔 184실, 총 508호 규모의 주상복합 단지로 계획되어 주거와 휴식, 여가와 생활 편의가 조화롭게 이어지는 공간을 제안합니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "서대전 상떼빌 시그니처 주상복합 단지 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "도심 생활의 편의성을 고려한 단지 배치",
      description:
        "공동주택과 주거형 오피스텔의 특성을 고려한 효율적인 배치와 생활 동선을 통해 편리하고 쾌적한 주거환경을 제안합니다.",
      image: layoutImage,
      alt: "서대전 상떼빌 시그니처 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "최고 47층의 상징적인 주상복합 설계",
      description:
        "대전 중구 유천동의 새로운 스카이라인을 제시하는 최고 47층 규모의 주상복합 설계로 상징성과 주거 편의성을 함께 담았습니다.",
      image: designImage,
      alt: "서대전 상떼빌 시그니처 주상복합 특화 설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "일상에 활력을 더하는 커뮤니티 공간",
      description:
        "입주민의 건강과 여가, 휴식과 소통을 고려한 다양한 커뮤니티 공간을 통해 더욱 여유롭고 풍요로운 주거생활을 제공합니다.",
      image: communityImage,
      alt: "서대전 상떼빌 시그니처 커뮤니티 시설",
    },
  ],
};