import Container from '@/components/common/Container';
import SocialIcons from '@/components/common/SocialIcons';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations("Footer");
    const tNav = useTranslations("Navbar");
    const year = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-accent mb-4">{t('about')}</h3>
                        <p className="text-secondary text-sm">{t('aboutText')}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-accent mb-4">{t('quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-secondary hover:text-accent transition-colors text-sm">
                                    {tNav('home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/request-service" className="text-secondary hover:text-accent transition-colors text-sm">
                                    {tNav('requestService')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-secondary hover:text-accent transition-colors text-sm">
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-accent mb-4">{t('contact')}</h3>
                        <div className="space-y-2 text-sm">
                            <p className="text-secondary">
                                <span className="font-semibold">{t('email')}:</span>{" "}
                                <a href="mailto:kksleman50@gmail.com" className="hover:text-accent transition-colors">
                                    kksleman50@gmail.com
                                </a>
                            </p>
                        </div>
                        {/* Social Media Icons */}
                        <SocialIcons />
                    </div>
                </div>

                <div className="border-t border-accent/20 mt-8 pt-8 text-center">
                    <p className="text-secondary text-sm">
                        {t('rights', { year })}
                    </p>
                </div>
            </Container>
        </footer>
    );
}
