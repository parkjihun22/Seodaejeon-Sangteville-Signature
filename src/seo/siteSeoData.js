const SITE_URL = "https://sinbiapt.co.kr/";

export const siteSeo = {
  siteName: "서대전 상떼빌 시그니처",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,
  defaultDescription:
    "서대전 상떼빌 시그니처 안내 홈페이지입니다. 대전광역시 중구 유천동 332-28번지 일원에 조성되는 10년 장기일반민간임대 주상복합으로, 공동주택 324세대와 주거형 오피스텔 184실, 총 508호 규모의 사업정보와 모델하우스 방문예약을 안내합니다.",

  project: {
    addressCountry: "KR",
    addressRegion: "대전광역시",
    addressLocality: "중구",
    streetAddress: "유천동 332-28번지 일원",
    brands: [
      "서대전 상떼빌 시그니처",
      "상떼빌",
      "성원건설",
    ],
    navigationSchemaName: "서대전 상떼빌 시그니처 주요 메뉴",
  },

  keywords: [
    "서대전 상떼빌 시그니처",
    "서대전상떼빌시그니처",
    "서대전 상떼빌",
    "상떼빌 시그니처",
    "대전 상떼빌",
    "유천동 상떼빌",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      {
        name: "브랜드소개",
        path: "/Brand/intro",
      },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
      {
        name: "분양일정",
        path: "/BusinessGuide/plan",
      },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "84㎡A",
        path: "/FloorPlan/59A",
      },
      {
        name: "84㎡B",
        path: "/FloorPlan/59B",
      },
      {
        name: "84㎡C",
        path: "/FloorPlan/84A",
      },
      {
        name: "104OB㎡",
        path: "/FloorPlan/84B",
      },
      {
        name: "109OA",
        path: "/FloorPlan/114A",
      },
      {
        name: "110OC",
        path: "/FloorPlan/114B",
      },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "서대전 상떼빌 시그니처 | 유천동 10년 장기일반민간임대",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 브랜드소개 페이지입니다. 성원건설 상떼빌의 주거 가치와 대전 중구 유천동에 조성되는 주상복합 단지의 비전을 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 사업안내입니다. 대전광역시 중구 유천동 332-28번지 일원, 지상 최고 47층, 공동주택 324세대와 주거형 오피스텔 184실로 구성되는 총 508호 규모의 사업정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 일정 안내입니다. 10년 장기일반민간임대의 공급 일정, 신청 및 상담 일정과 계약 관련 안내사항을 확인하세요.",
    menu: "사업안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 입지환경 안내입니다. 서대전역과 계백로, 대전 도시철도 2호선 트램 예정지 및 유천·태평 생활권의 교통·교육·쇼핑·의료 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 프리미엄 안내입니다. 지상 최고 47층 주상복합 설계, 총 508호 규모, 유천동 도심 생활권과 10년 장기일반민간임대의 주요 특징을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 단지배치도 안내입니다. 공동주택 3개동과 주거형 오피스텔 1개동으로 계획된 주상복합 단지의 배치와 생활 동선을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 호수배치도 안내입니다. 아파트와 주거형 오피스텔의 동·호수 구성 및 타입별 배치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 커뮤니티 안내입니다. 입주민의 건강과 여가, 휴식과 소통을 고려한 커뮤니티 공간 및 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title: "아파트 84㎡A 평면도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 아파트 84㎡A 평면도 안내입니다. 가족생활과 효율적인 공간 활용을 고려한 평면 구성 및 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title: "아파트 84㎡B 평면도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 아파트 84㎡B 평면도 안내입니다. 실용적인 공간 구성과 수납, 주거 편의성을 고려한 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan75A: page({
    path: "/FloorPlan/84A",
    title: "아파트 84㎡C 평면도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 아파트 84㎡C 평면도 안내입니다. 가족 구성원의 생활방식과 효율적인 공간 활용을 고려한 타입 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan75B: page({
    path: "/FloorPlan/84B",
    title: "오피스텔 104OB㎡ 평면도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 주거형 오피스텔 104OB㎡ 평면도 안내입니다. 여유로운 실내 구성과 실용적인 공간 활용 및 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/114A",
    title: "오피스텔 109OA㎡ 평면도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 주거형 오피스텔 109OA㎡ 평면도 안내입니다. 주거 편의성과 공간 효율을 고려한 평면 구성 및 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/114B",
    title: "오피스텔 110OC㎡ 평면도 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 주거형 오피스텔 110OC㎡ 평면도 안내입니다. 넉넉한 공간 구성과 실용적인 수납 계획 및 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 E-모델하우스입니다. 아파트 84㎡A·B·C와 오피스텔 104OB㎡·109OA㎡·110OC㎡ 타입의 실내 구조와 생활 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 서대전 상떼빌 시그니처",
    description:
      "서대전 상떼빌 시그니처 관심고객등록 페이지입니다. 10년 장기일반민간임대 공급 일정, 임대조건, 타입 안내와 모델하우스 방문예약 정보를 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 서대전 상떼빌 시그니처",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 서대전 상떼빌 시그니처 홈페이지의 사업안내, 입지환경, 단지안내, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};