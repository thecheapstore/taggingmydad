import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0A0F1E] via-[#0F172A] to-[#1E293B] animate-gradient-shift">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Abhijeet Jain</h3>
            <p className="text-[#CBD5E1] mb-4">
              GHL Developer & Automation Specialist
            </p>
            <p className="text-[#94A3B8] text-sm">
              Building systems that scale businesses through automation and clean digital experiences.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#CBD5E1] hover:text-[#00E5C3] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#CBD5E1] hover:text-[#00E5C3] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#CBD5E1] hover:text-[#00E5C3] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#CBD5E1] hover:text-[#00E5C3] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#CBD5E1] hover:text-[#00E5C3] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-[#00E5C3] hover:bg-[#00E5C3] hover:text-[#0F172A] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-[#00E5C3] hover:bg-[#00E5C3] hover:text-[#0F172A] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-[#00E5C3] hover:bg-[#00E5C3] hover:text-[#0F172A] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:abhijeet@example.com"
                className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center text-[#00E5C3] hover:bg-[#00E5C3] hover:text-[#0F172A] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00E5C3]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm text-center md:text-left">
              Built using HTML, CSS, JavaScript & GoHighLevel Automations.
            </p>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-[#00E5C3] rounded-lg flex items-center justify-center text-[#0F172A] hover:bg-[#14F1D9] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          <p className="text-[#94A3B8] text-sm text-center mt-4">
            © {new Date().getFullYear()} Abhijeet Jain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
