import { useState } from 'react';
// Assuming you might want icons for the cards, add imports if needed
// import { FaPhoneAlt, FaRegBuilding, FaTrademark } from 'react-icons/fa';

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        fullName: '', // Changed from 'name' to 'fullName' to match placeholder
        email: '',
        mobileNumber: '', // Changed from 'phone' to 'mobileNumber'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { // Added HTMLSelectElement for potential future use
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            // Reset form after a delay to show success message
            setTimeout(() => {
                setSubmitSuccess(false);
                setFormData({ fullName: '', email: '', mobileNumber: '' });
            }, 3000);
        }, 1500);
    };

    const contactCards = [
        { title: 'Sales', phone: '+91 84477 45183', icon: undefined /* <FaPhoneAlt className="text-3xl text-orange-500 mb-3" /> */ },
        { title: 'Incorporation & Registrations', phone: '+91 84487 18660', icon: undefined /* <FaRegBuilding className="text-3xl text-orange-500 mb-3" /> */ },
        { title: 'Trademark & Copyright', phone: '+91 92050 96387', icon: undefined /* <FaTrademark className="text-3xl text-orange-500 mb-3" /> */ },
    ];

    return (
        <section className="py-16 bg-gray-50"> {/* Changed background to light gray */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
                    <p className="text-gray-600 mt-2 text-lg">The perfect solution is just a Call Away! <span className="font-semibold text-orange-500">Ring Now!</span></p> {/* Highlighted Ring Now */}
                </div>

                <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start justify-center">
                    {/* Left Side: Contact Cards & Note */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <div className="grid sm:grid-cols-3 gap-6">
                            {contactCards.map((card, index) => (
                                <div key={index} className="p-6 border border-orange-300 rounded-xl bg-white shadow-lg text-center transition-all hover:shadow-xl hover:border-orange-500">
                                    {/* card.icon */} {/* If you add icons, uncomment this */}
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">{card.title}</h3>
                                    <p className="text-orange-600 font-medium text-md">{card.phone}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <p className="text-md text-gray-700 leading-relaxed">
                                <span className="font-semibold">Note:</span> RegisterKaro is a leading group of expert professionals, known for its excellence in guiding corporate businesses and entrepreneurs. We specialize in company incorporation, tax services, and a wide range of other professional services, all delivered with individual expertise and dedication.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-2/5 bg-slate-800 p-8 rounded-xl shadow-2xl text-white">
                        <h3 className="text-xl font-bold mb-2 text-center">
                            Submit your Details to get an Instant <span className="text-yellow-400">All-inclusive</span> Quote to your email and a <span className="text-yellow-400">FREE</span> Expert consultation
                        </h3>

                        {submitSuccess ? (
                            <div className="bg-green-500 border border-green-600 text-white px-4 py-3 rounded-md relative mt-6 text-center" role="alert">
                                <strong className="font-bold">Success!</strong>
                                <p className="block sm:inline"> Your details have been submitted. We'll be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                                <div>
                                    <label htmlFor="fullName" className="sr-only">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-white text-sm"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Enter Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-white text-sm"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>
                                <div className="flex items-center">
                                    {/* Basic country code selector - for a real app, use a library */}
                                    <select
                                        name="countryCode"
                                        defaultValue="+91"
                                        className="px-3 py-3 bg-slate-700 border border-slate-600 rounded-l-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white text-sm appearance-none"
                                    // onChange={handleChange} // If you need to capture this
                                    >
                                        <option>+91</option>
                                        {/* Add other country codes if needed */}
                                    </select>
                                    <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="mobileNumber"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-r-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-white text-sm"
                                        placeholder="Mobile Number"
                                        required
                                        pattern="[0-9]{10}" // Basic 10 digit validation
                                        title="Please enter a valid 10-digit mobile number"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Get a Detailed Quotation Now!'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection; 