import { motion } from 'framer-motion';

export function ResearchSection() {
  return (
    <div className="relative w-full py-24 md:py-44 px-[40px] md:px-[120px] overflow-hidden">
      <motion.span 
        className="text-lambo-gold uppercase tracking-[0.3em] text-[12px] font-medium mb-12 md:mb-20 block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Published Research
      </motion.span>

      <div className="relative z-10 max-w-5xl">
        <motion.div 
          className="flex flex-col gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-lambo-gold text-lambo-black text-[10px] font-bold uppercase px-3 py-1 tracking-widest">Impact Factor: 7.95</span>
            <span className="text-lambo-ash text-[12px] uppercase tracking-widest">JETIR Journal | Sept 2025</span>
          </div>
          
          <h2 className="text-lambo-white text-[32px] md:text-[56px] uppercase font-normal leading-tight">
            AnantaNetra: A Hybrid AI-Powered <span className="text-lambo-gold">Environmental Monitoring</span> and Health Advisory System
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-lambo-iron pt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lambo-white uppercase text-[14px] font-bold tracking-widest mb-6">Technical abstract</h3>
            <p className="text-lambo-ash uppercase text-[12px] leading-relaxed mb-8">
              Implemented a novel hybrid AI framework utilizing an LSTM+XGBoost ensemble model to address India's air quality crisis. The system achieves 92% accuracy for real-time AQI monitoring and 24-hour forecasting across 732 districts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.jetir.org/view?paper=JETIR2509217" target="_blank" rel="noopener noreferrer" className="bg-lambo-white text-lambo-black px-8 py-4 uppercase text-[12px] font-bold tracking-widest hover:bg-lambo-gold transition-colors">
                View Publication
              </a>
              <a href="http://www.jetir.org/papers/JETIR2509217.pdf" target="_blank" rel="noopener noreferrer" className="border border-lambo-iron text-lambo-white px-8 py-4 uppercase text-[12px] font-light tracking-widest hover:border-lambo-gold hover:text-lambo-gold transition-all">
                Download PDF
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="border-l-2 border-lambo-gold pl-6 py-2">
              <h4 className="text-lambo-white uppercase text-[12px] font-bold mb-2">Dataset Innovation</h4>
              <p className="text-lambo-ash uppercase text-[11px] leading-relaxed">Proprietary dataset curated from 15+ environmental sources for spatial temporal coverage.</p>
            </div>
            <div className="border-l-2 border-lambo-iron pl-6 py-2">
              <h4 className="text-lambo-white uppercase text-[12px] font-bold mb-2">Public Health Impact</h4>
              <p className="text-lambo-ash uppercase text-[11px] leading-relaxed">Direct alignment with India's National Clean Air Programme (NCAP) objectives.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
