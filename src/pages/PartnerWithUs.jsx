import React from 'react';
import { HandshakeIcon, BookOpen, ArrowUpRight, ChevronRight, Rocket, Shield, TrendingUp } from 'lucide-react';

const PartnerWithUs = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: "Growth Focused",
      description: "Reach new readers and grow your audience through our platform's dedicated reader base."
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-600" />,
      title: "Full Control",
      description: "Maintain complete control over your content with the flexibility to add or remove books at any time."
    },
    {
      icon: <Rocket className="w-8 h-8 text-amber-600" />,
      title: "Future Ready",
      description: "Be part of our growing platform and access upcoming features in our full launch."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Contact",
      description: "Fill out our contact form below or email us to express your interest in partnering."
    },
    {
      number: "02",
      title: "Consultation",
      description: "Meet with our team to discuss your books and how we can grow together."
    },
    {
      number: "03",
      title: "Agreement",
      description: "Sign our partnership agreement - it's free and designed to benefit both parties."
    },
    {
      number: "04",
      title: "Launch",
      description: "Get your books live on our platform and reach new readers."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Join our growing community of authors and publishers. Let's build the future of digital reading together.
          </p>
        </div>
      </div>

      {/* Pre-launch Notice */}
      <div className="bg-amber-50">
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-amber-600" />
              <h3 className="text-lg font-bold text-amber-900">Coming Soon</h3>
            </div>
            <p className="text-amber-700">
              We're currently in our pre-launch phase, gathering partners for our upcoming platform release. Join us early to be part of our initial launch and get access to exclusive features and benefits. Thank you for your interest in growing with us.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">
          Why Partner With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-amber-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-amber-50">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">
            Partnership Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-amber-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-amber-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-amber-700 mb-8">
            Contact us today to discuss how we can work together. Email us at partnerships@nile.com or use our contact form below.
          </p>
          <a 
            href="mailto:partnerships@nile.com"
            className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;