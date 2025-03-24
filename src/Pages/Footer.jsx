import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white"id='contact'>
      {/* Footer Top */}
      <div className="py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">

          {/* Footer Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img src="img/logo.jpg" alt="Homeverse logo" className="h-10" />
            </a>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
            </p>
          </div>

          {/* Footer Links - Company */}
          <div>
            <ul className="space-y-2 text-left">
            <h3 className="text-lg font-semibold text-left mb-4">Usefull Links</h3>
              <li><a href="#home" className="text-white no-underline">Home</a></li>
              <li><a href="#about" className="text-white no-underline">About</a></li>
              <li><a href="#mission" className="text-white no-underline">Our Mission</a></li>
              <li><a href="#works" className="text-white no-underline">Our Works</a></li>
              <li><a href="#contact" className="text-white no-underline">Contact us</a></li>
            </ul>
          </div>

          {/* Footer Links - Services */}
          <div>
            <ul className="space-y-2 text-left">
            <h3 className="text-lg font-semibold text-left mb-4">Our Works</h3>
              <li><a href="#" className="text-white no-underline">Order tracking</a></li>
              <li><a href="#" className="text-white no-underline">Wish List</a></li>
              <li><a href="#" className="text-white no-underline">Login</a></li>
              <li><a href="#" className="text-white no-underline">My account</a></li>
              <li><a href="#" className="text-white no-underline">Terms & Conditions</a></li>
              <li><a href="#" className="text-white no-underline">Promotional Offers</a></li>
            </ul>
          </div>

          {/* Footer - Address & Contact */}
          <div>
            <ul className="space-y-3 text-left">
            <h3 className="text-lg font-semibold text-left mb-4">Contact</h3>
              <li className="flex items-center space-x-2">
                <ion-icon name="location-outline"></ion-icon>
                <span>Erode, TN</span>
              </li>
              <li className="flex items-center space-x-2">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:contact@homeverse.com" className="text-white no-underline">contact@homeverse.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} <a href="#" className="text-white no-underline">BMTECHx</a>. All Rights Reserved
        </div>

    </footer>
  );
}
