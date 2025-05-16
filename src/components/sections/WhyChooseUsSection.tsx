import React from 'react';
// import Card from '../ui/Card'; // Card is declared but its value is never read.

// Re-using DotPattern from HeroSection or define locally if preferred
const DotPattern = ({ className }: { className?: string }) => (
    <svg
        className={`absolute w-24 h-24 text-blue-200 ${className}`}
        fill="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
        {[...Array(6)].map((_, i) =>
            [...Array(6)].map((_, j) => (
                <circle key={`${i}-${j}`} cx={10 + i * 16} cy={10 + j * 16} r="3" fill="currentColor" />
            ))
        )}
    </svg>
);

const CheckIcon = () => (
    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const WhyChooseUsSection: React.FC = () => {
    const features = [
        "Affordable",
        "Compliance Ensured",
        "Simplified Process",
        "On-time Service",
        "Instant Response",
        "Industry Experts"
    ];

    return (
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
            <DotPattern className="top-10 right-10 opacity-50" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Column: Image and Decorative Elements */}
                    <div className="lg:w-1/2 relative order-2 lg:order-1">
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-400 rounded-full opacity-30">
                            {/* <img src="/images/shape-orange-swoosh.svg" alt="Orange Swoosh" className="w-full h-full" /> Removed image */}
                        </div>
                        <div className="absolute bottom-0 -right-10 w-48 h-48 opacity-20">
                            <img src="/images/shape-dotted-square.svg" alt="Dotted Square" className="w-full h-full" />
                        </div>

                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                alt="Business Professional"
                                className="rounded-xl shadow-2xl relative z-10 object-cover w-full h-auto max-h-[500px] lg:max-h-[600px]"
                            />
                            {/* Mockup Phone */}
                            <div className="absolute -bottom-8 -left-8 sm:-left-12 w-32 sm:w-40 z-20 bg-white p-2 rounded-lg shadow-2xl transform group hover:scale-105 transition-transform duration-300">
                                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80" alt="Smartphone mockup" className="rounded-md w-full h-auto" />
                            </div>
                            {/* Ratings Box */}
                            <div className="absolute -bottom-4 sm:-bottom-8 right-0 sm:right-5 z-20 bg-white p-3 sm:p-4 rounded-lg shadow-2xl min-w-[180px] sm:min-w-[220px]">
                                <p className="text-2xl sm:text-3xl font-bold text-secondary-main">100+</p>
                                <p className="text-xs sm:text-sm text-gray-500 mb-1">Ratings</p>
                                <hr className="my-1" />
                                <p className="text-sm sm:text-base font-semibold text-secondary-main">Trusted by</p>
                                <p className="text-xs sm:text-sm text-gray-500">20,000+ clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-main mb-8 relative inline-block">
                            <span className="absolute -top-2 -left-4 w-10 h-10 bg-primary-light/40 rounded-full z-0"></span>
                            <span className="relative z-10">WHY CHOOSE US</span>
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 my-8 lg:my-10 leading-relaxed">
                            Our All-In-One Platform And Team Of Experts Will Help Direct You In The Right Path And Ensure That Your Business Starts The Right Way In Record Time.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mt-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <CheckIcon />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection; 