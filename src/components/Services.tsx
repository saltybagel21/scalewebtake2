import { motion } from 'motion/react';
import { Layout, RefreshCw, MousePointerClick, Smartphone, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Command Authority Online",
      description: "Custom, high-converting websites built from scratch to reflect your brand and drive action."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Outshine Your Competitors",
      description: "Give your outdated site a professional makeover that builds trust and sets you apart."
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: "Turn Traffic Into Revenue",
      description: "Focused single-page designs optimised to transform ad traffic into qualified leads."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Capture Every Mobile Lead",
      description: "Seamless experiences across all devices ensure you never miss a high-value customer on their phone."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Dominate Local Search",
      description: "Foundational SEO setup helps local customers find you first when they search for your premium services."
    }
  ];

  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Premium Web Design Services to Dominate Your Market.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              We handle the technical complexities so you can focus on scaling your operations and serving your clients.
            </p>
            <a href="#faq" className="inline-flex items-center text-zinc-950 font-medium hover:text-zinc-600 transition-colors">
              Learn more in our FAQs <span className="ml-2">→</span>
            </a>
          </div>
          <div className="hidden lg:block relative rounded-3xl overflow-hidden h-64 bg-zinc-100 shadow-lg border border-zinc-100">
            <img 
              src="https://i.imgur.com/TGHw3NJ.jpeg" 
              alt="A modern, responsive web design layout displayed on a laptop, showcasing premium digital services" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-zinc-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-zinc-50 flex items-center justify-center mb-8 text-zinc-900 shadow-sm group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-10 rounded-3xl bg-zinc-950 text-white flex flex-col justify-center items-start shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-4">Need something specific?</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">Let's discuss your unique requirements on a quick, no-obligation discovery call.</p>
            <a href="#contact" className="bg-white text-zinc-950 px-8 py-4 rounded-full font-medium hover:bg-zinc-100 transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
