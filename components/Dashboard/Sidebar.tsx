'use client';

import React, { useState } from 'react';
import {
  Home,
  BarChart3,
  Users,
  Settings,
  FileText,
  Calendar,
  Mail,
  Bell,
  Menu
} from 'lucide-react';
import { motion } from 'motion/react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Users' },
    { icon: FileText, label: 'Documents' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Mail, label: 'Messages' },
    { icon: Bell, label: 'Notifications' },
    { icon: Settings, label: 'Settings' }
  ];

  const sidebarVariants = {
    open: {
      width: '16rem'
    },
    closed: {
      width: '4rem'
    }
  };

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: -1
      }
    }
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: -10
    }
  };

  return (
    <motion.div className='h-screen border border-gray-200 bg-white'>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{
          duration: 0.3
        }}
        className={`flex h-full flex-col`}
      >
        {/* Header */}
        <div className={`border-b border-gray-200 ${isOpen ? 'p-6' : 'p-4'}`}>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <button
                onClick={toggleSidebar}
                className='flex h-8 w-8 items-center justify-center rounded-lg bg-black transition-colors hover:bg-gray-800'
                title={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                <Menu className='h-5 w-5 text-white' />
              </button>
              {isOpen && (
                <span className='text-xl font-semibold text-black'>
                  Dashboard
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`flex-1 ${isOpen ? 'p-4' : 'p-2'}`}>
          <motion.ul
            variants={parentVariant}
            className='space-y-2'
          >
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.li
                  variants={childVariants}
                  key={index}
                >
                  <a
                    href='#'
                    className={`flex items-center rounded-lg transition-colors duration-200 ${
                      isOpen
                        ? 'space-x-3 px-4 py-3'
                        : 'justify-center px-2 py-3'
                    } ${
                      item.active
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                    }`}
                    title={!isOpen ? item.label : undefined}
                  >
                    <IconComponent className='h-5 w-5' />
                    {isOpen && (
                      <span className='font-medium'>{item.label}</span>
                    )}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>

        {/* Footer */}
        <div className={`border-t border-gray-200 ${isOpen ? 'p-4' : 'p-2'}`}>
          <div
            className={`flex items-center ${isOpen ? 'space-x-3' : 'justify-center'}`}
          >
            <div
              className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'
              title={!isOpen ? 'John Doe - john@example.com' : undefined}
            >
              <Users className='h-5 w-5 text-gray-600' />
            </div>
            {isOpen && (
              <div>
                <p className='text-sm font-medium text-black'>John Doe</p>
                <p className='text-xs text-gray-500'>john@example.com</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
