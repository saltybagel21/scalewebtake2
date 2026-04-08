import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ScaleWeb transformed our outdated website into a modern, high-converting platform. We saw a 40% increase in enquiries within a month.",
      author: "Sarah L.",
      location: "Cape Town"
    },
    {
      quote: "The team delivered our site on time and on budget. Their professionalism and clear communication made the process effortless.",
      author: "Mark D.",
      location: "Johannesburg"
    },
    {
      quote: "We couldn't be happier with our new site—it's fast, responsive and constantly generates new leads for us.",
      author: "Thabo M.",
      location: "Durban"
    }
  ];

  return (
    <section className="py-24 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            What our clients say
          </h2>
          <p className="text-lg text-zinc-600">
            Don't just take our word for it. Here's what our partners have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200 relative"
            >
              <Quote className="w-10 h-10 text-zinc-200 absolute top-6 right-6" />
              <blockquote className="relative z-10" itemScope itemType="https://schema.org/Review">
                <p className="text-zinc-600 leading-relaxed mb-6 italic" itemProp="reviewBody">
                  "{testimonial.quote}"
                </p>
                <footer className="flex flex-col">
                  <span className="font-semibold text-zinc-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">{testimonial.author}</span>
                  </span>
                  <span className="text-sm text-zinc-500">{testimonial.location}</span>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
