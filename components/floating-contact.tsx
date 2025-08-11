'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling down a bit
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:abhishekbnk2105@gmail.com', '_blank'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Phone,
      label: 'Call',
      action: () => window.open('tel:+918809712943', '_blank'),
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      action: () => window.open('https://linkedin.com/in/rathore-abhi07', '_blank'),
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-4"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium mb-3">Quick Contact</p>
                  {contactOptions.map((option, index) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={option.action}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white transition-all duration-200 ${option.color}`}
                    >
                      <option.icon className="w-4 h-4" />
                      <span className="text-sm">{option.label}</span>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700'
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}