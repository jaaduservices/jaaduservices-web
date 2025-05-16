import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="py-12 md:py-20 bg-[#F7F5F2]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:pr-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Get Your Queries Answered Instantly on <span className="text-green-500">WhatsApp</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Whether you need help with services, pricing, or general inquiries, our team is just a message away.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Connect With Our Support Team!
                        </p>
                        <a
                            href="https://wa.me/918447748183" // Replace with actual WhatsApp link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition-colors text-lg"
                        >
                            <FaWhatsapp className="mr-2 text-xl" /> Chat Now
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <img src="https://registerkaro.in/_next/image?url=%2Fimages%2Fhero%2Fhero-contact-us.webp&w=1920&q=75" alt="Customer Support" className="rounded-lg shadow-xl mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 