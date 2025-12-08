import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import KeyFeaturesSection from '../components/home/KeyFeaturesSection';
import { SocialProof } from '../components/home/SocialProof';
import CTASection from '../components/home/CTASection';
import { CookieBanner } from '../components/common/CookieBanner';
import EarlyAdopterCommitments from '../components/home/EarlyAdopterCommitments';
import NeobankExplainer from '../components/home/NeobankExplainer';
import ProblemSolutionFlow from '../components/features/ProblemSolutionFlow'; 


const HomePage = () => {
  return (
    <div className="min-h-screen" >
      <Navbar />
      <HeroSection />
      <div id="how-it-works">
        <TrustStrip />
        <ProblemSolutionFlow />
      </div>
      {/* <KeyFeaturesSection /> */}
      {/* <SocialProof /> */}
      <EarlyAdopterCommitments />
      {/* <CTASection /> */}
      <Footer />
      <CookieBanner />
    </div> 
  );
};

export default HomePage;