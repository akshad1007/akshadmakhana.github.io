import { motion } from 'framer-motion';

const GALLERY_ITEMS = [
  { id: 1, type: "RESEARCH", title: "AnantaNetra Seminar", img: "/pictures/gallary/seminarpresent.jpeg", year: 2025 },
  { id: 2, type: "PROJECT", title: "Shoplift-Patrol AI", img: "/pictures/gallary/shopliftpresent.jpeg", year: 2025 },
  { id: 3, type: "HACKATHON", title: "AI Reflection Win", img: "/pictures/gallary/su_hack.jpg", year: 2025 },
  { id: 4, type: "DEVELOPMENT", title: "Python Tracker System", img: "/pictures/gallary/rpresent.jpeg", year: 2025 },
  { id: 5, type: "CULTURAL", title: "IKS Yuga Presentation", img: "/pictures/gallary/iks_present.jpg", year: 2025 },
  { id: 6, type: "CHAMPIONSHIP", title: "Chess Winner 2024", img: "/pictures/gallary/chess_12th.jpg", year: 2024 },
  { id: 7, type: "SPORTS", title: "Volleyball Trophy", img: "/pictures/gallary/sawant_mam.jpg", year: 2024 },
  { id: 8, type: "ACADEMIC", title: "HSC Excellence Award", img: "/pictures/gallary/saibabatrust.jpg", position: "object-left", year: 2024 },
];

export function GallerySection() {
  // Triple items for ultra-seamless infinite scroll
  const scrollItems = [...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS];
  
  // Card Width (450px) + Gap (24px)
  const itemWidth = 474; 
  const totalWidth = GALLERY_ITEMS.length * itemWidth;

  return (
    <div className="relative w-full py-24 md:py-32 px-[20px] md:px-[120px] bg-transparent overflow-hidden border-t border-lambo-iron/30">
      <div className="relative z-10 flex flex-col gap-16">
        {/* Header - Global Section Style */}
        <div className="flex flex-col">
          <motion.span 
            className="text-lambo-gold uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Visual Chronicles
          </motion.span>
          <motion.h2 
            className="text-lambo-white text-[48px] md:text-[64px] font-normal uppercase leading-none tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Media <span className="text-lambo-gold italic">Gallery</span>
          </motion.h2>
        </div>

        {/* Continuous Infinite Scroller */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ 
              x: [0, -totalWidth] 
            }}
            transition={{ 
              duration: 45, // Decreased speed for a smoother experience
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {scrollItems.map((item, i) => (
              <div 
                key={`${item.id}-${i}`}
                className="group relative w-[300px] md:w-[450px] aspect-[4/5] bg-lambo-iron/5 border border-lambo-iron/30 hover:border-lambo-gold transition-all duration-500 overflow-hidden"
              >
                {/* Real Image from Path */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out ${item.position || 'object-center'}`}
                />
                
                {/* Clean Bottom Overlay for Text Legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-lambo-black/90 to-transparent transition-opacity duration-500" />
                
                {/* Compact Info Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-lambo-gold text-[10px] font-mono tracking-widest mb-2">{item.type}</span>
                  <h3 className="text-lambo-white text-[20px] md:text-[24px] uppercase font-bold tracking-tight leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-lambo-iron/30 group-hover:border-lambo-gold transition-colors" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
