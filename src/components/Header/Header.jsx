import { useEffect, useState } from "react";

export default function Header({ slideIndex }) {
 
  const [isSlideFirst, setIsSlideFirst] = useState(true);

  useEffect(()=>{
    if(-slideIndex > 0) setIsSlideFirst(false);
    else setIsSlideFirst(true)
  }, [, slideIndex])

  return (
    <header className="w-full h-[60px] px-[20px] fixed text-[#FFD700] z-50 duration-1000">
      <div className="w-full h-full flex justify-between">
        <div className="w-full relative ">
          <div className="absolute top-1/2 -translate-y-1/2 left-0">
            <h1 className="text-4xl">Street Market</h1>
          </div>
          <div className="bg-[#FFD700] absolute right-0 top-1/2 p-[10px] rounded-t-xl">
            <button className="text-[14px] text-black">서비스 알림신청</button>
          </div>
        </div>
      </div>
    </header>
  )
}



