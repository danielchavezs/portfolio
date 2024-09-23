import { ProjectsType } from "./types";

export const projects: ProjectsType = [
    {
        id: 1,
        name: "StayFy",
        images: ["/stayfy_desktop.png", "/stayfy-mobile.png"],
        description: "Book e-commerce SPA developed in React, featuring combined filters, shopping cart, payment gateway, admin panel, and authentication with Google account integration. I contributed as a backend developer, managing database models with PostgreSQL and Sequelize, implementing controllers for front-end responses, and developing components for product management.",
        href: "https://stayfy-mu.vercel.app/"
    },
    {
        id: 2,
        name: "Invoice Dashboard",
        images: ["/invoice_dashboard_desktop.png", "/invoice_dashboard_mobile.png"],
        description: "Created as part of the official Next.js course by Vercel, this invoice dashboard includes server components, streaming, API data fetching, static and dynamic rendering, and loading skeletons. It showcases best practices in Next.js, PostgreSQL, and Tailwind CSS.",
        href: "https://nextjs-dashboard-htg7.vercel.app/"
    },
    {
        id: 3,
        name: "Mortgage Calculator",
        images: ["/mortgage_calculator_desktop.png", "/mortgage_calculator_mobile.png"],
        description: "A simple mortgage calculator app developed in Next.js with features like conditional rendering to display results, error handling for incomplete fields, and a responsive design for desktop, tablet, and mobile devices. Key technologies include Next.js and Tailwind CSS.",
        href: "https://mortage-calculator-swart.vercel.app/"
    },
    {
        id: 4,
        name: "GreenCall",
        images: ["/greencall_desktop.JPG", "/greencall_mobile.png"],
        description: "Corporate website for cannabis growing company in Colombia, featuring an automatic slider, informative sections, and a contact form. Built with Next.js and Tailwind CSS for styles and responsive design.",
        href: "https://greencall.vercel.app/"
    },
];