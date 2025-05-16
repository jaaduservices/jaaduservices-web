import React, { useState } from 'react';
import Button from '../ui/Button'; // Assuming you have a Button component

// Placeholder Icons - Replace with actual SVGs
const LocationIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>;
const PhoneIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
const ClockIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const EmailIcon = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;

interface ContactInfoItemProps {
    icon: React.ReactNode;
    title: string;
    lines: string[];
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, lines }) => (
    <div className="flex items-start mb-8">
        <div className="bg-primary/10 p-4 rounded-full mr-5">{icon}</div>
        <div>
            <h4 className="font-semibold text-secondary-main mb-2 text-lg">{title}</h4>
            {lines.map((line, index) => (
                <p key={index} className="text-sm text-gray-600 mb-0.5">{line}</p>
            ))}
        </div>
    </div>
);

const ContactUsSection: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        countryCode: '+91',
        mobileNumber: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert('Form submitted (check console)!');
    };

    const contactInfo = [
        {
            icon: <LocationIcon className="w-6 h-6 text-primary" />,
            title: 'Main Office',
            lines: [
                'Safe Ledger Private Limited',
                '#101, Oxford Towers, 139,',
                'HAL Old Airport Rd,',
                'Kodihalli, Bengaluru,',
                'Karnataka 560008'
            ]
        },
        {
            icon: <PhoneIcon className="w-6 h-6 text-primary" />,
            title: 'Make a call',
            lines: ['Phone: +91 84477 46183']
        },
        {
            icon: <ClockIcon className="w-6 h-6 text-primary" />,
            title: 'Working Hours',
            lines: ['Monday-Friday: 9:00-06:00', 'Saturday-Sunday: Holiday']
        },
        {
            icon: <EmailIcon className="w-6 h-6 text-primary" />,
            title: 'Send an email',
            lines: ['support@registerkaro.in', 'admin@registerkaro.in'] // Note: Changed to Jaadu Services later if needed
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white min-h-[calc(100vh-80px)] flex flex-col justify-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-main uppercase relative inline-block">
                        <span className="relative">CONTACT US</span>
                        {/* Decorative underline - approximate */}
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-primary rounded-full"></span>
                    </h2>
                </div>

                <div className="bg-primary-light/10 p-10 md:p-14 lg:p-20 rounded-xl shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column: Contact Details */}
                    <div className="lg:w-2/5">
                        {contactInfo.map(item => <ContactInfoItem key={item.title} {...item} />)}
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:w-3/5">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-secondary-main mb-8">Contact Us</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full p-4 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-base" required />
                            </div>
                            <div>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Your Email" className="w-full p-4 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-base" required />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="sm:w-1/3">
                                    {/* Basic select, can be replaced with a custom dropdown */}
                                    <select name="countryCode" value={formData.countryCode} onChange={handleInputChange} className="w-full p-4 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-base">
                                        <option value="+91">IN (+91)</option>
                                        <option value="+1">US (+1)</option>
                                        {/* Add more country codes as needed */}
                                    </select>
                                </div>
                                <div className="sm:w-2/3">
                                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} placeholder="Mobile Number" className="w-full p-4 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-base" required />
                                </div>
                            </div>
                            <div>
                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message" rows={5} className="w-full p-4 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-base" required />
                            </div>
                            <div>
                                <Button type="submit" variant="primary" size="large" className="w-full sm:w-auto px-10 py-4 text-lg">
                                    Contact Us Now!
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection; 