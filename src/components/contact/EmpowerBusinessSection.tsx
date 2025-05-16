const EmpowerBusinessSection = () => {
    const services = [
        { title: 'Private Limited Company Registration', img: 'https://registerkaro.in/wp-content/uploads/2023/09/Private-Limited-Company-Registration.webp' },
        { title: 'FSSAI Certificate Registration', img: 'https://registerkaro.in/wp-content/uploads/2023/09/FSSAI-Food-License.webp' },
        { title: 'LLP Registration', img: 'https://registerkaro.in/wp-content/uploads/2023/09/LLP-Registration.webp' },
        { title: 'Trademark Registration', img: 'https://registerkaro.in/wp-content/uploads/2023/09/Trademark-Registration.webp' },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Empower Your Business With <span className="text-orange-500">RegisterKaro!</span></h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">Unlock Seamless Solutions for Incorporation, Compliance, and Taxation with Our Expert Services!</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                            <div className="p-5 bg-blue-600 text-white">
                                <h3 className="font-semibold text-center">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="mt-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-colors text-lg">
                    Get Started Today
                </button>
            </div>
        </section>
    );
};

export default EmpowerBusinessSection; 