import RequestServicePage from '@/app/[locale]/request-service/RequestServicePage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Request a Service - Professional Web Development",
    description: "Submit your web development project request including UI/UX, backend, SEO, AI, database, or maintenance services. Provide details on your budget, requirements, and preferences for a personalized consultation.",
    keywords: [
        "request web development service",
        "UI/UX development request",
        "backend project request",
        "SEO service request",
        "AI integration request",
        "database development request",
        "website maintenance request",
        "submit project request",
        "contact web developer",
        "professional web services"
    ],
    authors: [{ name: "Kinan Sleman", url: "https://dev-portfolio-kappa-two.vercel.app/" }],
    openGraph: {
        title: "Request a Service - Professional Web Development",
        description: "Submit your web development project request for UI/UX, backend, SEO, AI, database, or maintenance services. Get a personalized consultation.",
        url: "https://dev-portfolio-kappa-two.vercel.app/request-service",
        siteName: "Your Website",
        images: [
            {
                url: "https://dev-portfolio-kappa-two.vercel.app/og-request-service.png",
                width: 1200,
                height: 630,
                alt: "Request Web Development Services"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Request a Service - Professional Web Development",
        description: "Submit your web development project request including UI/UX, backend, SEO, AI, database, or maintenance services.",
        images: ["https://dev-portfolio-kappa-two.vercel.app/og-request-service.png"],
        creator: "@YourTwitterHandle"
    }
};

export default function page() {
    return (
        <RequestServicePage />
    )
}
