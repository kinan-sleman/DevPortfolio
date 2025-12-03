import { Link } from '@/navigation';
import ServiceCard from "@/components/ServiceCard";
import TechIcon from "@/components/TechIcon";
import { useTranslations } from 'next-intl';
import Container from '@/components/common/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professional Web Development Services - UI/UX, Backend & More",
    description: "Explore expert web development solutions including UI/UX design, backend development, SEO, AI integration, database management, and ongoing maintenance services. Elevate your digital presence with cutting-edge technologies and professional support.",
    keywords: [
        "web development",
        "UI/UX design",
        "backend development",
        "SEO services",
        "AI solutions",
        "database management",
        "website maintenance",
        "professional web developer",
        "React.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "PHP",
        "Laravel",
        "Django",
        "Vue.js"
    ],
    authors: [{ name: "Kinan Sleman", url: "https://dev-portfolio-kappa-two.vercel.app/" }],
    openGraph: {
        title: "Professional Web Development Services - UI/UX, Backend & More",
        description: "Expert solutions for UI/UX, backend, SEO, AI, database management, and maintenance. Build your perfect website with professional web development services.",
        url: "https://dev-portfolio-kappa-two.vercel.app/",
        siteName: "Your Website",
        images: [
            {
                url: "https://dev-portfolio-kappa-two.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "Professional Web Development Services"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional Web Development Services - UI/UX, Backend & More",
        description: "Expert web development solutions including UI/UX, backend, SEO, AI, database, and maintenance.",
        images: ["https://dev-portfolio-kappa-two.vercel.app/og-image.png"],
        creator: "@YourTwitterHandle"
    }
};
export default function Home() {
    const t = useTranslations("Home");

    const services = [
        {
            title: t('services.uiUx.title'),
            description: t('services.uiUx.description'),
            icon: "🎨",
        },
        {
            title: t('services.backend.title'),
            description: t('services.backend.description'),
            icon: "⚙️",
        },
        {
            title: t('services.maintenance.title'),
            description: t('services.maintenance.description'),
            icon: "🔧",
        },
        {
            title: t('services.seo.title'),
            description: t('services.seo.description'),
            icon: "📈",
        },
        {
            title: t('services.ai.title'),
            description: t('services.ai.description'),
            icon: "🤖",
        },
        {
            title: t('services.database.title'),
            description: t('services.database.description'),
            icon: "💾",
        },
    ];

    const technologies = [
        { name: "JavaScript", icon: "🟨" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Python", icon: "🐍" },
        { name: "PHP", icon: "🐘" },
        { name: "Node.js", icon: "🟢" },
        { name: "React.js", icon: "⚛️" },
        { name: "Vue.js", icon: "💚" },
        { name: "Laravel", icon: "🔴" },
        { name: "Django", icon: "🎸" },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-primary to-extra2 text-white py-32">
                <Container className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        {t('heroTitle')}
                        <span className="block text-accent mt-2">{t('heroSubtitle')}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary mb-10 max-w-3xl mx-auto">
                        {t('heroDescription')}
                    </p>
                    <Link
                        href="/request-service"
                        className="inline-block bg-accent hover:bg-extra1 text-primary font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        {t('cta')}
                    </Link>
                </Container>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gradient-to-b from-white to-secondary/20">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            {t('servicesTitle')}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            {t('servicesSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            {t('technologiesTitle')}
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            {t('technologiesSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {technologies.map((tech, index) => (
                            <TechIcon key={index} name={tech.name} icon={tech.icon} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-extra2 text-white text-center">
                <Container>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('readyTitle')}
                    </h2>
                    <p className="text-xl text-secondary mb-10">
                        {t('readySubtitle')}
                    </p>
                    <Link
                        href="/request-service"
                        className="inline-block bg-accent hover:bg-extra1 text-primary font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        {t('cta')}
                    </Link>
                </Container>
            </section>
        </div>
    );
}
