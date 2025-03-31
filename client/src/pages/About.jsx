import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen mt-14 bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-gray-600 mb-4">
              I am a creative developer and designer with a passion for building beautiful, functional, and user-centric digital experiences.
            </p>
            <p className="text-gray-600 mb-4">
              My journey began with a love for coding and design, and today I work on a wide range of projects, from dynamic web applications to responsive portfolio websites. I believe in continuous learning and collaboration to drive innovation and achieve excellence.
            </p>
            <button
              onClick={handleBack}
              className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
