'use client';

import { Rocket } from 'lucide-react';
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
  useSpring,
  useMotionValueEvent
} from 'motion/react';
import Image from 'next/image';
import { ReactNode, useRef, useState } from 'react';

type Features = {
  icons: ReactNode;
  title: string;
  description: string;
  content: ReactNode;
};
const features: Features[] = [
  {
    icons: <Rocket className='size-8 text-neutral-200' />,
    title: 'Generate ultra realistic images in seconds',
    description:
      'With our state of the  art AI, you can generate ultra realistic images in no time at all.',
    content: (
      <div>
        <Image
          src='/car-1.jpg'
          width='500'
          height='500'
          alt='car'
          className='rounded-lg'
        />
      </div>
    )
  },
  {
    icons: <Rocket className='size-8 text-neutral-200' />,
    title: 'Replace great art',
    description:
      'Generate the painting of renowned artists, like Van Gogh or Monet or Vishnu Bhai',
    content: (
      <div className=''>
        <Image
          src='/art-1.jpg'
          width='500'
          height='500'
          alt='car'
          className='rounded-lg'
        />
      </div>
    )
  },
  {
    icons: <Rocket className='size-8 text-neutral-200' />,
    title: 'Batch geneate image with single click',
    description:
      'With our state of the art AI, you can generate a batch of images within 10 seconds with absolutly no computer power.',
    content: (
      <div className='relative'>
        <div className='-rotate-[10deg]'>
          <Image
            src='/car-1.jpg'
            width='500'
            height='500'
            alt='car'
            className='rounded-lg'
          />
        </div>
        <div className='absolute inset-0 rotate-[10deg] transform'>
          <Image
            src='/art-1.jpg'
            width='500'
            height='500'
            alt='car'
            className='rounded-lg'
          />
        </div>
      </div>
    )
  }
];

const MotionHooks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgrounds = ['#343434', '#00193b', '#05291c'];

  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{
        background
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut'
      }}
      className='flex min-h-screen items-center justify-center bg-neutral-900'
    >
      <div className='mx-auto flex max-w-4xl flex-col gap-10 py-10'>
        {features.map((feature, idx) => (
          <Card
            feature={feature}
            key={idx}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Card = ({ feature }: { feature: Features }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const transtateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, 300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      className='grid grid-cols-2 items-center gap-20 py-40'
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale
        }}
        className='flex flex-col gap-5'
      >
        {feature.icons}
        <h2 className='text-4xl font-bold text-white'>{feature.title}</h2>
        <p className='text-lg text-neutral-400'>{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: transtateContent,
          opacity: opacityContent
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

export default MotionHooks;
