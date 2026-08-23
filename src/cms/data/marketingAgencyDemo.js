export const marketingAgencyDemo = {
  demoSeed: true,
  canonicalPath: "/marketing-agency",
  hero: {
    partnerTitle: "Meta Partner - 2018",
    partnerStrapline: "Think Depth.Bold Impact",
    partnerLogoPath: "/assets/img/home4/icon/meta-logo.svg",
    eyebrow: "#1 Rated Marketing Agency",
    titleLead: "Let’s Grow",
    titleTail: "Your Business.",
    descriptionLead: "We provides services related to online",
    descriptionEmphasis: "Marketing, Development, Design,",
    descriptionTail: "and other digital solutions for clients.",
    primaryCTA: { label: "Get A Proposal", url: "/contact" },
    successRate: 3,
    successRateLabel: "Success Rate",
    awardCount: 13,
    awardLabel: "Award Wining.",
    imagePath: "/assets/img/home4/banner-img.jpg",
  },
  productToMarketGap: {
    partnerStatLeft: "Our Globally 20K+ Clients.",
    partnerStatRight: "Our Happy Cleints 90%+",
    partnerLogos: [1, 2, 3, 4, 5, 6].map((index) => ({
      lightPath: `/assets/img/home1/partner-0${index}.png`,
      darkPath: `/assets/img/home1/partner-light-0${index}.png`,
    })),
    titleLead: "Marketing",
    titleTail: "Solutions Easily.",
    description: "Providing expert legal guidance tailored to your unique needs.",
    items: [
      {
        titleLead: "Marketing",
        titleTail: "Automation",
        description:
          "Marketing automation refers to the use of software & technology to streamline, automate.",
      },
      {
        titleLead: "Measurable",
        titleTail: "Results & ROI",
        description:
          "Tracking performance metrics, analytics, and delivering a strong return on investment (ROI).",
      },
      {
        titleLead: "Cost-Effective",
        titleTail: "Solutions",
        description:
          "They are paying for will deliver results without exceeding their budget and plans efficiently.",
      },
      {
        titleLead: "Analytics and",
        titleTail: "Reporting",
        description:
          "Essential components for any marketing agency campaigns and provide valuable insights.",
      },
    ],
    ctaLead: "To Make Sure to Best Service Provide Our Clients.",
    cta: { label: "Let’s Talk", url: "/contact" },
    videoPath: "/assets/video/home4-video.mp4",
  },
  valueLayers: {
    title: "Marketing Solutions",
    description: "Original Mortar development-demo value presentation.",
    items: [],
  },
  proofProcessScale: {
    title: "Original Mortar Process",
    description: "Development-demo process values used only for visual parity.",
    stages: [
      {
        step: "01",
        titleLead: "Client",
        titleTail: "Onboarding",
        description:
          "Included meetings and questionnaires to gather key information.",
      },
      {
        step: "02",
        titleLead: "Campaign",
        titleTail: "Setup",
        description:
          "Like Google Ads, Facebook Ads, email marketing, or other tools.",
      },
      {
        step: "03",
        titleLead: "Reporting &",
        titleTail: "Insights",
        description:
          "A comprehensive report is delivered, outlining the results, ROI.",
      },
    ],
  },
  capabilities: {
    titleLead: "To Provide",
    titleTail: "Smart Solution.",
    resultValue: "100%",
    resultLabel: "Measurable Results & ROI.",
    items: [
      ["Digital", "Marketing.", ["Social Media Marketing", "Email Marketing", "Content Marketing"]],
      ["Branding and", "Identity.", ["Logo Design", "Rebranding Services", "Visual Branding"]],
      ["Content Creation", "& Strategy.", ["Blog Writing", "Copywriting & Copyediting", "Video Production"]],
      ["Paid", "Advertising.", ["Social Media Marketing", "Email Marketing", "Content Marketing"]],
      ["Marketing", "Automation.", ["Email Drip Campaigns", "Lead Scoring & Nurturing", "Workflow Automation"]],
      ["Affiliate", "Marketing.", ["Partner Outreach", "Affiliate Program Strategy", "Affiliate Campaign"]],
    ].map(([titleLead, titleTail, bullets]) => ({
      titleLead,
      titleTail,
      bullets: bullets.map((label) => ({ label })),
      cta: { label: "View Details", url: "/service/details" },
    })),
  },
  measurement: {
    titleLead: "Real Data-Driven",
    titleTail: "Website Marketing.",
    description: "Companies need innovative ideas to engage their target audience.",
    metrics: [
      { value: 235, labelLead: "Total Campaign", labelTail: "Handaled." },
      { value: 23, labelLead: "Country-wise", labelTail: "Clients." },
      { value: 8, labelLead: "Award", labelTail: "Achievement." },
      { value: 35, labelLead: "Clients", labelTail: "Retention Rate." },
    ],
    industryTitleLead: "To Make Significant",
    industryTitleTail: "Impact.",
    industryDescription:
      "Providing expert legal guidance tailored to your unique needs.",
    industries: [
      ["Health Care", 98],
      ["Pet Care & Shop", 95],
      ["Entertainment", 99],
      ["Ecommerce", 93],
      ["Finance & Banking", 94],
      ["Hospitality & Travel", 99],
    ].map(([title, successRate]) => ({
      title,
      successRate,
      description:
        "Establish a consistent and trustworthy brand identity for Hospitals, Clinics, & Healthcare companies.",
    })),
  },
  featuredProof: {
    testimonialTitle: "They Loves Us!",
    testimonialDescription:
      "This feedback acknowledges strengths while providing constructive input for improvement.",
    testimonials: [
      {
        headline: "Outstanding Support!",
        quote:
          "We’ve been extremely pleased with the creativity and strategic approach the agency brought to our campaigns.",
        author: "Robert Kcarery",
        role: "Product Manger",
        imagePath: "/assets/img/home4/testimonial-img1.png",
      },
      {
        headline: "Superb Assistance!",
        quote:
          "Outstanding Apps! They are very helpful & mindblowing to get services. Delivering thorough care to ensure client happiness.",
        author: "Jorche Milton",
        role: "QA Engineer",
        imagePath: "/assets/img/home4/testimonial-img2.png",
      },
      {
        headline: "Excellent Service!",
        quote:
          "We were thoroughly impressed with the professionalism and dedication of Mortar. From our consultation to the final delivery.",
        author: "Hanry Macle",
        role: "Support Engineer",
        imagePath: "/assets/img/home4/testimonial-img3.png",
      },
    ],
    caseTitleLead: "Result in",
    caseTitleTail: "Previous Case Study.",
    caseResultValue: "80%",
    caseResultLabel:
      "Our Clients Double Revenue Generate in the First 05 Months.",
    cases: [
      {
        title: "Revamping Brand Identity Success Story.",
        imagePath: "/assets/img/home4/case-study-img1.jpg",
        logoPath: "/assets/img/home4/case-study-logo1.png",
        metricOneLabel: "Organic Traffic",
        metricOneValue: 27,
        metricTwoLabel: "Online Revenue",
        metricTwoValue: 10,
      },
      {
        title: "Conversion Rate on the Digital Platform.",
        imagePath: "/assets/img/home4/case-study-img2.jpg",
        logoPath: "/assets/img/home4/case-study-logo2.png",
        metricOneLabel: "Organic Traffic",
        metricOneValue: 800,
        metricTwoLabel: "Online Revenue",
        metricTwoValue: 24,
      },
    ],
    teamTitleLead: "We’ve Most",
    teamTitleTail: "Talented Team.",
    teamDescription:
      "To provide most expensive work for our clients in the world-wide.",
    teamMembers: [
      ["Mr. Jorche Milton", "(CTO, Co-founder)", "team-img1.png", "emoji1.gif"],
      ["Robert Jhonson", "(Marketing Head)", "team-img2.png", "emoji2.gif"],
      ["Daniel Ryan", "(Sr. Marketing Manager)", "team-img3.png", "emoji1.gif"],
      ["Mrs. Emily Sophia", "(Jr. Marketing Manager)", "team-img4.png", "emoji3.gif"],
      ["Alexander Benjamin", "(WordPress Developer)", "team-img5.png", "emoji1.gif"],
      ["Lucy Zoe", "(Junior Engineer)", "team-img6.png", "emoji2.gif"],
    ].map(([name, role, image, emoji]) => ({
      name,
      role,
      imagePath: `/assets/img/home4/${image}`,
      emojiPath: `/assets/img/home4/${emoji}`,
      linkedinURL: "https://www.linkedin.com/",
    })),
  },
  infrastructure: {
    title: "Original Mortar Infrastructure Demo",
    description: "Reserved for later VMO OS content mapping.",
    items: [],
  },
  insights: {
    title: "Original Mortar Insights Demo",
    description: "Reserved for later VMO insight mapping.",
    featuredPosts: [],
  },
  growthMissionCTA: {
    titleLead: "Let’s Start",
    titleTail: "A Project?",
    descriptionLead: "Get",
    descriptionEmphasis: "30 Minutes",
    descriptionTail:
      "free call with our marketing expert about your topics or Projects.",
    cta: { label: "Free Stretagy Session", url: "/contact" },
    mediaItems: [
      { type: "video", path: "assets/video/home4-contact-video1.mp4" },
      { type: "image", path: "/assets/img/home4/home4-contact-img2.png" },
      { type: "video", path: "assets/video/home4-contact-video2.mp4" },
      { type: "video", path: "assets/video/home4-contact-video3.mp4" },
      { type: "image", path: "/assets/img/home4/home4-contact-img5.png" },
      { type: "image", path: "/assets/img/home4/home4-contact-img6.png" },
    ],
  },
};
