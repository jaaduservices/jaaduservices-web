import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <Layout>
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-secondary-main mb-4">About Jaadu Services</h1>
                        <p className="text-lg text-gray-600">Your trusted partner for all business consultancy needs</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                alt="Our Team"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-secondary-main mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2013, Jaadu Services has been at the forefront of business consultancy services in India.
                                What started as a small team of passionate business consultants has now grown into a comprehensive
                                service provider helping entrepreneurs and businesses navigate the complex world of business registration,
                                compliance, and growth.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our mission is to simplify the business journey for entrepreneurs by providing expert guidance,
                                timely service, and end-to-end solutions that allow them to focus on what they do best -
                                building their business.
                            </p>
                            <p className="text-gray-600">
                                With over 250+ happy clients and a team of experienced professionals, we take pride in our
                                ability to deliver customized solutions that meet the unique needs of each client.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-secondary-main mb-12 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-main mb-3">Excellence</h3>
                            <p className="text-gray-600">We strive for excellence in every service we provide, ensuring the highest quality and attention to detail.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-main mb-3">Transparency</h3>
                            <p className="text-gray-600">We believe in complete transparency in our processes, pricing, and communications with our clients.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-main mb-3">Timeliness</h3>
                            <p className="text-gray-600">We understand the value of time in business and are committed to delivering our services promptly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-secondary-main mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join hundreds of satisfied clients who trust Jaadu Services for their business needs.
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

export default AboutPage; 