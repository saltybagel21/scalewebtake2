import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
            >
              Ready to dominate your local market?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
            >
              Request a free custom demo today. We'll build a mockup of your new site before you commit.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                Request Your Free Demo <ArrowRight size={18} />
              </a>
              <p className="text-sm text-zinc-500 mt-4 sm:mt-0 sm:ml-4">No commitment required.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden lg:block relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl aspect-square"
          >
            <img 
              src="https://i.imgur.com/ltT293I.png" 
              alt="A sleek, dark-themed analytics dashboard showing website performance and lead generation metrics" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Inner glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
