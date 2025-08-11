'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const experiences = [
  {
    title: 'Bachelor of Computer Applications (BCA)',
    company: 'Vidya Vihar Institute of Technology',
    location: 'Purnia, Bihar',
    period: '2022 - 2025',
    description: 'Currently pursuing BCA with focus on full-stack development, database management, and software engineering principles.',
    achievements: [
      'Maintaining CGPA of 8.46/10',
      'Active in technical projects and competitions',
      'Strong foundation in programming and web technologies'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL']
  },
  {
    title: 'NSS Volunteer & Leader',
    company: 'National Service Scheme',
    location: 'Purnia, Bihar',
    period: '2022 - Present',
    description: 'Led 150+ volunteers in organizing community service events and social initiatives, focusing on education and community development.',
    achievements: [
      'Led 150+ volunteers effectively',
      'Organized 10+ community events',
      'Increased participation by 60%'
    ],
    technologies: ['Leadership', 'Event Management', 'Community Service', 'Team Building']
  },
  {
    title: 'Hostel Incharge',
    company: 'Vidya Vihar Institute of Technology',
    location: 'Purnia, Bihar',
    period: '2023 - Present',
    description: 'Managed hostel operations for 100+ residents, ensuring smooth functioning and resolving student concerns with high satisfaction rates.',
    achievements: [
      'Managed operations for 100+ residents',
      'Resolved 50+ issues efficiently',
      'Achieved 90% satisfaction rate'
    ],
    technologies: ['Management', 'Problem Solving', 'Communication', 'Administration']
  },
  {
    title: 'Finance Coordinator',
    company: 'Student Council',
    location: 'Purnia, Bihar',
    period: '2023 - 2024',
    description: 'Oversaw budget management and financial planning for student activities, implementing cost-effective strategies and transparent financial practices.',
    achievements: [
      'Managed INR 5 Lakh budget',
      'Saved 20% through efficient allocation',
      'Implemented transparent financial practices'
    ],
    technologies: ['Budget Management', 'Financial Planning', 'Cost Optimization', 'Analytics']
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and leadership accomplishments
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