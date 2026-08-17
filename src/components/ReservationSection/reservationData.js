const reservationData = {
  eyebrow: "RESERVATION",
  title: "모델하우스 방문예약",
  description:
    "서대전 상떼빌 시그니처 방문예약을 남겨주시면 전문 상담원이 순차적으로 연락드려 모델하우스 위치, 방문 가능 시간과 상담 준비사항을 안내드립니다.",
  notice:
    "방문 전 아파트 또는 오피스텔 중 관심 상품과 상담 희망 내용을 남겨주시면 아파트 84㎡A·B·C 및 오피스텔 62㎡·63㎡·104㎡·109㎡·110㎡의 평면과 임대조건을 더욱 정확하게 안내해 드릴 수 있습니다.",
  formAction: "https://formspree.io/f/meajravr",
  points: [
    {
      id: "address",
      label: "ADDRESS SMS",
      title: "모델하우스 주소 안내",
      text: "예약 등록 후 상담 절차에 따라 모델하우스 위치와 방문 가능 시간을 안내해 드립니다.",
    },
    {
      id: "unit",
      label: "UNIT CHECK",
      title: "관심 상품 및 평형 상담",
      text: "아파트 84A·84B·84C와 오피스텔 62㎡·63㎡·104㎡·109㎡·110㎡ 타입별 평면 및 공간 구성을 안내합니다.",
    },
    {
      id: "schedule",
      label: "RENTAL GUIDE",
      title: "민간임대 공급 안내",
      text: "10년 장기일반민간임대의 신청 자격, 임대조건, 공급 일정과 계약 절차 등 필요한 정보를 상담합니다.",
    },
  ],
  fields: [
    {
      id: "name",
      name: "name",
      label: "고객명",
      type: "text",
      placeholder: "고객명을 입력해 주세요",
      required: true,
      autoComplete: "name",
    },
    {
      id: "phone",
      name: "phone",
      label: "연락처",
      type: "tel",
      placeholder: "010-0000-0000",
      required: true,
      inputMode: "tel",
      autoComplete: "tel",
      pattern: "^01[0-9][-\\s]?[0-9]{3,4}[-\\s]?[0-9]{4}$",
      title: "예: 01012345678 또는 010-1234-5678",
    },
  ],
  messageField: {
    id: "message",
    name: "message",
    label: "문의 내용",
    placeholder:
      "관심 상품과 평형, 방문 희망일, 상담 희망 내용을 남겨주세요",
    rows: 5,
  },
  submitLabel: "방문예약 등록",
};
export default reservationData;
