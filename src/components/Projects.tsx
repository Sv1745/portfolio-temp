import React from 'react';

const projects = [
  {
    title: "AI/ML Projects",
    description: "Projects from my AI/ML journey at NMIT and IIT Madras",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "TensorFlow", "PyTorch", "Data Science"]
  },
  {
    title: "3D Animations",
    description: "Creative 3D animation projects and showreel",
    image: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&w=800&q=80",
    tags: ["Blender", "Maya", "Animation", "3D Modeling"]
  },
  {
    title: "Web Development",
    description: "Modern web applications and UI/UX projects",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"]
  }
];

export default function Projects() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-600 bg-opacity-50 rounded-full text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}