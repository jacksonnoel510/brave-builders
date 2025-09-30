import React from 'react';

const Safety = () => {
  return (
    <section className="py-20 bg-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Health & Safety
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Brave Builders Limited prioritizes the health, safety, and well-being of all stakeholders. 
              Our approach is rooted in compliance with OSHA and ISO 45001:2018 standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="font-semibold text-gray-900 mb-2">Risk Assessments</h4>
                <p className="text-sm text-gray-600">Regular safety evaluations and hazard identification</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="font-semibold text-gray-900 mb-2">Employee Training</h4>
                <p className="text-sm text-gray-600">Continuous safety education and skill development</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-semibold text-gray-900 mb-2">Incident Reporting</h4>
                <p className="text-sm text-gray-600">Transparent reporting and preventive measures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;