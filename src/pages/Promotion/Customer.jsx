// src/pages/Promotion/Customer.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Promotion.module.scss";

import Header from "../../components/Header/Header";
import FixIcon from "../../components/FixIcon/FixIcon";
import Bener from "../../components/Bener/Bener";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";

export default function Customer() {
  const { pathname } = useLocation();

  // 페이지가 변경될 때 화면 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 폼 상태
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // 전송 중 플래그 및 결과 메시지
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setResultMessage("");

    try {
      // Formspree 엔드포인트로 POST
      const res = await fetch("https://formspree.io/f/meajravr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (res.ok) {
        setResultMessage(
          "✅ 등록이 완료되었습니다. 곧 전문상담원이 연락드리도록 하겠습니다."
        );

        // 폼 초기화
        setForm({
          name: "",
          phone: "",
          message: "",
        });
      } else {
        setResultMessage(
          "❌ 등록에 실패했습니다. 내용을 확인한 후 다시 시도해주세요."
        );
      }
    } catch (err) {
      console.error("방문예약 등록 오류:", err);

      setResultMessage(
        "⚠️ 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const promoMenu = [
    {
      key: "newsletter",
      title: "언론보도",
      url: "/Promotion/Press",
    },
    {
      key: "interest",
      title: "방문예약등록",
      url: "/Promotion/Customer",
    },
  ];

  return (
    <>
      <Header />
      <FixIcon />

      {/* 배너 */}
      <Bener title="관심고객등록" />

      {/* 네비게이션 탭 */}
      <MenuBar contents={promoMenu} />

      {/* 좌·우 카드 레이아웃 */}
      <div className={styles.customerWrap}>
        {/* ─── 좌측 카드 ─── */}
        <div className={styles.customerLeft}>
          <div className={styles.textBlock}>
            <h2 className={styles.projectName}>
              서대전 상떼빌 시그니처
            </h2>

            <h3 className={styles.pageTitle}>
              방문예약등록
            </h3>
          </div>

          <img
            src="/img/sample1.jpg"
            alt="서대전 상떼빌 시그니처 방문예약등록"
            className={styles.mainImage}
          />

          <div className={styles.serviceSection}>
            <span className={styles.serviceBadge}>
              CUSTOMER SERVICE
            </span>

            <h4 className={styles.serviceTitle}>
              방문예약등록
            </h4>

            <p className={styles.serviceDesc}>
              문의사항을 남겨주시면 빠르게 답변드리겠습니다.
              <br />
              방문예약 등록 시 서대전 상떼빌 시그니처의 분양 소식을
              받아보실 수 있습니다.
            </p>

            <div className={styles.serviceLine}></div>
          </div>

          <div className={styles.custInfo}>
            <div className={styles.custItem}>
              <i className="icon-phone" />

              <div className={styles.infoText}>
                <strong>대표번호</strong>
                <span>1533-8848</span>
              </div>
            </div>

            <div className={styles.custItem}>
              <i className="icon-clock" />

              <div className={styles.infoText}>
                <strong>상담시간</strong>
                <span>24시간 상담</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 우측 카드: 방문예약 폼 ─── */}
        <div className={styles.customerRight}>
          {/* 전송 결과 메시지 */}
          {resultMessage && (
            <div
              className={styles.submitResult}
              role="status"
              aria-live="polite"
            >
              {resultMessage}
            </div>
          )}

          <form
            className={styles.custForm}
            onSubmit={handleSubmit}
          >
            {/* 고객명 */}
            <label
              className={styles.fieldLabel}
              htmlFor="customer-name"
            >
              고객명
              <span className={styles.required}></span>
            </label>

            <input
              id="customer-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="고객명"
              autoComplete="name"
              required
            />

            {/* 연락처 */}
            <label
              className={styles.fieldLabel}
              htmlFor="customer-phone"
            >
              연락처
              <span className={styles.required}></span>
            </label>

            <input
              id="customer-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="010-1234-5678"
              autoComplete="tel"
              inputMode="tel"
              required
            />

            {/* 문의 내용 */}
            <label
              className={styles.fieldLabel}
              htmlFor="customer-message"
            >
              문의 내용
              <span className={styles.required}></span>
            </label>

            <textarea
              id="customer-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="관심 주택형 또는 문의 내용을 입력해주세요."
            />

            <button
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "등록 중..." : "등록하기"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}