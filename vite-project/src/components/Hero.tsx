import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Creative Video Editing</h1>
        <p className="text-xl mb-8">Bringing your stories to life, one frame at a time</p>
        <a href="#contact" className="bg-white text-purple-600 py-2 px-6 rounded-full font-bold hover:bg-gray-100 transition duration-300">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;