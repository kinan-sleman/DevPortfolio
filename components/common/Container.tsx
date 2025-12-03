import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean;
}

export default function Container({ children, id, className = '', fullWidth = false }: ContainerProps) {
    return (
        <div id={id || ""} className={`${fullWidth ? "max-w-[1757px]" : "max-w-[1800px]"} mx-auto px-4 md:px-[clamp(61.5px,calc(3.84375vw+49.2px),123px)] ${className}`}>
            {children}
        </div>
    );
}