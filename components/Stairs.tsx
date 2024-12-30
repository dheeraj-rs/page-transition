'use client';

import { expand, opacity } from '@/lib/anim-stairs';
import { motion, Variants } from 'framer-motion';

const anim = (variants: Variants, custom: number | null = null) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    custom,
    variants,
  };
};

const nbOfColumns = 5;
export default function Stairs({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        {...anim(opacity)}
        className="fixed w-full h-screen bg-foreground z-10 pointer-events-none top-0 left-0"
      />
      <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-20">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className="relative h-full w-full bg-foreground"
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
