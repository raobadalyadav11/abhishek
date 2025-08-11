'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React / Next.js', level: 95, color: 'bg-blue-600' },
      { name: 'TypeScript', level: 90, color: 'bg-blue-500' },
      { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-600' },
      { name: 'Vue.js', level: 85, color: 'bg-green-600' }
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js / Express', level: 92, color: 'bg-green-600' },
      { name: 'Python / Django', level: 88, color: 'bg-yellow-600' },
      { name: 'PostgreSQL', level: 90, color: 'bg-blue-700' },
      { name: 'MongoDB', level: 85, color: 'bg-green-700' }
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 95, color: 'bg-gray-700' },
      { name: 'Docker', level: 82, color: 'bg-blue-600' },
      { name: 'AWS / Vercel', level: 78, color: 'bg-orange-600' },
      { name: 'CI/CD', level: 80, color: 'bg-purple-600' }
    ]
  }
];

const softSkills = [
  'Problem Solving',
  'Team Leadership',
  'Communication',
  'Project Management',
  'Agile/Scrum',
  'Code Review',
  'Mentoring',
  'UI/UX Design'
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full ${skill.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Professional Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}