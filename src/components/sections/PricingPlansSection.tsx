import React from 'react';
import { Link } from 'react-router-dom';

const ArrowRightIcon = ({ className = "w-6 h-6 text-primary" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

interface PlanCardProps {
    title: string;
    description: string;
    employeeLabel: string;
    employeeRange: string;
    linkTo: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, description, employeeLabel, employeeRange, linkTo }) => {
    return (
        <div className="flex flex-col justify-between p-6 h-full">
            <div>
                <h3 className="text-xl font-semibold text-secondary-main mb-3">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 min-h-[3rem]">{description}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500 mb-1">{employeeLabel}</p>
                <p className="text-secondary-main font-semibold mb-4">{employeeRange}</p>
                <Link to={linkTo} className="inline-block">
                    <ArrowRightIcon />
                </Link>
            </div>
        </div>
    );
};

const pricingPlansData = [
    {
        title: 'Small business & Startup Accounts',
        description: 'Make sure your business meets its statutory requirements.',
        employeeLabel: 'Number of employees',
        employeeRange: '0 - 10',
        linkTo: '/pricing/small-business'
    },
    {
        title: 'Growing Business Package',
        description: 'Additional support to help you reach your business goals.',
        employeeLabel: 'Number of employees',
        employeeRange: '11 - 50',
        linkTo: '/pricing/growing-business'
    },
    {
        title: 'Scale-Up Company Offer',
        description: 'Compliance, reporting & analysis of performance.',
        employeeLabel: 'Number of employees',
        employeeRange: '50 +',
        linkTo: '/pricing/scale-up'
    },
];

const SettingUpCardData = {
    title: 'Setting up a business',
    description: 'Make sure your business meets its statutory requirements.',
    serviceName: 'Company Formation Services',
    linkTo: '/services/company-formation'
};

const PricingPlansSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 bg-secondary-dark text-gray-800"> {/* Placeholder bg color */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Main Pricing Card Group */}
                    <div className="lg:w-3/4 bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
                        {pricingPlansData.map((plan, index) => (
                            <div key={plan.title} className={`md:w-1/3 ${index < pricingPlansData.length - 1 ? 'md:border-r border-gray-200' : ''} flex`}>
                                <PlanCard {...plan} />
                            </div>
                        ))}
                    </div>

                    {/* Standalone Setting Up Card */}
                    <div className="lg:w-1/4 bg-white rounded-xl shadow-2xl flex">
                        <div className="flex flex-col justify-between p-6 h-full">
                            <div>
                                <h3 className="text-xl font-semibold text-secondary-main mb-3">{SettingUpCardData.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 min-h-[3rem]">{SettingUpCardData.description}</p>
                                <p className="text-secondary-main font-semibold mb-4">{SettingUpCardData.serviceName}</p>
                            </div>
                            <Link to={SettingUpCardData.linkTo} className="inline-block">
                                <ArrowRightIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlansSection; 