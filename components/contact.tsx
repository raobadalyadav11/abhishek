'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle, AlertCircle, MessageSquare, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'abhishekbnk2105@gmail.com',
    href: 'mailto:abhishekbnk2105@gmail.com',
    description: 'Send me an email',
    available: true
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-8809712943',
    href: 'tel:+918809712943',
    description: 'Call me directly',
    available: true
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Purnia, Bihar',
    href: '#',
    description: 'Based in India',
    available: true
  },
  {
    icon: MessageSquare,
    title: 'Response Time',
    value: '< 24 hours',
    href: '#',
    description: 'Average response time',
    available: true
  }
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/rathore-abhi07', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' }
];

const quickTopics = [
  'Web Development Project',
  'Collaboration Opportunity',
  'Mentorship Request',
  'Technical Discussion',
  'Freelance Work',
  'Other'
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    topic: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('idle');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent
        })
      });

      if (res.ok) {
        setFormStatus('success');
        toast({
          title: "Message sent successfully! ✨",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '', topic: '' });
        
        // Reset success status after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus('error');
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge variant="outline" className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-green-500" />
              <span>Available for projects</span>
            </Badge>
            <Badge variant="outline" className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-blue-500" />
              <span>Quick response</span>
            </Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a chat about technology and development. Don't hesitate to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">{info.title}</p>
                            <p className="text-muted-foreground">{info.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                        {info.available && (
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 ${social.color} group`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Let's connect and build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-8">
                {/* Success/Error Status */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-200">Message sent successfully!</p>
                      <p className="text-sm text-green-600 dark:text-green-300">I'll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <p className="font-medium text-red-800 dark:text-red-200">Failed to send message</p>
                      <p className="text-sm text-red-600 dark:text-red-300">Please try again or contact me directly.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Quick Topic Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      What would you like to discuss? (Optional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {quickTopics.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setFormData({ ...formData, topic, subject: topic })}
                          className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                            formData.topic === topic
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-background border-border hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject {formData.topic && '(Auto-filled)'}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, idea, or how I can help you..."
                      rows={5}
                      className="w-full resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || formStatus === 'success'}
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100"
                    size="lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending Message...
                      </div>
                    ) : formStatus === 'success' ? (
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Message Sent!
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your message will be stored securely and I'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}