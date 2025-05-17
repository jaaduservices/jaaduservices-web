import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaRegNewspaper } from 'react-icons/fa';

// Updated DropdownIcon to use FaAngleDown for consistency
const DropdownIcon = ({ isOpen }: { isOpen?: boolean }) => (
    <FaAngleDown className={`ml-1 h-4 w-4 inline-block text-gray-500 group-hover:text-primary transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
);

// Data for the Startup Mega Menu
const startupMenuData = {
    "BUSINESS REGISTRATION": [
        'Private Limited Company Registration', 'Public Limited Company Registration', 'LLP Registration',
        'One Person Company Registration', 'Partnership Firm Registration', 'Sole Proprietorship Registration',
        'Indian Subsidiary Registration', 'Nidhi Company Registration', 'Producer Company Registration', 'Startup India Registration'
    ],
    "NGO": ['Section 8 Company Registration', 'Trust Registration', 'NGO Registration'],
    "COMPLIANCES": ['Annual Compliance of LLP', 'Annual Compliance For Private Limited', 'Nidhi Company Annual Compliance'],
    "CHANGE IN BUSINESS": ['Change In Directors', 'Change in Registered Office', 'Increase in Authorized Share Capital', 'Winding Up of a Company'],
    "BIS & CDSCO": [
        'BIS Certification', 'BIS FMCS Certification', 'BIS CRS Certification',
        'ISI Mark Certification', 'CDSCO Registration', 'Medical Device Registration'
    ],
    "GOVERNMENT REGISTRATION": [
        'Trademark Registration', 'IEC Registration', 'ESI Registration',
        'EPF Registration', 'MSME Registration', 'Shop and Establishment Registration'
    ],
    "FSSAI": ['FSSAI License', 'FSSAI State License', 'FSSAI Central License', 'FPO Mark Certification'],
    "ENVIRONMENTAL": ['EPR Registration', 'PRO Authorization', 'Plastic Waste Authorization', 'Environmental Clearance', 'EPR Authorization E-Waste']
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStartupMenuOpen, setIsStartupMenuOpen] = useState(false);
    const [isMobileStartupMenuOpen, setIsMobileStartupMenuOpen] = useState(false);
    const startupMenuRef = useRef<HTMLDivElement>(null); // Ref for click outside

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleStartupMenu = () => setIsStartupMenuOpen(!isStartupMenuOpen);
    const toggleMobileStartupMenu = () => setIsMobileStartupMenuOpen(!isMobileStartupMenuOpen);

    // Close startup menu on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (startupMenuRef.current && !startupMenuRef.current.contains(event.target as Node)) {
                setIsStartupMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold text-primary">Jaadu Services</span>
                </Link>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>

                    {/* Startup Button with Mega Menu Dropdown */}
                    <div className="relative group" ref={startupMenuRef}>
                        <button
                            onClick={toggleStartupMenu}
                            className="bg-white text-gray-700 hover:text-primary font-medium flex items-center focus:outline-none border-none"
                        >
                            Startup <DropdownIcon isOpen={isStartupMenuOpen} />
                        </button>

                        {isStartupMenuOpen && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl p-6 bg-white rounded-lg shadow-xl z-20">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                                    {Object.entries(startupMenuData).map(([category, services]) => (
                                        <div key={category}>
                                            <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                                                <FaRegNewspaper className="mr-2 text-primary opacity-75" />
                                                {category}
                                            </h3>
                                            <ul className="space-y-1.5">
                                                {services.map(service => (
                                                    <li key={service}>
                                                        <Link
                                                            to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} // Example link
                                                            className="block text-xs text-gray-600 hover:text-primary transition-colors duration-150"
                                                            onClick={() => setIsStartupMenuOpen(false)} // Close menu on link click
                                                        >
                                                            {service}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact Us</Link>
                    <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>

                    <a href="tel:+919696205563" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-colors flex items-center text-sm shadow-md hover:shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform -rotate-145" fill="currentColor" viewBox="0 0 20 20" >
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        +919696205563
                    </a>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-1">
                        <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Home</Link>

                        {/* Mobile Startup Menu Button */}
                        <button
                            onClick={toggleMobileStartupMenu}
                            className="bg-white border border-transparent text-gray-700 hover:text-primary font-medium flex items-center justify-between py-2 w-full text-left"
                        >
                            Startup <DropdownIcon isOpen={isMobileStartupMenuOpen} />
                        </button>

                        {/* Mobile Startup Menu Items */}
                        {isMobileStartupMenuOpen && (
                            <div className="pl-4 border-l border-gray-200 pb-2">
                                {Object.entries(startupMenuData).map(([category, services]) => (
                                    <div key={category} className="py-2">
                                        <h3 className="text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider flex items-center">
                                            {/* Optional: Icon can be added here if desired */}
                                            {category}
                                        </h3>
                                        <ul className="space-y-1">
                                            {services.map(service => (
                                                <li key={service}>
                                                    <Link
                                                        to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="block text-sm text-gray-600 hover:text-primary transition-colors duration-150 py-0.5"
                                                        onClick={() => {
                                                            setIsMobileStartupMenuOpen(false);
                                                            toggleMenu();
                                                        }}
                                                    >
                                                        {service}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        <Link to="/blog" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Blog</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Contact Us</Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>About Us</Link>

                        <a href="tel:+919696205563" className="mt-3 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md font-semibold transition-colors flex items-center justify-center text-sm shadow-md hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform -rotate-145" fill="currentColor" viewBox="0 0 20 20" >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +919696205563
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 