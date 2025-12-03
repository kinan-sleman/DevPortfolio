interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="bg-white border-2 border-secondary rounded-lg p-6 hover:border-accent hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
