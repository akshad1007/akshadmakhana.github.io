import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { WordsPullUpMultiStyle } from './ui/WordsPullUp';

export function FeaturesSection() {
  const cards = [
    {
      title: "Research & Insight",
      tag: "Strategy",
      description: "We dig deep into data, culture, and human behavior to surface the insights that drive meaningful, lasting change.",
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
    },
    {
      title: "Design & Execution",
      tag: "Craft",
      description: "From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.",
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
    }
  ];

  return (
    <section id="features" className="relative bg-[#050505] py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-overlay" />
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <h2 className="text-3xl md:text-5xl text-white tracking-tight max-w-2xl">
            <WordsPullUpMultiStyle 
              segments={[
                { text: "Studio-grade workflows " },
                { text: "for visionary creators.", className: "text-primary" }
              ]} 
            />
          </h2>
          <div className="text-white/40 text-sm tracking-widest uppercase pb-2">
            What we do
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group liquid-glass rounded-3xl overflow-hidden relative flex flex-col aspect-auto min-h-[480px]"
            >
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <source src={card.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <span className="text-white/80 text-xs tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                    {card.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2 hover:bg-white hover:text-black transition-colors cursor-pointer text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-white text-2xl md:text-3xl mb-4 tracking-tight font-medium">
                    {card.title}
                  </h3>
                  <div className="space-y-3 mb-6">
                    {(card.description.split('. ').filter(d => d.trim().length > 0)).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{point}{point.endsWith('.') ? '' : '.'}</span>
                      </div>
                    ))}
                  </div>
                  <button className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-2 group/btn">
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
