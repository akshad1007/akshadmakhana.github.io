import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../utils';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export function WordsPullUp({ text, className, showAsterisk }: WordsPullUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={cn('inline-flex flex-wrap justify-center', className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden relative inline-flex mr-[0.25em]">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
          >
            {word}
            {showAsterisk && i === words.length - 1 && word.includes('a') && (
              <span className="absolute -top-[0.2em] -right-[0.3em] text-[0.4em] text-primary">
                *
              </span>
            )}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

interface MultiStyleSegment {
  text: string;
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className }: { segments: MultiStyleSegment[], className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  let globalWordIndex = 0;

  return (
    <div ref={ref} className={cn('inline-flex flex-wrap justify-center', className)}>
      {segments.map((segment, segIndex) => {
        const words = segment.text.split(' ');
        return words.map((word, wordIndex) => {
          const delay = globalWordIndex * 0.08;
          globalWordIndex++;
          return (
            <span key={`${segIndex}-${wordIndex}`} className="overflow-hidden relative inline-flex mr-[0.25em]">
              <motion.span
                className={segment.className}
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay,
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        });
      })}
    </div>
  );
}
