const data = [
  {
    id: 1,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 청주북대점",
    address: "충청북도 청주시 흥덕구 집대로 65 (북대동)",
    visitCount: 53,
    sales: "605,630",
  },
  {
    id: 2,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 하복대타운점",
    address: "충청북도 청주시 흥덕구 집대로 36 (북대동)",
    visitCount: 72,
    sales: "639,270",
  },
  {
    id: 3,
    welfareItem: "건강 관리",
    cardBusinessType: "약국",
    franchisorName: "홈플러스조은약국",
    address: "충청북도 청주시 흥덕구 서부로 1291 (가경동, 홈플러스 1층)",
    visitCount: 60,
    sales: "952,310",
  },
  {
    id: 4,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 봉명사거리점",
    address: "충청북도 청주시 흥덕구 봉명로 172",
    visitCount: 51,
    sales: "364,980",
  },
  {
    id: 5,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "CU 청주북대전점",
    address: "충청북도 청주시 흥덕구 북문로 199번길 18-1",
    visitCount: 205,
    sales: "1,613,880",
  },
  {
    id: 6,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 하복대타운점",
    address: "충청북도 청주시 흥덕구 집대로 36 (북대동)",
    visitCount: 72,
    sales: "639,270",
  },
  {
    id: 7,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 하복대타운점",
    address: "충청북도 청주시 흥덕구 집대로 36 (북대동)",
    visitCount: 72,
    sales: "639,270",
  },
  {
    id: 8,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 하복대타운점",
    address: "충청북도 청주시 흥덕구 집대로 36 (북대동)",
    visitCount: 72,
    sales: "639,270",
  },
  {
    id: 9,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 하복대타운점",
    address: "충청북도 청주시 흥덕구 집대로 36 (북대동)",
    visitCount: 72,
    sales: "639,270",
  },
  {
    id: 10,
    welfareItem: "비복지",
    cardBusinessType: "단란주점",
    franchisorName: "케이팝 노래타운",
    address: "충청북도 청주시 흥덕구 1순환로 569",
    visitCount: 52,
    sales: "1,926,040",
  },
  {
    id: 11,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "CU 서울역점",
    address: "서울특별시 용산구 청파로 378",
    visitCount: 85,
    sales: "854,700",
  },
  {
    id: 12,
    welfareItem: "건강 관리",
    cardBusinessType: "약국",
    franchisorName: "동서울약국",
    address: "서울특별시 광진구 강변역로 50",
    visitCount: 110,
    sales: "1,203,560",
  },
  {
    id: 13,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "세븐일레븐 강남점",
    address: "서울특별시 강남구 강남대로 132",
    visitCount: 64,
    sales: "530,120",
  },
  {
    id: 14,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 명동점",
    address: "서울특별시 중구 명동길 17",
    visitCount: 75,
    sales: "670,420",
  },
  {
    id: 15,
    welfareItem: "비복지",
    cardBusinessType: "단란주점",
    franchisorName: "하이볼바",
    address: "서울특별시 종로구 종로 12",
    visitCount: 44,
    sales: "3,210,590",
  },
  {
    id: 16,
    welfareItem: "건강 관리",
    cardBusinessType: "약국",
    franchisorName: "수원중앙약국",
    address: "경기도 수원시 팔달구 효원로 307",
    visitCount: 48,
    sales: "1,002,140",
  },
  {
    id: 17,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "CU 홍대입구점",
    address: "서울특별시 마포구 양화로 161",
    visitCount: 92,
    sales: "942,750",
  },
  {
    id: 18,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 이태원점",
    address: "서울특별시 용산구 이태원로 123",
    visitCount: 57,
    sales: "592,300",
  },
  {
    id: 19,
    welfareItem: "비복지",
    cardBusinessType: "단란주점",
    franchisorName: "와인바",
    address: "서울특별시 강남구 압구정로 44",
    visitCount: 33,
    sales: "4,020,000",
  },
  {
    id: 20,
    welfareItem: "건강 관리",
    cardBusinessType: "약국",
    franchisorName: "삼성약국",
    address: "서울특별시 서초구 서초대로 66",
    visitCount: 105,
    sales: "1,520,300",
  },
  {
    id: 21,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "CU 서초점",
    address: "서울특별시 서초구 서초대로 77",
    visitCount: 68,
    sales: "739,400",
  },
  {
    id: 22,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "GS25 반포점",
    address: "서울특별시 서초구 반포대로 45",
    visitCount: 76,
    sales: "810,500",
  },
  {
    id: 23,
    welfareItem: "건강 관리",
    cardBusinessType: "약국",
    franchisorName: "종로약국",
    address: "서울특별시 종로구 종로 5",
    visitCount: 84,
    sales: "950,250",
  },
  {
    id: 24,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "세븐일레븐 서울대점",
    address: "서울특별시 관악구 관악로 1",
    visitCount: 95,
    sales: "890,300",
  },
  {
    id: 25,
    welfareItem: "비복지",
    cardBusinessType: "단란주점",
    franchisorName: "재즈바",
    address: "서울특별시 마포구 와우산로 10",
    visitCount: 58,
    sales: "2,720,410",
  },
  {
    id: 26,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "CU 강남역점",
    address: "서울특별시 강남구 강남대로 1",
    visitCount: 125,
    sales: "1,134,670",
  },
  {
    id: 27,
    welfareItem: "건강 관리",
    cardBusinessType: "약국",
    franchisorName: "강남약국",
    address: "서울특별시 강남구 강남대로 2",
    visitCount: 73,
    sales: "1,020,480",
  },
  {
    id: 28,
    welfareItem: "생활 지원",
    cardBusinessType: "편의점",
    franchisorName: "세븐일레븐 압구정점",
    address: "서울특별시 강남구 압구정로 3",
    visitCount: 82,
    sales: "970,330",
  },
  {
    id: 29,
    welfareItem: "비복지",
    cardBusinessType: "단란주점",
    franchisorName: "루프탑바",
    address: "서울특별시 용산구 한강대로 7",
    visitCount: 39,
    sales: "3,450,120",
  },
];

const tbody = document.querySelector("table tbody");

// 페이지네이션
const pagination = document.querySelector(".pagination");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const firstPrevBtn = document.getElementById("first-prev");
const lastNextBtn = document.getElementById("last-next");
const pages = pagination.querySelectorAll(
  "a:not(#first-prev):not(#prev):not(#next):not(#last-next)"
);

// 현재 활성화된 페이지 번호
const rowsPerPage = window.innerWidth <= 400 ? 5 : 10; // 모바일에서 5개, PC에서 10개
let currentPage = 1;

function renderTable() {
  tbody.innerHTML = ""; // 기존 내용 비우기

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleData = data.slice(startIndex, endIndex);

  visibleData.forEach((item) => {
    const row = document.createElement("tr");

    // id 칼럼
    const idCell = document.createElement("td");
    idCell.textContent = item.id;
    idCell.classList.add("td-index");
    row.appendChild(idCell);

    // 복지 항목 칼럼
    const welfareItemCell = document.createElement("td");
    welfareItemCell.textContent = item.welfareItem;
    if (item.welfareItem === "비복지") {
      welfareItemCell.classList.add("error");
    } else {
      welfareItemCell.classList.add("td-welfare-items");
    }
    row.appendChild(welfareItemCell);

    // 카드 업종명 칼럼
    const cardBusinessTypeCell = document.createElement("td");
    cardBusinessTypeCell.textContent = item.cardBusinessType;
    cardBusinessTypeCell.classList.add("td-card-type");
    row.appendChild(cardBusinessTypeCell);

    // 가맹점명 칼럼
    const franchisorNameCell = document.createElement("td");
    franchisorNameCell.textContent = item.franchisorName;
    franchisorNameCell.classList.add("td-franchisor-name");
    row.appendChild(franchisorNameCell);

    // 주소 칼럼
    const addressCell = document.createElement("td");
    addressCell.textContent = item.address;
    addressCell.classList.add("td-address");
    row.appendChild(addressCell);

    // 방문 횟수 칼럼
    const visitCountCell = document.createElement("td");
    visitCountCell.textContent = item.visitCount;
    visitCountCell.classList.add("td-visit-number");
    row.appendChild(visitCountCell);

    // 누적 매출 칼럼
    const salesCell = document.createElement("td");
    salesCell.textContent = item.sales;
    salesCell.classList.add("td-sales");
    row.appendChild(salesCell);

    tbody.appendChild(row);
  });
}

function displayPagination(totalPages) {
  const pagination = document.querySelector(".pagination");
  const paginationButtons = pagination.querySelectorAll(
    "a:not(#prev):not(#next):not(#first-prev):not(#last-next)"
  );
  paginationButtons.forEach((button) => button.remove());

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("a");
    pageButton.href = "#";
    pageButton.textContent = i;
    if (i === currentPage) pageButton.classList.add("active");
    pagination.insertBefore(pageButton, document.getElementById("next"));
  }
}

function updatePagination() {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  renderTable();
  displayPagination(totalPages);
}

document.getElementById("prev").addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

document.getElementById("next").addEventListener("click", (e) => {
  e.preventDefault();
  const totalPages = Math.ceil(data.length / rowsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

document.getElementById("first-prev").addEventListener("click", (e) => {
  e.preventDefault();
  currentPage = 1;
  updatePagination();
});

document.getElementById("last-next").addEventListener("click", (e) => {
  e.preventDefault();
  currentPage = Math.ceil(data.length / rowsPerPage);
  updatePagination();
});

document.querySelector(".pagination").addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.textContent !== "다음" &&
    e.target.textContent !== "이전"
  ) {
    e.preventDefault();
    currentPage = Number(e.target.textContent);
    updatePagination();
  }
});

// 초기 로드 시 페이지네이션 및 테이블 데이터 표시
updatePagination();
