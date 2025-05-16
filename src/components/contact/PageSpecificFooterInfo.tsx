const PageSpecificFooterInfo = () => {
    const serviceCategories = {
        "START A BUSINESS": ['Private Limited Company', 'Limited Liability Partnership', 'One Person Company', 'Section 8 Company Registration', 'Nidhi Company Registration', 'Producer Company Registration', 'MSME Registration'],
        "GOVERNMENT REGISTRATION": ['FSSAI Registration', 'IEC Registration', 'Trademark Registration', 'DSC Registration'],
        "COMPLIANCE & TAX": ['Compliance Pvt Ltd', 'Compliance LLP', 'GST Registration'],
        "BIS & CDSCO": ['BIS FMCS Certification', 'BIS CRS Certification', 'ISI Mark Certification', 'CDSCO Registration', 'Medical Device Registration'],
    };

    return (
        <footer className="bg-[#0A1E3C] text-gray-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
                    {Object.entries(serviceCategories).map(([category, services]) => (
                        <div key={category}>
                            <h5 className="text-white font-semibold mb-4 uppercase">{category}</h5>
                            <ul className="space-y-2 text-sm">
                                {services.map(service => (
                                    <li key={service}><a href="#" className="hover:text-yellow-400 transition-colors">{service}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="lg:col-span-1 flex flex-col items-start md:items-start">
                        <button className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold py-2 px-6 rounded-md transition-colors mb-6 w-full md:w-auto">
                            See all the services
                        </button>
                        <div className="flex space-x-3 mb-4 self-start">
                            {/* Social Media Icons (SVG paths are placeholders, replace with actual icons or a library) */}
                            <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="Twitter">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.824c-3.141 0-3.51.012-4.731.069-2.95.133-4.026 1.214-4.159 4.16-.057 1.22-.068 1.565-.068 4.731 0 3.166.011 3.511.068 4.731.133 2.946 1.209 4.027 4.159 4.16 1.221.056 1.59.068 4.731.068s3.51-.012 4.731-.068c2.95-.133 4.026-1.214 4.159-4.16.057-1.22.068-1.565.068-4.731 0-3.166-.011-3.511-.068-4.731-.133-2.946-1.209-4.027-4.159-4.16-1.221-.056-1.59-.068-4.731-.068zm0 3.971c-2.968 0-5.378 2.41-5.378 5.378s2.41 5.378 5.378 5.378 5.378-2.41 5.378-5.378-2.41-5.378-5.378-5.378zm0 8.709c-1.841 0-3.331-1.49-3.331-3.331s1.49-3.331 3.331-3.331 3.331 1.49 3.331 3.331-1.49 3.331-3.331 3.331zm6.153-8.91c-.751 0-1.36-.61-1.36-1.36s.61-1.36 1.36-1.36 1.36.61 1.36 1.36-.609 1.36-1.36 1.36z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400" aria-label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-sm space-y-4">
                    <p><span className="font-semibold">Elevate Your Business with RegisterKaro</span><br />
                        As a leading technology-driven legal services and advisory firm, we empower SMEs and entrepreneurs on their business journey. Our expert team covers business registration, legal compliance, tax filing, IPR registration, and more. With over 200 professionals, we've served 50,000+ satisfied customers, ensuring startup compliance with our country's legal and regulatory systems.</p>

                    <p><span className="font-semibold">Navigating Regulatory Affairs</span><br />
                        In India, regulatory bodies like BIS, COSco, RBI, SEBI, and IRDAI hold the keys to licenses and registrations for banks, financial institutions, and insurance businesses. We simplify this process by connecting you with our legal professionals. We understand your needs, handle license or registration applications, liaise with authorities, and deliver the licenses you require.</p>

                    <p><span className="font-semibold">Environmental Solutions</span><br />
                        RegisterKaro offers a comprehensive range of services to address environmental challenges in business. Our seasoned environmental experts, with over a decade of experience, provide comprehensive solutions for environmental compliance and advisory, including battery waste management, plastic waste management, and e-waste management.
                    </p>

                    <p><span className="font-semibold">Business Registration Expertise</span><br />
                        We are renowned for facilitating business registration, whether it's as a private limited company, one-person company, Section 8 company, LLP, public company, or Nidhi company. Our consultancy services extend from business setup from scratch to ongoing compliance.
                    </p>

                    <p><span className="font-semibold">Safeguarding Intellectual Property</span><br />
                        Intellectual property protection is vital for modern businesses. Our team excels in IP registration services such as trademark registration, handling objections, managing assignments, copyright registration, and patent registration.
                    </p>

                    <p><span className="font-semibold">Simplifying Taxation</span><br />
                        RegisterKaro is your all-in-one solution for tax-related needs. Our dedicated professionals assist with GST registration, professional tax registration, GST return filing, TDS return filing, income tax return filing, and secretarial audits. Your tax matters are in capable hands with RegisterKaro.
                    </p>

                    <p className="mt-6">By continuing this page, you agree to our <a href="#" className="text-yellow-400 hover:underline">Terms & Conditions</a>, <a href="#" className="text-yellow-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-yellow-400 hover:underline">Refund Policy</a>.</p>
                    <p className="mt-2">&copy; {new Date().getFullYear()} - Safe Ledger Private Limited. All rights reserved.</p>
                    <p className="mt-4 text-xs text-gray-400">
                        Please note that we are a facilitating platform enabling access to reliable professionals. We are not a law firm and do not provide legal services or advice. The information on this website is for the purpose of knowledge only and should not be relied upon as legal advice or opinion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default PageSpecificFooterInfo; 