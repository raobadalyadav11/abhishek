'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    title: 'Building Responsive Web Applications with Modern CSS',
    excerpt: 'Learn how to create responsive designs using CSS Grid, Flexbox, and modern CSS techniques for better user experience across all devices.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    views: 1250,
    featured: true
  },
  {
    title: 'My Journey from Student to Full-Stack Developer',
    excerpt: 'Sharing my experience as a BCA student learning full-stack development, the challenges I faced, and the projects that shaped my skills.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Career',
    views: 890,
    featured: true
  },
  {
    title: 'UI/UX Design Principles Every Developer Should Know',
    excerpt: 'Essential design principles that help developers create better user interfaces and improve overall user experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Design',
    views: 675,
    featured: false
  },
  {
    title: 'Leadership Lessons from Managing 150+ Volunteers',
    excerpt: 'Key insights and lessons learned from leading a large team of volunteers in NSS activities and community service projects.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Leadership',
    views: 542,
    featured: false
  },
  {
    title: 'Database Design Best Practices for Web Applications',
    excerpt: 'A comprehensive guide to designing efficient and scalable databases for modern web applications.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2023-12-20',
    readTime: '10 min read',
    category: 'Database',
    views: 423,
    featured: false
  },
  {
    title: 'Git and Version Control: A Student\'s Guide',
    excerpt: 'Everything you need to know about Git and version control as a computer science student, from basics to advanced workflows.',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2023-12-15',
    readTime: '4 min read',
    category: 'Tools',
    views: 789,
    featured: false
  }
];

export function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights from my learning journey
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-black border-white/20">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.date)}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {post.readTime}
                    <Eye className="w-4 h-4 ml-4 mr-2" />
                    {post.views}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">More Articles</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-black border-white/20">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.date)}
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}