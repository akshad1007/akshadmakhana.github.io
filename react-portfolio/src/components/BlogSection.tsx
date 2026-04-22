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
    body: "The landscape of data science is shifting toward real-time responsiveness. We are seeing a move where predictive models are no longer static. Hybrid LSTM-Transformer architectures are now the gold standard for reducing latency in critical systems. By integrating edge intelligence, we can process data at the source, ensuring that environmental monitoring and medical diagnostics are faster than ever.",
    highlights: ["real-time responsiveness", "Hybrid LSTM-Transformer architectures", "edge intelligence"],
    conclusion: "The integration of immediate data processing will define the next decade of AI engineering."
  },
  { 
    id: "02", 
    title: "Neural Architectures 2026", 
    date: "04.26", 
    tag: "ENG", 
    status: "BETA",
    body: "Efficiency is the new accuracy. Modern neural networks are focusing on sparse activations to handle massive datasets. Zero-shot learning has evolved significantly, allowing models to perform tasks they weren't explicitly trained for with 40% less computational overhead. This energy-efficient approach is crucial for sustainable AI development.",
    highlights: ["sparse activations", "Zero-shot learning", "energy-efficient approach"],
    conclusion: "Sustainable scaling of AI requires a fundamental shift in how we manage computational resources."
  },
  { 
    id: "03", 
    title: "Visual Processing: Next Gen", 
    date: "03.26", 
    tag: "CV", 
    status: "LIVE",
    body: "Computer vision has moved beyond simple object detection into the realm of temporal coherence. By utilizing YOLOv11 and spatial-attention mechanisms, we can now track suspicious behavior in retail environments with unprecedented precision. This allows for real-time security that adapts to complex human movements.",
    highlights: ["temporal coherence", "spatial-attention mechanisms", "unprecedented precision"],
    conclusion: "Context-aware vision systems are transforming public security and retail efficiency."
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

  // Function to highlight keywords in the body
  const renderBodyWithHighlights = (text: string, highlights: string[]) => {
    let parts = [text];
    highlights.forEach(highlight => {
      const newParts: string[] = [];
      parts.forEach(part => {
        const splitPart = part.split(new RegExp(`(${highlight})`, 'gi'));
        newParts.push(...splitPart);
      });
      parts = newParts;
    });

    return parts.map((part, index) => 
      highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
        <span key={index} className="text-lambo-gold font-bold">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative w-full py-24 md:py-32 px-[20px] md:px-[120px] bg-transparent overflow-hidden">
      <div className="relative z-10 flex flex-col gap-16">
        {/* Header */}
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

          <div className="flex items-center gap-4">
            <button 
              onClick={prevPage}
              className="w-14 h-14 flex items-center justify-center border border-lambo-iron text-lambo-white hover:bg-lambo-gold hover:border-lambo-gold hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextPage}
              className="w-14 h-14 flex items-center justify-center border border-lambo-iron text-lambo-white hover:bg-lambo-gold hover:border-lambo-gold hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              className="flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {currentPosts.map((post, i) => (
                <div 
                  key={`${post.id}-${i}`}
                  onClick={() => setSelectedPost(post)}
                  className="group flex items-center justify-between py-10 border-b border-lambo-iron/20 cursor-pointer hover:bg-lambo-iron/5 px-4 transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-lambo-ash font-mono text-[14px]">{post.id}</span>
                    <h3 className="text-lambo-white text-[24px] md:text-[32px] uppercase font-bold tracking-tight group-hover:text-lambo-gold transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <ArrowRight className="text-lambo-gold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Detailed View Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 flex items-center justify-center p-4 md:p-12 z-[100]">
            <motion.div 
              className="absolute inset-0 bg-lambo-black/98 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
            />
            
            <motion.div 
              className="relative w-full max-w-5xl bg-lambo-black border border-lambo-gold/20 flex flex-col max-h-[90vh] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
            >
              {/* Top Accent Bar */}
              <div className="h-1 w-full bg-lambo-gold" />

              <div className="flex-1 overflow-y-auto p-8 md:p-16 flex flex-col gap-12 custom-scrollbar">
                {/* ID & Title Section */}
                <div className="flex flex-col gap-4">
                  <span className="text-lambo-gold font-mono text-[16px] tracking-widest">BLOG_NO_{selectedPost.id}</span>
                  <h2 className="text-lambo-white text-[40px] md:text-[64px] uppercase font-bold leading-none tracking-tighter">
                    {selectedPost.title}
                  </h2>
                </div>

                {/* Body Content with Highlights */}
                <div className="flex flex-col gap-8">
                  <span className="text-lambo-ash uppercase text-[12px] tracking-[0.4em] font-bold">Article Body</span>
                  <p className="text-lambo-white text-[20px] md:text-[28px] leading-[1.4] font-light italic opacity-90">
                    {renderBodyWithHighlights(selectedPost.body, selectedPost.highlights)}
                  </p>
                </div>

                {/* Conclusion Box */}
                <div className="bg-lambo-iron/10 border-l-4 border-lambo-gold p-8 md:p-12 flex flex-col gap-4">
                  <span className="text-lambo-gold uppercase text-[12px] tracking-[0.4em] font-bold">Final Conclusion</span>
                  <p className="text-lambo-white text-[18px] md:text-[24px] font-normal leading-relaxed">
                    {selectedPost.conclusion}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-8 md:p-12 border-t border-lambo-iron/10 bg-lambo-iron/5 flex justify-center md:justify-end">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="px-16 py-5 bg-lambo-gold text-lambo-black hover:bg-lambo-white transition-all font-bold uppercase tracking-widest text-[14px]"
                >
                  Close Blog
                </button>
              </div>

              {/* Close Icon (Corner) */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-8 right-8 text-lambo-ash hover:text-lambo-gold transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(24, 24, 24, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FFC000;
        }
      `}} />
    </div>
  );
}
