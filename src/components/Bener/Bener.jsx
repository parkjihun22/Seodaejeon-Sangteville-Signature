import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "서대전 상떼빌 시그니처" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="서대전 상떼빌 시그니처 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "서대전상떼빌시그니처",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "공급일정",
    "공급안내",
    "민간임대안내",
    "모집안내",
    "계약서류안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "동호수배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "62OB㎡평면도",
    "63OA㎡평면도",
    "104OB㎡평면도",
    "109OA㎡평면도",
    "110OC㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
    "방문예약",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          대전 중구 유천동에서 만나는 새로운 주거 가치.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          서대전 상떼빌 시그니처, 최고 47층 주상복합 랜드마크.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          10년 장기일반민간임대로 누리는 안정적인 주거생활을 만나보세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          서대전 상떼빌 시그니처의 사업개요와 공급 안내.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          공동주택 324세대와 주거형 오피스텔 184실, 총 508호 규모.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          아파트 84㎡와 오피스텔 62㎡·63㎡·104㎡·109㎡·110㎡ 타입을
          확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          서대전 상떼빌 시그니처
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          서대전역과 대전 도시철도 2호선 트램 예정지를 가까이 누리는
          교통환경.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          유천·태평 생활권의 교육, 쇼핑, 의료, 생활 인프라를 편리하게
          이용할 수 있습니다.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          최고 47층 스카이라인과 실용적인 공간 구성을 갖춘 주상복합
          단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          일상의 여유를 더하는 조경과 커뮤니티, 생활 편의 설계를
          확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          서대전 상떼빌 시그니처가 유천동의 새로운 주거 기준을
          제안합니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          서대전 상떼빌 시그니처의 공급 소식과 모델하우스 방문예약
          안내를 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 임대조건, 공급 일정, 평면 및 상담 정보를
          안내받으실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      서대전 상떼빌 시그니처 홈페이지에서 사업개요, 입지환경, 평면도와
      방문예약 정보를 확인하세요.
    </div>
  );
};