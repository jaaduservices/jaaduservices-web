import { useState } from 'react';

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', phone: '' });
        }, 1500);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
                    <p className="text-gray-600 mt-2">The perfect solution is just a Call Away! <span className="font-semibold">Ring Now!</span></p>
                </div>
                <div className="grid md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7 space-y-6">
                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="p-6 border border-yellow-400 rounded-lg bg-white shadow-lg text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Sales</h3>
                                <p className="text-gray-600 text-sm">+91 84477 48183</p>
                            </div>
                            <div className="p-6 border border-yellow-400 rounded-lg bg-white shadow-lg text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Incorporation & Registrations</h3>
                                <p className="text-gray-600 text-sm">+91 84481 08083</p>
                            </div>
                            <div className="p-6 border border-yellow-400 rounded-lg bg-white shadow-lg text-center">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Trademark & Copyright</h3>
                                <p className="text-gray-600 text-sm">+91 93116 96887</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-6">
                            Note: RegisterKaro is a leading group of expert professionals, known for its excellence in guiding corporate businesses and entrepreneurs. We specialize in company incorporation, tax services, and a broad range of other professional services, all delivered with individual expertise and dedication.
                        </p>
                    </div>

                    <div className="md:col-span-5 bg-[#0A2540] p-8 rounded-lg shadow-xl text-white">
                        <h3 className="text-xl font-semibold mb-1">Submit your Details to get an Instant All-inclusive Quote to your email and a <span className="text-yellow-400">FREE</span> Expert consultation</h3>
                        {submitSuccess ? (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                                <strong className="font-bold">Success!</strong>
                                <span className="block sm:inline"> Your message has been sent. We'll be in touch.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-[#1E3A5F] border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-white"
                                        placeholder="Enter Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Enter Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-[#1E3A5F] border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-white"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-[#1E3A5F] border border-gray-600 rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-400 text-white"
                                        placeholder="Enter Your Mobile Number"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition-colors"
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