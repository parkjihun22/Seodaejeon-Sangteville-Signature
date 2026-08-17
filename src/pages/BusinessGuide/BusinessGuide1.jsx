import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "서대전 상떼빌 시그니처",
  },

  {
    label: "사업명",
    value: "대전 중구 유천동 장기일반민간임대아파트 신축사업",
  },

  {
    label: "대지위치",
    value: "대전광역시 중구 유천동 332-28번지 일원",
  },

  {
    label: "규모",
    value: "공동주택 3개동 및 오피스텔 1개동, 지상 최고 47층",
  },

  {
    label: "공급규모",
    value: "총 508호 (공동주택 324세대 · 오피스텔 184실)",
  },

  {
    label: "주택형",
    value:
      "아파트 84㎡A·84㎡B·84㎡C / 오피스텔 62㎡·63㎡·104㎡·109㎡·110㎡",
  },

  {
    label: "공급형태",
    value: "10년 장기일반민간임대",
  },

  {
    label: "용도",
    value: "공동주택·업무시설(오피스텔) 및 근린생활시설",
  },

  {
    label: "시공사",
    value: "성원건설",
  },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>대전광역시 중구 유천동에 계획된 총 508호 주상복합 단지</div>
  <div>서대전 상떼빌 시그니처, 새로운 주거 가치를 완성합니다.</div>
</div>

<img className={styles.img3} src={page1} alt="서대전 상떼빌 시그니처 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="서대전 상떼빌 시그니처 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
