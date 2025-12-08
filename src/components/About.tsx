import { useEffect, useRef, useState } from 'react';
import { Code2, Workflow, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="about" ref={sectionRef} className="relative py-20 bg-[#1E293B] overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00E5C3] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0BD6B4] rounded-full blur-3xl opacity-10"></div>

      <div className="hidden md:block absolute top-1/4 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Code2 className="w-16 h-16 text-[#00E5C3] opacity-20" />
      </div>
      <div className="hidden md:block absolute bottom-1/4 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <Workflow className="w-16 h-16 text-[#0BD6B4] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 rounded-3xl border border-[#00E5C3]/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#00E5C3] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">5+ Years</h3>
                      <p className="text-[#94A3B8]">Experience</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#14F1D9] rounded-xl flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">50+ Projects</h3>
                      <p className="text-[#94A3B8]">Completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#0BD6B4] rounded-xl flex items-center justify-center">
                      <Workflow className="w-8 h-8 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">100+ Automations</h3>
                      <p className="text-[#94A3B8]">Deployed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
                About Me
                <div className={`h-1 bg-gradient-to-r from-[#00E5C3] to-[#0BD6B4] mt-2 ${isVisible ? 'animate-draw-underline' : 'w-0'}`}></div>
              </h2>
            </div>

            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
              I'm <span className="text-[#00E5C3] font-semibold">Abhijeet Jain</span>, a developer and automation specialist focused on CRM optimization, workflow engineering, and modern web design.
            </p>

            <p className="text-lg text-[#CBD5E1] leading-relaxed mb-6">
              I create systems that help businesses scale through automation, AI-powered workflows, and clean digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#0F172A] p-4 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3]/50 transition-colors">
                <h4 className="text-[#00E5C3] font-semibold mb-2">Specialization</h4>
                <p className="text-[#CBD5E1] text-sm">CRM & Automation</p>
              </div>
              <div className="bg-[#0F172A] p-4 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3]/50 transition-colors">
                <h4 className="text-[#00E5C3] font-semibold mb-2">Focus</h4>
                <p className="text-[#CBD5E1] text-sm">Business Growth</p>
              </div>
              <div className="bg-[#0F172A] p-4 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3]/50 transition-colors">
                <h4 className="text-[#00E5C3] font-semibold mb-2">Location</h4>
                <p className="text-[#CBD5E1] text-sm">Remote / India</p>
              </div>
              <div className="bg-[#0F172A] p-4 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3]/50 transition-colors">
                <h4 className="text-[#00E5C3] font-semibold mb-2">Availability</h4>
                <p className="text-[#CBD5E1] text-sm">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
