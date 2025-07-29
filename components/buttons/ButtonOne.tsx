'use client';
import { motion } from 'motion/react';

const ButtonOne = () => {
  return (
    <div
      className='flex min-h-dvh min-w-dvw items-center justify-center bg-neutral-900 [prespective:1000px] [transform-style:preserve-3d]'
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
        backgroundSize: '8px 8px',
        backgroundRepeat: 'repeat'
      }}
    >
      <motion.button
        whileHover={{
          rotateX: 20,
          rotateY: 10,
          boxShadow: '0px 20px 50px rgba(8,112,184,0.7)'
        }}
        style={{
          translateZ: 100
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className='group relative rounded-lg bg-black px-12 py-4 text-neutral-500 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]'
      >
        <span className='transition-colors duration-300 group-hover:text-cyan-500'>
          Click Me
        </span>
        <span className='absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500 to-transparent'></span>
        <span className='absolute inset-x-0 bottom-0 h-[4px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100'></span>
      </motion.button>
    </div>
  );
};

export default ButtonOne;
