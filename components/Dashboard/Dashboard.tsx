'use client';
import React from 'react';
import Sidebar from './Sidebar';
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Eye,
  MousePointer,
  ShoppingCart,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      icon: DollarSign,
      positive: true
    },
    {
      title: 'Total Users',
      value: '2,345',
      change: '+18.7%',
      icon: Users,
      positive: true
    },
    {
      title: 'Page Views',
      value: '12,234',
      change: '+5.2%',
      icon: Eye,
      positive: true
    },
    {
      title: 'Bounce Rate',
      value: '2.4%',
      change: '-1.2%',
      icon: Activity,
      positive: false
    }
  ];

  const recentActivity = [
    { icon: ShoppingCart, title: 'New order received', time: '2 minutes ago' },
    { icon: Users, title: 'New user registered', time: '5 minutes ago' },
    {
      icon: MousePointer,
      title: 'High click rate on homepage',
      time: '10 minutes ago'
    },
    { icon: TrendingUp, title: 'Revenue increased by 15%', time: '1 hour ago' }
  ];

  return (
    <div className='flex h-screen bg-gray-50'>
      <Sidebar />

      {/* Main Content */}
      <main className='flex-1 overflow-auto'>
        {/* Header */}
        <header className='border-b border-gray-200 bg-white p-6'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-black'>Dashboard</h1>
              <p className='mt-1 text-gray-600'>
                Welcome back, John! Here&apos;s what&apos;s happening today.
              </p>
            </div>
            <div className='flex items-center space-x-4'>
              <button className='rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-800'>
                Export Data
              </button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className='p-6'>
          <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className='rounded-lg border border-gray-200 bg-white p-6'
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='mb-1 text-sm text-gray-600'>{stat.title}</p>
                      <p className='text-2xl font-bold text-black'>
                        {stat.value}
                      </p>
                      <p
                        className={`mt-1 text-sm ${stat.positive ? 'text-green-600' : 'text-red-600'}`}
                      >
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100'>
                      <IconComponent className='h-6 w-6 text-gray-600' />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Content Grid */}
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {/* Recent Activity */}
            <div className='rounded-lg border border-gray-200 bg-white p-6'>
              <h3 className='mb-4 text-lg font-semibold text-black'>
                Recent Activity
              </h3>
              <div className='space-y-4'>
                {recentActivity.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div
                      key={index}
                      className='flex items-center space-x-3'
                    >
                      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-100'>
                        <IconComponent className='h-4 w-4 text-gray-600' />
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm font-medium text-black'>
                          {activity.title}
                        </p>
                        <p className='flex items-center text-xs text-gray-500'>
                          <Clock className='mr-1 h-3 w-3' />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className='rounded-lg border border-gray-200 bg-white p-6'>
              <h3 className='mb-4 text-lg font-semibold text-black'>
                Quick Actions
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <button className='rounded-lg border border-gray-200 p-4 text-left hover:bg-gray-50'>
                  <Users className='mb-2 h-6 w-6 text-gray-600' />
                  <p className='font-medium text-black'>Add User</p>
                  <p className='text-xs text-gray-500'>
                    Create new user account
                  </p>
                </button>
                <button className='rounded-lg border border-gray-200 p-4 text-left hover:bg-gray-50'>
                  <TrendingUp className='mb-2 h-6 w-6 text-gray-600' />
                  <p className='font-medium text-black'>View Analytics</p>
                  <p className='text-xs text-gray-500'>
                    Check performance metrics
                  </p>
                </button>
                <button className='rounded-lg border border-gray-200 p-4 text-left hover:bg-gray-50'>
                  <Activity className='mb-2 h-6 w-6 text-gray-600' />
                  <p className='font-medium text-black'>System Status</p>
                  <p className='text-xs text-gray-500'>Monitor system health</p>
                </button>
                <button className='rounded-lg border border-gray-200 p-4 text-left hover:bg-gray-50'>
                  <DollarSign className='mb-2 h-6 w-6 text-gray-600' />
                  <p className='font-medium text-black'>Financial Report</p>
                  <p className='text-xs text-gray-500'>
                    Generate revenue report
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
