interface TechIconProps {
    name: string;
    icon: string;
}

export default function TechIcon({ name, icon }: TechIconProps) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-lg hover:from-accent/30 hover:to-extra1/20 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <p className="text-primary font-semibold text-sm">{name}</p>
        </div>
    );
}
