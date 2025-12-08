import { useEffect, useRef, useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E5C3]/5 via-transparent to-[#0BD6B4]/5"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Looking for a GHL Developer or Automation Engineer?
          </h2>
          <p className="text-xl text-[#CBD5E1] mb-12 max-w-2xl mx-auto">
            Let's build systems that scale your business.
          </p>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5C3] via-[#14F1D9] to-[#0BD6B4] rounded-2xl animate-border-sweep opacity-100"></div>

            <div className="relative m-1 bg-[#0F172A] rounded-2xl p-8">
              <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:abhijeet@example.com"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00E5C3] to-[#0BD6B4] text-[#0F172A] font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00E5C3]/50 hover:scale-105 animate-glow-pulse"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send me an Email</span>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#00E5C3] text-[#00E5C3] font-bold rounded-lg transition-all duration-300 hover:bg-[#00E5C3] hover:text-[#0F172A] hover:shadow-lg hover:shadow-[#00E5C3]/50"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </a>
                </div>

                <div className="pt-6 border-t border-[#00E5C3]/20">
                  <p className="text-[#CBD5E1] text-sm">
                    <span className="text-[#00E5C3] font-semibold">Response Time:</span> Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#00E5C3]/20">
              <div className="text-3xl font-bold text-[#00E5C3] mb-2">50+</div>
              <div className="text-[#CBD5E1]">Projects Completed</div>
            </div>

            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#00E5C3]/20">
              <div className="text-3xl font-bold text-[#00E5C3] mb-2">100+</div>
              <div className="text-[#CBD5E1]">Automations Deployed</div>
            </div>

            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#00E5C3]/20">
              <div className="text-3xl font-bold text-[#00E5C3] mb-2">87%</div>
              <div className="text-[#CBD5E1]">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
