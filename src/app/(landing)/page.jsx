import SlideContainer from "@/components/SlideContainer/SlideContainer";

export default function LandingPage() {

  return (
    <main className="w-full h-dvh overflow-hidden">
      <SlideContainer>
        <div className="w-full h-dvh bg-slate-200">1</div>
        <div className="w-full h-dvh bg-slate-200">2</div>
        <div className="w-full h-dvh bg-slate-200">3</div>
        <div className="w-full h-dvh bg-slate-200">4</div>
      </SlideContainer>
    </main>
  );
}


