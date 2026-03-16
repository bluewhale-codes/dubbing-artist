import { Mic2, Twitter, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Platform: ['Find Artists', 'How It Works', 'Pricing', 'Success Stories'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Resources: ['Blog', 'Help Center', 'Community Forum', 'Trust & Safety'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Copyright'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Mic2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                DubbingArtist
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's leading platform connecting dubbing artists with clients. Professional voice recordings for any project.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 DubbingArtist. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms
              </a>
              <span className="text-gray-700">•</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookies
              </a>
              <span className="text-gray-700">•</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🌍</span>
                <select className="bg-transparent text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer outline-none">
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}