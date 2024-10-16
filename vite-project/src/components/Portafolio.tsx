import React from 'react';

const projects = [
  { id: 1, title: 'Corporate Promo', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'Music Video', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Wedding Highlights', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, title: 'Short Film', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const Portafolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a href="#" className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;