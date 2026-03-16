import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  
  // Hardcoded data for project-1 as requested
  if (params.id === "project-1") {
    return (
      <div className="min-h-screen bg-[#121212] overflow-hidden">
        {/* Navigation */}
        <nav className="w-full py-6 px-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#121212]/80 backdrop-blur-md z-50">
          <Link 
            href="/" 
            className="text-white/60 hover:text-blue-400 font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="text-sm font-semibold tracking-wider text-white/40 uppercase">
            Project Details
          </span>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto py-16 px-8 relative z-10">
          
          {/* Header Section */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-bold mb-4">
              LEAD GENERATION
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Meta Ads Lead Generation Campaign (Pakistan)
            </h1>
          </header>

          {/* Big Image Representation */}
          <div className="w-full aspect-video bg-white/5 rounded-2xl mb-16 overflow-hidden border border-white/10 flex items-center justify-center relative shadow-2xl shadow-blue-500/5">
            <Image 
              src="/project_img/Screenshot 2026-03-16 125319.png" 
              alt="Campaign Result Screenshot" 
              fill
              className="object-contain"
            />
          </div>

          {/* Content Body */}
          <div className="prose prose-lg prose-invert max-w-none text-white/80">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Campaign Overview</h2>
            <p className="mb-8 leading-relaxed">
              This campaign was designed to generate leads (form submissions) for a business in Pakistan. The advertiser ran multiple ad sets across Facebook (FB) and Instagram (IG) with two distinct audience segments:
            </p>
            <ul className="mb-8 list-disc pl-6 space-y-2 text-white/70">
              <li><strong className="text-white">"US"</strong> – meaning "Our General Audience" (broad targeting)</li>
              <li><strong className="text-white">"ELITE"</strong> – specifically targeting the elite class audience (high-income individuals, premium lifestyle, affluent neighborhoods, etc.)</li>
            </ul>
            <p className="mb-8 font-medium text-white/90">All campaigns ran in Pakistan, so the currency is Pakistani Rupee (PKR).</p>
            
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Key Performance Metrics</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-white/90">
                    <th className="p-4 border-b border-white/10 font-bold">Metric</th>
                    <th className="p-4 border-b border-white/10 font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white/70">Total Leads (Form)</td>
                    <td className="p-4 font-semibold text-emerald-400">676</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="p-4 text-white/70">Cost per Lead (CPL)</td>
                    <td className="p-4 font-semibold text-blue-400">Rs 77.15 PKR</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white/70">Total Amount Spent</td>
                    <td className="p-4 font-semibold text-white">Rs 52,151.83 PKR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6 leading-relaxed">
              <strong className="text-white">676 leads generated.</strong> Cost per lead is only Rs77 – this is very low for Pakistan. Typically, CPL in Pakistan can range from Rs150 to Rs500+ depending on industry and targeting.
            </p>
            <p className="mb-10 leading-relaxed text-white/70">
              Total spend of Rs52k is a moderate budget, but the number of leads obtained is excellent.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Campaign Structure & Targeting</h2>
            <p className="mb-4 text-white/80">The left menu shows four distinct ad sets:</p>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-white/90">
                    <th className="p-4 border-b border-white/10 font-bold">Ad Set Name</th>
                    <th className="p-4 border-b border-white/10 font-bold">Platform</th>
                    <th className="p-4 border-b border-white/10 font-bold">Audience Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 text-white/70">
                    <td className="p-3 font-medium text-white/90">07/01 FB US</td>
                    <td className="p-3">Facebook</td>
                    <td className="p-3">General/Broad Audience</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-white/70">
                    <td className="p-3 font-medium text-white/90">07/01 FB ELITE</td>
                    <td className="p-3">Facebook</td>
                    <td className="p-3">Elite Class Audience</td>
                  </tr>
                  <tr className="border-b border-white/5 text-white/70">
                    <td className="p-3 font-medium text-white/90">07/01 IG US</td>
                    <td className="p-3">Instagram</td>
                    <td className="p-3">General/Broad Audience</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-white/70">
                    <td className="p-3 font-medium text-white/90">07/01 IG ELITE</td>
                    <td className="p-3">Instagram</td>
                    <td className="p-3">Elite Class Audience</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">What "Elite Class Audience" Means</h3>
            <p className="mb-4 text-white/80">The advertiser specifically targeted the elite class – meaning:</p>
            <ul className="mb-8 list-disc pl-6 space-y-2 text-white/70">
              <li>High-income individuals (affluent professionals, business owners, senior executives)</li>
              <li>People living in upscale neighborhoods (DHA, Bahria Town, Gulberg, Clifton, etc.)</li>
              <li>Luxury lifestyle interests (premium brands, high-end travel, fine dining, luxury cars)</li>
              <li>Education & profession filters (doctors, engineers, CEOs, entrepreneurs)</li>
              <li>Device & spending behavior (users with high-end phones, frequent online shoppers)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-white/10 pb-2">Why This Campaign Was Successful</h2>
            
            <h4 className="font-bold text-lg text-white mt-6 mb-2">Extremely Low Cost Per Lead</h4>
            <p className="mb-4 text-white/70 leading-relaxed">Achieving Rs77 CPL in Pakistan is a clear sign of excellent targeting, compelling ad creatives, and a smooth lead form. Even more impressive is that this low CPL was achieved while targeting the elite class – usually a more expensive audience to reach.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Clear Audience Segmentation</h4>
            <p className="mb-2 text-white/70">By separating General (US) and Elite Class (ELITE) audiences, the advertiser could:</p>
            <ul className="mb-4 list-disc pl-6 space-y-1 text-white/70">
              <li>Compare performance between both groups</li>
              <li>See which audience converted at a lower cost</li>
              <li>Allocate budget to the better-performing segment</li>
            </ul>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Multi-Platform Testing</h4>
            <p className="mb-4 text-white/70 leading-relaxed">Running the same audiences on both Facebook and Instagram helped identify which platform worked best for each group.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Continuous Optimization & Strong Creative</h4>
            <p className="mb-8 text-white/70 leading-relaxed">"Historical edits" prove the campaign was actively managed. A low CPL also means the ad creative and the lead magnet resonated well with the target audience.</p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Conclusion</h2>
              <p className="mb-4 text-white/80 leading-relaxed">
                This lead generation campaign is an excellent example of efficient Facebook/Instagram advertising in Pakistan. With a spend of just Rs52k, it delivered 676 leads at an incredible Rs77 per lead.
              </p>
              <p className="mb-4 text-white/80">The smart strategy included:</p>
              <ul className="mb-4 list-disc pl-6 space-y-1 text-white/70">
                <li>Clear segmentation between general and elite class audiences</li>
                <li>Platform testing (Facebook vs. Instagram)</li>
                <li>Continuous optimization (historical edits)</li>
                <li>Targeted approach for high-value customers (elite class)</li>
              </ul>
              <p className="text-white/80">
                This proves the advertiser understood their market and used data-driven decisions to maximize results.
              </p>
            </div>

          </div>
        </main>
      </div>
    );
  }

  // Hardcoded data for project-2
  if (params.id === "project-2") {
    return (
      <div className="min-h-screen bg-[#121212] overflow-hidden">
        {/* Navigation */}
        <nav className="w-full py-6 px-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#121212]/80 backdrop-blur-md z-50">
          <Link 
            href="/" 
            className="text-white/60 hover:text-blue-400 font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="text-sm font-semibold tracking-wider text-white/40 uppercase">
            Project Details
          </span>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto py-16 px-8 relative z-10">
          
          {/* Header Section */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-sm font-bold mb-4">
              CAMPAIGN ANALYSIS
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Solvo By Ahmad 2/12 <br className="hidden md:block"/> Lead Generation Success (Pakistan Market)
            </h1>
          </header>

          {/* Big Image Representation */}
          <div className="w-full aspect-video bg-white/5 rounded-2xl mb-16 overflow-hidden border border-white/10 flex items-center justify-center relative shadow-2xl shadow-purple-500/5">
            <Image 
              src="/project_img/2.png" 
              alt="Campaign Result Screenshot" 
              fill
              className="object-contain"
            />
          </div>

          {/* Content Body */}
          <div className="prose prose-lg prose-invert max-w-none text-white/80">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Campaign Overview</h2>
            <p className="mb-8 leading-relaxed">
              This campaign, named <strong>"Solvo By Ahmad 2/12"</strong>, was designed to generate leads (form submissions) for a business in Pakistan. The campaign structure includes multiple ad sets focused on:
            </p>
            <ul className="mb-8 list-disc pl-6 space-y-2 text-white/70">
              <li><strong className="text-white">ramadan</strong> (likely a seasonal campaign)</li>
              <li><strong className="text-white">Leads</strong> (general lead generation)</li>
              <li><strong className="text-white">Leads ad</strong> and <strong className="text-white">Leads ad - FB</strong> (specific creatives/platform tests)</li>
            </ul>
            <p className="mb-8 font-medium text-white/90">All campaigns ran in Pakistan, so the currency is Pakistani Rupee (PKR).</p>
            
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Key Performance Metrics</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-white/90">
                    <th className="p-4 border-b border-white/10 font-bold">Metric</th>
                    <th className="p-4 border-b border-white/10 font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white/70">Total Leads (Form)</td>
                    <td className="p-4 font-semibold text-emerald-400">558</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="p-4 text-white/70">Cost per Lead (CPL)</td>
                    <td className="p-4 font-semibold text-purple-400">Rs 71.84 PKR</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white/70">Total Amount Spent</td>
                    <td className="p-4 font-semibold text-white">Rs 40,084.33 PKR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6 leading-relaxed">
              <strong className="text-white">558 leads generated.</strong> Cost per lead is only Rs71.84 – this is extremely low for Pakistan. Typically, CPL in Pakistan ranges from Rs150 to Rs500+ depending on industry and targeting.
            </p>
            <p className="mb-10 leading-relaxed text-white/70">
              Total spend of Rs40k is a moderate budget, yet it delivered an impressive volume of leads.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Campaign Structure</h2>
            <p className="mb-4 text-white/80">Based on the left menu, the campaign has multiple ad sets:</p>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-white/90">
                    <th className="p-4 border-b border-white/10 font-bold">Ad Set Name</th>
                    <th className="p-4 border-b border-white/10 font-bold">Focus / Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 text-white/70">
                    <td className="p-3 font-medium text-white/90">ramadan</td>
                    <td className="p-3">Seasonal campaign targeting Ramadan shoppers</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-white/70">
                    <td className="p-3 font-medium text-white/90">Leads</td>
                    <td className="p-3">General lead generation</td>
                  </tr>
                  <tr className="border-b border-white/5 text-white/70">
                    <td className="p-3 font-medium text-white/90">Leads ad</td>
                    <td className="p-3">Specific creative test</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02] text-white/70">
                    <td className="p-3 font-medium text-white/90">Leads ad - FB</td>
                    <td className="p-3">Facebook-specific creative test</td>
                  </tr>
                  <tr className="border-b border-white/5 text-white/70">
                    <td className="p-3 font-medium text-white/90">Leads (likely IG)</td>
                    <td className="p-3">Instagram-specific or general lead gen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 mt-8">Testing Strategy</h3>
            <p className="mb-4 text-white/80">This structure shows the advertiser was:</p>
            <ul className="mb-8 list-disc pl-6 space-y-2 text-white/70">
              <li>Testing different audience segments (Ramadan vs. general)</li>
              <li>Testing different creatives (Leads ad variations)</li>
              <li>Testing different platforms (FB-specific vs. others)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-white/10 pb-2">Performance Over Time</h2>
            <p className="mb-4 text-white/80">The graph shows Leads (Form) across several dates:</p>
            <ul className="mb-6 list-disc pl-6 space-y-2 text-white/70">
              <li>16 Feb 2023</li>
              <li>24 Nov 2023</li>
              <li>31 Aug 2024</li>
              <li>8 Jun 2025</li>
              <li>16 Mar 2026 (new date added)</li>
            </ul>
            
            <h4 className="font-bold text-lg text-white mt-6 mb-2">Observations:</h4>
            <ul className="mb-10 list-disc pl-6 space-y-2 text-white/70">
              <li>The campaign ran over a long period (Feb 2023 – Mar 2026), indicating sustained effort.</li>
              <li>Peaks reached around 40–50 leads at certain times.</li>
              <li>The label "Historical edits" shows the campaign was actively optimized – changes made to creatives, targeting, or bidding over time.</li>
              <li>The new date (16 Mar 2026) suggests the campaign is still active or was recently updated.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-white/10 pb-2">Why This Campaign Was Successful</h2>
            
            <h4 className="font-bold text-lg text-white mt-6 mb-2">Extremely Low Cost Per Lead (Rs 71.84)</h4>
            <p className="mb-4 text-white/70 leading-relaxed">This is exceptional for Pakistan. It proves highly targeted audiences, compelling ad creatives, an optimized lead form (easy to complete), and an efficient bidding strategy.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Strategic Audience Segmentation</h4>
            <p className="mb-4 text-white/70 leading-relaxed">The "ramadan" ad set shows seasonal awareness – targeting users during a high-intent period (Ramadan shoppers). This likely contributed to lower CPL during that time.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Creative & Platform Testing</h4>
            <p className="mb-4 text-white/70 leading-relaxed">Having separate ad sets for "Leads ad" and "Leads ad - FB" indicates the advertiser tested different creatives and isolated Facebook performance. This data-driven approach helps identify winning combinations.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Continuous Optimization</h4>
            <p className="mb-4 text-white/70 leading-relaxed">"Historical edits" prove the campaign was actively managed. Regular updates kept performance high over 3+ years.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Scalable Results</h4>
            <p className="mb-8 text-white/70 leading-relaxed">Generating 558 leads with Rs40k spend means the campaign can easily scale. Increasing budget on top-performing ad sets could yield even more leads.</p>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">What Made This Campaign Work for "Solvo By Ahmad"</h2>
              <p className="mb-4 text-white/80 leading-relaxed">
                The campaign name suggests it might be for Personal ("Ahmad") or a business called "Solvo" (perhaps consulting, services, or e-commerce).
              </p>
              <p className="text-white/80 leading-relaxed">
                The low CPL (Rs71.84) indicates the offer was highly attractive, driving massive volume and proving the effectiveness of long-term optimization.
              </p>
            </div>

          </div>
        </main>
      </div>
    );
  }

  // Hardcoded data for project-3
  if (params.id === "project-3") {
    return (
      <div className="min-h-screen bg-[#121212] overflow-hidden">
        {/* Navigation */}
        <nav className="w-full py-6 px-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#121212]/80 backdrop-blur-md z-50">
          <Link 
            href="/" 
            className="text-white/60 hover:text-blue-400 font-medium flex items-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <span className="text-sm font-semibold tracking-wider text-white/40 uppercase">
            Project Details
          </span>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto py-16 px-8 relative z-10">
          
          {/* Header Section */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-bold mb-4">
              MESSAGING ENGAGEMENT
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Natural Glow <br className="hidden md:block"/> Messenger Lead Campaign (Pakistan)
            </h1>
          </header>

          {/* Big Image Representation */}
          <div className="w-full aspect-video bg-white/5 rounded-2xl mb-16 overflow-hidden border border-white/10 flex items-center justify-center relative shadow-2xl shadow-emerald-500/5">
            <Image 
              src="/project_img/3.png" 
              alt="Campaign Result Screenshot" 
              fill
              className="object-contain"
            />
          </div>

          {/* Content Body */}
          <div className="prose prose-lg prose-invert max-w-none text-white/80">
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Campaign Overview</h2>
            <p className="mb-8 leading-relaxed">
              This campaign, named <strong>"Natural Glow"</strong>, was designed to generate messaging conversations (likely via Click-to-WhatsApp or Messenger) for a business in Pakistan. The objective is to initiate direct conversations with potential customers, which often indicates a high-intent audience interested in personalized interaction.
            </p>
            <ul className="mb-8 list-disc pl-6 space-y-2 text-white/70">
              <li><strong className="text-white">Platform:</strong> Facebook/Instagram (Messenger/WhatsApp ads)</li>
              <li><strong className="text-white">Goal:</strong> Start conversations (engagement)</li>
              <li><strong className="text-white">Market:</strong> Pakistan (currency PKR)</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Key Performance Metrics</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-white/90">
                    <th className="p-4 border-b border-white/10 font-bold">Metric</th>
                    <th className="p-4 border-b border-white/10 font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white/70">Messaging Conversations Started</td>
                    <td className="p-4 font-semibold text-emerald-400">772</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <td className="p-4 text-white/70">Cost per Conversation</td>
                    <td className="p-4 font-semibold text-blue-400">Rs 12.11 PKR</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-white/70">Total Amount Spent</td>
                    <td className="p-4 font-semibold text-white">Rs 9,346.58 PKR</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6 leading-relaxed">
              <strong className="text-white">772 conversations initiated.</strong> Cost per conversation is only Rs12.11 – this is exceptionally low for Pakistan. Typical cost per messaging conversation can range from Rs30 to Rs100+ depending on industry and targeting.
            </p>
            <p className="mb-10 leading-relaxed text-white/70">
              Total spend of Rs9,346 is very modest, yet it generated a high volume of engaged leads.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Performance Over Time</h2>
            <p className="mb-4 text-white/80">The graph shows zero conversations on the listed dates (16 Feb 2023, 24 Nov 2023, etc.), but the overall totals indicate that conversations occurred. This could mean:</p>
            <ul className="mb-10 list-disc pl-6 space-y-2 text-white/70">
              <li>The campaign is new and the date markers are just placeholders.</li>
              <li>The graph may not be displaying data correctly, or the campaign ran outside those specific dates.</li>
              <li>The label "Historical edits" suggests changes were made, possibly improving performance recently.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-white/10 pb-2">Why This Campaign Was Successful</h2>
            
            <h4 className="font-bold text-lg text-white mt-6 mb-2">Extremely Low Cost Per Conversation (Rs 12.11)</h4>
            <p className="mb-4 text-white/70 leading-relaxed">This is outstanding for Pakistan. It indicates highly relevant targeting (the right audience saw the ad), compelling ad creative that encouraged users to message, a strong offer or incentive that prompted immediate action, and an optimized bid strategy.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">High Intent Audience</h4>
            <p className="mb-4 text-white/70 leading-relaxed">Users who start a conversation are typically further down the funnel – they are interested and want more information. This makes them warm leads with higher conversion potential.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Messaging Format Advantages</h4>
            <p className="mb-2 text-white/70">Click-to-WhatsApp/Messenger ads allow for:</p>
            <ul className="mb-4 list-disc pl-6 space-y-1 text-white/70">
              <li>Personalized interaction</li>
              <li>Quick responses to queries</li>
              <li>Building trust through conversation</li>
              <li>Higher engagement rates compared to form fills</li>
            </ul>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Simple, Focused Structure</h4>
            <p className="mb-4 text-white/70 leading-relaxed">The campaign has a single ad set ("Natural Glow"), indicating a clear, focused approach. This avoids fragmentation and makes optimization easier.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Low Spend, High Volume</h4>
            <p className="mb-8 text-white/70 leading-relaxed">With just Rs9,346 spent, the campaign delivered 772 conversations. This is a highly efficient use of budget – perfect for small businesses or testing new offers.</p>

            <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-white/10 pb-2">What "Natural Glow" Likely Offers</h2>
            <p className="mb-4 text-white/80">The name "Natural Glow" suggests a brand in the beauty, skincare, or wellness industry. Possible offerings:</p>
            <ul className="mb-6 list-disc pl-6 space-y-2 text-white/70">
              <li>Organic skincare products</li>
              <li>Beauty consultations</li>
              <li>Natural makeup</li>
              <li>Health supplements</li>
            </ul>
            <p className="mb-4 text-white/80">The low cost per conversation implies the offer was attractive, such as:</p>
            <ul className="mb-10 list-disc pl-6 space-y-2 text-white/70">
              <li>Free skincare consultation</li>
              <li>Discount on first purchase</li>
              <li>Free sample or guide</li>
              <li>Exclusive WhatsApp-only deal</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4 mt-12 border-b border-white/10 pb-2">Suggestions for Further Improvement</h2>
            
            <h4 className="font-bold text-lg text-white mt-6 mb-2">Scale the Campaign</h4>
            <p className="mb-4 text-white/70 leading-relaxed">With such a low cost per conversation, increasing the budget could yield hundreds more conversations at a similar rate. Start with a 2x–3x budget increase and monitor CPL.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Retargeting via Messages</h4>
            <p className="mb-4 text-white/70 leading-relaxed">Use the conversations to nurture leads – send follow-up messages, share product catalogs, or offer exclusive discounts to convert them into customers.</p>

            <h4 className="font-bold text-lg text-white mt-6 mb-2">Test Different Creatives & Options</h4>
            <p className="mb-8 text-white/70 leading-relaxed">Even though performance is great, A/B test new images, videos, or copy to see if you can lower CPL further or increase conversation quality. After warming up leads, consider a separate "Conversions" campaign. Create Lookalike Audiences from engaged users.</p>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">Conclusion</h2>
              <p className="mb-4 text-white/80 leading-relaxed">
                The "Natural Glow" messaging campaign is a stellar example of cost-effective engagement advertising in Pakistan. With a minimal spend of Rs9,346, it generated 772 conversations at an incredible Rs12.11 per conversation.
              </p>
              <p className="mb-4 text-white/80">This demonstrates:</p>
              <ul className="mb-4 list-disc pl-6 space-y-2 text-white/70">
                <li>Precise audience targeting</li>
                <li>Compelling creative and offer</li>
                <li>The power of messaging ads for building relationships</li>
              </ul>
              <p className="text-white/80 leading-relaxed">
                For a brand like "Natural Glow," these conversations are invaluable – they represent potential customers who have already shown interest and are just one step away from making a purchase.
              </p>
            </div>

          </div>
        </main>
      </div>
    );
  }

  // Generic Placeholder for other projects
  return (
    <div className="min-h-screen bg-[#121212] overflow-hidden">
      {/* Navigation */}
      <nav className="w-full py-6 px-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#121212]/80 backdrop-blur-md z-50">
        <Link 
          href="/" 
          className="text-white/60 hover:text-blue-400 font-medium flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
        <span className="text-sm font-semibold tracking-wider text-white/40 uppercase">
          Project Details
        </span>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto py-16 px-8 relative z-10">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-bold mb-4">
            {params.id.replace("-", " ").toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Detailed Project View
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            This is a placeholder page for the full project case study. You can replace this text later with deep insights, challenges overcome, and the final results achieved.
          </p>
        </header>

        {/* Big Image Placeholder */}
        <div className="w-full aspect-video bg-white/5 rounded-2xl mb-16 overflow-hidden border border-white/10 flex items-center justify-center">
            <span className="text-white/40 font-medium">Hero Image Area</span>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg prose-invert max-w-none text-white/70">
          <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4 border-t border-white/10 pt-8">The Solution</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </div>
  );
}
