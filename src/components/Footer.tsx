export default function Footer() {
  return (
    <footer className="bg-electric-blue text-white py-12 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-electric-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold">ElectricPro</span>
            </div>
            <p className="text-body-sm text-white/80 mb-4">
              Professional electrical services for residential, commercial, and industrial clients. Licensed, insured, and committed to safety and quality.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-body-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-body-sm">info@electricpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-body-sm">123 Electric Avenue, City, State 12345</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Residential Electrical</a></li>
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Commercial Electrical</a></li>
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Industrial Electrical</a></li>
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">LED Lighting</a></li>
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Safety Inspections</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-body-sm text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-body-sm text-white/80 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#projects" className="text-body-sm text-white/80 hover:text-white transition-colors">Recent Projects</a></li>
              <li><a href="#team" className="text-body-sm text-white/80 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-body-sm text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-body-sm">Monday - Friday:</span>
                <span className="text-body-sm">7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm">Saturday:</span>
                <span className="text-body-sm">8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-body-sm">Sunday:</span>
                <span className="text-body-sm">Emergency Only</span>
              </div>
            </div>
            <div className="mt-4 bg-white/10 rounded-lg p-3">
              <p className="text-button font-medium mb-1">24/7 Emergency Service Available</p>
              <p className="text-xs text-white/80">Call us anytime for urgent electrical issues</p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-body-sm text-white/80">© 2025 ElectricPro. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-body-sm text-white/80 hover:text-white transition-colors">License Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
