import React from 'react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: "💡",
      title: "Energy Efficient Design",
      description: "High-performance insulation, energy-efficient windows, and sustainable materials"
    },
    {
      icon: "☀️",
      title: "Renewable Energy Solutions",
      description: "Solar panels, wind turbines, and geothermal systems integration"
    },
    {
      icon: "♻️",
      title: "Waste Reduction & Recycling",
      description: "Minimizing construction waste and proper material processing"
    },
    {
      icon: "🏆",
      title: "LEED Certification",
      description: "Adherence to rigorous sustainability and environmental standards"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Sustainable Practices
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Brave Builders, we are committed to sustainable construction practices that 
              minimize environmental impact and promote energy efficiency. Our green building 
              initiatives ensure that every project contributes to a healthier planet.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Standards</h3>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                  LEED Certified
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  ISO 14001
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                  Green Building
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-green-200">
                <div className="text-3xl mb-4">{initiative.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{initiative.title}</h4>
                <p className="text-gray-600 text-sm">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;