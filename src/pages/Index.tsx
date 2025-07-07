import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import VideoBackground from "@/components/VideoBackground";
import HeroContent from "@/components/HeroContent";
import DecorativeElements from "@/components/DecorativeElements";
const Index = () => {
  useEffect(() => {
    // Add class to body for index page specific styles
    document.body.classList.add('index-page');
    
    return () => {
      document.body.classList.remove('index-page');
    };
  }, []);
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <VideoBackground />
      <Navigation />
      <HeroContent />
      <DecorativeElements />
    </div>
  );
};
export default Index;