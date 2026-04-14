import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 pt-10 pb-6 px-8">

      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <h1 className="text-white text-xl font-bold mb-3">TopMates</h1>
          <p className="text-sm">
            The best place to discover new learning resources, books, courses and expert guidance.
          </p>
        </div>

        {/* Customer Support */}
        <div>
          <h2 className="text-white font-semibold mb-3">Customer Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-6"></div>

      {/* Bottom Section */}
      <p className="text-center text-sm text-gray-400">
        © 2025 TopMates. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;