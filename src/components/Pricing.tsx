import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "Professional",
      price: "R9,500",
      period: "once-off",
      description: "Perfect for businesses that want a professional, modern online presence.",
      features: [
        "Up to 5 core pages",
        "Custom modern design",
        "Fully mobile responsive",
        "Contact forms",
        "SEO-ready structure",
        "2 rounds of revisions"
      ],
      popular: false
    },
    {
      name: "Advanced",
      price: "R17,500",
      period: "once-off",
      description: "Ideal for businesses looking to stand out and generate more enquiries.",
      features: [
        "Up to 10 core pages",
        "Fully custom design",
        "Advanced layout & structure",
        "Lead-generation focus",
        "SEO-ready setup",
        "Analytics integration",
        "Priority turnaround",
        "3 rounds of revisions"
      ],
      popular: true
    }
  ];

  const maintenancePlans = [
    {
      name: "Standard Care Plan",
      price: "R699",
      period: "/month",
      features: [
        "Hosting included",
        "Security updates",
        "Performance monitoring",
        "Small content edits",
        "Includes up to 1 hour of updates per month"
      ]
    },
    {
      name: "Premium Care Plan",
      price: "R1,299",
      period: "/month",
      features: [
        "Everything in Standard",
        "Priority support",
        "Faster updates",
        "Ongoing improvements",
        "Includes up to 3 hours of updates per month"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Transparent Web Design Pricing & Packages
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Choose the package that best fits your business goals. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-10 md:p-12 rounded-3xl border flex flex-col transition-all duration-300 hover:shadow-2xl ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 text-white border-zinc-800 shadow-2xl md:-translate-y-4 scale-[1.02]' 
                  : 'bg-white text-zinc-950 border-zinc-200 shadow-sm hover:-translate-y-1'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-zinc-950 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm border border-zinc-200">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold tracking-tight">{pkg.price}</span>
                <span className={`ml-2 text-sm font-medium ${pkg.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>{pkg.period}</span>
              </div>
              <p className={`mb-8 h-12 ${pkg.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {pkg.description}
              </p>
              
              <a
                href="#contact"
                className={`block w-full py-4 px-4 rounded-xl text-center font-medium transition-all duration-300 mb-8 ${
                  pkg.popular
                    ? 'bg-white text-zinc-950 hover:bg-zinc-100 hover:scale-[1.02]'
                    : 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200 hover:scale-[1.02]'
                }`}
              >
                Get Started
              </a>
              
              <div className="space-y-4 flex-grow">
                <p className={`text-sm font-medium uppercase tracking-wider ${pkg.popular ? 'text-zinc-300' : 'text-zinc-900'}`}>
                  What's included
                </p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-green-400' : 'text-green-500'}`} />
                      <span className={pkg.popular ? 'text-zinc-300' : 'text-zinc-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-zinc-500 max-w-2xl mx-auto mb-24 leading-relaxed"
        >
          Projects may vary depending on specific requirements, features, or custom functionality. A final quote will be provided based on your business needs.
        </motion.p>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4">
              Hosting & Maintenance
            </h3>
            <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              You can choose to host the website yourself using any provider, or we can manage everything for you with our hosting and maintenance plans. Our plans are designed to keep your website running smoothly, secure, and up to date without you needing to worry about technical setup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                <div className="mb-8">
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-zinc-500 font-medium">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 shrink-0 text-zinc-900" />
                      <span className="text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-sm text-zinc-500 font-medium">
            Additional work beyond included hours is billed separately.
          </p>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h4 className="text-xl font-bold text-zinc-900 mb-2">100% Satisfaction Guarantee</h4>
          <p className="text-zinc-600 max-w-md">
            We don't stop working until you are completely satisfied with your new website. Your success is our priority.
          </p>
        </div>
      </div>
    </section>
  );
}
