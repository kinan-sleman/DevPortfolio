"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from 'next-intl';
import Container from "@/components/common/Container";

export default function RequestServicePage() {
    const t = useTranslations("RequestService");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        hasDomainHosting: "",
        hasOnlinePayment: "",
        notes: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const services = [
        "UI/UX Development",
        "Backend & API Development",
        "Website Management & Maintenance",
        "SEO Optimization",
        "AI Search Optimization",
        "Database Development & Management",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message: t('successMessage'),
                });
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    budget: "",
                    hasDomainHosting: "",
                    hasOnlinePayment: "",
                    notes: "",
                });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: data.error || t('errorMessage'),
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: t('genericError'),
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-white py-16">
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

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-secondary"
                >
                    {/* Personal Information */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">
                            {t('personalInfo')}
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                    {t('name')} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-accent focus:outline-none transition-colors"
                                    placeholder={t('namePlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                    {t('email')} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-accent focus:outline-none transition-colors"
                                    placeholder={t('emailPlaceholder')}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                    {t('phone')} <span className="text-gray-400 text-sm">{t('phoneOptional')}</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-accent focus:outline-none transition-colors"
                                    placeholder={t('phonePlaceholder')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service Selection */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">
                            {t('serviceDetails')}
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                                    {t('selectService')} <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-accent focus:outline-none transition-colors bg-white"
                                >
                                    <option value="">{t('chooseService')}</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>
                                            {t(service)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Budget Selection */}
                            <div>
                                <label className="block text-gray-700 font-semibold mb-3">
                                    {t('budget')} <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-3">
                                    {["Low", "Medium", "High"].map((budget) => (
                                        <label
                                            key={budget}
                                            className="flex items-center p-4 border-2 border-secondary rounded-lg cursor-pointer hover:border-accent transition-colors"
                                        >
                                            <input
                                                type="radio"
                                                name="budget"
                                                value={budget}
                                                checked={formData.budget === budget}
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 text-accent focus:ring-accent"
                                            />
                                            <span className="mx-3 text-gray-700 font-medium">{t(budget)}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Questions */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">
                            {t('additionalInfo')}
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-3">
                                    {t('domainQuestion')} <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center p-4 border-2 border-secondary rounded-lg cursor-pointer hover:border-accent transition-colors flex-1">
                                        <input
                                            type="radio"
                                            name="hasDomainHosting"
                                            value="Yes"
                                            checked={formData.hasDomainHosting === "Yes"}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 text-accent focus:ring-accent"
                                        />
                                        <span className="mx-3 text-gray-700 font-medium">{t('yes')}</span>
                                    </label>
                                    <label className="flex items-center p-4 border-2 border-secondary rounded-lg cursor-pointer hover:border-accent transition-colors flex-1">
                                        <input
                                            type="radio"
                                            name="hasDomainHosting"
                                            value="No"
                                            checked={formData.hasDomainHosting === "No"}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 text-accent focus:ring-accent"
                                        />
                                        <span className="mx-3 text-gray-700 font-medium">{t('no')}</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-3">
                                    {t('paymentQuestion')} <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center p-4 border-2 border-secondary rounded-lg cursor-pointer hover:border-accent transition-colors flex-1">
                                        <input
                                            type="radio"
                                            name="hasOnlinePayment"
                                            value="Yes"
                                            checked={formData.hasOnlinePayment === "Yes"}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 text-accent focus:ring-accent"
                                        />
                                        <span className="mx-3 text-gray-700 font-medium">{t('yes')}</span>
                                    </label>
                                    <label className="flex items-center p-4 border-2 border-secondary rounded-lg cursor-pointer hover:border-accent transition-colors flex-1">
                                        <input
                                            type="radio"
                                            name="hasOnlinePayment"
                                            value="No"
                                            checked={formData.hasOnlinePayment === "No"}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 text-accent focus:ring-accent"
                                        />
                                        <span className="mx-3 text-gray-700 font-medium">{t('no')}</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">
                                    {t('notes')}
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                                    placeholder={t('notesPlaceholder')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Status Message */}
                    {submitStatus.type && (
                        <div
                            className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success"
                                ? "bg-green-100 text-green-800 border-2 border-green-300"
                                : "bg-red-100 text-red-800 border-2 border-red-300"
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-extra1 text-primary font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isSubmitting ? t('sending') : t('submit')}
                    </button>
                </form>
            </Container>
        </div>
    );
}
