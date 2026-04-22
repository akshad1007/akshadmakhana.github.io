import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PLAYLIST = [
  "https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
];

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (error) {
          console.log("Video auto-play failed, attempting retry...");
        }
      }
    };
    playVideo();
  }, [currentIdx]);

  const handleEnded = () => {
    setCurrentIdx((prev) => (prev + 1) % PLAYLIST.length);
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-32 px-[40px] overflow-hidden bg-lambo-black">
      {/* Seamless Video Container */}
      <div className="absolute inset-0 z-0">
        {/* Preload Next Video */}
        <video 
          key={`preload-${(currentIdx + 1) % PLAYLIST.length}`}
          src={PLAYLIST[(currentIdx + 1) % PLAYLIST.length]} 
          preload="auto" 
          muted 
          playsInline
          className="hidden" 
        />
        
        <AnimatePresence mode="popLayout">
          <motion.video
            key={currentIdx}
            ref={videoRef}
            src={PLAYLIST[currentIdx]}
            muted
            autoPlay
            playsInline
            webkit-playsinline="true"
            onEnded={handleEnded}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Lamborghini Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-lambo-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-start text-lambo-white">
        <motion.h1 
          className="text-[60px] md:text-[80px] lg:text-[120px] uppercase font-sans font-normal leading-hero tracking-normal mb-8 max-w-[1200px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Akshad Makhana
        </motion.h1>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <a 
            href="/pictures/Akshad_Makhana_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-lambo-white/30 hover:border-lambo-gold hover:text-lambo-gold text-lambo-white uppercase font-light text-[14px] tracking-widest px-[32px] py-[20px] rounded-none transition-all text-center"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-lambo-iron/30 z-20">
        <motion.div 
          className="h-full bg-lambo-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          key={currentIdx}
          transition={{ 
            duration: 10,
            ease: "linear" 
          }}
          style={{ width: `${((currentIdx + 1) / PLAYLIST.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
