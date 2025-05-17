const EmpowerBusinessSection = () => {
    const services = [
        { title: 'Private Limited Company Registration', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80' },
        { title: 'FSSAI Certificate Registration', img: 'https://images.unsplash.com/photo-1579027989162-858a30030535?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { title: 'LLP Registration', img: 'https://images.unsplash.com/photo-1600880292203-943bb4495130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
        { title: 'Trademark Registration', img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-orange-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Empower Your Business With <span className="text-orange-500">RegisterKaro!</span></h2>
                <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-lg">Unlock Seamless Solutions for Incorporation, Compliance, and Taxation with Our Expert Services!</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {services.map(service => (
                        <div key={service.title} className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                            <img src={service.img} alt={service.title} className="w-full h-52 object-cover" />
                            <div className="p-5 flex-grow flex flex-col justify-between bg-slate-800 text-white">
                                <h3 className="font-semibold text-lg text-center text-white mb-3">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    href="/get-started"
                    className="mt-12 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                    Get Started Today
                </a>
            </div>
        </section>
    );
};

export default EmpowerBusinessSection; 