import { motion } from 'framer-motion';

export function VelorahFeaturedVideo() {
  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative rounded-3xl overflow-hidden aspect-video w-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full backdrop-blur-md bg-black/20">
            <h4 className="text-white/50 text-xs tracking-widest uppercase mb-3 font-sans">
              Our Approach
            </h4>
            <p className="text-white text-sm md:text-base leading-relaxed font-sans">
              We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-3 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium whitespace-nowrap self-start md:self-end"
          >
            Explore more
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
