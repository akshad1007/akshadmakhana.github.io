import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, ArrowLeft, X, BookOpen } from 'lucide-react';

const BLOG_POSTS = [
  { 
    id: "01", 
    title: "Predictive Analytics Future", 
    date: "05.26", 
    tag: "AI", 
    status: "STABLE",
    content: "Exploring the next frontier of predictive modeling where real-time data streams meet edge intelligence. This log analyzes how hybrid LSTM-Transformer architectures are reducing latency in high-stakes environments like environmental monitoring and medical diagnostics."
  },
  { 
    id: "02", 
    title: "Neural Architectures 2026", 
    date: "04.26", 
    tag: "ENG", 
    status: "BETA",
    content: "A technical breakdown of sparse activations in large-scale neural networks. We examine how zero-shot learning is evolving to handle massive datasets with 40% less computational overhead, focusing on the trade-offs between accuracy and energy efficiency."
  },
  { 
    id: "03", 
    title: "Visual Processing: Next Gen", 
    date: "03.26", 
    tag: "CV", 
    status: "LIVE",
    content: "Computer vision is moving beyond simple object detection. This entry discusses the integration of temporal coherence in YOLOv11 and how spatial-attention mechanisms are improving theft detection in complex retail environments."
  },
  { 
    id: "04", 
    title: "Data Visualization Systems", 
    date: "02.26", 
    tag: "UI", 
    status: "STABLE",
    content: "Visualizing high-dimensional data requires more than just charts. We look at the 'Performance Specs' aesthetic applied to technical dashboards, ensuring that complex data remains readable and actionable for elite system operators."
  },
  { 
    id: "05", 
    title: "Machine Learning at Scale", 
    date: "01.26", 
    tag: "ML", 
    status: "STABLE",
    content: "Scale brings its own set of challenges. This log focuses on distributed training strategies and the optimization of model weights for deployment across varied edge devices without sacrificing the precision of the underlying logic."
  },
  { 
    id: "06", 
    title: "Optimizing Neural Networks", 
    date: "12.25", 
    tag: "DL", 
    status: "DEPLOYED",
    content: "Deep learning optimization techniques for 2026. Reviewing gradient clipping and adaptive learning rates in the context of real-time air quality forecasting systems developed during the AnantaNetra research phase."
  },
  { 
    id: "07", 
    title: "Cybersecurity in AI Era", 
    date: "11.25", 
    tag: "SEC", 
    status: "BETA",
    content: "As AI becomes more integrated, security becomes paramount. We analyze adversarial attacks on neural networks and the implementation of robust defenses that can detect and neutralize malicious inputs before they reach the core processing unit."
  },
  { 
    id: "08", 
    title: "Edge Computing for Vision", 
    date: "10.25", 
    tag: "EDGE", 
    status: "LIVE",
    content: "The future of vision is at the edge. Discussion on why moving computation to the camera sensor is essential for reducing network congestion and maintaining high-speed detection in critical security infrastructure."
  },
];

export function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);
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
              Professional <span className="text-lambo-gold italic">Blog</span>
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
                  onClick={() => setSelectedPost(post)}
                  className="group flex items-center justify-between py-8 border-b border-lambo-iron/20 hover:bg-lambo-iron/5 transition-all px-4 cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle Sweep Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lambo-gold/0 via-lambo-gold/5 to-lambo-gold/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  
                  <div className="flex items-center gap-6 z-10">
                    <span className="text-lambo-iron font-mono text-[11px] group-hover:text-lambo-gold transition-colors">{post.id}</span>
                    <div className="flex flex-col">
                      <span className="text-lambo-white text-[18px] md:text-[22px] uppercase font-bold tracking-tight group-hover:text-lambo-gold transition-colors">{post.title}</span>
                      <div className="flex gap-4 mt-1">
                        <span className="text-lambo-ash text-[9px] uppercase tracking-widest">{post.tag}</span>
                        <span className="text-lambo-iron text-[9px] uppercase tracking-widest">{post.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 z-10">
                    <div className="hidden sm:flex items-center gap-2 text-lambo-gold font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      View Post <ArrowRight className="w-3 h-3" />
                    </div>
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

      {/* Modal - Centered Technical Data Interface */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 flex items-center justify-center p-4 md:p-8 z-[100]">
            {/* Cinematic Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-lambo-black/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
            />
            
            {/* Technical Interface Card */}
            <motion.div 
              className="relative w-full max-w-4xl bg-lambo-black border border-lambo-gold/40 shadow-[0_0_50px_rgba(255,192,0,0.1)] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lambo-gold" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-lambo-gold" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-lambo-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lambo-gold" />

              {/* Grid Background Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,192,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,192,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />

              <div className="relative p-8 md:p-12">
                {/* Modal Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-lambo-iron/20 pb-8">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 text-lambo-gold font-mono text-[10px] tracking-[0.3em]">
                      <BookOpen className="w-4 h-4" /> BLOG_ENTRY_{selectedPost.id}
                    </div>
                    <h3 className="text-lambo-white text-[32px] md:text-[40px] uppercase font-bold tracking-tight mt-2 leading-none">
                      {selectedPost.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="w-12 h-12 flex items-center justify-center border border-lambo-iron/50 text-lambo-white hover:bg-lambo-gold hover:text-lambo-black hover:border-lambo-gold transition-all group"
                  >
                    <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                  </button>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-12 gap-12">
                  {/* Left Column: Metadata */}
                  <div className="md:col-span-4 flex flex-col gap-8 font-mono">
                    <div className="p-4 bg-lambo-iron/5 border-l-2 border-lambo-gold">
                      <span className="text-lambo-iron text-[10px] uppercase mb-1 block">PUBLISHED_ON</span>
                      <span className="text-lambo-white text-[16px]">{selectedPost.date}.2026</span>
                    </div>
                    <div className="p-4 bg-lambo-iron/5 border-l-2 border-lambo-ash">
                      <span className="text-lambo-iron text-[10px] uppercase mb-1 block">CATEGORY</span>
                      <span className="text-lambo-ash text-[16px] tracking-[0.2em]">{selectedPost.tag}</span>
                    </div>
                    <div className="p-4 bg-lambo-iron/5 border-l-2 border-lambo-gold/50">
                      <span className="text-lambo-iron text-[10px] uppercase mb-1 block">ARTICLE_STATUS</span>
                      <span className="text-lambo-gold text-[16px]">{selectedPost.status}</span>
                    </div>
                  </div>

                  {/* Right Column: Narrative */}
                  <div className="md:col-span-8">
                    <div className="flex flex-col gap-6">
                      <span className="text-lambo-gold font-mono text-[11px] tracking-widest uppercase flex items-center gap-2">
                        <div className="w-8 h-[1px] bg-lambo-gold" /> Brief_Overview
                      </span>
                      <motion.p 
                        className="text-lambo-ash text-[20px] md:text-[22px] leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {selectedPost.content}
                      </motion.p>
                      
                      {/* Secondary Technical Text */}
                      <div className="mt-8 grid grid-cols-2 gap-8 border-t border-lambo-iron/10 pt-8 font-mono">
                        <div className="flex flex-col">
                          <span className="text-lambo-iron text-[9px] uppercase tracking-widest mb-2">Read_Time</span>
                          <span className="text-lambo-white text-[13px]">~4 min</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-lambo-iron text-[9px] uppercase tracking-widest mb-2">Document_ID</span>
                          <span className="text-lambo-white text-[13px]">AM-2026-{selectedPost.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-12 flex justify-end">
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="group relative px-12 py-4 bg-transparent border border-lambo-gold text-lambo-gold font-bold uppercase text-[12px] tracking-[0.2em] overflow-hidden hover:text-lambo-black transition-colors duration-300"
                  >
                    <div className="absolute inset-0 bg-lambo-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-3">
                      Close Article <X className="w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
