import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-amber-600" />,
      title: "Vast Collection",
      description: "Access to over 100,000 carefully curated titles spanning all genres and reading levels."
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Community First",
      description: "Join our vibrant community of book lovers, participate in reading clubs and literary events."
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Expert Curation",
      description: "Our team of literary experts handpicks each title to ensure quality and diversity."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-600" />,
      title: "24/7 Service",
      description: "Round-the-clock customer support to assist you with your literary journey."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            About Nile
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Your premier destination for literary excellence, where every book tells a story and every reader finds their perfect match.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Mission</h2>
          <p className="text-lg text-amber-700 mb-8">
            At Nile, we believe in the transformative power of literature. Our mission is to connect readers with exceptional books that inspire, educate, and entertain. We strive to make quality literature accessible to everyone while fostering a community of passionate readers.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-amber-50">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-amber-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Our Values</h2>
          <p className="text-lg text-amber-700 mb-8">
            Excellence in service, diversity in literature, and community engagement form the cornerstone of our values. We're committed to creating an inclusive space where all readers can discover their next favorite book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;