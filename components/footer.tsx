'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center">
            © {currentYear} Portfolio. Made with
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            using Next.js and Supabase
          </p>
        </motion.div>
      </div>
    </footer>
  );
}