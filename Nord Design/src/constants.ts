import type { AnimationControlModel } from "./models/AnimationControlModel";
import type { ApproachCardModel } from "./models/ApproachCardModel";
import type { InsightCardModel } from "./models/InsightCardModel";
import type { ServiceModel } from "./models/ServiceModel";

export const approachCards: ApproachCardModel[] = [
  {
    title: "Clarity First",
    description:
      "We prioritise structure, readability, and user journeys that are easy to understand.",
    position: "top",
  },
  {
    title: "Thoughtful Design",
    description:
      "Every design decision is made with purpose, balancing usability, aesthetics, and business needs.",
    position: "middle",
  },
  {
    title: "Built to Perform",
    description:
      "We create websites that are modern, lightweight, and designed to work better over time.",
    position: "bottom",
  },
];

export const services: ServiceModel[] = [
  {
    label: "BUILD",
    title: "Websites",
    description:
      "Your website should be a powerful asset that drives sales, builds trust, and grows with your business. We create flexible, scalable, and easy-to-manage websites that put you in control. Let's build a site that works for you, now and in the future.",
    buttonName: "Explore the service",
    links: [
      {
        name: "Web design",
        url: "#",
      },
      {
        name: "Website maintenance",
        url: "#",
      },
      {
        name: "CMS implementation",
        url: "#",
      },
    ],
  },
  {
    label: "DEFINE",
    title: "Branding & design",
    description:
      "We shape brand identities that feel clear, consistent, and recognisable—combining strategy, visual direction, and design systems into a stronger digital presence.",
    buttonName: "Explore the service",
    links: [
      {
        name: "Brand strategy",
        url: "#",
      },
      {
        name: "Visual identity",
        url: "#",
      },
      {
        name: "Brand guidelines",
        url: "#",
      },
    ],
  },
  {
    label: "PLAN",
    title: "Digital strategy",
    description:
      "Our digital strategy work creates a clearer direction for your website through structured planning, user journey thinking, and content decisions that support long-term goals.",
    buttonName: "Explore the service",
    links: [
      {
        name: "Content strategy",
        url: "#",
      },
      {
        name: "User journey mapping",
        url: "#",
      },
      {
        name: "Website planning",
        url: "#",
      },
    ],
  },
  {
    label: "DEVELOP",
    title: "Software development",
    description:
      "We shape brand identities that feel clear, consistent, and recognisable—combining strategy, visual direction, and design systems into a stronger digital presence.",
    buttonName: "Explore the service",
    links: [
      {
        name: "AI and Automation",
        url: "#",
      },
      {
        name: "Database integration",
        url: "#",
      },
      {
        name: "Technical support",
        url: "#",
      },
    ],
  },
];

export const insightCards: InsightCardModel[] = [
  {
    img: "/images/website speed.webp",
    label: "PERFORMANCE",
    title: "Why website speed matters for user experience",
    description:
      "Fast-loading websites are easier to use, more engaging, and better at keeping visitors from leaving too early.",
    slug: "why-website-speed-matters-for-user-experience",
    link: "/insights/why-website-speed-matters-for-user-experience",
  },
  {
    img: "/images/Clean Design.webp",
    label: "DESIGN",
    title: "The value of minimalist web design",
    description:
      "Simplicity in interface design can reduce friction, improve clarity, and help users focus on what matters most.",
    slug: "the-value-of-minimalist-web-design",
    link: "/insights/the-value-of-minimalist-web-design",
  },
  {
    img: "/images/Laptop.webp",
    label: "DIGITAL IMPACT",
    title: "5 easy ways to reduce the digital impact of your website",
    description:
      "Small changes in design and development can make a website lighter, faster, and more efficient. This guide explores practical ways to reduce digital weight without compromising quality.",
    slug: "5-easy-ways-to-reduce-the-digital-impact-of-your-website",
    link: "/insights/5-easy-ways-to-reduce-the-digital-impact-of-your-website",
  },
];

export const animationControls: AnimationControlModel[] = [
  { id: "rotation", label: "Continuous rotation", weight: 2.8 },
  { id: "sliding", label: "Sliding animations", weight: 3.2 },
  { id: "fade", label: "Fade in/out loops", weight: 1.9 },
  { id: "scale", label: "Scale transforms", weight: 2.4 },
];
