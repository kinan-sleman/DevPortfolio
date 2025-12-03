import Container from '@/components/common/Container';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: "Contact Us - Professional Web Development Services",
    description: "Get in touch with our team for web development inquiries, project consultations, or support. Connect via email, social media, or request a service directly.",
    keywords: [
        "contact web developer",
        "web development support",
        "UI/UX inquiry",
        "backend development contact",
        "SEO consultation",
        "AI integration contact",
        "database services inquiry",
        "website maintenance support",
        "email contact",
        "social media contact"
    ],
    authors: [{ name: "Kinan Sleman", url: "https://yourwebsite.com" }],
    openGraph: {
        title: "Contact Us - Professional Web Development Services",
        description: "Reach out for web development services, project consultations, or support. Connect via email or social media.",
        url: "https://yourwebsite.com/contact",
        siteName: "Your Website",
        images: [
            {
                url: "https://yourwebsite.com/og-contact.png",
                width: 1200,
                height: 630,
                alt: "Contact Professional Web Development Services"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - Professional Web Development Services",
        description: "Get in touch with our team for web development inquiries, project consultations, or support.",
        images: ["https://yourwebsite.com/og-contact.png"],
        creator: "@YourTwitterHandle"
    }
};

export default function ContactPage() {
    const t = useTranslations("Contact");

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://facebook.com",
            icon: "📘",
            color: "hover:text-blue-600",
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
            icon: "📷",
            color: "hover:text-pink-600",
        },
        {
            name: "YouTube",
            url: "https://youtube.com",
            icon: "📺",
            color: "hover:text-red-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20 py-16">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600 text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Legal Terms Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border-2 border-secondary">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <span className="text-accent mr-3">📋</span>
                        {t('legalTerms')}
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-accent/20 rounded-full p-3 mr-4 flex-shrink-0">
                                <span className="text-2xl">✅</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {t('projectOwnership')}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('projectOwnershipText')}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-accent/20 rounded-full p-3 mr-4 flex-shrink-0">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {t('confidentiality')}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('confidentialityText')}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-accent/20 rounded-full p-3 mr-4 flex-shrink-0">
                                <span className="text-2xl">💰</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {t('paymentTerms')}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('paymentTermsText')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border-2 border-secondary">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <span className="text-accent mr-3">📧</span>
                        {t('contactInfo')}
                    </h2>

                    <div className="mb-8">
                        <div className="flex items-center p-4 bg-gradient-to-r from-accent/10 to-extra1/10 rounded-lg">
                            <span className="text-3xl mr-4">✉️</span>
                            <div>
                                <p className="text-sm text-gray-600 mb-1">{t('emailAddress')}</p>
                                <a
                                    href="mailto:kksleman50@gmail.com"
                                    className="text-xl font-semibold text-primary hover:text-accent transition-colors"
                                >
                                    kksleman50@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-primary mb-4">
                        {t('followUs')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center p-6 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group ${social.color}`}
                            >
                                <span className="text-4xl mr-3 group-hover:scale-110 transition-transform">
                                    {social.icon}
                                </span>
                                <span className="text-lg font-semibold text-primary">
                                    {social.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-primary to-extra2 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">{t('readyTitle')}</h2>
                    <p className="text-secondary text-lg mb-6">
                        {t('readySubtitle')}
                    </p>
                    <a
                        href="/request-service"
                        className="inline-block bg-accent hover:bg-extra1 text-primary font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        {t('cta')}
                    </a>
                </div>
            </Container>
        </div>
    );
}
