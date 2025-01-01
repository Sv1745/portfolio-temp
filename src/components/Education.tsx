import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-8 transform hover:-translate-y-2 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Nitte Meenakshi Institute of Technology</h3>
                <p className="text-gray-400">B.E. in AI & ML</p>
                <p className="text-purple-400">2022 - Present</p>
              </div>
            </div>
            <p className="text-gray-300">
              Currently pursuing AI & ML engineering with focus on machine learning, deep learning, and computer vision.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 transform hover:-translate-y-2 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-bold text-white">IIT Madras</h3>
                <p className="text-gray-400">BS in Data Science</p>
                <p className="text-purple-400">Online Degree Program</p>
              </div>
            </div>
            <p className="text-gray-300">
              Expanding expertise in data science through IIT Madras's comprehensive online program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}