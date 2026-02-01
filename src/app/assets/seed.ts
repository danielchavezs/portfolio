import { ProjectsType } from "@/app/assets/types";

export const projects: ProjectsType = [
    {
        id: 10,
        name: "Droidforce",
        cover: "/projects/10/home_summary.png",
        gallery: [
            "/projects/10/home_summary.png",
            "/projects/10/templates_dashboard.png",
            "/projects/10/actions_table.png",
            "/projects/10/action_policies_control.png",
            "/projects/10/automations_control.png",
            "/projects/10/knowledgebases_gates.png"
        ],
        mobileGallery: [],
        shortDescription: "Enterprise Agentic support platform delivering RAG-driven answers, automated workflows, and policy-based resolution at scale.",
        fullDescription: "Key developer for DroidForce, an AI-driven support platform used by an enterprise client in Europe. I helped design and implement a three-stage system that begins with a domain-specific knowledge base and RAG-style assistant built over internal documentation, historical tickets and expert know-how; evolves into human-in-the-loop automations for tasks such as ticket summarization, classification and closure; and, once quality thresholds are met, promotes those workflows to fully autonomous policies.\n\nThe solution combines LLMs, retrieval pipelines and agentic orchestration to streamline support operations, achieving around 95% response accuracy, 66% faster resolution times and 24/7 coverage, while freeing the support team to focus on complex, high-value cases. I contributed across the stack, from API and vector search design to workflow rules and iterative refinements based on user feedback.",
        date: "July 2025 - Present",
        isFeatured: true,
    },{
        id: 9,
        name: "Undisclosed - under development",
        cover: "/projects/9/admin_panel.png",
        gallery: [
            "/projects/9/landing_provider.png",
            "/projects/9/store.png",
            "/projects/9/shoppig_cart.png",
            "/projects/9/suscription.png",
            "/projects/9/wallet.png",
            "/projects/9/admin_panel.png"
        ],
        mobileGallery: [],
        shortDescription: "Scalable marketplace platform with provider tooling, admin workflows, and role-gated operations built for long-term growth.",
        fullDescription: "This undisclosed project is an advanced, production‑minded platform for Colombia’s adult services market built on Next.js, React 19, TypeScript, and Supabase. It follows a clear 3‑layer architecture (Application → Feature → Sources) that separates UI, business logic, and data operations, with dedicated browser/server/public Supabase clients. Rendering is intentionally mixed (SSR/ISR/CSR) to balance SEO, performance, and personalization—public discovery routes use ISR, while authenticated areas rely on SSR and client islands.\n\nBeyond the architecture, the product scope is broad and non‑trivial: provider profiles, post publishing, media moderation workflows, favorites, admin dashboards, and a role system with admin/moderator gating layered on top of RLS‑protected Postgres tables. Complex relations are typed end‑to‑end, migrations are versioned, and business logic is centralized in the Features layer for validation, orchestration, and logging. The result is a scalable, maintainable codebase that prioritizes security, data integrity, and future growth.\n\nNote: UI is in alpha, since final designs have not been defined by the company yet.",
        date: "October 2025 - Present",
        isFeatured: true,
        isSecret: true
    },
    {
        id: 8,
        name: "Verify Influencers",
        cover: "/projects/8/cover.png",
        gallery: [
            "/projects/8/cover.png"
        ],
        mobileGallery: [
            "/projects/8/mobile/gallery-1.png"
        ],
        shortDescription: "AI credibility scoring platform for health influencers using Next.js, MongoDB, and the Perplexity API.",
        fullDescription: "Verify Influencers is a full-stack web app built with Next.js 15, Tailwind CSS, and MongoDB, designed to analyze and rank health influencers based on AI-powered credibility assessments. It integrates the Perplexity API to extract and structure claims, leveraging SSR for SEO and performance, while implementing CSR for interactivity, with React Suspense and Server Actions optimizing data handling. The backend, powered by Mongoose, enables advanced filtering and sorting. Tailwind CSS ensures a responsive UI, while streaming enhances performance for a seamless user experience. Combining AI, data processing, and modern web techniques, this app showcases strong full-stack development skills.",
        href: "https://verify-influencers-alpha.vercel.app/",
        date: "January to February - 2025",
        isFeatured: true,
    },
    // {
    //     id: 7,
    //     name: "Task Manager",
    //     cover: "/projects/7/cover.png",
    //     gallery: [
    //         "/projects/7/cover.png"
    //     ],
    //     mobileGallery: [
    //         "/projects/7/mobile/gallery-1.png"
    //     ],
    //     shortDescription: "Full-stack task manager with CRUD APIs, status tracking, and a clean responsive UI.",
    //     fullDescription: "Built a task management app with a full-stack approach. The backend API was developed from scratch using Node.js, Express, and MongoDB, supporting CRUD operations for tasks with features like title, description, creation date, and status tracking (completed or pending). The frontend, crafted with React, TypeScript, Vite, and Tailwind CSS, offers a clean and responsive UI for managing tasks effortlessly.",
    //     href: "https://task-manager-eta-opal.vercel.app/",
    //     date: "December - 2024"
    // },
    {
        id: 6,
        name: "Owen Partners",
        cover: "/projects/6/cover.png",
        gallery: [
            "/projects/6/cover.png",
            "/projects/6/gallery-1.png"
        ],
        mobileGallery: [
            "/projects/6/mobile/gallery-2.png",
            "/projects/6/mobile/gallery-3.png"
        ],
        shortDescription: "UI and responsive enhancements for an Australian financial advisory firm, plus Calendly integration.",
        fullDescription: "Collaborated with an Australian financial advisory firm to enhance their website's UI components and optimize its responsive design. Built on WordPress, the project also included integrating Calendly to streamline client meeting scheduling.",
        href: "https://owenpartners.com.au/",
        date: "Novemember - 2024"
    },
    {
        id: 5,
        name: "Promotional Sweepstake",
        cover: "/projects/5/cover.png",
        gallery: [
            "/projects/5/cover.png",
            "/projects/5/gallery-1.png"
        ],
        mobileGallery: [
            "/projects/5/mobile/gallery-2.png"
        ],
        shortDescription: "Promotional sweepstake web app with dynamic forms, conditional UI, and API-driven city data.",
        fullDescription: "Developed for a Colombian marketing agency, this app enables users to participate in a promotional sweepstake. It features real-time form validation, responsive design with Tailwind, and conditional rendering. The app also fetches region and city data from an API to populate dependent dropdowns seamlessly.",
        href: "https://sorteo-one.vercel.app/",
        date: "October - 2024"
    },
    // {
    //     id: 4,
    //     name: "GreenCall",
    //     cover: "/projects/4/cover.jpg",
    //     gallery: [
    //         "/projects/4/cover.jpg"
    //     ],
    //     mobileGallery: [
    //         "/projects/4/mobile/gallery-1.png"
    //     ],
    //     shortDescription: "Corporate website with informative sections, slider, and contact form for a growing company.",
    //     fullDescription: "Corporate website for cannabis growing company in Colombia, featuring an automatic slider, informative sections, and a contact form. Built with Next.js and Tailwind CSS for styles and responsive design.",
    //     href: "https://greencall.vercel.app/",
    //     date: "September - 2024"
    // },
    // {
    //     id: 3,
    //     name: "Mortgage Calculator",
    //     cover: "/projects/3/cover.png",
    //     gallery: [
    //         "/projects/3/cover.png"
    //     ],
    //     mobileGallery: [
    //         "/projects/3/mobile/gallery-1.png"
    //     ],
    //     shortDescription: "Next.js mortgage calculator with conditional results, error handling, and responsive layouts.",
    //     fullDescription: "A simple mortgage calculator app developed in Next.js with features like conditional rendering to display results, error handling for incomplete fields, and a responsive design for desktop, tablet, and mobile devices. Key technologies include Next.js and Tailwind CSS.",
    //     href: "https://mortage-calculator-swart.vercel.app/",
    //     date: "July - 2024"
    // },
    {
        id: 2,
        name: "Invoice Dashboard",
        cover: "/projects/2/cover.png",
        gallery: [
            "/projects/2/cover.png"
        ],
        mobileGallery: [
            "/projects/2/mobile/gallery-1.png"
        ],
        shortDescription: "Invoice dashboard from the official Vercel course with streaming and data fetching patterns.",
        fullDescription: "Created as part of the official Next.js course by Vercel, this invoice dashboard includes server components, streaming, API data fetching, static and dynamic rendering, and loading skeletons. It showcases best practices in Next.js, PostgreSQL, and Tailwind CSS.",
        href: "https://nextjs-dashboard-htg7.vercel.app/",
        date: "March - 2024"
    },
    {
        id: 1,
        name: "StayFy",
        cover: "/projects/1/cover.png",
        gallery: [
            "/projects/1/cover.png"
        ],
        mobileGallery: [
            "/projects/1/mobile/gallery-1.png"
        ],
        shortDescription: "Book e-commerce SPA with payments, admin panel, and Google authentication integration.",
        fullDescription: "Book e-commerce SPA developed in React, featuring combined filters, shopping cart, payment gateway, admin panel, and authentication with Google account integration. I contributed as a backend developer, managing database models with PostgreSQL and Sequelize, implementing controllers for front-end responses, and developing components for product management.",
        href: "https://stayfy-mu.vercel.app/",
        date: "August to October - 2023"
    },
];
