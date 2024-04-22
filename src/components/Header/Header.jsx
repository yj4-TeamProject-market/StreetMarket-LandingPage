import { useEffect, useState } from "react";

export default function Header({ slideIndex, setSlideIndex }) {
 
  const [isSlideFirst, setIsSlideFirst] = useState(true);

  const style = {
    background: isSlideFirst ? "" : "bg-black",
    visible: isSlideFirst ? "visible opacity-0" : " opacity-100",
    // overflowHidden : isSlideFirst ? "" : "overflow-hidden",
    titleContainer: isSlideFirst ? "top-[100%]" : "top-[10%]",
    title: isSlideFirst ? "text-[52px]" : "text-[38px] text-[#FFD700]",

  }

  useEffect(()=>{
    if(slideIndex > 0) setIsSlideFirst(false);
    else setIsSlideFirst(true)
  }, [slideIndex])

  const handleClick = () => {
    setSlideIndex(0)
  }

  return (
    <header className={`w-full h-[60px] px-[20px] fixed z-50 duration-1000 ${style.background} ${style.overflowHidden} `}>
      <div className="w-full h-full flex justify-between">
        <div className="w-full relative ">
          <div className={`absolute left-0 ${style.titleContainer} duration-1000`}>
            <h1 className={`${style.title} duration-1000`}>Street Market</h1>
          </div>
          <div className=" h-full overflow-hidden">
            <div className={`absolute right-0 bottom-0 overflow-hidden duration-1000 ${style.visible}`}>
              <button onClick={handleClick} className="bg-[#FFD700] px-4 pt-2 rounded-t-xl">신청하기</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}