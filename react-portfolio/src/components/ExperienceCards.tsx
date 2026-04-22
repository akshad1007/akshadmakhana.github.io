import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function ExperienceCards() {
  const ref1 = useInViewAnimation();
  const ref2 = useInViewAnimation();

  return (
    <section className="w-full py-24 px-[40px] bg-lambo-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1440px] mx-auto">
        
        {/* Card 1: Experience */}
        <div 
          ref={ref1}
          className="bg-lambo-charcoal rounded-none border border-lambo-iron px-10 md:px-16 pt-12 pb-16 opacity-0"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="text-lambo-ash font-sans text-[12px] uppercase tracking-label mb-6">Experience</div>
          <h3 className="text-[27px] md:text-[40px] text-lambo-white uppercase tracking-normal leading-sub mb-3">Zidio Development</h3>
          <h4 className="text-lambo-smoke font-sans text-xl uppercase mb-8">Data Science Intern</h4>
          <p className="text-lambo-ash text-[16px] leading-[1.5] mb-12">
            Engineered end-to-end data pipelines and developed predictive models using Scikit-Learn and TensorFlow. Improved data visualization and analytics reporting for cross-functional teams.
          </p>
          <div className="text-[24px] text-lambo-white mb-2 uppercase">Jan 2024</div>
          <div className="text-lambo-ash text-[14px] uppercase tracking-caption">Sept 2024</div>
          
          <div className="mt-12">
            <button className="bg-transparent border border-lambo-white/50 text-lambo-white px-[16px] py-[16px] rounded-none text-[14.4px] font-light uppercase hover:bg-lambo-action hover:border-lambo-action transition-all w-full md:w-auto">
              View Certificate
            </button>
          </div>
        </div>

        {/* Card 2: Education */}
        <div 
          ref={ref2}
          className="bg-lambo-charcoal rounded-none border border-lambo-iron px-10 md:px-16 pt-12 pb-16 opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="text-lambo-ash font-sans text-[12px] uppercase tracking-label mb-6">Education</div>
          <h3 className="text-[27px] md:text-[40px] text-lambo-white uppercase tracking-normal leading-sub mb-3">Sanjivani University</h3>
          <h4 className="text-lambo-smoke font-sans text-xl uppercase mb-8">B.Tech Computer Engineering</h4>
          <p className="text-lambo-ash text-[16px] leading-[1.5] mb-12 flex-1">
            Focus heavily on artificial intelligence, data structures, algorithm design, and core software engineering paradigms.
          </p>
          <div className="text-[24px] text-lambo-white mb-2 uppercase">2022</div>
          <div className="text-lambo-ash text-[14px] uppercase tracking-caption">2026</div>

          <div className="mt-12">
            <button className="bg-transparent border border-lambo-white/50 text-lambo-white px-[16px] py-[16px] rounded-none text-[14.4px] font-light uppercase hover:bg-lambo-action hover:border-lambo-action transition-all w-full md:w-auto">
              Transcripts
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
