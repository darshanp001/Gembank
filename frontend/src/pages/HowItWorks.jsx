import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FAQAccordion from '../components/features/FAQAccordion';
import KeyFeaturesSection from '../components/home/KeyFeaturesSection';
import ThreeStepVisual from '../components/features/ThreeStepVisual';

 
import NeobankExplainer from '../components/home/NeobankExplainer';


     
const Howitworks = () => {
   

  return (
    <div className="min-h-screen ">
      <Navbar />

      <NeobankExplainer />
         {/* Three Step Visual */}
         
      <ThreeStepVisual />
        {/* <KeyFeaturesSection /> */}
           {/* FAQ Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gembank-charcoal mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gembank-gray-800 max-w-2xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>
      <Footer />
     
      
 
      
    </div>
  );
};

export default Howitworks;