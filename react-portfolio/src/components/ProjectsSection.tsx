import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const PROJECTS = [
  {
    title: "Stock Market Forecasting",
    category: "Time Series AI",
    image: "/pictures/internship project img.jpg",
    link: "https://github.com/eshPra/stock-forecasting-models.git",
    desc: "LSTM-based financial prediction achieving 85% accuracy with real-time Streamlit dashboards.",
    span: "col-span-1 lg:col-span-2 row-span-1"
  },
  {
    title: "Shoplift-Patrol",
    category: "Computer Vision",
    image: "/pictures/shoplift.jpg",
    link: "https://github.com/akshad1007/Shoplift-Patrol.git",
    desc: "AI theft detection using YOLO and OpenCV, processing 500+ FPS for real-time security.",
    span: "col-span-1 row-span-1 lg:row-span-2"
  },
  {
    title: "AI Reflection",
    category: "Sentiment Analysis",
    image: "/pictures/teamlogo.jpg",
    link: "https://github.com/akshad1007/SU_HACKATHON.git",
    desc: "Emotion classification system winning appreciation at Sanjivani Industry Hackathon.",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Library Management",
    category: "DSA / C++",
    image: "/pictures/libmanagmnet.jpg",
    link: "https://github.com/akshad1007/DSA-Based-Library-Management.git",
    desc: "Optimized book records system reducing search time by 40% using advanced algorithms.",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Busify Tracker",
    category: "UI/UX / FlutterFlow",
    image: "/pictures/busify img.webp",
    link: "https://github.com/akshad1007/busify-tracker-app.git",
    desc: "Human-centered live bus tracking app designed for daily commuters with real-time updates.",
    span: "col-span-1 lg:col-span-2 row-span-1"
  },
  {
    title: "Expense Tracker",
    category: "Python Development",
    image: "/pictures/expense tracker img.webp",
    link: "https://github.com/akshad1007/Expense-Tracker",
    desc: "Personal finance visualizer tracking 100+ categories using Tkinter and Matplotlib.",
    span: "col-span-1 row-span-1"
  },
  {
    title: "Plant Simulator",
    category: "Java Educational",
    image: "/pictures/javaswing.jpg",
    link: "https://github.com/akshad1007/Java-Swing-Plant-Simulator.git",
    desc: "Interactive growth simulation teaching sustainable balance through Java Swing GUI.",
    span: "col-span-1 row-span-1"
  }
];

export function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(PROJECTS.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentProjects = PROJECTS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="relative w-full py-24 md:py-32 px-[20px] md:px-[120px] bg-transparent overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <div>
          <motion.span 
            className="text-lambo-gold uppercase tracking-[0.4em] text-[12px] font-bold mb-4 block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-lambo-white text-[48px] md:text-[64px] font-normal uppercase leading-none tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured <span className="text-lambo-gold italic">Projects</span>
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

      <div className="relative h-auto md:h-[800px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] md:auto-rows-fr h-full gap-4 md:gap-6"
          >
            {currentProjects.map((project, i) => (
              <motion.div
                key={i}
                className={`${project.span} group relative overflow-hidden bg-lambo-iron/20 border border-lambo-iron`}
                whileHover={{ borderColor: "#FFC000" }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-100"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-lambo-black via-lambo-black/20 to-transparent group-hover:via-lambo-black/0 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                  <div className="overflow-hidden mb-2">
                    <motion.span 
                      initial={{ y: 20 }}
                      whileInView={{ y: 0 }}
                      className="text-lambo-gold text-[10px] uppercase tracking-widest font-bold block"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <h3 className="text-lambo-white text-[28px] md:text-[44px] uppercase font-normal leading-none mb-4 group-hover:text-lambo-gold transition-colors">{project.title}</h3>
                  <p className="text-lambo-smoke text-[12px] uppercase tracking-wider max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.desc}</p>
                </div>
                
                {/* ID Tag */}
                <div className="absolute top-6 left-8 text-lambo-iron text-[12px] font-mono group-hover:text-lambo-gold transition-colors">
                  PRJ.{currentPage * itemsPerPage + i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
