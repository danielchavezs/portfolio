import { ProjectsType } from "./types";

export const projects: ProjectsType = [
    {
        id: 1,
        name: "StayFy",
        images: ["/stayfy_desktop.png", "/stayfy-mobile.png"],
        description: "Book e-commerce SPA developed on React, featuring relational database, combined filters, users, orders, authentication and payment gateway."
    },
    {
        id: 2,
        name: "Invoice Dashboard",
        images: ["/invoice_dashboard_desktop.PNG", "/invoice_dashboard_mobile.png"],
        description: "Invoices dashboard developed on the official Next.js course, featuring server components, streaming, loading managing rendering and more."
    },
    {
        id: 3,
        name: "Mortgage Calculator",
        images: ["/mortgage_calculator_desktop.png", "/mortgage_calculator_mobile.png"],
        description: "Simple mortgage calculator app, allowing to show results for 'repayment' and 'interest only' cases. Featuring a responsive design for desktop, tablets and mobile viewports."
    },
];