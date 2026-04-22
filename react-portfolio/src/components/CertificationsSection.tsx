import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

const CERTS = [
  {
    title: "Accenture Certified: Acquiring Data (AI Fundamentals)",
    issuer: "Accenture",
    date: "MARCH 2025",
    link: "/pictures/accenture-ai-cert.jpg"
  },
  {
    title: "AWS Certified: Machine Learning Foundations",
    issuer: "AWS",
    date: "JUNE 2025",
    link: "https://www.credly.com/badges/ab655bab-799d-4d29-9ce8-ddcc1a787ec9/linked_in_profile"
  },
  {
    title: "Celonis Certified: Academic Process Mining Fundamentals",
    issuer: "Celonis",
    date: "DECEMBER 2024",
    link: "https://www.credly.com/badges/eba7d0e9-a965-4fd5-b463-ddfee6985f90/linked_in_profile"
  },
  {
    title: "Cisco Certified: Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "MARCH 2025",
    link: "https://www.credly.com/badges/d81dd17f-7eac-409b-9f50-a1bee92231b8/linked_in_profile"
  },
  {
    title: "AWS APAC - Solutions Architecture Simulation",
    issuer: "Forage / AWS",
    date: "MAY 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_T6ZBxztXfRdeRGiM9_1746460404887_completion_certificate.pdf"
  },
  {
    title: "BCG - Data Science Job Simulation",
    issuer: "Forage / BCG",
    date: "MAY 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_T6ZBxztXfRdeRGiM9_1746114070141_completion_certificate.pdf"
  },
  {
    title: "Tata Group - Data Visualisation Simulation",
    issuer: "Forage / Tata",
    date: "MAY 2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_T6ZBxztXfRdeRGiM9_1746350558495_completion_certificate.pdf"
  },
  {
    title: "IBM Certified: Data Visualisation",
    issuer: "IBM",
    date: "MARCH 2025",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/689e8dedd9a240439dcfb20d8dd370fe"
  },
  {
    title: "IBM Certified: DevOps, Agile",
    issuer: "IBM",
    date: "AUGUST 2025",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/8191d1926b844449856aa2ffcb3c7537"
  },
  {
    title: "IBM Certified: Introduction to Python",
    issuer: "IBM",
    date: "NOVEMBER 2024",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/14e78e1be1f94c7696c706d1842f8070"
  },
  {
    title: "IBM Certified: ML for Data Science Projects",
    issuer: "IBM",
    date: "JUNE 2025",
    link: "https://www.credly.com/badges/0953e4fb-5a32-4886-a7f3-71e6825c54cf/linked_in_profile"
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI / OpenAI",
    date: "2024",
    link: "https://learn.deeplearning.ai/accomplishments/42c00c37-701c-4865-b0b4-cef7641ed8c4?usp=sharing"
  }
];

export function CertificationsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(CERTS.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentCerts = CERTS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="relative w-full py-24 md:py-32 px-[20px] md:px-[120px] bg-transparent overflow-hidden border-t border-lambo-iron">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <div>
          <motion.span 
            className="text-lambo-gold uppercase tracking-[0.4em] text-[12px] font-bold mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Credentials
          </motion.span>
          <motion.h2 
            className="text-lambo-white text-[48px] md:text-[64px] font-normal uppercase leading-none tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional <span className="text-lambo-gold italic">Certifications</span>
          </motion.h2>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={prevPage}
            className="w-16 h-16 flex items-center justify-center border border-lambo-iron text-lambo-white hover:bg-lambo-gold hover:border-lambo-gold hover:text-lambo-black transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextPage}
            className="w-16 h-16 flex items-center justify-center border border-lambo-iron text-lambo-white hover:bg-lambo-gold hover:border-lambo-gold hover:text-lambo-black transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          <div className="ml-4 font-mono text-lambo-iron text-[14px]">
            <span className="text-lambo-gold">{currentPage + 1}</span> / {totalPages}
          </div>
        </div>
      </div>

      <div className="relative h-auto min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {currentCerts.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                className="group relative bg-lambo-iron/5 border border-lambo-iron p-8 md:p-10 hover:bg-lambo-gold transition-all duration-500 overflow-hidden block h-full flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-lambo-gold font-mono text-[14px] group-hover:text-lambo-black transition-colors">
                      CERT.{String(currentPage * itemsPerPage + i + 1).padStart(2, '0')}
                    </span>
                    <ShieldCheck className="w-6 h-6 text-lambo-iron group-hover:text-lambo-black transition-colors" />
                  </div>
                  
                  <h3 className="text-lambo-white group-hover:text-lambo-black text-[22px] md:text-[24px] uppercase font-bold leading-tight transition-colors mb-4">
                    {cert.title}
                  </h3>
                  <span className="text-lambo-ash group-hover:text-lambo-black/60 text-[10px] uppercase tracking-widest block transition-colors">
                    Issued by {cert.issuer}
                  </span>
                </div>
                
                <div className="relative z-10 mt-12 flex justify-between items-end border-t border-lambo-iron group-hover:border-lambo-black/20 pt-6 transition-colors">
                  <span className="text-lambo-smoke group-hover:text-lambo-black text-[12px] font-mono">{cert.date}</span>
                  <div className="text-lambo-gold group-hover:text-lambo-black transition-colors">
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Background Accent */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lambo-gold/5 group-hover:bg-lambo-black/5 rounded-full blur-3xl transition-all" />
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
