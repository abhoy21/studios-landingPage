import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const bentoItems = [
    {
      title: "Innovative Design",
      description:
        "Sleek and intuitive interfaces that redefine user experience.",
      image: "./bento-3.jpg",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Powerful Performance",
      description:
        "Cutting-edge technology that pushes the boundaries of what's possible.",
      image: "./bento-2.jpg",
      span: "col-span-2 row-span-1",
    },
    {
      title: "Sustainable Future",
      description:
        "Committed to environmental responsibility in every product we create.",
      image: "./bento-4.jpg",
      span: "col-span-2 row-span-1",
    },
    {
      title: "Privacy First",
      description:
        "Your data, your control. Advanced security features to protect what matters most.",
      image: "./bento-5.jpg",
      span: "col-span-1 row-span-1",
    },
  ];

  const gridRef = useRef(null);
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".bento-card"));

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top bottom-=100",
        },
      },
    );

    cards.forEach((card) => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        paused: true,
        ease: "power2.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='relative'>
      <div className='py-24 md:px-6 lg:px-8 absolute top-0 left-0 right-0 -translate-y-full z-20 bg-gradient-to-t from-[#DCDCDC] to-[#E5E4E2]'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-3xl md:text-6xl font-extrabold font-montserrat uppercase tracking-wider text-center mb-12'>
            Discover our Innovations
          </h1>
          <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {bentoItems.map((item, index) => (
              <div
                key={index}
                className={`bento-card relative overflow-hidden rounded-xl shadow-sm bg-white transition-all duration-300 ease-out hover:shadow-lg ${item.span}`}
              >
                <div className='relative h-full group cursor-pointer'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 grayscale'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                    <h3 className='text-white text-xl font-semibold mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-white text-sm mb-4'>
                      {item.description}
                    </p>
                    <button className='px-4 py-2 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-md'>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
