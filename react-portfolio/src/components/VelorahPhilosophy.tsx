import { motion } from 'framer-motion';

export function VelorahPhilosophy() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto w-full font-sans">
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
      >
        Innovation <span className="font-serif italic text-white/40">x</span> Vision
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden aspect-[4/3] w-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 text-xs tracking-widest uppercase">
              Choose your space
            </h4>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Every meaningful breakthrough begins at the intersection of disciplined strategy and remarkable creative vision. We operate at that crossroads, turning bold thinking into tangible outcomes that move people and reshape industries.
            </p>
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="flex flex-col gap-4">
            <h4 className="text-white/40 text-xs tracking-widest uppercase">
              Shape the future
            </h4>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              We believe that the best work emerges when curiosity meets conviction. Our process is designed to uncover hidden opportunities and translate them into experiences that resonate long after the first impression.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
