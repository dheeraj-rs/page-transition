'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8 tracking-tight"
        >
          Our Story
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a collective of digital craftsmen dedicated to creating seamless, engaging web experiences. Our passion lies in the intersection of design, technology, and human interaction.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Through innovative page transitions and thoughtful interactions, we demonstrate how modern web technologies can elevate digital storytelling.
          </p>
        </motion.div>
      </div>
    </main>
  )
}