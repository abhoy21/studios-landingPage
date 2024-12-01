import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const IDXLoading = () => {
  const [finalText] = useState([
    "Intelligent Development",
    "Experimental Workspace",
  ]);
  const lineRefs = useRef([]);
  const containerRef = useRef(null);

  const generateRandomChars = (length) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+->/?[]{}|<>";
    return Array.from(
      { length },
      () => chars[Math.floor(Math.random() * chars.length)],
    );
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const masterTimeline = gsap.timeline({ repeat: -1 });
    const simultaneousTimeline = gsap.timeline();

    finalText.forEach((line, lineIndex) => {
      const randomCharsLine = generateRandomChars(line.length);
      const lineElement = lineRefs.current[lineIndex];

      lineElement.innerHTML = "";

      const ParentcharContainer = document.createElement("div");
      ParentcharContainer.style.position = "relative";
      ParentcharContainer.style.display = "inline-block";
      lineElement.appendChild(ParentcharContainer);

      const charContainer = document.createElement("div");
      charContainer.style.position = "absolute";
      charContainer.style.top = "0px";
      charContainer.style.right = "10em";
      charContainer.style.display = "inline-block";
      ParentcharContainer.appendChild(charContainer);

      const randomSpans = randomCharsLine.map((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.position = "absolute";
        span.style.left = `${charIndex * 0.8}em`;
        span.style.opacity = "0.1";
        span.style.color = "white";
        span.style.transition = "opacity 0.5s";
        charContainer.appendChild(span);
        return span;
      });

      const finalSpans = line.split("").map((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.position = "absolute";
        span.style.left = `${charIndex * 0.8}em`;
        span.style.opacity = "0.05";
        span.style.color = "white";
        span.style.transition = "opacity 0.5s";
        charContainer.appendChild(span);
        return span;
      });

      const tl = gsap.timeline();

      simultaneousTimeline;
      tl.to(randomSpans, {
        opacity: 0.5,
        duration: 0.2,
        stagger: {
          each: 0.05,
          from: "random",
        },
      })
        .to(
          randomSpans,
          {
            opacity: 0,
            duration: 0.2,
            stagger: {
              each: 0.05,
              from: "random",
            },
          },
          "+=0.1",
        )

        .to(finalSpans, {
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.05,
            from: "start",
          },
        });
    });
    masterTimeline.add(simultaneousTimeline);
    masterTimeline.set({}, {}, "+=0.5");
  }, [finalText]);

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 bg-black flex flex-col items-center justify-center text-white'
    >
      <div className='text-center'>
        {finalText.map((line, index) => (
          <div
            key={index}
            ref={(el) => (lineRefs.current[index] = el)}
            className='text-4xl md:text-6xl lg:text-7xl mb-4 font-mono'
          />
        ))}
      </div>
    </div>
  );
};

export default IDXLoading;
