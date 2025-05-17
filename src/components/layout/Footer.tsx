import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const serviceCategories = {
        "START A BUSINESS": [
            'Private Limited Company',
            'Limited Liability Partnership',
            'One Person Company',
            'Section 8 Company Registration',
            'Nidhi Company Registration',
            'Producer Company Registration',
            'MSME Registration'
        ],
        "GOVERNMENT REGISTRATION": [
            'FSSAI Registration',
            'IEC Registration',
            'Trademark Registration',
            'DSC Registration'
        ],
        "COMPLIANCE & TAX": [
            'Compliance Pvt Ltd',
            'Compliance LLP',
            'GST Registration'
        ],
        "BIS & CDSCO": [
            'BIS Certification',
            'BIS FMCS Certification',
            'BIS CRS Certification',
            'ISI Mark Certification',
            'CDSCO Registration',
            'Medical Device Registration'
        ],
    };

    const socialLinks = [
        { label: 'Facebook', href: '#', icon: <FaFacebookF /> },
        { label: 'Instagram', href: '#', icon: <FaInstagram /> },
        { label: 'Twitter', href: '#', icon: <FaTwitter /> },
        { label: 'LinkedIn', href: '#', icon: <FaLinkedinIn /> },
        { label: 'YouTube', href: '#', icon: <FaYoutube /> },
    ];

    return (
        <footer className="bg-[#0A1E3C] text-gray-300 py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mb-10 md:mb-12">
                    {Object.entries(serviceCategories).map(([category, services]) => (
                        <div key={category}>
                            <h5 className="text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">{category}</h5>
                            <ul className="space-y-2">
                                {services.map(service => (
                                    <li key={service} className="text-sm">
                                        <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-10 md:mb-12">
                    <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-[#0A1E3C] font-semibold py-2.5 px-8 rounded-md transition-colors duration-300 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                        See all the services
                    </button>
                </div>

                <div className="border-t border-gray-700 pt-8 md:pt-10">
                    <div className="flex justify-start space-x-4 mb-8 md:mb-10">
                        {socialLinks.map(social => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-xl"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="text-sm space-y-5 text-gray-400 leading-relaxed">
                        <div>
                            <h6 className="text-orange-400 font-semibold mb-1 text-base">Elevate Your Business with RegisterKaro</h6>
                            <p>
                                As a leading technology-driven legal services and advisory firm, we empower SMEs and entrepreneurs on their business journey. Our expert team covers business registration, legal compliance, tax filing, IPR registration, and more. With over 200 professionals, we've served 50,000+ satisfied customers, ensuring startup compliance with our country's legal and regulatory systems.
                            </p>
                        </div>
                        <div>
                            <h6 className="text-orange-400 font-semibold mb-1 text-base">Navigating Regulatory Affairs</h6>
                            <p>
                                In India, regulatory bodies like BIS, CDSCO, RBI, SEBI, and IRDAI hold the keys to licenses and registrations for banks, financial institutions, and insurance businesses. We simplify this process by connecting you with our legal professionals. We understand your needs, handle license or registration applications, liaise with authorities, and deliver the licenses you require.
                            </p>
                        </div>
                        <div>
                            <h6 className="text-orange-400 font-semibold mb-1 text-base">Environmental Solutions</h6>
                            <p>
                                RegisterKaro offers a comprehensive range of services to address environmental challenges in business. Our seasoned environmental experts, with over a decade of experience, provide comprehensive solutions for environmental compliance and advisory, including battery waste management, plastic waste management, and e-waste management.
                            </p>
                        </div>
                        <div>
                            <h6 className="text-orange-400 font-semibold mb-1 text-base">Business Registration Expertise</h6>
                            <p>
                                We are renowned for facilitating business registration, whether it's as a private limited company, one-person company, Section 8 company, LLP, public company, or Nidhi company. Our consultancy services extend from business setup from scratch to ongoing compliance.
                            </p>
                        </div>
                        <div>
                            <h6 className="text-orange-400 font-semibold mb-1 text-base">Safeguarding Intellectual Property</h6>
                            <p>
                                Intellectual property protection is vital for modern businesses. Our team excels in IP registration services such as trademark registration, handling objections, managing assignments, copyright registration, and patent registration.
                            </p>
                        </div>
                        <div>
                            <h6 className="text-orange-400 font-semibold mb-1 text-base">Simplifying Taxation</h6>
                            <p>
                                RegisterKaro is your all-in-one solution for tax-related needs. Our dedicated professionals assist with GST registration, professional tax registration, GST return filing, TDS return filing, income tax return filing, and secretarial audits. Your tax matters are in capable hands with RegisterKaro.
                            </p>
                        </div>

                        <div className="border-t border-gray-700 pt-8 mt-8 md:mt-10">
                            <p className="text-center text-xs text-gray-500 mb-2">
                                By continuing this page, you agree to our <a href="#" className="text-white hover:underline">Terms & Conditions</a>, <a href="#" className="text-white hover:underline">Privacy Policy</a> and <a href="#" className="text-white hover:underline">Refund Policy</a>.
                            </p>
                            <p className="text-center text-xs text-gray-500">
                                &copy; {new Date().getFullYear()} - Safe Ledger Private Limited. All rights reserved.
                            </p>
                        </div>

                        <p className="mt-6 text-xs text-gray-500 leading-relaxed">
                            Please note that we are a facilitating platform enabling access to reliable professionals. We are not a law firm and do not provide legal services ourselves. The information on this website is for the purpose of knowledge only and should not be relied upon as legal advice or opinion.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 