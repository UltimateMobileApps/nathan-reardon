"use client";

import Image from "next/image";
import { ExternalLink, Building2, Newspaper } from "lucide-react";

export default function Companies() {
  const companies = [
    {
      name: "Ultimate Property Holdings",
      role: "Founder",
      logo: "/companies/Ultimate-Property-Holdings.avif",
      description: "A leading property management and real estate investment firm dedicated to quality holdings and strategic development.",
      url: "https://www.ultimatepropertyholdings.com",
      icon: Building2,
      color: "from-[#5aa9ff]/18 to-[#cfe2ff]/14",
      borderColor: "border-[#5aa9ff]/30"
    },
    {
      name: "Maine News Now",
      role: "Founder",
      logo: "/companies/maine-news-now.png",
      description: "Delivering timely, accurate, and impactful news from across the state of Maine, keeping the community informed and engaged.",
      url: "https://www.mainenewsnow.com",
      icon: Newspaper,
      color: "from-[#c23652]/18 to-[#5aa9ff]/16",
      borderColor: "border-[#c23652]/30"
    }
  ];

  return (
    <section id="companies" className="relative py-24 theme-shell overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2f88ff] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c23652] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold theme-title mb-4">
            Business Ventures
          </h2>
          <p className="text-xl text-[#a6b5cc] max-w-2xl mx-auto">
            Establishing and growing companies that drive value and serve communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <div
                key={index}
                className="group relative theme-panel backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 hover:border-[#7cb8ff]/50 hover:shadow-2xl hover:shadow-[#2f88ff]/10"
              >
                {/* Accent Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Logo Container */}
                  <div className="relative w-full h-32 mb-8 flex items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[#dce9ff]/20 transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={company.logo}
                        alt={`${company.name} Logo`}
                        fill
                        className="object-contain filter group-hover:brightness-110 transition-all duration-500"
                        priority
                      />
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-[#8ec7ff]" />
                    <span className="text-[#8ec7ff] font-bold tracking-wider uppercase text-xs">
                      {company.role}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#dce9ff] transition-colors">
                    {company.name}
                  </h3>
                  
                  <p className="text-[#a6b5cc] leading-relaxed mb-8 flex-grow">
                    {company.description}
                  </p>

                  {/* Visit Button */}
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta-nav home-cta home-cta-wide"
                  >
                    <span className="hero-cta-nav-inner">
                      <span className="hero-cta-nav-label">Visit Website</span>
                      <span className="home-cta-icon-badge">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </a>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${company.color} opacity-10 rounded-tr-3xl rounded-bl-full`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
