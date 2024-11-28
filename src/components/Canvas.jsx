import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ImageSequenceAnimation = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);

  const frameCount = 300;
  const imageSequence = useRef({ frame: 0 });

  const getImagePath = (index) => {
    const paddedIndex = String(index + 1).padStart(4, "0");
    return `/character-images/male${paddedIndex}.png`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const loadImages = () => {
      const imagePromises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = getImagePath(i);
          img.onload = () => resolve(img);
          imagesRef.current[i] = img;
        });
      });

      return Promise.all(imagePromises);
    };

    const renderImage = (image) => {
      const canvas = context.canvas;
      const hRatio = canvas.width / image.width;
      const vRatio = canvas.height / image.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShiftX = (canvas.width - image.width * ratio) / 2;
      const centerShiftY = (canvas.height - image.height * ratio) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        centerShiftX,
        centerShiftY,
        image.width * ratio,
        image.height * ratio,
      );
    };

    const setupAnimation = () => {
      gsap.to(imageSequence.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 0.15,
          trigger: canvas,
          start: "top top",
          end: "400% top",
          onUpdate: () => {
            const currentFrame = Math.round(imageSequence.current.frame);
            const image = imagesRef.current[currentFrame];
            if (image) renderImage(image);
          },
        },
      });
    };

    const handleResize = () => {
      setCanvasSize();
      const currentFrame = Math.floor(imageSequence.current.frame);
      const image = imagesRef.current[currentFrame];
      if (image) renderImage(image);
    };

    loadImages().then(() => {
      renderImage(imagesRef.current[0]);
      setupAnimation();
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id='image-sequence-container'>
      <canvas
        ref={canvasRef}
        className='fixed top-0 left-0 right-0 w-[100vw] h-[100vh] object-cover z-10'
      />
    </div>
  );
};

export default ImageSequenceAnimation;
