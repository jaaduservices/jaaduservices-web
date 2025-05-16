import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useState, useEffect } from 'react';

// This would typically come from an API, but for demo purposes we'll define it here
const servicesData = [
    {
        id: '1',
        title: 'Company Registration',
        description: 'Register your business as a Private Limited, LLP, OPC, or Partnership firm with our expert assistance.',
        fullDescription: `At Jaadu Services, we provide comprehensive company registration services to help entrepreneurs establish their businesses legally and efficiently. Our team of experts will guide you through the entire process, from choosing the right business structure to obtaining all necessary registrations and licenses.

We offer registration services for various business structures including:

- Private Limited Company
- Limited Liability Partnership (LLP)
- One Person Company (OPC)
- Partnership Firm
- Sole Proprietorship
- Section 8 Company (Non-profit)

Our end-to-end service includes document preparation, filing with relevant authorities, and follow-up until your company is successfully registered.`,
        features: [
            'Name approval assistance',
            'Complete documentation and filing',
            'Director Identification Number (DIN) registration',
            'Digital Signature Certificate (DSC) procurement',
            'PAN and TAN registration',
            'Bank account opening assistance',
            'GST registration support',
        ],
        faqs: [
            {
                question: 'How long does it take to register a company?',
                answer: 'The typical timeline for company registration is 10-15 working days, depending on the type of company and document readiness.',
            },
            {
                question: 'What documents are required for company registration?',
                answer: 'Basic requirements include identity and address proof of directors/partners, property documents for registered office address, passport-size photographs, and digital signatures.',
            },
            {
                question: 'What is the cost of registering a company?',
                answer: 'The cost varies based on the type of company structure. Please contact us for a customized quote based on your specific requirements.',
            },
        ],
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
        category: 'registration',
        relatedServices: [2, 5, 6],
    },
    {
        id: '2',
        title: 'GST Registration',
        description: 'Get your GST registration done quickly and efficiently with our comprehensive service.',
        fullDescription: `Our GST registration service is designed to help businesses comply with India's Goods and Services Tax (GST) regulations. We handle the entire GST registration process so you can focus on running your business.

With our expert guidance, you can navigate the complex GST system with ease. Our team will determine if your business requires GST registration, prepare and submit all necessary documents, and follow up with tax authorities until your GSTIN is issued.

We also provide post-registration support to help you understand your GST compliance obligations and set up systems for ongoing GST filing and payments.`,
        features: [
            'GST eligibility assessment',
            'Complete documentation preparation',
            'Application filing with GST authorities',
            'Follow-up until GSTIN is obtained',
            'GST compliance guidance',
            'Initial return filing assistance',
            'GST portal account setup',
        ],
        faqs: [
            {
                question: 'Is GST registration mandatory for my business?',
                answer: 'GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for some states). It\'s also required for businesses involved in inter-state supplies or e-commerce operations regardless of turnover.',
            },
            {
                question: 'How long does GST registration take?',
                answer: 'Typically, GST registration takes 5-7 working days after submission of all required documents.',
            },
            {
                question: 'What documents are needed for GST registration?',
                answer: 'Required documents include PAN card, Aadhaar card, business registration documents, bank account details, and property documents of your business location.',
            },
        ],
        icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z',
        category: 'registration',
        relatedServices: [1, 5, 6],
    },
    {
        id: '3',
        title: 'Trademark Registration',
        description: 'Protect your brand identity with our trademark registration services.',
        fullDescription: `Protect your brand's identity with our comprehensive trademark registration services. A registered trademark gives you exclusive rights to use your brand name, logo, or slogan and provides legal protection against infringement.

Our trademark experts will guide you through the entire registration process, from conducting a thorough trademark search to preparing and filing your application with the Trademark Registry. We'll handle all correspondence with the registry and address any objections that may arise during the examination process.

With our assistance, you can secure your brand identity and build customer trust while preventing competitors from using similar marks that might confuse consumers.`,
        features: [
            'Comprehensive trademark search',
            'Trademark classification guidance',
            'Application preparation and filing',
            'Handling official correspondence',
            'Addressing examination objections',
            'Opposition proceedings support',
            'Trademark renewal assistance',
        ],
        faqs: [
            {
                question: 'What can be registered as a trademark?',
                answer: 'Brand names, logos, slogans, sounds, colors, and even smells can potentially be registered as trademarks, provided they are distinctive and can identify your goods or services.',
            },
            {
                question: 'How long does trademark registration take in India?',
                answer: 'The complete trademark registration process typically takes 18-24 months, although you receive some legal protection from the date of filing.',
            },
            {
                question: 'What is the validity period of a trademark registration?',
                answer: 'A trademark registration is valid for 10 years from the date of application and can be renewed indefinitely for successive periods of 10 years.',
            },
        ],
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        category: 'intellectual',
        relatedServices: [4, 1, 8],
    },
];

const ServiceDetailPage = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const [service, setService] = useState<(typeof servicesData)[0] | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // In a real application, this would be an API call
        const fetchServiceDetails = () => {
            setLoading(true);
            try {
                const foundService = servicesData.find(s => s.id === serviceId);
                if (foundService) {
                    setService(foundService);
                    setError('');
                } else {
                    setError('Service not found');
                }
            } catch (err) {
                setError('Failed to load service details');
            } finally {
                setLoading(false);
            }
        };

        fetchServiceDetails();
    }, [serviceId]);

    if (loading) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-16 flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            </Layout>
        );
    }

    if (error || !service) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-16 flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-red-500 mb-4">{error || 'Service not found'}</h1>
                    <p className="mb-6">The service you're looking for could not be found.</p>
                    <Link to="/services">
                        <Button variant="primary">Back to Services</Button>
                    </Link>
                </div>
            </Layout>
        );
    }

    const relatedServices = servicesData.filter(s =>
        service.relatedServices.includes(Number(s.id)) && s.id !== service.id
    );

    return (
        <Layout>
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3">
                            <div className="flex items-center mb-4">
                                <Link to="/services" className="text-primary hover:text-primary-dark flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    All Services
                                </Link>
                                <span className="mx-2 text-gray-400">/</span>
                                <span className="text-gray-600">{service.title}</span>
                            </div>
                            <h1 className="text-4xl font-bold text-secondary-main mb-4">
                                {service.title}
                            </h1>
                            <p className="text-lg text-gray-600">
                                {service.description}
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
                            <div className="w-32 h-32 bg-primary-light/20 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none mb-12">
                                <h2 className="text-3xl font-bold text-secondary-main mb-6">Service Details</h2>
                                {service.fullDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 text-gray-700">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-secondary-main mb-6">Features & Benefits</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 w-6 h-6 bg-primary-light/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-secondary-main mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-6">
                                    {service.faqs.map((faq, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                            <h4 className="text-lg font-semibold text-secondary-main mb-2">{faq.question}</h4>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                                <h3 className="text-xl font-bold text-secondary-main mb-4">Ready to Get Started?</h3>
                                <p className="text-gray-600 mb-6">
                                    Contact us today to learn more about our {service.title.toLowerCase()} services and how we can help your business.
                                </p>
                                <div className="space-y-3">
                                    <Link to="/contact" className="w-full block">
                                        <Button variant="primary" fullWidth>
                                            Contact Us
                                        </Button>
                                    </Link>
                                    <a href="tel:+919876543210" className="flex items-center justify-center text-primary font-medium hover:text-primary-dark">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +91 9876543210
                                    </a>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="text-lg font-semibold text-secondary-main mb-4">Why Choose Jaadu Services?</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 bg-primary-light/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 text-sm">Expert team with 10+ years of experience</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 bg-primary-light/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 text-sm">Transparent pricing with no hidden fees</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 bg-primary-light/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 text-sm">Fast turnaround time for all services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 w-5 h-5 bg-primary-light/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600 text-sm">250+ satisfied clients across India</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {relatedServices.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-secondary-main mb-10 text-center">Related Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedServices.map((relatedService) => (
                                <div key={relatedService.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={relatedService.icon} />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-secondary-main mb-3">{relatedService.title}</h3>
                                    <p className="text-gray-600 mb-6">{relatedService.description}</p>
                                    <Link to={`/services/${relatedService.id}`} className="text-primary font-medium hover:text-primary-dark flex items-center">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-secondary-main mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our expert team is ready to help you with your {service.title.toLowerCase()} needs. Contact us today for a free consultation.
                        </p>
                        <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceDetailPage; 