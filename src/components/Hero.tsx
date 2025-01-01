import React from 'react';
import { Github, Linkedin, Mail, Code, Brain, Box, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I'm [Your Name]
            </h1>
            <div className="text-xl lg:text-2xl mb-8 text-gray-300">
              <p className="mb-4">Bridging the gap between</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-400" /> AI/ML Engineering
                </span>
                <span className="flex items-center gap-2">
                  <Box className="w-6 h-6 text-blue-400" /> 3D Animation
                </span>
                <span className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-green-400" /> Web Development
                </span>
                <span className="flex items-center gap-2">
                  <Palette className="w-6 h-6 text-pink-400" /> UI/UX Design
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com" className="hover:text-purple-400 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-purple-400 transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Coding Setup"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}