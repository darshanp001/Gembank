import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Linkedin, Twitter, Layers, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
    const founders = [
        {
            name: 'Ruchi M. Rajput',
            title: 'Founder & CEO',
            description: 'AI technologist leading product design, system architecture, and digital banking integrations at GEMBank™.',
            imageUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
            linkedin: 'https://www.linkedin.com/in/ruchi-manuji-rajput-750aa6242/',
            twitter: '#'
        },
        {
            name: 'Amrit Singh',
            title: 'Co-Founder & CTO',
            description: 'Leads business strategy, partnerships, and overall vision, driving GEMBank™’s growth and innovation.',
            imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
            linkedin: '#',
            twitter: '#'
        },
        {
            name: 'Ivan Belukhin',
            title: 'Co-Founder & Head of International Strategy',
            description: 'Brings global fintech expertise and strategic insight to guide GEMBank™’s expansion, compliance roadmap, and cross-border innovation.',
            imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
            linkedin: '#',
            twitter: '#'
        }
    ];

    const whyItems = [
        {
            icon: Layers,
            title: 'Industry-First Platform',
            description: 'We are not a generic bank. We are a financial ecosystem built from the ground up for the complexities of the jewellery trade.'
        },
        {
            icon: TrendingUp,
            title: 'Focused on Growth',
            description: 'Our tools are designed to unlock your business’s potential, improve cash flow, and provide access to fair credit.'
        },
        {
            icon: ShieldCheck,
            title: 'Trust and Security',
            description: 'We partner with regulated institutions and use bank-grade security to ensure your funds and data are always safe.'
        }
    ];

    const checklistItems = [
        "Built by a team with deep jewellery and fintech expertise.",
        "Partnered with leading, RBI-licensed banking institutions.",
        "Committed to transparency with no hidden fees.",
        "Designed in collaboration with pilot program jewellers.",
        "Focused on solving real-world industry challenges.",
        "Secure, compliant, and ready for the future of trade.",
        "Dedicated to the growth and success of Indian MSMEs.",
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-36 pb-20 text-center bg-transparent">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-gembank-charcoal tracking-tight">
                        Powering the Future of Jewellery Trade
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gembank-gray-800">
                        GEMBank is on a mission to build the financial operating system for India's jewellery industry, empowering MSMEs with the tools they need to thrive in the digital age.
                    </p>
                </div>
            </section>

            {/* Why GEMBank Section */}
            <section className="py-20 bg-white/50 border-y border-amber-200/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gembank-charcoal">Why We're Building GEMBank</h2>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {whyItems.map((item, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200/80 mx-auto shadow-sm">
                                    <item.icon className="h-8 w-8 text-blue-700" strokeWidth={2.5} />
                                </div>
                                <h3 className="mt-6 text-xl font-bold text-gembank-charcoal">{item.title}</h3>
                                <p className="mt-2 text-gembank-gray-800">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gembank-charcoal">Meet Our Team</h2>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {founders.map((founder, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm text-center p-8 rounded-2xl border hover:border-blue-500/80  shadow-lg shadow-amber-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-amber-400/80">
                                <img
                                    className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-white/80 shadow-md"
                                    src={founder.imageUrl}
                                    alt={`Portrait of ${founder.name}`}
                                />
                                <h3 className="mt-6 text-xl font-bold text-gembank-charcoal">{founder.name}</h3>
                                <p className="mt-1 text-base font-semibold text-amber-700">{founder.title}</p>
                                <p className="mt-4 text-gembank-gray-800 text-sm">
                                    {founder.description}
                                </p>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gembank-gray-500 hover:text-amber-600 transition-colors">
                                        <Linkedin size={20} />
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                    <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="text-gembank-gray-500 hover:text-amber-600 transition-colors">
                                        <Twitter size={20} />
                                        <span className="sr-only">Twitter</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authenticity Checklist Section */}
            <section className="py-20 bg-white/50 border-y border-amber-200/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gembank-charcoal">Our Commitment to Authenticity</h2>
                        <p className="mt-4 text-lg text-gembank-gray-700">We are building a platform on the principles of trust, transparency, and a deep understanding of the jewellery trade.</p>
                    </div>
                    <div className="mt-12 max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border border-blue-400/80  rounded-2xl p-8 lg:p-12 shadow-lg shadow-amber-100/50">
                        <ul className="space-y-4">
                            {checklistItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-4 mt-0.5 flex-shrink-0" />
                                    <span className="text-gembank-charcoal font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-center font-semibold text-gembank-charcoal border-t border-amber-200/60 pt-6">
                            Your trust is our most valuable asset.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
 