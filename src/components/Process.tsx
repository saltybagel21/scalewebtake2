import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand your business",
      description: "We learn about your goals, audience and what makes you unique."
    },
    {
      number: "02",
      title: "Design & build",
      description: "We craft a custom, conversion-focused design and develop it with modern, fast technology."
    },
    {
      number: "03",
      title: "Launch & refine",
      description: "We launch your site, ensure everything works perfectly, and refine it based on your feedback."
    }
  ];

  return (
    <section id="process" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Our Streamlined Web Design Process
          </h2>
          <p className="text-lg text-zinc-600">
            We handle the heavy lifting so you don't have to. Our streamlined process gets your website live quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-zinc-200"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-zinc-50 shadow-sm flex items-center justify-center text-2xl font-bold text-zinc-950 mb-8">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
