'use client';

import { motion, Variants } from 'framer-motion';
import { perspective, slide, opacity } from '@/lib/anim-inner';

const anim = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

export default function Inner({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black">
      <motion.div className="w-full h-screen fixed inset-0 bg-white z-[1]" {...anim(slide)} />
      <motion.div className="bg-white" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}
