import { ProjectsType } from "./types";

export const projects: ProjectsType = [
    {
        id: 1,
        name: "StayFy",
        images: ["/projects/stayfy_desktop.png", "/projects/stayfy-mobile.png"],
        description: "Book e-commerce SPA developed in React, featuring combined filters, shopping cart, payment gateway, admin panel, and authentication with Google account integration. I contributed as a backend developer, managing database models with PostgreSQL and Sequelize, implementing controllers for front-end responses, and developing components for product management.",
        href: "https://stayfy-mu.vercel.app/"
    },
    {
        id: 2,
        name: "Invoice Dashboard",
        images: ["/projects/invoice_dashboard_desktop.png", "/projects/invoice_dashboard_mobile.png"],
        description: "Created as part of the official Next.js course by Vercel, this invoice dashboard includes server components, streaming, API data fetching, static and dynamic rendering, and loading skeletons. It showcases best practices in Next.js, PostgreSQL, and Tailwind CSS.",
        href: "https://nextjs-dashboard-htg7.vercel.app/"
    },
    {
        id: 3,
        name: "Mortgage Calculator",
        images: ["/projects/mortgage_calculator_desktop.png", "/projects/mortgage_calculator_mobile.png"],
        description: "A simple mortgage calculator app developed in Next.js with features like conditional rendering to display results, error handling for incomplete fields, and a responsive design for desktop, tablet, and mobile devices. Key technologies include Next.js and Tailwind CSS.",
        href: "https://mortage-calculator-swart.vercel.app/"
    },
    {
        id: 4,
        name: "GreenCall",
        images: ["/projects/greencall_desktop.JPG", "/projects/greencall_mobile.png"],
        description: "Corporate website for cannabis growing company in Colombia, featuring an automatic slider, informative sections, and a contact form. Built with Next.js and Tailwind CSS for styles and responsive design.",
        href: "https://greencall.vercel.app/"
    },
    {
        id: 5,
        name: "Promotional Sweepstake",
        images: ["/projects/sweepstake_desktop.png", "/projects/sweepstake_mobile.png"],
        description: "Developed for a Colombian marketing agency, this Next.js app enables users to participate in a promotional sweepstake. It features real-time form validation, responsive design with Tailwind, and conditional rendering. The app also fetches region and city data from an API to populate dependent dropdowns seamlessly.",
        href: "https://sorteo-one.vercel.app/"
    },
    {
        id: 6,
        name: "Owen Partners",
        images: ["/projects/owen_desktop1.png", "/projects/owen_mobile6.png"],
        description: "Collaborated with an Australian financial advisory firm to enhance their website's UI components and optimize its responsive design. Built on WordPress, the project also included integrating Calendly to streamline client meeting scheduling.",
        href: "https://owenpartners.com.au/"
    },
];