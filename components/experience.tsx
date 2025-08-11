'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovation Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Increased application performance by 40%',
      'Led team of 5 developers',
      'Implemented CI/CD pipelines'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and RESTful APIs. Collaborated with design teams to implement pixel-perfect user interfaces.',
    achievements: [
      'Built 15+ production applications',
      'Reduced bug reports by 35%',
      'Improved user engagement by 50%'
    ],
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Docker']
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2019 - 2020',
    description: 'Created modern, responsive user interfaces for SaaS platform. Optimized application performance and implemented accessibility standards.',
    achievements: [
      'Achieved 98% accessibility score',
      'Optimized load times by 60%',
      'Implemented design system'
    ],
    technologies: ['JavaScript', 'CSS3', 'React', 'Redux']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:transform sm:-translate-x-1/2" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-blue-600 rounded-full sm:transform sm:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 sm:ml-0 w-full ${
                  index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                } sm:w-1/2`}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {experience.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}