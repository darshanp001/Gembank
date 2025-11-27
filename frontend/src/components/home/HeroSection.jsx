import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import heroMockup from "../../assets/images/unnamed.png";
import { ArrowRight, CheckCircle, Lock, Award, TrendingUp, Sparkles } from "lucide-react";
// import ProblemSolutionFlow from '../components/features/ProblemSolutionFlow';
import  ProblemSolutionFlow  from "../features/ProblemSolutionFlow";

const HeroSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEarlyAccess = () => {
    navigate("/signup", { state: { email } });
  };

  const handleBookPilot = () => {
    navigate("/loi");
  };

  return (
    <section className="relative bg-transparent min-h-screen flex items-center overflow-hidden antialiased">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201, 167, 58, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Soft Gradient Orbs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-[#E8D7A8]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-[#C9A73A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#EACB5E]/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-10 text-center lg:text-left">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-white/80 backdrop-blur-sm border border-[#E8D7A8] rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#C9A73A]" />
              <span className="text-sm font-semibold text-[#8B7355]">
                Built Exclusively for Indian Jewellers
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-display font-bold leading-[1.15] tracking-tight">
              <span className="text-[#1A1A1A]">
                Financial Infrastructure for
              </span>
              <br />
              <span className="relative inline-block mt-3">
                <span className="text-[#B68E2B]">
                  India's Jewellery MSMEs
                </span>
                {/* Elegant Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#DBC584] to-transparent"></div>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-xl text-[#444444] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Banking rails, credit solutions, and compliance automation built specifically for jewelers.
              <span className="block mt-3 text-[#B68E2B] font-semibold text-lg">
                Launching Q1 2026
              </span>
            </p>
                {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleEarlyAccess}
                className="group bg-gradient-to-r from-[#C9A73A] to-[#E3C35F] hover:from-[#B88F21] hover:to-[#C9A73A] text-white font-bold shadow-lg shadow-[#C9A73A]/25 hover:shadow-xl hover:shadow-[#C9A73A]/35 transition-all duration-300 px-10 py-4 text-lg rounded-xl"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleBookPilot}
                className="border-2 border-[#C9A73A]/30 text-[#444444] hover:bg-[#FFF9E6] hover:border-[#C9A73A] font-bold px-10 py-4 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Book a Pilot Program
              </Button>
            </div>


            {/* Elegant Stats Bar */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] rounded-xl shadow-sm">
                  <TrendingUp className="w-6 h-6 text-[#4CAF50]" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-[#1A1A1A]">10+</div>
                  <div className="text-sm text-[#444444] font-medium">Pilot Partners</div>
                </div>
              </div>
              
              <div className="w-px h-14 bg-[#E8D7A8]"></div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-xl shadow-sm">
                  <Lock className="w-6 h-6 text-[#2196F3]" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-[#1A1A1A]">100%</div>
                  <div className="text-sm text-[#444444] font-medium">Secure</div>
                </div>
              </div>
              
              <div className="w-px h-14 bg-[#E8D7A8]"></div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-[#FFF9E6] to-[#FFEAA7] rounded-xl shadow-sm">
                  <Award className="w-6 h-6 text-[#C9A73A]" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-[#1A1A1A]">Q1</div>
                  <div className="text-sm text-[#444444] font-medium">2026 Launch</div>
                </div>
              </div>
            </div>

        
            {/* Email Waitlist
            <div className="pt-6">
              <div className="flex items-center gap-3 p-2 bg-white rounded-2xl border-2 border-[#E8D7A8] shadow-md hover:shadow-lg hover:border-[#C9A73A] transition-all duration-300 max-w-lg mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="your@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-[#1A1A1A] placeholder-[#B5A191] px-5 py-3.5 focus:outline-none text-base"
                />
                <Button 
                  variant="primary" 
                  size="sm" 
                  onClick={handleEarlyAccess}
                  className="bg-gradient-to-r from-[#C9A73A] to-[#E3C35F] hover:from-[#B88F21] hover:to-[#C9A73A] text-white font-bold px-7 py-3.5 shadow-sm rounded-xl"
                >
                  Join Waitlist
                </Button>
              </div>
              
            </div> */}

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-6">
              <div className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9]/50 border border-[#81C784] rounded-full text-sm text-[#2E7D32] font-semibold shadow-sm hover:shadow-md transition-all">
                <CheckCircle className="w-4 h-4 text-[#4CAF50]" />
                <span>In Development</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB]/50 border border-[#64B5F6] rounded-full text-sm text-[#1565C0] font-semibold shadow-sm hover:shadow-md transition-all">
                <Lock className="w-4 h-4 text-[#2196F3]" />
                <span>Secure by Design</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[#F3E5F5] to-[#E1BEE7]/50 border border-[#BA68C8] rounded-full text-sm text-[#6A1B9A] font-semibold shadow-sm hover:shadow-md transition-all">
                <Award className="w-4 h-4 text-[#9C27B0]" />
                <span>Strategic Partnerships</span>
              </div>
            </div>
          </div>

          {/* Right Column - App Mockup */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div className="relative group">
              {/* Soft Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A73A]/10 to-[#E3C35F]/10 blur-3xl rounded-3xl transform group-hover:scale-105 transition-transform duration-700"></div>
              {/* hero mockup Image */}
              <img
                src={heroMockup}
                alt="GEMBank App Mockup"
                className="relative z-10 w-full max-w-[280px] h-auto lg:max-w-none lg:h-[550px] rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 animate-bounce">
        <p className="text-xs text-[#B5A191] font-semibold uppercase tracking-widest">Scroll Down</p>
        <div className="w-6 h-11 border-2 border-[#E8D7A8] rounded-full flex justify-center items-start p-1.5">
          <div className="w-1.5 h-2.5 bg-gradient-to-b from-[#C9A73A] to-[#E3C35F] rounded-full animate-scroll-down"></div>
        </div>
      </div>
 
  
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default HeroSection;