export type ProjectImage = {
  src: string;
  alt: string;
  /** CSS object-position for screenshots that should not crop from the centre. */
  position?: string;
};

export type PortfolioProject = {
  slug: string;
  n: string;
  category: string;
  name: string;
  summary: string;
  introduction: string;
  built: string[];
  tech: string[];
  liveUrl?: string;
  galleryLabel: string;
  accessNote?: string;
  images: ProjectImage[];
};

export const PROJECTS: PortfolioProject[] = [
  {
    slug: "real-estate-calculators",
    n: "01",
    category: "Real Estate Tools Website",
    name: "Every Real Estate Calculator",
    summary:
      "A free calculator platform for real estate professionals and buyers, with a searchable tools directory and the RealtorOS CRM.",
    introduction:
      "Every Real Estate Calculator brings together a public tools website and RealtorOS, a CRM for realtors. The aim was practical: make common property calculations fast to reach, easy to understand, and just as usable on a phone as on a desktop.",
    built: [
      "10 free calculators covering buying, selling, investing, tax and agent workflows",
      "A searchable tools directory with clear categories and result-focused summaries",
      "RealtorOS CRM area for contacts, deals, tasks, calendar and follow-ups",
      "Responsive pages with a consistent design system and SEO foundations",
    ],
    tech: ["HTML / CSS / JavaScript", "Supabase", "Responsive design", "SEO structure"],
    liveUrl: "https://everyrealestatecalculator.com",
    galleryLabel: "everyrealestatecalculator.com",
    images: [
      {
        src: "/work/realestate-home.svg",
        alt: "Every Real Estate Calculator — homepage",
        position: "center top",
      },
      {
        src: "/work/realestate-tools.svg",
        alt: "Every Real Estate Calculator — searchable tools directory",
        position: "center top",
      },
      {
        src: "/work/realestate-mortgage.svg",
        alt: "Every Real Estate Calculator — mortgage calculator",
        position: "center top",
      },
    ],
  },
  {
    slug: "tetramagnet",
    n: "02",
    category: "SaaS Platform — Email Outreach",
    name: "TetraMagnet",
    summary:
      "A multi-tenant email outreach platform with scheduled campaigns, workspace-scoped data and dual sending providers.",
    introduction:
      "TetraMagnet is a multi-tenant outreach platform built for reliability. Each workspace keeps its data scoped, campaigns can be scheduled ahead, and dual sending providers reduce the risk of one service interruption stopping outreach.",
    built: [
      "Lead pipeline and contact management",
      "Email sender with a follow-up queue",
      "Team and campaign management",
      "Multi-tenant workspaces with workspace-scoped data",
      "Dual sending providers and scheduled campaigns",
    ],
    tech: ["Multi-tenant architecture", "Scheduled campaigns", "Workspace-scoped data", "Production deployment"],
    galleryLabel: "TetraMagnet — product",
    accessNote: "Private project — there is no public link. The screenshots show the actual product.",
    images: [
      {
        src: "/work/tetramagnet-home.webp",
        alt: "TetraMagnet — product homepage",
        position: "center top",
      },
      {
        src: "/work/tetramagnet-features.webp",
        alt: "TetraMagnet — product modules",
        position: "center top",
      },
      {
        src: "/work/tetramagnet-dashboard.webp",
        alt: "TetraMagnet — dashboard",
        position: "center top",
      },
    ],
  },
  {
    slug: "retail-sales-shipments",
    n: "03",
    category: "Power BI Dashboard",
    name: "Retail Sales & Shipments",
    summary:
      "A multi-page Power BI dashboard for retail sales and logistics, built on one semantic model and a shared DAX library.",
    introduction:
      "Retail Sales & Shipments is a multi-page Power BI dashboard for retail sales and logistics. Instead of separate calculations on every page, the dashboard uses one semantic model, a shared DAX library and a consistent theme, so the numbers stay aligned across views.",
    built: [
      "One semantic model shared across the dashboard",
      "A shared, documented DAX measure library",
      "Sales performance and shipment views using the same definitions",
      "A consistent visual theme across every page",
    ],
    tech: ["Power BI", "DAX", "SQL", "Data modelling"],
    galleryLabel: "Retail Sales & Shipments — dashboard",
    accessNote: "No public dashboard link is listed. The screenshots show the completed dashboard.",
    images: [
      {
        src: "/work/retail-overview.webp",
        alt: "Retail Sales & Shipments — dashboard overview",
        position: "center top",
      },
      {
        src: "/work/retail-performance.webp",
        alt: "Retail Sales & Shipments — performance view",
        position: "center top",
      },
      {
        src: "/work/retail-shipment.webp",
        alt: "Retail Sales & Shipments — shipment view",
        position: "center top",
      },
    ],
  },
  {
    slug: "newrevert-academy",
    n: "04",
    category: "WordPress Theme",
    name: "NewRevert Academy",
    summary:
      "A content-managed WordPress theme built from a static design and handed off for non-technical staff to run.",
    introduction:
      "NewRevert Academy is a content-managed WordPress theme created from a static design. The build keeps the important content editable while giving non-technical staff a site they can run without returning to a developer for routine updates.",
    built: [
      "A custom WordPress theme based on the supplied static design",
      "Editable content areas where updates are needed most",
      "Structured feature and roadmap pages",
      "A handoff designed for non-technical staff",
    ],
    tech: ["WordPress", "Theme development", "HTML / CSS", "Responsive design"],
    galleryLabel: "NewRevert Academy — website",
    accessNote: "No public project link is currently listed. The screenshots show the completed site and theme pages.",
    images: [
      {
        src: "/work/newrevert-home.webp",
        alt: "NewRevert Academy — homepage",
        position: "center top",
      },
      {
        src: "/work/newrevert-features.webp",
        alt: "NewRevert Academy — features page",
        position: "center top",
      },
      {
        src: "/work/newrevert-roadmap.webp",
        alt: "NewRevert Academy — roadmap page",
        position: "center top",
      },
    ],
  },
];
