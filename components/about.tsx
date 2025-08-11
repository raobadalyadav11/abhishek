'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces and experiences.'
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for speed, accessibility, and user satisfaction.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in cross-functional teams to deliver exceptional results.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over 5 years of experience in full-stack development, I specialize in building 
                modern web applications using cutting-edge technologies. My journey began with a 
                curiosity for problem-solving, which evolved into a passion for creating elegant 
                digital solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in the power of clean, efficient code and user-centered design. Whether 
                it's developing scalable backend systems or crafting intuitive frontend experiences, 
                I approach each project with attention to detail and commitment to excellence.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center mr-3">
                        <highlight.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold">{highlight.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}