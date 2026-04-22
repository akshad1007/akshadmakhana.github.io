import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Award } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const CERTIFICATES = [
  { issuer: "Accenture", title: "Data Analytics and Visualization" },
  { issuer: "AWS", title: "Academy Cloud Foundations" },
  { issuer: "Celonis", title: "Process Mining Fundamentals" },
  { issuer: "Cisco", title: "Introduction to Cyber Security" },
  { issuer: "JETIR", title: "AnantaNetra: Research Publication" },
];

export function CertificationsCarousel() {
  const ref = useInViewAnimation();
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setIndex((curr) => (curr + 1) % CERTIFICATES.length);
  }, []);

  const prev = () => {
    setIndex((curr) => (curr - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next, isHovered]);

  return (
    <section ref={ref} className="w-full py-32 overflow-hidden opacity-0 bg-lambo-black px-[40px]" style={{ animationDelay: '0.1s' }}>
      <div className="max-w-[1440px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="text-[54px] md:text-[80px] font-sans font-normal uppercase leading-display text-lambo-white tracking-normal max-w-2xl">
          ACCOLADES & RESEARCH
        </h2>
        <div className="flex flex-col items-start gap-2 border-l border-lambo-iron pl-6 min-h-[64px] justify-center">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-lambo-gold text-lambo-gold" />)}
          </div>
          <span className="text-lambo-ash text-[12px] uppercase tracking-label mt-2">12+ Certifications</span>
        </div>
      </div>

      <div 
        className="relative max-w-[1440px] mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl mx-4 bg-lambo-charcoal rounded-none border border-lambo-iron p-[40px] md:p-[64px] relative"
            >
              <Award className="w-12 h-12 text-lambo-iron mb-12" />
              <h3 className="text-[27px] md:text-[40px] text-lambo-white uppercase font-normal leading-sub mb-8">
                {CERTIFICATES[index].title}
              </h3>
              <div className="flex items-center gap-6 mt-12 pt-8 border-t border-lambo-iron">
                <div className="w-12 h-12 rounded-none bg-lambo-white flex items-center justify-center overflow-hidden">
                  <span className="text-lambo-black font-normal text-2xl uppercase">{CERTIFICATES[index].issuer[0]}</span>
                </div>
                <div>
                  <div className="text-[16px] font-sans font-normal uppercase text-lambo-white tracking-wide">{CERTIFICATES[index].issuer}</div>
                  <div className="text-[12px] uppercase text-lambo-ash tracking-label mt-1">Verified Credential</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-16">
          <button onClick={prev} className="w-16 h-16 rounded-none border border-lambo-white/50 flex items-center justify-center text-lambo-white hover:bg-lambo-action hover:border-lambo-action transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="w-16 h-16 rounded-none border border-lambo-white/50 flex items-center justify-center text-lambo-white hover:bg-lambo-action hover:border-lambo-action transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
