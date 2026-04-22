import { Menu, X, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  const NAV_LINKS = [
    { label: "Intro", href: "#intro" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Gallery", href: "#gallery" },
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed z-50 top-0 left-0 w-full px-[20px] md:px-[40px] py-[24px] flex items-center justify-between text-lambo-white bg-transparent mix-blend-difference pointer-events-none">
        {/* Left: Menu Trigger */}
        <div 
          className="flex items-center gap-3 pointer-events-auto cursor-pointer group transition-all"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="w-6 h-6 hover:text-lambo-gold transition-colors" />
          <span className="uppercase text-[14px] tracking-widest font-normal hidden md:block">Menu</span>
        </div>

        {/* Center: Logo */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="pointer-events-auto font-sans text-2xl tracking-[0.2em] font-light uppercase cursor-pointer hover:text-lambo-gold transition-colors"
        >
          Akshad<span className="font-bold text-lambo-gold">.</span>
        </a>
        
        {/* Right: Empty for balance */}
        <div className="w-[60px] md:w-[100px]" />
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed z-[90] bottom-10 right-10 w-14 h-14 bg-lambo-gold text-lambo-black flex items-center justify-center hover:bg-lambo-white transition-all pointer-events-auto shadow-2xl"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-lambo-black flex flex-col justify-start pt-[100px] md:pt-[140px] pb-[40px] px-[40px] md:px-[120px] overflow-y-auto"
          >
            {/* Close Button */}
            <div 
              className="absolute top-[24px] left-[40px] flex items-center gap-3 cursor-pointer text-lambo-white hover:text-lambo-gold transition-colors" 
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-6 h-6" />
              <span className="uppercase text-[14px] tracking-widest font-normal">Close</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2 md:gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="text-[40px] md:text-[64px] lg:text-[80px] text-lambo-white hover:text-lambo-gold font-sans font-normal uppercase leading-none transition-colors w-fit py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-16 flex justify-between items-center border-t border-lambo-iron text-lambo-ash">
              <p className="text-[10px] uppercase tracking-widest">© 2026 Akshad Makhana</p>
              <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/akshad-makhana" target="_blank" rel="noopener noreferrer" className="hover:text-lambo-white transition-colors text-[10px] uppercase tracking-widest">LinkedIn</a>
                <a href="https://github.com/akshad1007" target="_blank" rel="noopener noreferrer" className="hover:text-lambo-white transition-colors text-[10px] uppercase tracking-widest">GitHub</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
