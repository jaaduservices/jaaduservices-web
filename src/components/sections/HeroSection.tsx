import { Link } from 'react-router-dom';
import Button from '../ui/Button';

// Simplified DotPattern for Hero Section, to match reference image
const HeroDotPattern = ({ className }: { className?: string }) => (
    <svg
        className={`absolute w-24 h-24 text-secondary-main/80 ${className}`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
    >
        {[...Array(8)].map((_, i) =>
            [...Array(8)].map((_, j) => (
                <circle key={`${i}-${j}`} cx={8 + i * 12} cy={8 + j * 12} r="3" />
            ))
        )}
    </svg>
);

const HeroSection = () => {
    const stats = [
        { id: "s1", value: "500+", label: "Businesses Incorporated Every Month", position: 'left', order: 1 },
        { id: "s2", value: "20,000+", label: "Clients all over India", position: 'left', order: 2 },
        { id: "s3", value: "250+", label: "Professionals Network", position: 'right', order: 1 },
    ];

    return (
        <section className="relative bg-slate-50 py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
            {/* Decorative pale orange circle - far left */}
            <div className="absolute -left-1/4 md:-left-1/5 lg:-left-1/6 top-1/2 transform -translate-y-1/2 w-2/3 md:w-1/2 lg:w-2/5 aspect-square bg-primary-light/10 rounded-full opacity-70 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Column: Text Content */}
                    <div className="lg:w-1/2 xl:w-5/12 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-between">
                        <div>
                            <p className="text-secondary-main font-semibold mb-2 text-md md:text-lg">We take care of ALL your business compliance needs</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-main mb-3">
                                Jaadu <span className="text-primary-main">Services</span>
                            </h1>
                            <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 md:text-lg">
                                An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.
                            </p>
                        </div>
                        <div>
                            <Link to="/contact">
                                <Button variant="primary" size="large" className="px-8 md:px-10 py-2.5 md:py-3 text-base md:text-lg">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image and Stat Boxes */}
                    <div className="lg:w-1/2 xl:w-7/12 relative flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0 w-full">
                        {/* Background for Image - Angled Shape */}
                        <div className="absolute inset-0 flex justify-center items-center z-0">
                            <div
                                className="w-full h-full bg-primary-main/80 transform skew-y-0 lg:-skew-y-3 origin-top-left"
                                style={{
                                    clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)'
                                }}
                            ></div>
                        </div>

                        {/* Dot Pattern - Top Left of Image Area */}
                        <HeroDotPattern className="top-0 left-0 lg:top-2 lg:left-2 xl:top-4 xl:left-4 z-20 opacity-0 md:opacity-60" />

                        <img
                            src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
                            alt="Business Professional"
                            className="rounded-lg shadow-2xl object-cover relative z-10 w-auto max-h-[300px] md:max-h-[420px] lg:max-h-[480px] xl:max-h-[520px]"
                        />

                        {/* Dot Pattern - Bottom Right of Image Area */}
                        <HeroDotPattern className="bottom-0 right-0 lg:bottom-2 lg:right-2 xl:bottom-4 xl:right-4 z-20 opacity-0 md:opacity-60" />

                        {/* Stat Boxes - Adjusted for tablets and distinct vertical positioning */}
                        {stats.filter(s => s.position === 'left').map((stat, index) => (
                            <div
                                key={stat.id}
                                className={`absolute bg-white p-3 md:p-4 rounded-lg shadow-xl w-40 md:w-44 lg:w-52 z-20 
                                            ${index === 0 ?
                                        'top-1/4 md:top-1/3 -translate-y-1/2 -left-4 md:-left-10 lg:-left-16 xl:-left-20' :
                                        'bottom-1/4 md:bottom-1/3 translate-y-1/2 -left-4 md:-left-10 lg:-left-16 xl:-left-20'}
                                            `}
                            >
                                <p className="text-lg md:text-xl lg:text-2xl font-bold text-secondary-main">{stat.value}</p>
                                <p className="text-xs md:text-sm text-gray-500 leading-tight">{stat.label}</p>
                            </div>
                        ))}
                        {stats.filter(s => s.position === 'right').map((stat) => (
                            <div
                                key={stat.id}
                                className="absolute bg-white p-3 md:p-4 rounded-lg shadow-xl w-40 md:w-44 lg:w-52 z-20 
                                           top-1/2 transform -translate-y-1/2 -right-4 md:-right-10 lg:-right-16 xl:-right-20"
                            >
                                <p className="text-lg md:text-xl lg:text-2xl font-bold text-secondary-main">{stat.value}</p>
                                <p className="text-xs md:text-sm text-gray-500 leading-tight">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Partner Logos Section - Commented out as per prior instructions */}
            {/* 
            <div className="container mx-auto px-4 mt-20 lg:mt-28">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-semibold text-secondary-main">Trusted By</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 items-center">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex justify-center">
                            <img src={'/placeholder.svg'} alt={`Partner ${i + 1}`} className="h-10 lg:h-12 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
            */}
        </section>
    );
};

export default HeroSection; 