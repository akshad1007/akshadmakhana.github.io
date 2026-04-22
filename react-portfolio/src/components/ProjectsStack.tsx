import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface ProjectItemProps {
  title: string;
  description: string;
  imgUrl: string;
  delay: string;
}

function ProjectItem({ title, description, imgUrl, delay }: ProjectItemProps) {
  const ref = useInViewAnimation(0.2);

  return (
    <div ref={ref} className="opacity-0 mb-[60px]" style={{ animationDelay: delay }}>
      <div className="mb-8">
        <h3 className="font-sans font-normal uppercase text-[40px] md:text-[54px] text-lambo-white tracking-normal leading-title mb-2">
          {title}
        </h3>
        <p className="text-lambo-ash text-[16px] max-w-2xl leading-[1.5]">
          {description}
        </p>
      </div>
      <div className="w-full relative rounded-none overflow-hidden border border-lambo-iron bg-lambo-charcoal">
        <img 
          src={imgUrl} 
          alt={title} 
          className="w-full h-[400px] md:h-[600px] object-cover mix-blend-luminosity opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lambo-black via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export function ProjectsStack() {
  const PROJECTS = [
    {
      title: "Stock Market Forecasting",
      description: "Advanced Time Series analysis utilizing ARIMA, LSTM, and Prophet models for highly accurate financial predictions.",
      imgUrl: "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif"
    },
    {
      title: "Shoplift-Patrol",
      description: "AI-driven real-time shoplifting detection utilizing YOLO and OpenCV for autonomous surveillance systems.",
      imgUrl: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
    },
    {
      title: "AI Reflection",
      description: "Sophisticated Emotion Sentiment Analysis engine mapping facial cues and text interactions to psychological states.",
      imgUrl: "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif"
    },
    {
      title: "Busify",
      description: "Comprehensive transit management platform built on robust relational database architectures.",
      imgUrl: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance analytics application that categorizes and visualizes discretionary spending metrics.",
      imgUrl: "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-[40px] py-32 bg-lambo-black">
      <div className="flex flex-col">
        {PROJECTS.map((proj, idx) => (
          <ProjectItem 
            key={proj.title}
            title={proj.title}
            description={proj.description}
            imgUrl={proj.imgUrl}
            delay={`${(idx % 3) * 0.1}s`}
          />
        ))}
      </div>
    </section>
  );
}
