import { useState } from 'react';
import { FaPlus, FaMapMarkerAlt } from 'react-icons/fa';

const LocationSection = () => {
    const [activeLocation, setActiveLocation] = useState('gurugram');

    const locations = [
        { id: 'gurugram', name: 'Gurugram', address: '2nd Floor, Plot 90, Udyog Vihar Phase 1, Sector 20, Gurugram, Haryana 122016', reviews: '4.5 ⭐⭐⭐⭐ (37k+ reviews)', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.384530510338!2d77.07903931507927!3d28.502983982469747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195f5fffffff%3A0x4650a87135d999c6!2sRegisterkaro!5e0!3m2!1sen!2sin!4v16788865', mapLink: 'https://goo.gl/maps/exampleGurugram' },
        { id: 'jaipur', name: 'Jaipur', address: '123 Jaipur Main St, Jaipur, Rajasthan 302001', reviews: 'New Office!', mapEmbed: null, mapLink: 'https://goo.gl/maps/exampleJaipur' },
        { id: 'bangalore', name: 'Bangalore', address: '456 Bangalore Tech Park, Bangalore, Karnataka 560001', reviews: 'Coming Soon!', mapEmbed: null, mapLink: 'https://goo.gl/maps/exampleBangalore' },
    ];

    const currentMap = locations.find(loc => loc.id === activeLocation);
    const staticMapPlaceholder = 'https://images.unsplash.com/photo-1560521037-5c7318f173ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our <span className="text-orange-500">Locations</span></h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                    <div className="w-full md:w-1/3 space-y-4">
                        {locations.map(loc => (
                            <button
                                key={loc.id}
                                onClick={() => setActiveLocation(loc.id)}
                                className={`w-full text-left p-5 rounded-lg border-2 transition-all duration-300 ease-in-out flex justify-between items-center shadow-sm hover:shadow-md
                                    ${activeLocation === loc.id ? 'bg-orange-500 text-white border-orange-600 scale-105' : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'}`}
                            >
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className={`mr-3 text-xl ${activeLocation === loc.id ? 'text-white' : 'text-orange-500'}`} />
                                    <div>
                                        <span className="font-semibold block text-lg">RegisterKaro - {loc.name}</span>
                                        {activeLocation === loc.id && loc.reviews && <span className="text-xs opacity-80">{loc.reviews}</span>}
                                    </div>
                                </div>
                                <FaPlus className={`transform transition-transform duration-300 ${activeLocation === loc.id ? 'rotate-45 text-white' : 'text-orange-500'}`} />
                            </button>
                        ))}
                    </div>
                    <div className="w-full md:w-2/3 mt-8 md:mt-0">
                        {currentMap && (
                            <div className="p-6 border border-gray-200 rounded-xl shadow-xl bg-white min-h-[450px] flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{currentMap.name} Office</h3>
                                <p className="text-md text-gray-600 mb-1"><span className="font-semibold">Address:</span> {currentMap.address}</p>
                                {currentMap.reviews && <p className="text-sm text-orange-600 font-medium mb-4"><span className="font-semibold text-gray-700">Info:</span> {currentMap.reviews}</p>}
                                <div className="aspect-w-16 aspect-h-9 flex-grow rounded-lg overflow-hidden">
                                    {currentMap.mapEmbed ? (
                                        <iframe
                                            src={currentMap.mapEmbed}
                                            width="100%"
                                            height="100%"
                                            className="min-h-[300px] md:min-h-[350px] border-0"
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`${currentMap.name} Location Map`}>
                                        </iframe>
                                    ) : (
                                        <img
                                            src={staticMapPlaceholder}
                                            alt={`${currentMap.name} location placeholder map`}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <a
                                    href={currentMap.mapLink || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-600 hover:text-orange-700 font-semibold hover:underline mt-4 inline-block"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection; 