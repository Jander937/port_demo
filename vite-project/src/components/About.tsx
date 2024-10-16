import React from 'react';
import { Camera, Edit, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Video Editor" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6">
              With over 10 years of experience in video editing, I bring creativity and technical expertise to every project. My passion lies in storytelling through visual media, and I strive to create compelling narratives that captivate audiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Camera className="w-12 h-12 text-purple-600 mb-2" />
                <h3 className="text-xl font-semibold mb-1">Cinematography</h3>
                <p className="text-center">Expert in visual storytelling</p>
              </div>
              <div className="flex flex-col items-center">
                <Edit className="w-12 h-12 text-purple-600 mb-2" />
                <h3 className="text-xl font-semibold mb-1">Editing</h3>
                <p className="text-center">Skilled in various editing software</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 text-purple-600 mb-2" />
                <h3 className="text-xl font-semibold mb-1">Awards</h3>
                <p className="text-center">Recognized for outstanding work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;