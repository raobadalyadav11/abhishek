'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, Award, Code, Coffee, BookOpen, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: BookOpen,
    value: 8.46,
    suffix: '/10',
    label: 'CGPA',
    description: 'Academic Excellence',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Users,
    value: 150,
    suffix: '+',
    label: 'Volunteers Led',
    description: 'NSS Leadership',
    color: 'from-emerald-600 to-emerald-700'
  },
  {
    icon: Code,
    value: 6,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Web Development',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'Events Organized',
    description: 'Community Impact',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Target,
    value: 90,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Hostel Management',
    color: 'from-pink-600 to-pink-700'
  },
  {
    icon: Coffee,
    value: 500,
    suffix: '+',
    label: 'Hours Coding',
    description: 'Learning & Building',
    color: 'from-indigo-600 to-indigo-700'
  }
];

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements in Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse of my journey through academics, leadership, and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 text-center relative">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-foreground"
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </motion.div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>

                  {/* Hover effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">INR 5L</div>
              <div className="text-sm text-muted-foreground">Budget Managed</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-emerald-600">20%</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">100+</div>
              <div className="text-sm text-muted-foreground">Residents Managed</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-600">60%</div>
              <div className="text-sm text-muted-foreground">Participation Increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}