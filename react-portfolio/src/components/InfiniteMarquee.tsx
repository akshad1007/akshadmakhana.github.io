import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function InfiniteMarquee() {
  const ref = useInViewAnimation();

  const gifs = [
    "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
    "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
    "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
  ];

  // We duplicate the array to create a seamless infinite loop
  const duplicatedGifs = [...gifs, ...gifs];

  return (
    <section 
      ref={ref} 
      className="w-full mt-16 md:mt-20 mb-16 overflow-hidden opacity-0" 
      style={{ animationDelay: '0.1s' }}
    >
      <div className="flex row w-max animate-marquee hover:pause">
        {duplicatedGifs.map((src, idx) => (
          <img 
            key={idx}
            src={src}
            alt="Cinematic Demo"
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-none border border-lambo-iron grayscale hover:grayscale-0 transition-all duration-500"
          />
        ))}
      </div>
    </section>
  );
}
