export const portfolioData = {
  personal: {
    name: "Khushal Rawal",
    title: "Product Management • Founder's Office • Strategy & Growth",
    subtitle: "B.Tech at IIT Guwahati | Inter-IIT Tech Meet Bronze Medalist | D2C Founder",
    institution: "Indian Institute of Technology, Guwahati",
    degree: "B.Tech in Mechanical Engineering (2023 – Present)",
    cgpa: "7.00",
    email: "khushalrawal2506@gmail.com",
    instiEmail: "r.khushal@iitg.ac.in",
    phone: "+91-9257282136",
    location: "IIT Guwahati, Assam, India",
    linkedin: "https://linkedin.com/in/khushalrawal", // user profile
    github: "https://github.com/khushalrawal",
    resumeUrl: "#resume",
    availability: "Available for Full-time Roles & Placements",
    bio: "Product & Growth enthusiast from IIT Guwahati with end-to-end 0-to-1 execution experience. Raised ₹1Cr+ in global sponsorships, built and scaled a profitable D2C venture (76% gross margin), and developed prize-winning AI product growth strategies (Inter-IIT Tech Bronze Medalist)."
  },

  elevatorPitch: {
    title: "30-Second Candidate Snapshot for Hiring Managers",
    summary: "High-agency IIT Guwahati undergraduate combining deep product intuition, quantitative rigor, and high-velocity 0-to-1 execution.",
    pillars: [
      {
        icon: "TrendingUp",
        title: "0-to-1 Founder & Growth Track Record",
        desc: "Scaled 'The Integral Cup' nationwide across 27+ institutes, securing ₹1Cr+ from tier-1 quant firms (Optiver, Jane Street, QRT). Bootstrapped 'Clockit Hair' D2C brand to 76% gross margin."
      },
      {
        icon: "Sparkles",
        title: "Product Strategy & AI Rigor",
        desc: "Won Bronze Medal at Inter-IIT Tech Meet 13.0 for Dream11 AI Product Growth strategy (220+ user insights, SHAP explainability, 5+ ML models R²=0.91). Built WorkLens multi-source enterprise AI assistant."
      },
      {
        icon: "Users",
        title: "Leadership & Stakeholder Alignment",
        desc: "Elected Branch Representative for 75+ peers, Execution Head for Alcheringa (200+ participants, 10+ competitions), and represented IIT Guwahati in Inter-IIT sports."
      }
    ]
  },

  impactMetrics: [
    {
      metric: "₹1 Cr+",
      label: "Global Sponsorships Raised",
      subtext: "From Optiver, Jane Street & QRT for The Integral Cup",
      highlight: true
    },
    {
      metric: "800%",
      label: "MoM Growth Orchestrated",
      subtext: "27+ premier Indian institutions onboarded",
      highlight: false
    },
    {
      metric: "Bronze Medal",
      label: "Inter-IIT Tech Meet 13.0",
      subtext: "Dream11 AI Product Growth Challenge (IIT Bombay)",
      highlight: true
    },
    {
      metric: "76%",
      label: "Gross Margin D2C Brand",
      subtext: "Bootstrapped Clockit Hair with 31.7k+ impressions",
      highlight: false
    },
    {
      metric: "1st / 200+",
      label: "Policymaker Case Competition",
      subtext: "1st rank out of 200+ competitive teams across India",
      highlight: true
    },
    {
      metric: "₹10 Lakhs",
      label: "Fundraiser Social Impact",
      subtext: "Rotary Rain Run for breast cancer awareness & care",
      highlight: false
    }
  ],

  projects: [
    {
      id: "dream11-ai-growth",
      title: "AI-Powered Fantasy Sports Product Growth Strategy",
      client: "Dream11 | Inter-IIT Tech Meet 13.0 (IIT Bombay)",
      period: "Dec 2024",
      role: "Product & Strategy Lead",
      tagline: "Secured Bronze Medal across top IITs for pioneering an explainable AI team-building experience.",
      categories: ["Product Management", "AI & Analytics", "Case Strategy"],
      badge: "🥉 Bronze Medalist",
      metrics: ["220+ User Responses", "6 Competitors Benchmarked", "R² = 0.91 ML Fit", "10+ Product UI Features"],
      summary: "Spearheaded user research and product architecture to solve the fantasy sports trust deficit. Formulated a dual-UI product paradigm (Casual vs Pro) and integrated SHAP explainable AI for team recommendation transparency.",
      caseStudy: {
        problem: "Casual fantasy sports players struggled with cognitive overload during team creation, while experienced players distrusted black-box AI recommendations, causing significant churn during high-stakes tournament windows.",
        research: "Led user research across 220+ respondents and performed in-depth competitive benchmarking across 6 fantasy platforms. Discovered that 73% of users actively demanded transparent AI reasoning before staking real money.",
        solution: [
          "Dual-UI Architecture: 'Quick Play' for 60-second casual gamification vs 'Pro Studio' for data-driven analytics.",
          "SHAP Explainability Layer: Visualized player selection trade-offs, form factor weightages, and pitch condition impact in real-time.",
          "ML Predictive Pipeline: Built end-to-end feature engineering and tested 5+ regression/ensemble models achieving R²=0.91."
        ],
        impact: [
          "Awarded Bronze Medal at Inter-IIT Tech Meet 13.0, IIT Bombay.",
          "Engineered 10+ high-fidelity UI features designed to improve user retention by 28% and AI feature adoption."
        ],
        stack: ["Product Discovery", "Figma", "Python", "SHAP", "Feature Engineering", "A/B Testing Framework", "User Journey Mapping"]
      }
    },
    {
      id: "integral-cup",
      title: "The Integral Cup — Operations & Nationwide GTM",
      client: "STEM Vibe | Founder's Office",
      period: "Jun 2025 - Dec 2026",
      role: "Founder's Office Lead",
      tagline: "Scaled India's premier quant & STEM collegiate competition from 0 to 1.",
      categories: ["Growth & Founder's Office", "Operations", "Product Management"],
      badge: "🚀 0-to-1 Scale",
      metrics: ["₹1 Cr+ Sponsorships", "800% MoM Growth", "27+ Premier Institutes", "10+ Core Team"],
      summary: "Owned end-to-end business operations, corporate sponsorship pitching, nationwide campus ambassador network, and website product UX redesign for the debut edition of The Integral Cup.",
      caseStudy: {
        problem: "No unified, high-caliber collegiate quantitative trading and STEM competition existed in India connecting top tier-1 math/CS/engineering talent with elite global trading firms.",
        research: "Interviewed 50+ quantitative finance aspirants across IITs and analyzed partnership criteria of international market-making firms.",
        solution: [
          "Corporate Sponsorships: Pitched and secured ₹1Cr+ in sponsorship funds from global market makers including Optiver, Jane Street & QRT.",
          "Nationwide Ambassador Network: Recruited and managed 27+ campus ambassadors across premier IITs/NITs/BITS.",
          "Product & Funnel Overhaul: Redesigned the event platform UI/UX and 3-track registration funnel, eliminating registration bottlenecks and driving 800% MoM participant growth."
        ],
        impact: [
          "Successfully established The Integral Cup as the gold standard collegiate quant championship in India.",
          "Managed end-to-end budget allocation, cross-functional execution, and stakeholder delivery."
        ],
        stack: ["GTM Strategy", "Funnel Optimization", "UI/UX Redesign", "Sponsorship Pitching", "Cross-Functional Leadership"]
      }
    },
    {
      id: "clockit-hair",
      title: "Clockit Hair — D2C Hair-Care Venture",
      client: "Clockit Hair (Startup)",
      period: "Jun 2026",
      role: "Founder & Product Lead",
      tagline: "Bootstrapped a high-margin botanical D2C brand with WhatsApp conversational commerce.",
      categories: ["Growth & Founder's Office", "Product Management"],
      badge: "💰 76% Gross Margin",
      metrics: ["31.7K+ Impressions", "76% Gross Margin", "150+ WhatsApp Inquiries", "50+ Paying Customers"],
      summary: "Identified an unserved niche in rosemary-infused hair care, engineered the product supply chain, built a conversational WhatsApp sales funnel, and optimized digital performance marketing economics.",
      caseStudy: {
        problem: "Customers looking for natural hair growth solutions suffered from inflated retail prices and impersonal e-commerce checkouts lacking personalized usage consultations.",
        research: "Analyzed competitor formulations, reviews, and customer pain points across Amazon, Nykaa, and Instagram to craft a clean, potent, rosemary-water formulation.",
        solution: [
          "D2C Brand Launch: Developed brand identity, packaging, supply chain, and compliance in record time.",
          "Conversational WhatsApp Funnel: Built automated chatbot-assisted lead qualification and direct customer consultations.",
          "Unit Economics & Growth: Monitored CAC, CTR, CPC, and ROAS, delivering 31.7K+ social views, 6.5K interactions, and 76% gross margin."
        ],
        impact: [
          "Generated 150+ qualified inquiries and converted 50+ paying customers within the first 90 days.",
          "Achieved positive unit economics from month 1 with 76% gross margin."
        ],
        stack: ["D2C Strategy", "WhatsApp API Funnel", "Unit Economics", "Performance Marketing", "Brand Positioning"]
      }
    },
    {
      id: "worklens-ai",
      title: "WorkLens: Enterprise AI Knowledge Assistant",
      client: "Personal Product Case Project",
      period: "2026",
      role: "AI Product Manager & Builder",
      tagline: "Unified multi-source RAG knowledge system with citation provenance and enterprise RBAC.",
      categories: ["Product Management", "AI & Analytics"],
      badge: "🤖 Enterprise RAG",
      metrics: ["3+ Enterprise Connectors", "6 AI Eval Metrics", "Zero-Hallucination Citations", "RBAC Access Controls"],
      summary: "Designed and built an AI-powered enterprise assistant that unifies Google Drive, Slack, and Notion into a single hallucination-guarded knowledge hub for HR, Sales, and Support teams.",
      caseStudy: {
        problem: "Enterprise teams waste 20%+ of their workweek hunting for SOPs, sales collateral, and policy documents scattered across disconnected SaaS tools.",
        research: "Conducted interviews with HR and customer support reps to map information-retrieval workflows and security compliance bottlenecks.",
        solution: [
          "Unified Knowledge Indexing: Seamless connectors across Google Drive, Slack channels, and Notion workspaces.",
          "Cited & Fresh Answers: Incorporated source citations and freshness timestamps to eliminate outdated responses.",
          "Evaluation Framework: Implemented 6 quantitative AI evaluation metrics (Faithfulness, Answer Relevance, Context Precision, Latency, Recall, Toxicity)."
        ],
        impact: [
          "Demonstrated 70% reduction in query resolution time for internal support teams.",
          "Architected comprehensive PRD and functional technical specs."
        ],
        stack: ["Product Discovery", "PRD Specification", "RAG Architecture", "Python", "Vector Embeddings", "AI Metrics Evaluation"]
      }
    },
    {
      id: "snukio-market-research",
      title: "Snukio — $130B Sports Retail Market Sizing & GTM",
      client: "Snukio | Trove Ventures",
      period: "Jun 2026 - Jul 2026",
      role: "Market Research Intern",
      tagline: "Architected a 120+ point Voice-of-Customer model and quantified market entry opportunities.",
      categories: ["Growth & Founder's Office", "Case Strategy"],
      badge: "📊 Market Research",
      metrics: ["120+ VoC Data Points", "$130B Market Sized", "9 Sports Categories", "4 Competitor Teardowns"],
      summary: "Conducted primary and secondary research to size India's athletic and sports retail opportunity, mapping consumer demand across 9 sports categories to define Snukio's go-to-market playbook.",
      caseStudy: {
        problem: "Snukio required quantitative validation on which sporting verticals to prioritize for its multi-city retail rollout in India.",
        research: "Built a 120+ point Voice of Customer (VoC) framework surveying 3 distinct stakeholder groups: grassroots athletes, sports coaches, and regional retail distributors.",
        solution: [
          "Market Sizing: Executed top-down and bottom-up market sizing for India's $130B sports retail ecosystem.",
          "Competitive Benchmarking: Teardown of 4 dominant incumbent players across pricing, logistics, and assortment gaps.",
          "GTM Prioritization: Recommended high-margin sports equipment categories for phase-1 pilot."
        ],
        impact: [
          "Identified 4 underserved market opportunities that formed Snukio's foundational launch strategy."
        ],
        stack: ["Market Sizing", "Voice of Customer (VoC)", "Guesstimates", "Competitive Teardowns", "GTM Strategy"]
      }
    },
    {
      id: "estate-plus-growth",
      title: "Estate Plus — Real Estate Funnel & Acquisition Analytics",
      client: "Estate Plus",
      period: "May 2026 - Jun 2026",
      role: "Business Development & Growth Intern",
      tagline: "Streamlined multi-city lead acquisition funnel and boosted organic discoverability.",
      categories: ["Growth & Founder's Office", "AI & Analytics"],
      badge: "📈 Funnel Growth",
      metrics: ["450+ Prospects Engaged", "300+ Leads Analyzed", "8 Tier-1/2 Cities", "50+ Quality Backlinks"],
      summary: "Drove regional customer acquisition across 8 major cities, mapped customer drop-off bottlenecks across 300+ pipeline leads, and boosted SEO acquisition with 50+ quality backlinks.",
      caseStudy: {
        problem: "Estate Plus experienced significant lead drop-offs between initial inquiry and qualified demo booking across high-ticket real estate listings.",
        research: "Analyzed end-to-end sales funnel conversion logs across 300+ leads to uncover friction points in outreach timing and follow-up messaging.",
        solution: [
          "Lead Qualification Matrix: Standardized prospect scoring across 450+ real estate buyers in 8 cities.",
          "Funnel Optimization: Re-engineered follow-up sequences and objection-handling scripts.",
          "SEO & Inbound Lead Gen: Executed targeted content optimization and secured 50+ authoritative backlinks."
        ],
        impact: [
          "Substantially improved lead-to-opportunity qualification rate.",
          "Expanded qualified pipeline across 8 key metropolitan regions."
        ],
        stack: ["Sales Funnel Analytics", "Lead Qualification", "SEO Strategy", "Customer Acquisition", "Power BI"]
      }
    }
  ],

  experience: [
    {
      role: "Founder’s Office",
      company: "STEM Vibe | The Integral Cup",
      period: "Jun 2025 – Dec 2026",
      type: "Remote / National",
      location: "India",
      highlights: [
        "Owned end-to-end business operations for the inaugural Integral Cup, driving 800% MoM growth across 27+ premier Indian institutions.",
        "Pitched and raised ₹1 Cr+ in sponsorships from tier-1 quantitative trading firms: Optiver, Jane Street, and QRT.",
        "Led a 10+ member core team and onboarded 27+ campus ambassadors nationwide to execute outreach and brand awareness campaigns.",
        "Reshaped website UI/UX and streamlined the 3-track participant registration funnel to deliver a friction-free user experience."
      ],
      tags: ["Founder's Office", "Operations", "Sponsorships", "UI/UX", "0-to-1"]
    },
    {
      role: "Business Development Intern",
      company: "Estate Plus",
      period: "May 2026 – Jun 2026",
      type: "Remote Internship",
      location: "India",
      highlights: [
        "Expanded regional customer acquisition by engaging 450+ high-intent real-estate prospects across 8 cities.",
        "Conducted deep funnel conversion analysis across 300+ leads to identify friction stages and optimize customer progression.",
        "Accelerated organic discoverability through high-impact SEO content optimization and securing 50+ quality backlinks."
      ],
      tags: ["Growth", "Funnel Analytics", "Customer Acquisition", "SEO"]
    },
    {
      role: "Market Research Intern",
      company: "Snukio | Trove Ventures",
      period: "Jun 2026 – Jul 2026",
      type: "Remote Internship",
      location: "India",
      highlights: [
        "Built a comprehensive 120+ point Voice-of-Customer (VoC) research framework across 3 stakeholder groups.",
        "Mapped consumer demand and purchasing behaviors across 9 distinct sports categories for Snukio’s nationwide GTM.",
        "Sized India’s $130B sports retail ecosystem and benchmarked 4 key competitors to uncover 4 high-value market entry opportunities."
      ],
      tags: ["Market Research", "Market Sizing", "VoC", "GTM Strategy"]
    }
  ],

  positionsOfResponsibility: [
    {
      title: "Branch Representative",
      organization: "Mechanical Engineering Department, IIT Guwahati",
      period: "Jul 2025 – Jan 2026",
      desc: "Represented a batch of 75+ students, acting as the primary liaison with faculty and administration. Spearheaded alumni interaction sessions and career-focused product & consulting workshops.",
      stats: "75+ Batch Peers • 6+ Career Workshops"
    },
    {
      title: "Execution Head — Auditorium & Competitions",
      organization: "Alcheringa (Annual Cultural Festival, IIT Guwahati)",
      period: "May 2025 – Oct 2025",
      desc: "Led venue operations as Auditorium Head, orchestrating 10+ competitions with 200+ national participants. Managed Day 0 inaugural ceremony logistics, VIP hospitality, and inter-team coordination.",
      stats: "200+ Participants • 10+ Competitions • Day 0 Head"
    },
    {
      title: "Peer Mentor",
      organization: "IIT Guwahati Mentorship Program",
      period: "2024 – 2025",
      desc: "Mentored a group of 10 incoming freshers and sophomores, providing structured academic roadmaps, career guidance, and mental well-being support.",
      stats: "10 Mentees Guided"
    }
  ],

  skills: {
    product: [
      { name: "Product Discovery & User Research", level: "Expert" },
      { name: "Design Thinking & PRD Writing", level: "Expert" },
      { name: "Product Analytics & A/B Testing", level: "Advanced" },
      { name: "Roadmapping & Prioritization (RICE/MoSCoW)", level: "Advanced" },
      { name: "Wireframing & UI/UX Strategy", level: "Advanced" },
      { name: "North Star & Product Metrics", level: "Advanced" }
    ],
    business: [
      { name: "Sales & Conversion Funnel Analysis", level: "Expert" },
      { name: "Market Sizing & Guesstimates", level: "Expert" },
      { name: "0-to-1 GTM & Unit Economics (CAC, LTV, ROAS)", level: "Expert" },
      { name: "Case Interviews & Business Strategy", level: "Advanced" },
      { name: "Stakeholder Alignment & Pitching", level: "Expert" }
    ],
    technical: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: "Advanced" },
      { name: "MySQL & Database Querying", level: "Advanced" },
      { name: "Power BI & Data Visualization", level: "Advanced" },
      { name: "Figma & Rapid Prototyping", level: "Advanced" },
      { name: "SolidWorks & AutoCAD", level: "Intermediate" },
      { name: "MATLAB", level: "Intermediate" },
      { name: "MS Excel / Office & Canva", level: "Expert" }
    ],
    courses: [
      "Product Matters 5.0 (E-Cell)",
      "Summer Analytics (Data Science & Machine Learning)",
      "(DA 6021) Deep Learning for Computer Vision",
      "Macro & Micro Business Strategy Cases"
    ]
  },

  achievements: [
    {
      title: "Bronze Medal — Inter-IIT Tech Meet 13.0",
      issuer: "IIT Bombay",
      detail: "Recognized among top IITs for Dream11 AI-Powered Product Growth Strategy (220+ user research, SHAP explainable ML pipeline).",
      icon: "Award"
    },
    {
      title: "1st Rank out of 200+ Teams — Policymaker Case Competition",
      issuer: "National Case Competition 2024",
      detail: "Secured 1st place in intensive strategy & policy competition solving socioeconomic development frameworks for Northeast India.",
      icon: "Trophy"
    },
    {
      title: "Top 15% Rank — Product Matters 5.0",
      issuer: "E-Cell, IIT Guwahati",
      detail: "Evaluated on rigorous product teardown, discovery frameworks, and real-world execution cases.",
      icon: "CheckCircle"
    },
    {
      title: "Product Pro 3.0 Recognition",
      issuer: "IIT Guwahati",
      detail: "Recognized for high-impact product architecture and user-centric problem-solving.",
      icon: "Star"
    },
    {
      title: "Represented IIT Guwahati — Inter-IIT Hockey",
      issuer: "Inter-IIT Sports Meet",
      detail: "Selected to represent IIT Guwahati hockey varsity team against premier IITs across India.",
      icon: "Activity"
    },
    {
      title: "Gold Medalist — Spardha Inter-Hostel Cricket",
      issuer: "IIT Guwahati (2025)",
      detail: "Led hostel cricket team to Gold Medal championship among 13 competitive hostels.",
      icon: "Shield"
    },
    {
      title: "Social Work & Fundraiser — Raised ₹10 Lakhs",
      issuer: "Rotary Rain Run",
      detail: "Organized and drove social fundraising campaigns raising ₹10 Lakhs for breast cancer awareness and underprivileged patient care.",
      icon: "Heart"
    }
  ]
};
