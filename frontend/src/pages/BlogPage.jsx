import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { User, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

const blogData = [
  {
    slug: 'unlocking-credit-for-jewellers',
    title: "Unlocking Credit: How Fintech is Solving the Jeweller's Oldest Problem",
    author: 'Aarav Sharma',
    date: 'July 26, 2024',
    excerpt: "For generations, jewellers have relied on informal lending networks and rigid banking systems. This is where fintech platforms like GEMBank are changing the game.",
    content: `
      <p class="mb-4">Access to timely and affordable credit is the lifeblood of any jewellery business. For generations, jewellers have relied on informal lending networks and rigid banking systems that don't understand their unique inventory-heavy business model. This is where fintech platforms like GEMBank are changing the game.</p>
      <h3 class="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">The Challenge with Traditional Lending</h3>
      <p class="mb-4">Traditional banks often struggle to value gold and diamond inventory accurately. Their loan application processes are slow, paper-heavy, and not designed for the fast-paced nature of the jewellery market. This results in:</p>
      <ul class="list-disc list-inside space-y-2 mb-4 pl-4 text-[#444444]">
        <li><strong>High Interest Rates:</strong> Lack of understanding leads to perceived higher risk, resulting in interest rates of 18-24% or more.</li>
        <li><strong>Slow Disbursals:</strong> It can take weeks or even months to get a working capital loan approved, missing crucial business opportunities.</li>
        <li><strong>Inflexible Terms:</strong> Loans are often not tailored to the seasonal cash flow cycles of the jewellery industry.</li>
      </ul>
      <h3 class="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">The GEMBank Approach: Data-Driven Credit</h3>
      <p class="mb-4">GEMBank is building a credit solution from the ground up, specifically for jewellers. By leveraging technology, we aim to make credit assessment faster, fairer, and more transparent.</p>
      <p class="mb-4">Our model uses real-time sales data, inventory management insights, and compliance records to build a comprehensive financial profile of your business. This allows our lending partners (Banks & NBFCs) to make better, quicker decisions.</p>
      <h3 class="text-2xl font-bold text-[#1A1A1A] mt-8 mb-4">Key Benefits:</h3>
      <ul class="list-disc list-inside space-y-2 mb-4 pl-4 text-[#444444]">
        <li><strong>Inventory-Backed Financing:</strong> Unlock the value of your stock without cumbersome appraisal processes.</li>
        <li><strong>Faster Decisions:</strong> Our goal is to provide credit decisions in days, not weeks.</li>
        <li><strong>Competitive Rates:</strong> By creating a marketplace of lenders, we foster competition that can lead to better terms for you.</li>
      </ul>
      <p class="mt-6 font-semibold text-[#1A1A1A]">The future of jewellery finance is here. By joining our pilot program, you can be among the first to experience a banking platform that truly understands your business. Apply today.</p>
    `,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'digital-inventory-management',
    title: 'Beyond the Spreadsheet: The Power of Digital Inventory Management',
    author: 'Priya Singh',
    date: 'July 15, 2024',
    excerpt: 'Manual inventory tracking is prone to errors and wastes valuable time. Discover how a digital system can provide real-time valuation and insights.',
    content: `<p>This is the full content for the blog post about digital inventory management.</p>`,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop'
  },
  {
    slug: 'compliance-automation',
    title: 'Automating Compliance: From GST to Hallmarking',
    author: 'Vikram Rao',
    date: 'June 28, 2024',
    excerpt: 'Navigating the complex web of GST, BIS hallmarking, and other regulations can be a major headache. Learn how automation can ensure you are always audit-ready.',
    content: `<p>This is the full content for the blog post about compliance automation.</p>`,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop'
  },
];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 200, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          {/* Header */}
          <div className="text-center pt-12 pb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-[#1A1A1A] leading-tight">
              GEMBank Insights
            </h1>
            <p className="mt-4 text-lg text-[#444444] max-w-3xl mx-auto">
              News, articles, and expert opinions on the future of the jewellery industry in India.
            </p>
          </div>

          {selectedPost ? (
            // Single Post View
            <div className="max-w-3xl mx-auto animate-fade-in">
              <button onClick={handleGoBack} className="flex items-center gap-2 text-[#444444] font-semibold hover:text-[#B68E2B] transition-colors mb-8">
                <ArrowLeft className="w-5 h-5" />
                Back to all articles
              </button>
              <div className="bg-white/80 backdrop-blur-sm border border-amber-200/60 rounded-2xl p-8 lg:p-12 shadow-lg shadow-amber-100/50">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight">{selectedPost.title}</h2>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#444444] mb-6 pb-6 border-b border-amber-200/60">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                </div>
                <div
                  className="prose lg:prose-lg max-w-none text-[#444444]"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </div>
            </div>
          ) : (
            // Blog List View
            <div className="grid lg:grid-cols-3 gap-8">
              {blogData.map((post) => (
                <div key={post.slug} className="bg-white/80 backdrop-blur-sm border border-blue-200/60 rounded-2xl overflow-hidden shadow-lg  flex flex-col group">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 flex-grow">{post.title}</h3>
                    <div className="flex items-center gap-x-4 text-xs text-[#444444] mb-4">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#444444] mb-6">{post.excerpt}</p>
                    <button onClick={() => handleReadMore(post)} className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#123A9C] hover:text-[#1A1A1A] transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
 