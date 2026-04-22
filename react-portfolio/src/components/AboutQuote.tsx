import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { useEffect, useRef } from 'react';

export function AboutQuote() {
  const ref = useInViewAnimation();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const offset = (rect.top - windowHeight / 2) * 0.15;
      imgRef.current.style.transform = `translateY(${Math.min(Math.max(offset, -100), 100)}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className="py-32 px-[40px] max-w-[1440px] mx-auto flex flex-col items-start bg-lambo-black opacity-0" style={{ animationDelay: '0.1s' }}>
      
      <h2 className="text-[54px] md:text-[80px] leading-display text-lambo-white tracking-normal uppercase w-full mb-16">
        I'M PASSIONATE ABOUT USING <span className="text-lambo-gold">AI AND DATA SCIENCE</span> TO SOLVE REAL-WORLD PROBLEMS, FROM PREDICTING FINANCIAL MARKETS TO DETECTING SECURITY THREATS.
      </h2>
      
      <div className="text-lambo-smoke text-xl uppercase mb-16 font-sans tracking-wide">
        AKSHAD MAKHANA
      </div>

      <div className="flex flex-wrap items-center gap-12 text-lambo-ash uppercase font-sans tracking-wide text-[24px]">
        <span>PYTHON</span>
        <span>TENSORFLOW</span>
        <span>OPENCV</span>
      </div>

      <div className="relative w-full overflow-hidden rounded-none border-none mt-24">
        <img 
          ref={imgRef}
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85" 
          alt="Akshad Makhana Cinematic Portrait"
          className="w-full h-[600px] object-cover scale-[1.1] transition-transform duration-75 ease-out grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-lambo-black/20 pointer-events-none"></div>
      </div>
    </section>
  );
}
