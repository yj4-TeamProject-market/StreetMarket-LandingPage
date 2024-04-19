import Slide from "@/components/Slide/Slide";

const slideContents = [
  {
    title: "Market Vendor",
    sub: "플리마켓 기본 셋팅 물품 제공",
    contents:
      "테이블, 스탠드, 마네킹 등 제공해드립니다. 오직 고객과 상품판매에만 집중해주세요!",
    image: "MarketVendor.svg",
  },

  {
    title: "Queickly and Easily",
    sub: "빠르고 간편한 플리마켓 참가신청",
    contents:
      "안전한 마켓 참가를 위해 불필요한 개인정보는요구하지 않습니다.단, 판매제품의 안전과 인증을 위해별도의 정보요청할 수 있습니다.",
    image: "QueicklyAndEasily.svg",
  },

  {
    title: "Promotional Alert",
    sub: "스트릿마켓 친구추가 고객에게마켓 알림톡 전송",
    contents:
      "스트릿마켓을 친구추가한 분들께플리마켓 알림톡 전송을 합니다.알림톡 서비스로 홍보효과를 누려보세요!.",
    image: "PromotionalAlert.svg",
  },
];

// const map2 = [];

// for (var i = 0; i < slideContents.length; i++) {
//   map2.push(<Slide obj={slideContents[i]} />);
// }

const map = slideContents.map((e) => {
  return <Slide obj={e} />;
});

export default function LandingPage() {
  return <div>{map}</div>;
}
