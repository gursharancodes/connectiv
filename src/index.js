export const siteIdentity = {
    name: "Connectiv",
    description: "Turning Stories into Impact.",
    shortAbout: "We craft powerful digital experiences that drive engagement and elevate your brand presence across platforms.",
    url: "https://connectiv.pages.dev",
    icon: "./logos/connectiv-icon.ico",
    logo: "./logos/connectiv-icon.png",
    bg: "./bg.jpg",
}

// Navigation Links
export const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
];

// Social Media Links
export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: "./social/linkedin.svg", // public path
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/",
        icon: "./social/instagram.svg",
    },
];

// Carousel
export const clients = [
    {
        name: "Yash Partap Singh",
        followers: "214k+ followers",
        img: "./clientCarousel/yash.avif",
    },
    { name: "Aman Jindal", followers: "416k+ followers", img: "./clientCarousel/aman.avif" },
    { name: "Avinash Kumar", followers: "1.2M+ followers", img: "./clientCarousel/avi.avif" },
    { name: "Garnier India", followers: "193k+ followers", img: "./clientCarousel/garnier.avif" },
];

// Homepage
export const hero = {
    heading: "Turning Influence into Real Connection.",
    subheading: "In today’s noisy digital world, we help brands cut through by partnering with authentic voices.Together, we craft campaigns that truly connect.",
    image: "./hero.webp",
    cta: "Get Started",
    ctaLink: "/services",
}

// Services
export const ourServices = {
    heading: "Our Services",
    subheading: "We offer a wide range of services to help you connect with your audience and boost your brand's reach.",
    services: [
        {
            id: "strategy-development",
            title: "Strategy Development",
            subtitle: "Crafting the Blueprint for Brand Growth",
            description:
                "We build tailored marketing strategies that align with your brand goals, target audience, and industry trends. From identifying growth opportunities to outlining actionable steps, our strategy development process ensures your campaigns are grounded in insight and structured for success.",
            whatYouGet: [
                "In-depth market and audience analysis",
                "Platform-specific growth strategies",
                "Campaign planning frameworks",
                "Brand positioning and messaging guidelines",
            ],
            benefits: [
                "Maximized campaign ROI",
                "Clear brand direction and voice",
                "Sustainable, long-term growth",
                "Competitive differentiation in your space",
            ],
            whyItMatters:
                "Without a solid strategy, marketing becomes guesswork. Our strategic approach gives your brand a clear roadmap, ensuring every decision is intentional and impactful.",
        },
        {
            id: "content-creation",
            title: "Content Creation",
            subtitle: "Visuals and Stories That Resonate",
            description:
                "We create high-impact content designed to connect emotionally and drive action. Whether it’s short-form video, branded photography, or editorial storytelling, our creative team works to capture your brand essence and keep your audience engaged.",
            whatYouGet: [
                "Branded photo and video assets",
                "Copywriting and content scripting",
                "Creative direction and storyboarding",
                "Content formatted for all major platforms",
            ],
            benefits: [
                "Higher audience engagement",
                "Stronger brand recall and identity",
                "Platform-optimized performance",
                "Better storytelling with consistent visuals",
            ],
            whyItMatters:
                "Your content is often your first impression. We ensure it’s memorable, meaningful, and tailored to drive your business objectives.",
        },
        {
            id: "influencer-matching",
            title: "Influencer Matching",
            subtitle: "Authentic Voices, Real Impact",
            description:
                "We connect your brand with vetted influencers who genuinely align with your values and audience. From micro to macro influencers, we manage the entire process to ensure partnerships that feel authentic—and deliver results.",
            whatYouGet: [
                "Curated influencer shortlists",
                "Vetting and audience analysis",
                "Contract negotiation and compliance",
                "Relationship management",
            ],
            benefits: [
                "Increased trust and credibility",
                "Wider reach within niche communities",
                "Higher conversion through social proof",
                "Scalable influencer programs",
            ],
            whyItMatters:
                "Consumers trust people over brands. We help you partner with the right creators to generate real engagement and advocacy.",
        },
        {
            id: "campaign-management",
            title: "Campaign Management",
            subtitle: "From Idea to Execution—Flawlessly Managed",
            description:
                "We oversee every phase of your campaign to ensure timely delivery, budget efficiency, and performance tracking. Our team handles all logistics, creative coordination, influencer activations, and optimizations—so you don’t have to.",
            whatYouGet: [
                "End-to-end campaign planning",
                "Creative asset coordination",
                "Influencer and content deployment",
                "Real-time adjustments and reporting",
            ],
            benefits: [
                "Streamlined workflows",
                "Minimal brand-side effort",
                "Fewer delays or missteps",
                "Optimized performance throughout",
            ],
            whyItMatters:
                "A strong idea is only as good as its execution. We make sure your campaigns run smoothly and deliver measurable impact.",
        },
        {
            id: "analytics-reporting",
            title: "Analytics & Reporting",
            subtitle: "Data That Drives Decisions",
            description:
                "We provide transparent, data-driven reports that go beyond surface-level metrics. Our reporting framework tracks ROI, campaign engagement, content performance, and delivers actionable insights to inform future strategies.",
            whatYouGet: [
                "Post-campaign performance reports",
                "Real-time dashboards (optional)",
                "ROI and cost-per-metric analysis",
                "Growth and optimization insights",
            ],
            benefits: [
                "Full visibility into campaign success",
                "Data-informed decision making",
                "Easier internal reporting and justification",
                "Continuous improvement over time",
            ],
            whyItMatters:
                "Without analytics, you're flying blind. We give you the clarity to measure what works—and refine what doesn’t.",
        },
        {
            id: "brand-partnerships",
            title: "Brand Partnerships",
            subtitle: "Strategic Alliances That Build Authority",
            description:
                "We help identify and cultivate brand partnerships that drive mutual value. From co-branded campaigns to joint ventures, we focus on relationships that strengthen your credibility, expand your audience, and enhance your brand equity.",
            whatYouGet: [
                "Partnership strategy and outreach",
                "Contract negotiation and management",
                "Co-branded campaign execution",
                "Performance tracking and reporting",
            ],
            benefits: [
                "Access to new audiences",
                "Increased brand trust and visibility",
                "Shared marketing efforts and resources",
                "Stronger industry positioning",
            ],
            whyItMatters:
                "The right partnership can unlock new growth. We help you find and leverage collaborations that go beyond the surface to deliver real results.",
        },
    ]
};

// Statistics / numbers
export const stats = {
    heading: "Trusted by Brands",
    subheading: "Backed by real results — not just promises. Here’s what we’ve delivered for our clients.",
    data: [
        { value: 500, label: "Campaigns", symbol: "+" },
        { value: 250, label: "Influencers", symbol: "+" },
        { value: 95, label: "Retention", symbol: "%" },
        { value: 1200000, label: "Impressions", symbol: "+" },
    ],
}

// CTA (Call to Action)
export const cta = {
    heading: "Ready to Elevate Your Brand?",
    subheading: "Let’s craft authentic influencer campaigns that drive real engagement and meaningful connections.Your audience is waiting — let’s make the first move together.",
    cta: "Get Started",
    ctaLink: "/contact",
}

// Testimonials by clients
export const testimonials = {
    heading: "What Our Clients Say",
    subheading: "Trusted by brands and creators worldwide — here’s how we’ve made an impact.",
    testimonials: [
        {
            quote:
                "Connectiv transformed our digital presence, significantly boosting our engagement rates and sales.",
            name: "StockBox",
            role: "Marketing Director, Glow Cosmetics",
            image: "./testimonials/stock-box.avif",
        },
        {
            quote:
                "The team's dedication and innovative strategies have made every campaign a major success for us.",
            name: "Flair and Glair",
            role: "Brand Manager, FitFuel",
            image: "./testimonials/flairnglair.avif",
        },
        {
            quote:
                "Working with Connectiv has been a game-changer. Their influencer matches were spot-on, enhancing our brand's authenticity.",
            name: "Mentza",
            role: "Founder, EcoWear",
            image: "./testimonials/Mentza.avif",
        },
    ]
}


// About Page
export const about = {
    ourStory: {
        heading: "Our Story",
        subheading: "From vision to impact, our journey of transforming connections.",
        mission: "To help brands create authentic, impactful connections through innovative influencer marketing strategies.",
        vision: "To be the trusted global partner for brands and influencers, shaping the future of digital storytelling.",
        description:
            "At Connectiv, we began with a bold idea: to transform the way brands connect with people through the power of influence. What started as a vision quickly became a movement—bringing together brands and voices that truly resonate with audiences. Today, we stand as a forward-thinking influencer marketing agency, driven by passion, guided by data, and dedicated to elevating every brand we work with."
    },

    meetOurTeam: {
        heading: "Meet Our Team",
        subheading: "The minds and talents shaping your brand’s success.",
        description:
            "Behind every successful campaign is a team of thinkers, creators, and strategists dedicated to your brand’s success. At Connectiv, we’re not just marketers—we’re storytellers, analysts, designers, and problem-solvers who thrive on bringing big ideas to life.",
        members: [
            {
                name: "John Doe",
                role: "Founder & CEO",
                tagline: "Building authentic connections between brands and people.",
                image: "./team/emp1.avif"
            },
            {
                name: "Jane Smith",
                role: "Head of Strategy",
                tagline: "Turning insights into impactful campaigns.",
                image: "./team/emp2.avif"
            },
            {
                name: "Alex Brown",
                role: "Creative Director",
                tagline: "Designing stories that inspire and connect.",
                image: "./team/emp3.avif"
            },
            {
                name: "Emily Green",
                role: "Head of Content",
                tagline: "Crafting compelling visuals and stories.",
                image: "./team/emp4.avif"
            },
            {
                name: "Michael Johnson",
                role: "Head of Analytics",
                tagline: "Analyzing data to optimize campaigns.",
                image: "./team/emp5.avif"
            },
            {
                name: "Sarah Wilson",
                role: "Head of Marketing",
                tagline: "Connecting brands with influencers.",
                image: "./team/emp6.avif"
            }
            // Add more team members as needed
        ]
    }
};

// Contact Page
export const contact = {
    heading: "Let's Create Impact Together",
    subheading: "Reach out to explore how Connectiv can amplify your brand. Experience the power of tailored influencer marketing.",
    contactInfo: [
        {
            title: "Call Us",
            url: "tel:+911234567890",
            iconPath: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
        },
        {
            title: "Email or Gmail",
            url: "mailto:3oJ6t@example.com",
            iconPath: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
        },
        {
            title: "WhatsApp",
            url: "https://wa.me/911234567890?text=Hi Connectiv's team, I am intrested to chat.",
            iconPath: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        },
        {
            title: "Jalandhar, Punjab - 144001",
            url: "https://maps.app.goo.gl/grgPR2ovzFmR5QUw7",
            iconPath: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",

        }
    ]
}



