'use client';

import { motion } from 'framer-motion';

interface ScrollWordDropProps {
  text: string;
  className?: string;
}

export default function ScrollWordDrop({ text, className = '' }: ScrollWordDropProps) {
  const words = text.split(' ');

  return (
    <div className={`overflow-hidden flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
              duration: 0.5,
              delay: index * 0.2,
              ease: 'easeOut',
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
