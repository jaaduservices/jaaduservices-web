import { FaRegFileAlt, FaCreditCard, FaHeadset, FaEnvelopeOpenText } from 'react-icons/fa';

const WhyChooseUsSection = () => {
    const sectionImage = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'; // Placeholder office/team image

    const benefits = [
        'Instant Response',
        'Personalized Solutions',
        'Trust and Reliability',
        'Affordable',
        'Simplified Process',
        'Compliance Ensured',
    ];

    const processSteps = [
        { text: 'Fill Up the Form', icon: <FaRegFileAlt className="text-3xl md:text-4xl text-white" /> },
        { text: 'Make Online Payment', icon: <FaCreditCard className="text-3xl md:text-4xl text-white" /> },
        { text: 'Our Executive Will Contact You', icon: <FaHeadset className="text-3xl md:text-4xl text-white" /> },
        { text: 'Get Confirmation', icon: <FaEnvelopeOpenText className="text-3xl md:text-4xl text-white" /> },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-12 md:mb-16">
                    {/* Image on the left */}
                    <div className="lg:w-1/2 xl:w-5/12">
                        <img
                            src={sectionImage}
                            alt="Why Choose Jaadu Services"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content on the right */}
                    <div className="lg:w-1/2 xl:w-7/12">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary-main mb-6">
                            Why <span className="text-primary">Jaadu Services?</span>
                        </h2>
                        <ul className="space-y-3 text-lg text-gray-700">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-primary font-bold mr-2 text-xl">{index + 1}.</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Process Steps Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-orange-500 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 min-h-[160px]"
                        >
                            <div className="mb-3 md:mb-4">
                                {step.icon}
                            </div>
                            <p className="text-white font-semibold text-md md:text-lg">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection; 