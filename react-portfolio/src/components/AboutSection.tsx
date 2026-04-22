import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <div className="relative w-full py-24 md:py-44 px-[40px] md:px-[120px] flex flex-col md:flex-row items-start justify-between gap-12 md:gap-24 overflow-hidden">
      {/* Background Video (Assumed to be in parent or added here if needed, but since we have it in App.tsx, we focus on content) */}
      
      <div className="relative z-10 w-full md:w-1/2">
        <motion.span 
          className="text-lambo-gold uppercase tracking-[0.3em] text-[12px] font-medium mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mission & Philosophy
        </motion.span>
        <motion.h2 
          className="text-lambo-white text-[48px] md:text-[64px] lg:text-[80px] font-normal uppercase leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Engineering the <span className="text-lambo-ash italic">unseen</span> through AI.
        </motion.h2>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-8">
        <motion.p 
          className="text-lambo-smoke text-[18px] md:text-[20px] leading-relaxed font-light uppercase tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I am a Data Science & AI Engineer dedicated to transforming complex data into streamlined, high-performance solutions. My approach is defined by precision, aggressive innovation, and a relentless pursuit of technical excellence.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-lambo-iron pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h3 className="text-lambo-white uppercase text-[14px] font-bold tracking-widest mb-2">Core Focus</h3>
            <p className="text-lambo-ash uppercase text-[12px] leading-relaxed">Predictive Modeling, Computer Vision, & Deep Learning architectures.</p>
          </div>
          <div>
            <h3 className="text-lambo-white uppercase text-[14px] font-bold tracking-widest mb-2">Philosophy</h3>
            <p className="text-lambo-ash uppercase text-[12px] leading-relaxed">Simplicity is the ultimate sophistication. Complexity handled with speed.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
