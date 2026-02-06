export const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "GitHub", icon: "🐙", href: "#" },
    { name: "Discord", icon: "🎮", href: "#" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer id="contact" className="bg-cosmic-dark/80 border-t border-cosmic-purple/20 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="space-y-4 lg:space-y-6">
            <img 
              src="/Assets/Turing logo.png" 
              alt="Turing Logo" 
              className="h-12 w-auto"
            />
            <p className="text-cosmic-light/70 text-sm lg:text-base leading-relaxed">
              Empowering the next generation of computer scientists through innovation, collaboration, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-cosmic-light">Quick Links</h3>
            <ul className="space-y-2 lg:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-cosmic-light/70 hover:text-cosmic-purple transition-colors duration-300 text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-cosmic-light">Contact Us</h3>
            <div className="space-y-2 lg:space-y-3 text-cosmic-light/70 text-sm lg:text-base">
              <p>📍 Acharya Narendra Dev College</p>
              <p>📧 turing@andc.du.ac.in</p>
              <p>📞 +91 11 1234 5678</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 lg:space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-cosmic-light">Follow Us</h3>
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-cosmic-purple/20 hover:bg-cosmic-purple/40 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <span className="text-lg lg:text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cosmic-purple/20 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-cosmic-light/60 text-sm lg:text-base text-center sm:text-left">
              © 2024 Turing Society. All rights reserved.
            </p>
            <div className="flex space-x-4 lg:space-x-6 text-cosmic-light/60 text-sm lg:text-base">
              <a href="#" className="hover:text-cosmic-purple transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cosmic-purple transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};