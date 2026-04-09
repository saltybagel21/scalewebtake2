import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "A standard business site takes 2–4 weeks; e-commerce or complex projects may take 4–8 weeks. We'll give you a clear timeline during the initial call."
    },
    {
      question: "Do I need to provide the content?",
      answer: "We recommend supplying your own text and images because you know your business best. If you need help, we offer copywriting and stock photography services."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Yes. Every site we build is fully responsive and optimised for phones, tablets and desktops."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "Yes. Our care plans keep your site secure, fast and up to date."
    },
    {
      question: "What if I need to make changes later?",
      answer: "We build on user-friendly platforms and provide training, so you can edit text and images yourself. For larger changes, our team is always available to assist."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Web Design Frequently Asked Questions
          </h2>
          <p className="text-lg text-zinc-600">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-zinc-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-zinc-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-zinc-500 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-500 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
