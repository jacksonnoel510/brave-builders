import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Residential Construction",
      description: "Custom homes, multi-family units, and remodeling services tailored to your unique needs.",
      features: ["Custom Home Building", "Multi-Family Units", "Renovations & Remodeling"]
    },
    {
      icon: "🏢",
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and industrial facilities designed for business success.",
      features: ["Office Buildings", "Retail Spaces", "Industrial Facilities"]
    },
    {
      icon: "🛣️",
      title: "Infrastructure Development",
      description: "Roads, bridges, and public facilities that enhance community connectivity.",
      features: ["Road Construction", "Bridges & Overpasses", "Public Facilities"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to meet your specific needs and exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition duration-300 border border-gray-200 group hover:border-blue-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;