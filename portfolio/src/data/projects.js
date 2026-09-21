export const featuredProjects = [
  {
    id: "karolinska",
    eyebrow: "Thesis project · Karolinska",
    title: "Production Planning & Dimensioning Tool",
    summary:
      "A fullstack application prototype i developed alone to support production planning and resource dimensioning in a healthcare context.",
    contribution:
      "I worked from real requirements and built functionality across the interface, application logic and database.",
    highlights: [
      "Translated business needs into user flows and working features",
      "Built database-driven functionality for planning and resource needs",
      "Worked across frontend, application logic and data",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "",
    images: [
      {
        src: "/images/karolinska-overview.webp",
        alt: "Overview of the Karolinska production planning tool",
      },
      {
        src: "/images/karolinska-form.webp",
        alt: "Production input form in the Karolinska planning tool",
      },
    ],
  },
  {
    id: "hitract",
    eyebrow: "Internship · Hitract",
    title: "Admin Platform & KPI Views",
    summary:
      "Administrative interfaces developed during a six-month internship at Hitract.",
    contribution:
      "I built and improved admin functionality, worked with KPI-driven views and translated design and product requirements into maintainable frontend code.",
    highlights: [
      "Developed interfaces in React and TypeScript",
      "Worked within an existing team codebase",
      "Built admin and data-driven functionality with Material UI",
    ],
    technologies: ["React", "TypeScript", "Material UI"],
    githubUrl: "",
    images: [
      {
        src: "/images/hitract-dashboard.webp",
        alt: "Hitract admin dashboard with KPI views",
      },
      {
        src: "/images/hitract-cribs.webp",
        alt: "Hitract admin view for rental listings",
      },
    ],
  },
  {
    id: "home-screen",
    eyebrow: "Independent project · Raspberry Pi",
    title: "Real-time Home Dashboard",
    summary:
      "An always-on dashboard built for a Raspberry Pi and 7-inch display, combining live information in one interface.",
    contribution:
      "I designed the frontend for a fixed display, built an Express backend and integrated external APIs with polling and caching.",
    highlights: [
      "Live public transport, weather and pollen integrations",
      "REST endpoints with different refresh intervals",
      "Deployed as an always-on service on Raspberry Pi",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "Material UI",
      "REST APIs",
    ],
    githubUrl: "https://github.com/Asplund1/Home-screen",
    visualLabel: "Live dashboard",
    visualItems: ["Weather", "Pollen", "Transport"],
  },
];

export const otherProjects = [
  {
    id: "airbean",
    eyebrow: "Team project",
    title: "Airbean API",
    summary:
      "A collaborative school project where I was responsible for backend development and helped connect frontend needs with API and database requirements.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST API"],
    githubUrl: "https://github.com/orgs/GruppII-ChasAcademy/repositories",
  },
];
