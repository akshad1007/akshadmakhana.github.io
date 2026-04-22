import { motion } from 'framer-motion';

const SKILLS = [
  {
    domain: "Machine Learning",
    skills: ["Random Forests", "XGBoost", "Scikit-Learn", "Regression Analysis"]
  },
  {
    domain: "Deep Learning",
    skills: ["TensorFlow", "Keras", "CNNs", "RNNs/LSTMs"]
  },
  {
    domain: "Computer Vision",
    skills: ["OpenCV", "Object Detection", "Image Segmentation", "Face Recognition"]
  },
  {
    domain: "Data Engineering",
    skills: ["NumPy", "Pandas", "Matplotlib/Seaborn", "Tableau"]
  },
  {
    domain: "Technical Core",
    skills: ["Python", "Java", "C++", "SQL"]
  },
  {
    domain: "Interface Design",
    skills: ["Figma", "HTML5/CSS3", "React.js", "FlutterFlow"]
  }
];

export function ExpertiseSection() {
  return (
    <div className="relative w-full py-24 md:py-32 px-[20px] md:px-[120px] bg-transparent overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col mb-16">
          <motion.span 
            className="text-lambo-gold uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Technical Stack
          </motion.span>
          <motion.h2 
            className="text-lambo-white text-[48px] md:text-[64px] font-normal uppercase leading-none tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Core <span className="text-lambo-gold italic">Expertise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div 
              key={i}
              className="group p-8 border border-lambo-iron hover:border-lambo-gold transition-all duration-300 bg-lambo-iron/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-lambo-white text-[20px] uppercase font-bold tracking-tight mb-6 group-hover:text-lambo-gold transition-colors">
                {skill.domain}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.skills.map((s, idx) => (
                  <span key={idx} className="px-3 py-1 bg-lambo-iron/10 border border-lambo-iron text-lambo-smoke text-[10px] uppercase tracking-widest group-hover:border-lambo-gold/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
