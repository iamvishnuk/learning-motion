'use client';

import { cn } from '@/lib/utils';
import {
  Clock12,
  Component,
  Globe,
  MessageSquareText,
  PlusIcon,
  X
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            className='flex h-dvh items-center justify-center bg-gray-50'
          >
            <div
              className={cn(
                'h-[26rem] min-h-[28.5rem] w-72 rounded-xl text-black',
                'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                'flex flex-col p-6'
              )}
            >
              <h2 className='text-[10px] font-bold'>React UI Components</h2>
              <p className='mt-4 text-[10px] text-neutral-600'>
                A collection of beautiful UI components, let's go on with it
              </p>
              <div className='flex items-center justify-center'>
                <button
                  onClick={() => setOpen(false)}
                  className='mt-4 flex items-center gap-1 rounded-md px-2 py-1 text-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] hover:cursor-pointer'
                >
                  <Image
                    width={50}
                    height={50}
                    alt='react'
                    src='/react-logo.png'
                    className='size-4'
                  />
                  React
                  <X className='size-4 text-neutral-400' />
                </button>
              </div>
              <div className='relative mt-4 flex-1 rounded-lg border border-dashed border-neutral-200 bg-gray-100'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                  whileHover={{ opacity: 1, scale: 1.05, filter: 'blur(0px)' }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='absolute inset-0 h-full w-full divide-y divide-neutral-200 rounded-lg bg-white'
                >
                  <div className='flex gap-2 p-4'>
                    <div className='flex size-7 shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                      <MessageSquareText className='size-4 text-neutral-600' />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-[8px] font-bold text-neutral-600'>
                        React UI Components
                      </p>
                      <p className='mt-1 text-[8px] text-neutral-400'>
                        A collection of UI components
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-2 p-4'>
                    <div className='flex size-7 shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                      <Clock12 className='size-4 text-neutral-600' />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-[8px] font-bold text-neutral-600'>
                        24 hours turnaround
                      </p>
                      <p className='mt-1 text-[8px] text-neutral-400'>
                        Super fast delivery at wrap speed.
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-2 p-4'>
                    <div className='flex size-7 shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                      <Globe className='size-4 text-neutral-600' />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-[8px] font-bold text-neutral-600'>
                        360 day all round
                      </p>
                      <p className='mt-1 text-[8px] text-neutral-400'>
                        we're here to help you 24/7
                      </p>
                    </div>
                  </div>

                  <div className='flex gap-2 p-4'>
                    <div className='flex size-7 shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                      <Component className='size-4 text-neutral-600' />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-[8px] font-bold text-neutral-600'>
                        Some other components
                      </p>
                      <p className='mt-1 text-[8px] text-neutral-400'>
                        Here goes another subtitle
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-2 p-4'>
                    <div className='flex size-4 shrink-0 items-center justify-center rounded-md bg-white bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
                      <PlusIcon className='size-3 text-neutral-600' />
                    </div>
                    <div className='flex flex-col'>
                      <p className='mt-1 text-[8px] text-neutral-400'>
                        Create project
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
