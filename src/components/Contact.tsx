import ContactCard from './ContactCard';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your request! We will contact you soon.');
  };

  const phoneIcon = (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
    </svg>
  );

  const emailIcon = (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
  );

  const locationIcon = (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
    </svg>
  );

  const clockIcon = (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
    </svg>
  );

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-[1359px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 font-bold text-slate-dark mb-4">Get In Touch</h2>
          <p className="text-body-lg text-slate-gray max-w-2xl mx-auto">
            Ready to start your electrical project? Contact us today for a free estimate and professional consultation.
          </p>
        </div>
        
        <div className="flex gap-8">
          {/* Contact Form */}
          <div className="flex-1 bg-white border border-border-gray rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-dark mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-dark mb-2">Full Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-border-gray rounded-lg bg-light-gray focus:outline-none focus:ring-2 focus:ring-electric-blue" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-dark mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-border-gray rounded-lg bg-light-gray focus:outline-none focus:ring-2 focus:ring-electric-blue" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-dark mb-2">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 border border-border-gray rounded-lg bg-light-gray focus:outline-none focus:ring-2 focus:ring-electric-blue" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-dark mb-2">Service Type</label>
                  <select className="w-full px-3 py-2 border border-border-gray rounded-lg bg-light-gray focus:outline-none focus:ring-2 focus:ring-electric-blue">
                    <option>Select a service</option>
                    <option>Residential Electrical</option>
                    <option>Commercial Electrical</option>
                    <option>Industrial Electrical</option>
                    <option>Emergency Service</option>
                    <option>Safety Inspection</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-dark mb-2">Project Details</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-border-gray rounded-lg bg-light-gray focus:outline-none focus:ring-2 focus:ring-electric-blue" placeholder="Please describe your electrical project or service needs..."></textarea>
              </div>
              <button type="submit" className="w-full bg-electric-blue text-white py-3 rounded-lg text-button font-medium hover:bg-blue-700 transition-colors">
                Get Free Estimate
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-6">
              <ContactCard
                icon={phoneIcon}
                title="Phone"
                value="(555) 123-4567"
                subtitle="Call us anytime"
              />
              <ContactCard
                icon={emailIcon}
                title="Email"
                value="info@electricpro.com"
                subtitle="Send us a message"
              />
              <ContactCard
                icon={locationIcon}
                title="Address"
                value="123 Electric Avenue, City, State 12345"
                subtitle="Visit our office"
              />
              <ContactCard
                icon={clockIcon}
                title="Hours"
                value="Mon-Fri: 7AM-6PM"
                subtitle="24/7 Emergency Service"
              />
            </div>
            
            {/* Emergency Service Card */}
            <div className="bg-electric-blue text-white rounded-xl p-6 shadow-sm">
              <h3 className="text-heading-3 font-semibold mb-3">24/7 Emergency Service</h3>
              <p className="text-body mb-4">
                Electrical emergency? We're here to help around the clock.
              </p>
              <button className="bg-white text-electric-blue px-6 py-3 rounded-lg text-button font-medium hover:bg-gray-100 transition-colors">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
