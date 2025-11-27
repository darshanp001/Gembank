import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setSubmitMessage('Thank you for your message! We will get back to you shortly.');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF7] to-[#fffdf6]">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center pt-12 pb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-[#1A1A1A] leading-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-[#444444] max-w-3xl mx-auto">
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* Left Column: Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-8 lg:p-12 space-y-8 shadow-lg shadow-amber-100/50">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Contact Information</h2>
                <p className="text-[#444444]">
                  Fill up the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100/70 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">+91 95120 30107</p>
                    {/* <p className="text-sm text-[#444444]">Mon-Fri, 9am-6pm IST</p> */}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100/70 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">gembankteam@gmail.com</p>
                    <p className="text-sm text-[#444444]">General inquiries</p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100/70 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Mumbai, India</p>
                    <p className="text-sm text-[#444444]">Headquarters</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-8 lg:p-12 shadow-lg shadow-amber-100/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A1A1A] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Rajesh Kumar"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1A1A1A] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Regarding Pilot Program"
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A1A1A] mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full group">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </div>
                {submitMessage && <p className="text-center text-green-700 font-semibold">{submitMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;