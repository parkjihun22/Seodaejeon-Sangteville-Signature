import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import EmodelInline from "../../components/EmodelInline/EmodelInline";

const menuContents = [
  { title: "109OA", url: "/FloorPlan/109OA" },
  { title: "84B", url: "/FloorPlan/84B" },
  { title: "84C", url: "/FloorPlan/84C" },
  { title: "104OB", url: "/FloorPlan/104OB" },
  { title: "109OA", url: "/FloorPlan/109OA" },
  { title: "110OC", url: "/FloorPlan/110OC" },
  // { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
];

const Emodel = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
  <div>서대전 상떼빌 시그니처의 타입별 공간을 온라인으로 확인</div>
  <div>아파트 84A·84B·84C와 오피스텔 104·109·110㎡ 타입을 살펴보세요.</div>
</div>
      <EmodelInline />

      <Footer />
    </div>
  );
};

export default Emodel;
