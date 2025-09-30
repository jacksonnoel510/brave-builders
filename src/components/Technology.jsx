import React from 'react';

const Technology = () => {
  const technologies = [
    {
      icon: "🖥️",
      title: "Building Information Modeling (BIM)",
      description: "3D modeling for precise planning, visualization, and coordination"
    },
    {
      icon: "🏗️",
      title: "Prefabrication & Modular Construction",
      description: "Streamlined building process with improved quality control"
    },
    {
      icon: "🏠",
      title: "Smart Building Technologies",
      description: "Automated systems for lighting, HVAC, and security control"
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Continuous innovation in materials and construction techniques"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technology & Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Embracing advanced construction techniques and cutting-edge technologies 
            to enhance project efficiency and quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {tech.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;