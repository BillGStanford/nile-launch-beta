import React from 'react';
import { BookIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BookIcon className="w-8 h-8 text-amber-700" />
              <span className="text-2xl font-bold text-amber-900">Nile</span>
            </div>
            <p className="text-amber-700">
              Your gateway to timeless literature and endless imagination.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-amber-700 hover:text-amber-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-amber-700 hover:text-amber-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/partner" className="text-amber-700 hover:text-amber-600">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-900">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MailIcon className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700">nilecomun@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700">+1 (240) 733-8024</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
        </div>

        <div className="mt-12 pt-8 border-t border-amber-200">
          <p className="text-center text-amber-700">
            © {new Date().getFullYear()} Nile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;