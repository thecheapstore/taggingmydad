import { useState, useEffect } from 'react';
import { Sparkles, Download, Mail } from 'lucide-react';
const Hero = ({ profileSrc }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Abhijeet Jain - Full Stack Web Developer • GHL Developer • Automation Specialist";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  const imgSrc = profileSrc || /* profileImg || */ 'https://i.ibb.co/d4dPChNC/finalized.jpg';

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0F172A] to-[#1E293B]"></div>

      <div className="hidden md:block">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#00E5C3]" />
              <span className="text-[#00E5C3] font-semibold tracking-wide">DEVELOPER & AUTOMATION SPECIALIST</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block">
                {typedText}
                {showCursor && <span className="border-r-4 border-[#00E5C3] ml-1 animate-pulse"></span>}
              </span>
            </h1>

           <h2 className="text-2xl md:text-3xl font-semibold text-gradient mb-6">
  Full Stack Web Developer, GHL Funnel and Workflow Specialist, Automation Engineer
</h2>
            <p className="text-lg text-[#CBD5E1] mb-8 leading-relaxed">
  I develop scalable full-stack web solutions and design structured GoHighLevel funnels and automation workflows tailored for operational efficiency. With a strong foundation in web development and practical exposure to digital marketing systems, I help businesses streamline processes, reduce manual work, enhance user experience, improve conversions, and support measurable business growth.
</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00E5C3] text-[#0F172A] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#14F1D9] animate-glow-pulse"
              >
                <Mail className="w-5 h-5" />
                Hire Me
              </a>

              <a
                href="#resume"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00E5C3] text-[#00E5C3] font-bold rounded-lg transition-all duration-300 hover:bg-[#00E5C3] hover:text-[#0F172A] hover:shadow-lg hover:shadow-[#00E5C3]/50"
              >
                <Download className="w-5 h-5" />
                View My Resume
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-2 rounded-3xl">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-[#F8FAFC] rounded-2xl flex items-center justify-center overflow-hidden">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt="Abhijeet Jain"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentNode;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] flex items-center justify-center';
                          fallback.innerHTML = '<span class="text-[#0F172A] font-bold text-6xl">AJ</span>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] flex items-center justify-center">
                      <span className="text-[#0F172A] font-bold text-6xl">AJ</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-[#00E5C3] hover:text-[#14F1D9] transition-colors">
          <span className="text-sm font-medium">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
