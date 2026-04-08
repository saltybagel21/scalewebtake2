import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    "Clarity and transparency from day one",
    "Professionalism in every interaction",
    "Modern, high-end design aesthetics",
    "Simplicity—no unnecessary jargon",
    "Focus on results and conversions",
    "Fast turnaround times"
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Why Choose ScaleWeb for Your Web Design?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              We believe that getting a new website shouldn't be a headache. We strip away the jargon, focus on what actually works, and deliver a premium product that elevates your brand.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-zinc-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden group shadow-2xl"
            >
              {/* Video Element */}
              <video 
                src="/chart-animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Gradient Overlay for blending */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/40 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Glow effect overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
              
              {/* Inner border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none"></div>
            </motion.div>
            
            {/* Decorative floating elements behind the video */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -z-10"
            />
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
