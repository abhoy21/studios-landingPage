import { useEffect, useState } from "react";
import BentoGrid from "./components/BentoGrid";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";
import HeaderTitle from "./components/HeaderTitle";
import Loading from "./components/Loader";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {
  const [showCanvas, setShowCanvas] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bentoGridTriggerPoint = window.innerHeight * 4;

      if (scrollPosition > bentoGridTriggerPoint) {
        setShowCanvas(false);
      } else {
        setShowCanvas(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='h-[100%] w-[100%] bg-[#e5e4e2] overflow-hidden'>
          <Navbar />
          <HeaderTitle />
          <Sections />

          {showCanvas && (
            <div className='relative overflow-hidden'>
              <Canvas />
            </div>
          )}

          <BentoGrid />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
