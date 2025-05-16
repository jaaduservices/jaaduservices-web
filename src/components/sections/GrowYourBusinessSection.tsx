import React from 'react';

// Orange Checkmark Icon
const OrangeCheckIcon = ({ className = "w-5 h-5 text-primary" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
);

const individualCompliances = [
    { text: 'Annual AOC 4 filling - Rs.2,000' },
    { text: 'Annual MGT - 7 filling - Rs.2,000' },
    { text: 'DIR 3KYC for all the directors - Rs.3,000' },
    { text: 'Bookkeeping and Accounting - Rs.5,000' },
    { text: 'Payroll compliance - Rs.5,000' },
];

const GrowYourBusinessSection: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 bg-slate-50 min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-main leading-tight">
                        Grow Your Business instead of Complex Registration processes and leave it for us
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
                    {/* Left Column */}
                    <div className="lg:w-1/2 relative pb-10 lg:pb-0">
                        <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 text-center lg:text-left max-w-md mx-auto lg:mx-0">
                            With other service providers you would have to pay for each compliance filing individually
                        </p>

                        {/* 18k Badge - Approximate styling */}
                        <div className="absolute top-0 right-0 lg:right-8 xl:right-16 -mt-10 lg:-mt-6 z-10">
                            <div className="relative">
                                <div className="w-20 h-20 bg-yellow-400 rounded-full flex flex-col justify-center items-center text-secondary-main shadow-lg">
                                    <span className="font-bold text-2xl">18k</span>
                                    <span className="text-xs font-semibold">+</span>
                                </div>
                                <span className="absolute -top-2 -left-2 text-yellow-500 font-bold text-xl">+</span>
                                <span className="absolute -bottom-2 -right-2 text-yellow-500 font-bold text-xl">+</span>
                                <span className="absolute -top-2 -right-2 text-yellow-500 font-bold text-xl">+</span>
                                <span className="absolute -bottom-2 -left-2 text-yellow-500 font-bold text-xl">+</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-xl p-8 lg:p-10 space-y-4">
                            {individualCompliances.map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
                                    <OrangeCheckIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2">
                        <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 text-center lg:text-left">
                            Or you could
                        </p>
                        <div className="bg-white rounded-xl shadow-xl p-8 lg:p-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center mb-8">
                                    <OrangeCheckIcon className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                    {/* NOTE: Changed RegisterKaro to Jaadu Services */}
                                    <span className="text-sm font-semibold text-secondary-main">Use Jaadu Services</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed lg:text-lg">
                                    Get all your <span className="font-bold text-secondary-main">Compliance</span> done with the help of <span className="font-bold text-secondary-main">Industry Experts</span> and channelize that precious time to grow your <span className="font-bold text-secondary-main">business.</span>
                                </p>
                            </div>
                            <div className="mt-8 lg:mt-10 text-center lg:text-left">
                                <a href="#get-started" className="text-primary hover:text-primary-dark font-semibold text-lg">
                                    Get Started!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowYourBusinessSection; 