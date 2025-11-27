import { Building2, CalendarClock, Handshake, Link2 } from "lucide-react";

export const TrustStrip = () => {
  const trustItems = [
    { icon: <Building2 className="w-6 h-6 text-gembank-gold" />, text: 'In Development' },
    { icon: <CalendarClock className="w-6 h-6 text-gembank-gold" />, text: 'Pilot Program Starting Q1 2026' },
    { icon: <Handshake className="w-6 h-6 text-gembank-gold" />, text: '10 Jewellers Committed' },
    { icon: <Link2 className="w-6 h-6 text-gembank-gold" />, text: 'Association Partnerships in Progress' },
  ];

  return (
    <section className="relative py-12 bg-transparent border-y border-gembank-gray-200 overflow-hidden">
      {/* Soft golden overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gembank-gold/5 via-transparent to-gembank-gold/5 blur-2xl pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <p className="text-center text-sm font-semibold text-gembank-gray-700 mb-8 uppercase tracking-[0.15em]">
            Crafted for the Next Generation of Jewellers
        </p>

        {/* Trust Items */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gembank-gold/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-gold/30"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="font-medium text-gembank-gray-800 group-hover:text-gembank-gold transition-colors">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
