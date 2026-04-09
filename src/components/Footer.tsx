import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-6">
              <img 
                src="https://i.imgur.com/bN9QA77.png" 
                alt="ScaleWeb Logo" 
                className="h-10 md:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-6">
              We design and build clean, high-quality websites that help businesses look more professional online and turn visitors into enquiries.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/scaleweb_za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/ScaleWeb.ZA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-zinc-500 hover:text-zinc-900 transition-colors">Services</a></li>
              <li><a href="#process" className="text-zinc-500 hover:text-zinc-900 transition-colors">Process</a></li>
              <li><a href="#pricing" className="text-zinc-500 hover:text-zinc-900 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-zinc-500 hover:text-zinc-900 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-zinc-500">Stellenbosch, South Africa</li>
              <li><a href="mailto:scalewebza@gmail.com" className="text-zinc-500 hover:text-zinc-900 transition-colors">scalewebza@gmail.com</a></li>
              <li><a href="tel:0637457950" className="text-zinc-500 hover:text-zinc-900 transition-colors">063 745 7950</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} ScaleWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
