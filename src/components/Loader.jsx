import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Loading = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const lines = containerRef.current.querySelectorAll(".line");

    lines.forEach((line, index) => {
      tl.to(line, {
        scaleY: 1,
        duration: Math.random() * 0.8 + 0.2,
        delay: index * 0.1,
        ease: "power1.inOut",
      });
      tl.to(
        line,
        {
          scaleY: 0,
          duration: Math.random() * 0.8 + 0.2,
          ease: "power1.inOut",
        },
        "+=0.5",
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-50 bg-black'
    >
      <div className='relative w-24 h-24 flex justify-center items-center'>
        <div className='absolute rounded-full bg-[#e5e4e2] h-full animate-pulse'></div>
        <div className='flex space-x-2'>
          <div className='line w-3 h-16 bg-white animate-wave'></div>
          <div className='line w-2 h-12 bg-white animate-wave'></div>
          <div className='line w-1 h-8 bg-white animate-wave'></div>
        </div>
      </div>

      <div>
        <h1 className='text-white text-5xl font-montserrat uppercase'>
          Loading...
        </h1>
      </div>
    </div>
  );
};

export default Loading;
