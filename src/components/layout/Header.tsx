import { useState } from 'react';
import { Link } from 'react-router-dom';

// Placeholder for a dropdown icon, you can replace with a proper SVG or icon library
const DropdownIcon = () => (
    <svg className="ml-1 h-4 w-4 inline-block text-gray-500 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State for managing Startup dropdown visibility (optional, for actual dropdown functionality)
    // const [isStartupOpen, setIsStartupOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                    {/* Startup link with dropdown indicator - actual dropdown needs more logic */}
                    <div className="relative group">
                        <Link to="/startup" className="text-gray-700 hover:text-primary font-medium flex items-center">
                            Startup <DropdownIcon />
                        </Link>
                        {/* Basic Dropdown Structure (Hidden by default, shown on hover/click with more JS/CSS)*/}
                        {/* 
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-1 w-48 z-20">
                            <Link to="/startup/option1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">Option 1</Link>
                            <Link to="/startup/option2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">Option 2</Link>
                        </div> 
                        */}
                    </div>
                    <Link to="/blog" className="text-gray-700 hover:text-primary font-medium">Blog</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact Us</Link>
                    <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>

                    <a href="tel:+918447749183" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold transition-colors flex items-center text-sm shadow-md hover:shadow-lg">
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
                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                        <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2">Home</Link>
                        <div className="relative group">
                            <Link to="/startup" className="text-gray-700 hover:text-primary font-medium flex items-center py-2">
                                Startup <DropdownIcon />
                            </Link>
                        </div>
                        <Link to="/blog" className="text-gray-700 hover:text-primary font-medium py-2">Blog</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2">Contact Us</Link>
                        <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2">About Us</Link>

                        <a href="tel:+918447749183" className="mt-3 bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-md font-semibold transition-colors flex items-center justify-center text-sm shadow-md hover:shadow-lg">
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