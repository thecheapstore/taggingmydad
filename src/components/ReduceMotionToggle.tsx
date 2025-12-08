import { useState, useEffect } from 'react';
import { Zap, ZapOff } from 'lucide-react';

const ReduceMotionToggle = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [reduceMotion]);

  const toggleMotion = () => {
    setReduceMotion(!reduceMotion);
  };

  return (
    <button
      onClick={toggleMotion}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#00E5C3] to-[#0BD6B4] rounded-full flex items-center justify-center text-[#0F172A] shadow-lg hover:shadow-xl hover:shadow-[#00E5C3]/50 transition-all duration-300 hover:scale-110 group"
      aria-label={reduceMotion ? 'Enable animations' : 'Reduce animations'}
      title={reduceMotion ? 'Enable Animations' : 'Reduce Animations'}
    >
      {reduceMotion ? (
        <ZapOff className="w-6 h-6" />
      ) : (
        <Zap className="w-6 h-6 group-hover:animate-pulse" />
      )}
    </button>
  );
};

export default ReduceMotionToggle;
