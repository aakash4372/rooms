import React from 'react';
import './css/Footer.css';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      {/* Footer Top */}
      <div className="py-10">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {/* Footer Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img src="img/logo.jpg" alt="Homeverse logo" className="h-10" />
            </a>
            <p className="text-sm">
              At Rainpic Infotech, we transform ordinary real estate photos into stunning visuals that captivate buyers. Our expert team enhances images with flawless color correction, sky enhancements, and virtual staging to maximize impact. Whether you're a realtor, photographer, or agency, we ensure your listings stand out with unmatched quality and brilliance!
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-5 mt-4">
              <a
                href="https://www.instagram.com/rainpic_infotech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="img/instagram.png" alt="Instagram" className="h-8" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574584262474"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="img/facebook.png" alt="Facebook" className="h-8" />
              </a>
            </div>
          </div>

          {/* Footer Links - Company */}
          <div>
            <ul className="space-y-2 text-left">
              <h3 className="text-lg font-semibold text-left mb-4">Useful Links</h3>
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
              {[
                "Single Image",
                "HDR Blend",
                "Flash Ambient",
                "Hand Made Blend",
                "Drone Shoot Edit",
                "Sky and Grass Replace",
                "Remove Wire and Pool",
                "Twilight Edit",
                "Day to Dusk",
                "360 Images",
                "Staging",
                "Video",
              ].map((work, index) => (
                <li key={index}>
                  <a
                    href="https://www.dropbox.com/scl/fo/oanroouicu3ufds42pme2/AO6eFtwP4Og2WKlYCuSTWx4?rlkey=ya091n4gd0gh2ifw5b8sjyt7p&st=88kaag1h&dl=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white no-underline"
                  >
                    {work}
                  </a>
                </li>
              ))}
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
                <a href="mailto:rainpicinfotech@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline">rainpicinfotech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} <a href="https://bmtechx.in/" target="_blank" rel="noopener noreferrer" className="text-white no-underline">BMTECHx</a>. All Rights Reserved
      </div>
    </footer>
  );
}
