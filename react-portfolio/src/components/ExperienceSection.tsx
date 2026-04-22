import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "Data Science & Analytics Intern",
    company: "Zidio Development",
    period: "MAY 2025 - JULY 2025",
    desc: "Worked on 'Stock Market Time Series Forecasting' using ARIMA, SARIMA, Prophet, and LSTM models. Built an LSTM-based prediction pipeline and interactive Streamlit dashboards.",
    details: [
      "Achieved 85% prediction accuracy with LSTM model",
      "Built interactive dashboards using Streamlit",
      "Applied Python, TensorFlow, and Statsmodels for financial forecasting"
    ],
    certificate: "/pictures/Training_Certificate.pdf"
  }
];

export function ExperienceSection() {
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
            Track Record
          </motion.span>
          <motion.h2 
            className="text-lambo-white text-[48px] md:text-[64px] font-normal uppercase leading-none tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Work <span className="text-lambo-gold italic">Experience</span>
          </motion.h2>
        </div>

        <div className="space-y-1">
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={i}
              className="group relative border border-lambo-iron bg-lambo-iron/5 p-8 md:p-12 hover:border-lambo-gold transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-lambo-gold text-[12px] font-mono tracking-widest">{exp.period}</span>
                  <h3 className="text-lambo-white text-[28px] md:text-[40px] uppercase font-bold tracking-tight group-hover:text-lambo-gold transition-colors leading-none">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-lambo-white uppercase text-[16px] font-bold tracking-widest">{exp.company}</span>
                  <span className="text-lambo-ash text-[10px] uppercase tracking-widest">Verification: Established</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <p className="text-lambo-smoke text-[14px] uppercase tracking-wide leading-relaxed mb-8">
                    {exp.desc}
                  </p>
                  <a 
                    href={exp.certificate} 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-lambo-iron text-lambo-white text-[12px] uppercase tracking-widest hover:bg-lambo-gold hover:text-lambo-black hover:border-lambo-gold transition-all"
                  >
                    View Credential <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <ul className="space-y-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-lambo-gold mt-1.5 flex-shrink-0" />
                      <span className="text-lambo-ash group-hover:text-lambo-white text-[12px] uppercase tracking-widest transition-colors leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-lambo-iron group-hover:bg-lambo-gold transition-colors" />
              <div className="absolute top-0 right-0 h-24 w-[1px] bg-lambo-iron group-hover:bg-lambo-gold transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
