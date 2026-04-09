import { motion } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Instagram, Facebook } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to a plain object for FormSubmit JSON submission
    const data = Object.fromEntries(formData.entries());
    
    // FormSubmit.co configuration
    data._captcha = "false"; // Disable reCAPTCHA for seamless AJAX
    data._template = "box"; // Use a nicer email template
    data._subject = "New Contact Form Submission from ScaleWeb";

    try {
      // Use the /ajax/ endpoint for seamless background submission
      const response = await fetch("https://formsubmit.co/ajax/scalewebza@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success === "true" || response.ok) {
        setStatus('success');
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        console.error("Form submission error:", result);
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      console.error("Form submission error:", err);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Let's talk about your project.
            </h2>
            <p className="text-lg text-zinc-600 mb-10">
              Fill out the form and we'll get back to you within 24 hours to discuss how we can help your business grow.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-900 border border-zinc-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Call us</p>
                  <p className="text-lg font-semibold text-zinc-900">063 745 7950</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-900 border border-zinc-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email us</p>
                  <p className="text-lg font-semibold text-zinc-900">scalewebza@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-900 border border-zinc-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Location</p>
                  <p className="text-lg font-semibold text-zinc-900">Stellenbosch, South Africa</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-900 border border-zinc-100">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Instagram</p>
                  <a 
                    href="https://instagram.com/scaleweb_za" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    @scaleweb_za
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-900 border border-zinc-100">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Facebook</p>
                  <a 
                    href="https://www.facebook.com/ScaleWeb.ZA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
                  >
                    ScaleWeb.ZA
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-zinc-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* FormSubmit Honeypot to prevent spam */}
              <input type="text" name="_honey" className="hidden" style={{ display: 'none' }} />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-zinc-900">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="First Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-zinc-900">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="Last Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                    placeholder="Your Surname"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-900">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all"
                  placeholder="Your Email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-900">How can we help?</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-zinc-950 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Your message has been sent successfully! We'll be in touch soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 text-sm font-medium"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  There was an error sending your message. Please try again or email us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
