import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TextLoop from "./TextLoop";

gsap.registerPlugin(ScrollTrigger);

const Sections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      const textElements = section.querySelectorAll(".animate-text");

      textElements.forEach((textElement) => {
        gsap.fromTo(
          textElement,
          {
            x: textElement.classList.contains("from-left") ? -100 : 100,
            opacity: 0,
            scale: 1.2,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,

            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      });

      gsap.fromTo(
        section,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      if (index !== sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div
        ref={(el) => sectionsRef.current.push(el)}
        className='section relative h-[100vh] w-[100vw] '
      >
        <div>
          <h3 className='animate-text from-left w-1/3 absolute top-[20%] left-[5%] font-montserrat font-bold text-gray-500 text-2xl uppercase tracking-wider'>
            We Don&apos;t Just Build Projects &#45; We Craft Experiences That
            Unleash Your Brand&apos;s Potential, Turning Pixels into Perfection.
          </h3>
          <h4 className='animate-text from-left absolute top-[45%] left-[22%] font-montserrat font-semibold text-md tracking-widest text-gray-900'>
            ...SCROLL TO READ
          </h4>
        </div>
        <div>
          <img
            src='./chess-1.png'
            className='absolute top-[2%] right-[5%] rotate-[25deg] h-[500px] w-40 object-cover'
          />

          <img
            src='./chess-2.png'
            className=' animate-text from-right absolute top-[20%] right-[25%] -rotate-45 h-[500px] w-40 object-cover'
          />
        </div>
      </div>

      <div
        ref={(el) => sectionsRef.current.push(el)}
        className='section relative h-[100vh] w-[100vw]'
      >
        <div>
          <h3 className='animate-text from-right absolute top-[25%] right-[2%] font-montserrat font-extrabold text-2xl text-gray-700 uppercase tracking-wider'>
            INNOVATION / THE FUTURE OF CREATIVITY
          </h3>
          <h4 className='animate-text from-right absolute top-[30%] right-[5%] font-montserrat font-semibold tracking-widest text-2xl text-gray-500 space-y-4'>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              DESIGN WITH PASSION
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              BUILD WITH PURPOSE
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              EXPERIENCE THE EXTRAORDINARY
            </div>
          </h4>
        </div>
        <div>
          <h4 className='animate-text from-left absolute top-[7%] left-[5%] font-montserrat font-semibold tracking-widest text-2xl text-gray-500 space-y-4'>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              SHAPE YOUR VISION
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              BRING IDEAS TO LIFE
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              OWN YOUR SUCCESS
            </div>
          </h4>
          <h3 className='animate-text from-left absolute top-[2%] left-[5%] font-montserrat font-extrabold text-2xl text-gray-900 uppercase tracking-wider'>
            WHERE IMAGINATION MEETS REALITY...
          </h3>
        </div>
      </div>

      <div
        ref={(el) => sectionsRef.current.push(el)}
        className='section relative h-[100vh] w-[100vw]'
      >
        <div>
          <h3 className='animate-text from-right absolute top-[18%] left-[5%] font-montserrat font-extrabold text-2xl text-gray-500 uppercase tracking-wider'>
            EXCELLENCE / SHAPING TOMORROW&apos;S IDEAS
          </h3>
          <h4 className='animate-text from-right absolute top-[24%] left-[5%] font-montserrat font-semibold tracking-widest text-2xl text-gray-700 space-y-4'>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              STUDIOS
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              WHERE VISION MEETS EXECUTION
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              AND IDEAS EVOLVE INTO IMPACT
            </div>
          </h4>
        </div>

        <div>
          <h4 className='animate-text from-right absolute top-[12%] right-[3%] font-montserrat font-bold tracking-widest text-2xl text-gray-700 space-y-4'>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              BREAK THE RULES
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              CREATE THE UNEXPECTED
            </div>
            <div className='flex items-center'>
              <div className='rounded-full bg-gray-800 w-2 h-2 mr-4 animate-pulse' />
              UNLOCK LIMITLESS POSSIBILITIES
            </div>
          </h4>
          <h3 className='animate-text from-right w-1/3 absolute top-[1%] right-[4%] font-montserrat font-extrabold text-2xl text-gray-500 uppercase tracking-wider'>
            REVOLUTIONIZE YOUR IDEAS, DARE TO DREAM BIG
          </h3>
        </div>
      </div>

      <div
        ref={(el) => sectionsRef.current.push(el)}
        className='section relative h-[220vh] w-[100vw]'
      >
        <h1 className='text-[500px] mx-auto font-montserrat font-bold absolute top-[-25%] left-[0%] tracking-wide'>
          VISION
        </h1>
      </div>

      <TextLoop />
    </div>
  );
};

export default Sections;
