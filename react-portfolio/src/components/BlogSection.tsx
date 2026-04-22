import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const BLOG_POSTS = [
  { id: "01", title: "Predictive Analytics Future", date: "05.26", tag: "AI", status: "STABLE" },
  { id: "02", title: "Neural Architectures 2026", date: "04.26", tag: "ENG", status: "BETA" },
  { id: "03", title: "Visual Processing: Next Gen", date: "03.26", tag: "CV", status: "LIVE" },
  { id: "04", title: "Data Visualization Systems", date: "02.26", tag: "UI", status: "STABLE" },
  { id: "05", title: "Machine Learning at Scale", date: "01.26", tag: "ML", status: "STABLE" },
  { id: "06", title: "Optimizing Neural Networks", date: "12.25", tag: "DL", status: "DEPLOYED" },
  { id: "07", title: "Cybersecurity in AI Era", date: "11.25", tag: "SEC", status: "BETA" },
  { id: "08", title: "Edge Computing for Vision", date: "10.25", tag: "EDGE", status: "LIVE" },
];

export function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(BLOG_POSTS.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentPosts = BLOG_POSTS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="relative w-full py-24 md:py-32 px-[20px] md:px-[120px] bg-transparent overflow-hidden">
      <div className="relative z-10 flex flex-col gap-16">
        {/* Header - Global Section Style with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col">
            <motion.span 
              className="text-lambo-gold uppercase tracking-[0.4em] text-[12px] font-bold mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Insights & Thought
            </motion.span>
            <motion.h2 
              className="text-lambo-white text-[48px] md:text-[64px] font-normal uppercase leading-none tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Digital <span className="text-lambo-gold italic">Log</span>
            </motion.h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prevPage}
              className="w-14 h-14 flex items-center justify-center border border-lambo-iron text-lambo-white hover:bg-lambo-gold hover:border-lambo-gold hover:text-lambo-black transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextPage}
              className="w-14 h-14 flex items-center justify-center border border-lambo-iron text-lambo-white hover:bg-lambo-gold hover:border-lambo-gold hover:text-lambo-black transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="ml-4 font-mono text-lambo-iron text-[14px]">
              <span className="text-lambo-gold">{currentPage + 1}</span> / {totalPages}
            </div>
          </div>
        </div>

        {/* List - High Density Full Width with Sliding Animation */}
        <div className="w-full min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col"
            >
              {currentPosts.map((post, i) => (
                <motion.div 
                  key={`${post.id}-${i}`}
                  className="group flex items-center justify-between py-8 border-b border-lambo-iron/20 hover:bg-lambo-iron/5 transition-all px-4 cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-lambo-iron font-mono text-[11px] group-hover:text-lambo-gold transition-colors">{post.id}</span>
                    <div className="flex flex-col">
                      <span className="text-lambo-white text-[18px] md:text-[22px] uppercase font-bold tracking-tight group-hover:text-lambo-gold transition-colors">{post.title}</span>
                      <div className="flex gap-4 mt-1">
                        <span className="text-lambo-ash text-[9px] uppercase tracking-widest">{post.tag}</span>
                        <span className="text-lambo-iron text-[9px] uppercase tracking-widest">{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <span className="hidden sm:block text-lambo-gold font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Read Brief →</span>
                    <div className={`px-2 py-0.5 border text-[9px] font-mono ${post.status === 'BETA' ? 'border-lambo-ash text-lambo-ash' : 'border-lambo-gold/50 text-lambo-gold'}`}>
                      {post.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
