const partners = [
    { id: 1, name: 'Adobe', logo: '/images/partners/adobe.svg' },
    { id: 2, name: 'Microsoft', logo: '/images/partners/microsoft.svg' },
    { id: 3, name: 'Google', logo: '/images/partners/google.svg' },
    { id: 4, name: 'IBM', logo: '/images/partners/ibm.svg' },
    { id: 5, name: 'HP', logo: '/images/partners/hp.svg' },
    { id: 6, name: 'Amazon', logo: '/images/partners/amazon.svg' },
];

const PartnersSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">We Partner with the best</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We collaborate with industry leaders to provide the best services to our clients.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {partners.map((partner) => (
                        <div key={partner.id} className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = '/placeholder.svg';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection; 