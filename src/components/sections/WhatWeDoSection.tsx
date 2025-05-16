import React from 'react';
import Button from '../ui/Button'; // Assuming you have a Button component

// Placeholder for a right arrow icon
const ArrowRightIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

// Placeholder for icons in the bottom row
const StageIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const DotPattern = ({ className }: { className?: string }) => (
    <svg
        className={`absolute w-32 h-32 text-blue-200/50 ${className}`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        {[...Array(8)].map((_, i) =>
            [...Array(8)].map((_, j) => (
                <circle key={`${i}-${j}`} cx={8 + i * 12} cy={8 + j * 12} r="2" />
            ))
        )}
    </svg>
);

const WhatWeDoSection: React.FC = () => {
    const stages = [
        { title: 'Sole Trader', icon: <StageIcon /> },
        { title: 'Limited Company', icon: <StageIcon /> },
        { title: 'Growing Business', icon: <StageIcon /> },
    ];

    return (
        <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <div className="container mx-auto px-4">
                {/* Top part: Text and Images */}
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-20 lg:mb-32">
                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 lg:mb-4">What we do</p>
                        <h2 className="text-3xl md:text-4xl lg:text-[3.2rem] xl:text-5xl font-bold text-secondary-main mb-8 lg:mb-10 leading-tight">
                            Receive support at every stage of business development.
                        </h2>
                        <p className="text-gray-600 lg:text-lg mb-10 lg:mb-12 leading-relaxed">
                            Launch, grow and scale with ease. Each of our clients has a dedicated team that is committed to answering all queries within 24 hours, so you can rely on our helpful and professional support throughout your business journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                            <Button variant="primary" size="large" className="px-10 py-4">
                                Popular Services
                            </Button>
                            <Button variant="outline" size="large" className="px-10 py-4 text-secondary-main border-secondary-main/40 hover:bg-secondary-main/5">
                                Get Started <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Image Composition */}
                    <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
                            {/* Decorative elements */}
                            <DotPattern className="top-0 -left-10 z-0" />
                            <div className="absolute bg-pink-300/40 w-60 h-60 rounded-full -bottom-20 right-0 z-0 transform translate-x-1/4 translate-y-1/4"></div>

                            {/* Images */}
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                    alt="Business team discussion"
                                    className="rounded-lg shadow-2xl w-full sm:w-4/5 lg:w-[70%] ml-auto mb-[-20%] relative z-20 object-cover h-auto max-h-[250px]"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                    alt="Business meeting"
                                    className="rounded-lg shadow-xl w-full sm:w-3/5 lg:w-[55%] relative z-10 object-cover h-auto max-h-[200px]"
                                />
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                                alt="Professional individual"
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[15%] lg:translate-x-[25%] w-[40%] sm:w-[35%] lg:w-[45%] max-w-[280px] rounded-lg shadow-2xl z-20 object-cover h-auto max-h-[380px] border-4 border-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom part: Stages */}
                <div className="relative pt-10">
                    {/* Dotted lines - approximate */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 z-0">
                        <svg width="100%" height="2" className="overflow-visible">
                            <line x1="15%" y1="1" x2="85%" y2="1" strokeDasharray="5,5" stroke="#CBD5E0" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start relative z-10">
                        {stages.map((stage, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className={`p-5 rounded-lg mb-4 w-20 h-20 flex items-center justify-center ${index === 1 ? 'bg-primary' : 'bg-secondary-main'}`}>
                                    {stage.icon}
                                </div>
                                <h4 className="font-semibold text-secondary-main text-lg lg:text-xl">{stage.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection; 