import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Users, TrendingUp, Headphones } from 'lucide-react';

interface ExperienceItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences: ExperienceItem[] = [
    {
      type: 'work',
      title: 'GHL Developer & Business Development',
      organization: 'KD Marketing Group',
      period: 'Present',
      description: [
        'Build CRM workflows, pipelines & automations',
        'Deploy AI-driven inbound/outbound systems',
        'Create chatbots, triggers & nurturing flows',
        'Perform performance audits',
        'Lead B2B outreach',
        'Train team members',
      ],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      type: 'work',
      title: 'Customer Support Associate',
      organization: 'KD Marketing Group',
      period: '2023-2024',
      description: [
        'Managed client communication',
        'Built automation-backed marketing workflows',
        'Prepared estimates, invoices & analytics',
        'Achieved 87% 5-star Google reviews',
      ],
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      type: 'work',
      title: 'Sales Executive',
      organization: 'Klick Infrasoft',
      period: '2022-2023',
      description: [
        'Created social media content',
        'Improved conversions through follow-ups',
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      type: 'work',
      title: 'Commercial Control Operator',
      organization: 'Indian Railways',
      period: '2021-2022',
      description: ['Resolved customer complaints via Rail-Madad'],
      icon: <Users className="w-6 h-6" />,
    },
    {
      type: 'work',
      title: 'Customer Support Executive',
      organization: 'BBM',
      period: '2020-2021',
      description: ['Assisted customers and explained services'],
      icon: <Headphones className="w-6 h-6" />,
    },
    {
      type: 'education',
      title: 'BCA',
      organization: 'Manipal University Jaipur',
      period: '2023-2026',
      description: ['Bachelor of Computer Applications'],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      type: 'education',
      title: 'Intermediate',
      organization: 'CBSE',
      period: '2020',
      description: ['Central Board of Secondary Education'],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      type: 'certification',
      title: 'HTML & CSS',
      organization: 'Udemy',
      period: '2022',
      description: ['Web Development Fundamentals'],
      icon: <Award className="w-6 h-6" />,
    },
    {
      type: 'certification',
      title: 'Python',
      organization: 'Udemy',
      period: '2022',
      description: ['Python Programming'],
      icon: <Award className="w-6 h-6" />,
    },
    {
      type: 'certification',
      title: 'DevOps Engineering',
      organization: 'Linux World India',
      period: '2023',
      description: ['DevOps and Cloud Infrastructure'],
      icon: <Award className="w-6 h-6" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-20 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Experience & Education
            <div className={`h-1 bg-gradient-to-r from-[#00E5C3] to-[#0BD6B4] mt-2 mx-auto ${isVisible ? 'animate-draw-underline' : 'w-0'}`}></div>
          </h2>
          <p className="text-[#CBD5E1] text-lg mt-6 max-w-2xl mx-auto">
            A journey through professional experience, education, and continuous learning
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#00E5C3] to-[#0BD6B4] top-0 bottom-0"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative grid md:grid-cols-2 gap-8 items-center ${activeItems.includes(index) ? (index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right') : 'opacity-0'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right md:pr-12">
                      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3] transition-all duration-300 hover:shadow-xl hover:shadow-[#00E5C3]/20">
                        <div className="flex md:flex-row-reverse items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] rounded-lg flex items-center justify-center text-[#0F172A] flex-shrink-0 ${activeItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <div className={`inline-block px-3 py-1 bg-[#00E5C3]/20 text-[#00E5C3] text-xs font-semibold rounded-full mb-2 ${activeItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                              {exp.period}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-[#00E5C3] font-semibold mb-3">{exp.organization}</p>
                            <ul className="space-y-2">
                              {exp.description.map((item, i) => (
                                <li key={i} className="text-[#CBD5E1] text-sm flex items-start gap-2 md:flex-row-reverse md:text-right">
                                  <span className="text-[#00E5C3] mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>

                    <div className="md:pl-12">
                      <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-xl border border-[#00E5C3]/20 hover:border-[#00E5C3] transition-all duration-300 hover:shadow-xl hover:shadow-[#00E5C3]/20">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] rounded-lg flex items-center justify-center text-[#0F172A] flex-shrink-0 ${activeItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                            {exp.icon}
                          </div>
                          <div className="flex-1">
                            <div className={`inline-block px-3 py-1 bg-[#00E5C3]/20 text-[#00E5C3] text-xs font-semibold rounded-full mb-2 ${activeItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                              {exp.period}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                            <p className="text-[#00E5C3] font-semibold mb-3">{exp.organization}</p>
                            <ul className="space-y-2">
                              {exp.description.map((item, i) => (
                                <li key={i} className="text-[#CBD5E1] text-sm flex items-start gap-2">
                                  <span className="text-[#00E5C3] mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`w-4 h-4 bg-[#00E5C3] rounded-full border-4 border-[#1E293B] ${activeItems.includes(index) ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
