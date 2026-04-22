import { motion } from 'framer-motion';

const EDUCATION = [
  {
    institution: "Sanjivani University",
    location: "Kopergaon, Maharashtra",
    degree: "B.Tech in AI & Data Science",
    period: "2024 - Present",
    desc: "Focusing on Deep Learning architectures, Neural Networks, and Data Engineering."
  },
  {
    institution: "Shri Saibaba English Medium School and Junior College",
    location: "Shirdi, Maharashtra",
    degree: "SSC & HSC (Science)",
    period: "2012 - 2024",
    desc: "Foundation in advanced Mathematics, Physics, and Computer Science."
  }
];

const LANGUAGES = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
  { name: "Marathi", level: "Native" },
  { name: "Japanese", level: "Preparing for N5", accent: "こんにちは" }
];

export function EducationSection() {
  return (
    <div className="relative w-full py-24 md:py-44 px-[40px] md:px-[120px] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Education Timeline */}
        <div>
          <motion.span 
            className="text-lambo-gold uppercase tracking-[0.3em] text-[12px] font-medium mb-12 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Academic Foundation
          </motion.span>
          
          <div className="flex flex-col gap-12">
            {EDUCATION.map((edu, i) => (
              <motion.div 
                key={i}
                className="relative pl-8 border-l border-lambo-iron"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute top-0 left-[-1px] w-[1px] h-full bg-lambo-gold origin-top" />
                <span className="text-lambo-gold text-[10px] uppercase tracking-widest block mb-2">{edu.period}</span>
                <h3 className="text-lambo-white text-[24px] md:text-[32px] uppercase font-normal mb-1">{edu.institution}</h3>
                <span className="text-lambo-gold text-[10px] uppercase tracking-widest block mb-3">{edu.location}</span>
                <h4 className="text-lambo-ash text-[14px] uppercase tracking-wider mb-4 italic">{edu.degree}</h4>
                <p className="text-lambo-smoke text-[12px] uppercase tracking-wide leading-relaxed max-w-md">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Languages Grid */}
        <div>
          <motion.span 
            className="text-lambo-gold uppercase tracking-[0.3em] text-[12px] font-medium mb-12 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Linguistic Versatility
          </motion.span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LANGUAGES.map((lang, i) => (
              <motion.div 
                key={i}
                className="bg-lambo-iron/5 border border-lambo-iron p-8 group hover:border-lambo-gold transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lambo-white text-[20px] uppercase font-normal group-hover:text-lambo-gold transition-colors">{lang.name}</h3>
                    {lang.accent && <span className="text-lambo-ash/50 text-[12px] font-serif italic">{lang.accent}</span>}
                  </div>
                  <span className="text-lambo-ash text-[10px] uppercase tracking-widest">{lang.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="mt-8 text-lambo-ash text-[11px] uppercase tracking-widest leading-relaxed border-t border-lambo-iron/30 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Developing cross-cultural communication skills to drive innovation in international environments.
          </motion.p>
        </div>

      </div>
    </div>
  );
}
