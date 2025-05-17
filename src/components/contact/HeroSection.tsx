import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
    // Placeholder for Unsplash image URL - replace with an actual URL
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1528747045269-390ca33c44b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'; // Example image

    return (
        <section
            className="relative py-20 md:py-32 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:pr-12 text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Get Your Queries Answered Instantly on <span className="text-green-400">WhatsApp</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-6">
                            Whether you need help with services, pricing, or general inquiries, our team is just a message away.
                        </p>
                        <p className="text-lg md:text-xl text-gray-200 mb-8">
                            Connect With Our Support Team!
                        </p>
                        <a
                            href="https://wa.me/918447748183" // Replace with actual WhatsApp link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-green-600 transition-colors text-lg"
                        >
                            Chat Now
                        </a>
                    </div>
                    <div className="relative mt-8 md:mt-0 flex justify-center items-center">
                        {/* Image of the woman - assuming this is part of the background or not needed due to the overall design */}
                        {/* WhatsApp icons scattered */}
                        <FaWhatsapp className="absolute text-green-400 text-6xl opacity-70" style={{ top: '10%', left: '80%' }} />
                        <FaWhatsapp className="absolute text-green-400 text-5xl opacity-70" style={{ top: '70%', left: '90%' }} />
                        <FaWhatsapp className="absolute text-green-400 text-4xl opacity-70" style={{ bottom: '5%', left: '70%' }} />
                        {/* You might want to use an actual image for the person if the background doesn't cover it */}
                        <img
                            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1" // Placeholder image of the person
                            alt="Support Agent"
                            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 