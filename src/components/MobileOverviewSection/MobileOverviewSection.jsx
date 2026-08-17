// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>대전 중구 유천동 장기일반민간임대아파트 신축사업</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>대전광역시 중구 유천동 332-28번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>공동주택 3개동 및 오피스텔 1개동, 지상 최고 47층</span>
        </li>
        <li>
          <strong>공급규모</strong>
          <span>총 508호 (공동주택 324세대 · 오피스텔 184실)</span>
        </li>
        <li>
          <strong>주택정보</strong>
          <span>
            아파트 84㎡A·84㎡B·84㎡C / 오피스텔
            62㎡·63㎡·104㎡·109㎡·110㎡
          </span>
        </li>
        <li>
          <strong>공급형태</strong>
          <span>10년 장기일반민간임대</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>서대전역 및 대전 도시철도 2호선 트램 예정지 생활권</span>
        </li>
        <li>
          <strong>용도</strong>
          <span>공동주택·업무시설(오피스텔) 및 근린생활시설</span>
        </li>
        <li>
          <strong>시공사</strong>
          <span>성원건설</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="서대전 상떼빌 시그니처 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="서대전 상떼빌 시그니처 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
{/* 프리미엄 섹션 상단 문단 */}
<div className={styles.premiumIntro}>
  <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
  <p className={styles.premiumSubtitle}>
    서대전역과 유천·태평 생활권의 편리한 인프라를 누리는
    <br />
    서대전 상떼빌 시그니처 프리미엄 라이프
  </p>
</div>

{/* 슬라이더 */}
<PremiumSlider />
</>
),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "대전 중구 유천동 중심 입지",
      desc:
        "대전광역시 중구 유천동 332-28번지 일원<br/>유천·태평 생활권의 다양한 생활 인프라<br/>도심의 편리함을 가까이 누리는 주거환경",
    },
    {
      img: slide2,
      title: "아파트·오피스텔 타입 구성",
      desc:
        "아파트 84A·84B·84C 타입 구성<br/>오피스텔 62㎡·63㎡·104㎡·109㎡·110㎡ 구성<br/>다양한 생활방식을 고려한 실용적인 주거공간",
    },
    {
      img: slide3,
      title: "총 508호 주상복합 단지",
      desc:
        "공동주택 324세대와 주거형 오피스텔 184실<br/>공동주택 3개동과 오피스텔 1개동으로 구성<br/>지상 최고 47층의 상징적인 스카이라인",
    },
    {
      img: slide4,
      title: "교통·생활 인프라를 모두 누리다",
      desc:
        "서대전역과 계백로를 이용하는 편리한 교통환경<br/>대전 도시철도 2호선 트램 예정지 인접<br/>쇼핑·교육·의료시설이 이어지는 도심 생활권",
    },
    {
      img: slide5,
      title: "성원건설 상떼빌 브랜드",
      desc:
        "성원건설의 상떼빌 브랜드가 적용되는 주거단지<br/>입주민의 생활 편의를 고려한 단지 설계<br/>품격과 실용성을 함께 담은 주거공간",
    },
    {
      img: slide6,
      title: "10년 장기일반민간임대",
      desc:
        "장기간 안정적인 거주를 고려한 민간임대주택<br/>청약통장 부담 없이 만나는 새로운 주거 선택지<br/>세부 신청 자격과 임대조건은 모집안내문 기준",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>CHEONGJU HANYANG LIPS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="서대전 상떼빌 시그니처 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
