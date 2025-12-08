import { useEffect, useRef, useState } from 'react';
import { Server, Code, Cpu, Database, Cloud, TrendingUp, Zap, BarChart3 } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  progress: number;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'GoHighLevel (CRM, Automations, Pipelines)', icon: <Server className="w-8 h-8" />, progress: 95 },
    { name: 'HTML, CSS, UI/UX Design', icon: <Code className="w-8 h-8" />, progress: 90 },
    { name: 'Automation Engineering', icon: <Zap className="w-8 h-8" />, progress: 92 },
    { name: 'Python & Django (Basics)', icon: <Database className="w-8 h-8" />, progress: 70 },
    { name: 'AI & Machine Learning (Basics)', icon: <Cpu className="w-8 h-8" />, progress: 65 },
    { name: 'SEO & Digital Strategy', icon: <TrendingUp className="w-8 h-8" />, progress: 85 },
    { name: 'AWS & Azure', icon: <Cloud className="w-8 h-8" />, progress: 75 },
    { name: 'Performance Optimization', icon: <BarChart3 className="w-8 h-8" />, progress: 88 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const CircularProgress = ({ progress, delay }: { progress: number; delay: number }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setAnimatedProgress(progress);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, progress, delay]);

    const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

    return (
      <div className="relative w-28 h-28">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#1E293B"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5C3" />
              <stop offset="100%" stopColor="#0BD6B4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{animatedProgress}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Skills & Expertise
            <div className={`h-1 bg-gradient-to-r from-[#00E5C3] to-[#0BD6B4] mt-2 mx-auto ${isVisible ? 'animate-draw-underline' : 'w-0'}`}></div>
          </h2>
          <p className="text-[#CBD5E1] text-lg mt-6 max-w-2xl mx-auto">
            Specialized in automation, CRM optimization, and modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3] transition-all duration-300 ${
                isVisible ? 'animate-flip-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] rounded-xl flex items-center justify-center text-[#0F172A] shadow-lg">
                  {skill.icon}
                </div>

                <h3 className="text-white font-semibold text-sm h-12 flex items-center">
                  {skill.name}
                </h3>

                <CircularProgress progress={skill.progress} delay={index * 100} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
