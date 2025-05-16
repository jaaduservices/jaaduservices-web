import { Link } from 'react-router-dom';

// Updated Icon components for each service
const CompanyFormationIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6.75h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        {/* Attempt to add orange check - very basic approximation */}
        <circle cx="17" cy="7" r="1.5" fill="#F97316" />
    </svg>
);

const CompanySecretarialIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Briefcase
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.155A4.876 4.876 0 0115.75 10.5H8.25c-1.096 0-2.098.447-2.824 1.175A4.876 4.876 0 013.75 10.5M21 13.5V21a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 21V13.5m18 0v-2.25a2.25 2.25 0 00-2.25-2.25H5.25a2.25 2.25 0 00-2.25 2.25V13.5" />
    </svg>
);

const VirtualOfficeIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Monitor with person/chat
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75c-3.034 0-5.586-1.735-5.586-3.865 0-1.5.99-2.792 2.392-3.441" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 11.25a.375.375 0 11-.75 0 .375.375 0 01.75 0zM17.625 12c.375-.375.375-.375 0 0z" />
    </svg>
);

const AnnualComplianceIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Clipboard with check
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6H8.25A2.25 2.25 0 006 8.25v7.5A2.25 2.25 0 008.25 18h7.5A2.25 2.25 0 0018 15.75V8.25A2.25 2.25 0 0015.75 6z" />
    </svg>
);

const VatRegistrationIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Document/Tax related
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75H9.75M9.75 9.75A1.125 1.125 0 018.625 8.625m1.125 1.125A1.125 1.125 0 009.75 10.875m0-1.125A1.125 1.125 0 0110.875 9.75m-1.125 0A1.125 1.125 0 009.75 8.625" fill="#F97316" />
    </svg>
);

const PayrollServicesIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Hand with coin
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 6.75L12 4.875l1.875 1.875M10.125 12.75L12 10.875l1.875 1.875M12 16.5V9.75m0 0c-.952 0-1.763.588-2.104 1.423A3.75 3.75 0 008.25 12.75H7.5m4.5 0H16.5a.75.75 0 00.75-.75V9.75M12 16.5h.008v.008H12v-.008zm0 0c-.725.605-1.664 1.021-2.75 1.118V21h5.5v-3.382c-1.086-.097-2.025-.513-2.75-1.118z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill="#F97316" />
    </svg>
);

const BookkeepingServicesIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Calculator
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m0-2.25H18M18 15.75H6M18 15.75V6A2.25 2.25 0 0015.75 3.75H8.25A2.25 2.25 0 006 6v9.75M15.75 9.75h-7.5M15.75 12.75h-7.5M9 15.75h-.008v.008H9v-.008zm3 0h-.008v.008h.008v-.008zm3 0h-.008v.008h.008v-.008zM9.75 6.75h.008v.008H9.75V6.75zm3 0h.008v.008h-.008V6.75zm3 0h.008v.008h-.008V6.75zM8.25 9.75V6M12 9.75V6m3.75 3.75V6" />
    </svg>
);

const WebinarsWorkshopsIcon = ({ className = "h-12 w-12 text-secondary-main" }: { className?: string }) => ( // Presentation Screen / Laptop
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15A2.25 2.25 0 0118.75 17.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V15m0-2.25H9.75m2.25 0H14.25m-4.5 0v2.25m4.5-2.25v2.25M7.5 12.75h-1.5M18 12.75h-1.5" />
    </svg>
);

const servicesData = [
    { id: 1, title: 'Company Formation', icon: <CompanyFormationIcon /> },
    { id: 2, title: 'Company Secretarial Services', icon: <CompanySecretarialIcon /> },
    { id: 3, title: 'Virtual Office Address', icon: <VirtualOfficeIcon /> },
    { id: 4, title: 'Annual Compliance Services', icon: <AnnualComplianceIcon /> },
    { id: 5, title: 'VAT Registration, Preparation & Filing', icon: <VatRegistrationIcon /> },
    { id: 6, title: 'Payroll Services', icon: <PayrollServicesIcon /> },
    { id: 7, title: 'Bookkeeping Services', icon: <BookkeepingServicesIcon /> },
    { id: 8, title: 'Live Online Webinars & Workshops', icon: <WebinarsWorkshopsIcon /> },
];

const ServicesSection = () => {
    return (
        <section className="py-24 lg:py-32 bg-white min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-main uppercase relative inline-block">
                        <span className="absolute -top-0 -left-1.5 md:-top-1 md:-left-2 transform -translate-x-1/2 -translate-y-1/4">
                            <span className="block w-8 h-8 md:w-9 md:h-9 bg-yellow-300/60 rounded-full"></span>
                        </span>
                        <span className="relative">OUR SERVICES</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-x-10 gap-y-12 md:gap-y-16 mb-16 lg:mb-20">
                    {servicesData.map((service) => (
                        <div key={service.id} className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-slate-100 p-5 rounded-xl mb-6 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-md lg:text-lg font-semibold text-secondary-main leading-tight px-1">{service.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-16 lg:mt-20 pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                    <div className="md:w-2/3 text-center md:text-left">
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                            Our Client Services Team is always happy to talk to you about what is best for your needs. Contact our team to find out if we are the right fit for you.
                        </p>
                    </div>
                    <div className="md:w-1/3 text-center md:text-right">
                        <Link to="/services" className="text-primary hover:text-primary-dark font-semibold text-lg group">
                            Explore our services
                            <span className="ml-2 inline-block transform transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection; 