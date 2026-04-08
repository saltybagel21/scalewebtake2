import { motion } from 'motion/react';
import { Zap, LayoutTemplate, Smartphone, Palette, Search, Settings } from 'lucide-react';

export default function Expectations() {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Lightning Fast Speeds",
      description: "We optimize every line of code and image so your site loads instantly, keeping visitors engaged."
    },
    {
      icon: <LayoutTemplate className="w-5 h-5" />,
      title: "Conversion-Focused Design",
      description: "Strategic, clutter-free layouts designed specifically to guide visitors toward contacting you."
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Flawless Mobile Experience",
      description: "Over 60% of traffic is mobile. We ensure your site looks and works perfectly on every device."
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Premium Brand Aesthetics",
      description: "High-end visuals that instantly elevate your brand's perceived value and build trust."
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Built-In SEO Best Practices",
      description: "Structured correctly from day one to help you rank higher on Google and attract organic traffic."
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Zero Technical Headaches",
      description: "We handle all the complex setup, hosting, and maintenance so you can focus on your business."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              What you can expect.
            </h2>
            <p className="text-lg text-zinc-600">
              Every website we build comes standard with the features you need to succeed online.
            </p>
          </div>
          <div className="hidden lg:block relative rounded-3xl overflow-hidden h-64 bg-zinc-100 shadow-lg border border-zinc-100">
            <img 
              src="https://i.imgur.com/ohEs7C1.png" 
              alt="A high-performance, conversion-focused website interface demonstrating fast loading speeds and premium aesthetics" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-zinc-100 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-6 border border-zinc-100">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
