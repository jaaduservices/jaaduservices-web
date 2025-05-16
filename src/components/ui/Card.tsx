import type { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: 'default' | 'bordered' | 'elevated';
    padding?: 'none' | 'small' | 'medium' | 'large';
    className?: string;
}

const Card = ({
    children,
    variant = 'default',
    padding = 'medium',
    className = '',
    ...props
}: CardProps) => {
    const variantClasses = {
        default: 'bg-white',
        bordered: 'bg-white border border-gray-200',
        elevated: 'bg-white shadow-md',
    };

    const paddingClasses = {
        none: '',
        small: 'p-3',
        medium: 'p-5',
        large: 'p-8',
    };

    return (
        <div
            className={`rounded-lg ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card; 