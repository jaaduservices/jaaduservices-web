import { Link } from 'react-router-dom';

interface AboutCtaSectionProps {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const AboutCtaSection: React.FC<AboutCtaSectionProps> = ({ title, description, buttonText, buttonLink }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-main mb-6">{title}</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        {description}
                    </p>
                    <Link
                        to={buttonLink}
                        className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-lg transition-colors duration-300 inline-block text-lg shadow-md hover:shadow-lg"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCtaSection; 