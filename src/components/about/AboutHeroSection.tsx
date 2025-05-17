interface AboutHeroSectionProps {
    heroBgUrl: string;
    title: string;
    // subtitle?: string; // Optional subtitle
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ heroBgUrl, title }) => {
    return (
        <section
            className="relative py-20 md:py-32 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${heroBgUrl})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        {title}
                    </h1>
                    {/* {subtitle && <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>} */}
                </div>
            </div>
        </section>
    );
};

export default AboutHeroSection; 