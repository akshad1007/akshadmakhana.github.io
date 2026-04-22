import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HLSVideo } from './HLSVideo';

const PLAYLIST = [
  "https://stream.mux.com/BuGGTsiXq1T00WUb8qfURrHkTCbhrkfFLSv4uAOZzdhw.m3u8",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4",
  "https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8",
  "https://res.cloudinary.com/dfonotyfb/video/upload/v1775585556/dds3_1_rqhg7x.mp4"
];

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Note: HLSVideo handles the play/loading logic internally via hls.js
    // but we still want to ensure it plays on index change
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIdx]);

  const handleEnded = () => {
    setCurrentIdx((prev) => (prev + 1) % PLAYLIST.length);
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-end pb-32 px-[40px] overflow-hidden bg-lambo-black">
      {/* Seamless Video Container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <HLSVideo
              src={PLAYLIST[currentIdx]}
              muted
              autoPlay
              playsInline
              webkit-playsinline="true"
              onEnded={handleEnded}
              className="w-full h-full object-cover"
              // We pass the ref to the underlying video tag via props if HLSVideo supported it, 
              // but currently HLSVideo doesn't expose the ref. 
              // I'll update HLSVideo to support forwarded refs.
            />
          </motion.div>
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
            duration: 12,
            ease: "linear" 
          }}
          style={{ width: `${((currentIdx + 1) / PLAYLIST.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
