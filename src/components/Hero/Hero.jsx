import UserForm from "../Form/userForm";

export default function Hero() {
  return ( 
    <section className="pt-[130px]">
      <div className="text-[20px]">
        <p>셀러만을 위한 스트릿마켓의 특별한 서비스</p>
        <p>지금 바로 스트릿마켓의 알림을 신청하고 경험해보세요!</p>
      </div>
      <UserForm />
    </section>
  )
}