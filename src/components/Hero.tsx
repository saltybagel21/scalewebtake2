import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };

  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-5, 5]), { stiffness: 150, damping: 20 });

  return (
    <section className="relative pt-32 pb-24 md:pt-56 md:pb-40 overflow-hidden">
      {/* Interactive Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-zinc-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-[10%] left-[15%] w-[40%] h-[40%] rounded-full bg-blue-400/40 mix-blend-multiply blur-[80px] animate-blob"></div>
        <div className="absolute top-[20%] right-[15%] w-[40%] h-[40%] rounded-full bg-emerald-400/40 mix-blend-multiply blur-[80px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-cyan-400/40 mix-blend-multiply blur-[80px] animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-zinc-800 text-sm font-medium mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Accepting new projects across South Africa
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Websites Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-zinc-900 to-zinc-600">Industry Leaders.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Stop losing high-value clients to outdated design. We craft premium, conversion-optimized websites that elevate your brand and establish instant authority.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-zinc-950 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Request Your Free Demo <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-zinc-950 border border-zinc-200 px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-all hover:shadow-sm flex items-center justify-center"
            >
              View Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-4 text-sm text-zinc-500 font-medium"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Satisfied client ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Trusted by businesses across South Africa</p>
          </motion.div>
        </div>

        {/* Hero Image Mockup with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto group perspective-[2000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          {/* Decorative glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-zinc-200/60 shadow-2xl bg-white/50 backdrop-blur-sm p-3 md:p-5 transition-all duration-200 ease-out"
          >
            <div className="rounded-xl md:rounded-[2rem] overflow-hidden bg-zinc-100 relative shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.05)] pointer-events-none z-10"></div>
              <img 
                src="https://i.imgur.com/VOQLmyd.jpeg" 
                alt="A premium, conversion-optimized website displayed on a sleek laptop, representing industry-leading web design" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
