import { motion } from 'motion/react';
import { AlertCircle, Clock, Smartphone } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "Outdated Design",
      description: "A dated look undermines credibility and makes visitors think your business is behind the times."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Slow Loading Times",
      description: "If your site takes longer than 3 seconds to load, potential clients leave and never return."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: "Not Mobile Friendly",
      description: "Over 60% of searches happen on smartphones; a poor mobile experience means lost revenue."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Why Most Business Websites Fail to Convert
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Your website is your digital storefront. If it looks neglected, slow, or unprofessional, people will simply leave and go to your competitors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
