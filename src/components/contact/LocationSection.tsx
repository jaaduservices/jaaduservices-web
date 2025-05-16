import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const LocationSection = () => {
    const [activeLocation, setActiveLocation] = useState('gurugram');

    const locations = [
        { id: 'gurugram', name: 'Gurugram', address: '2nd Floor, Plot 90, Udyog Vihar Phase 1, Sector 20, Gurugram, Haryana 122016', reviews: '4.5 ⭐⭐⭐⭐ (37k+ reviews)', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.384530510338!2d77.07903931507927!3d28.502983982469747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195f5fffffff%3A0x4650a87135d999c6!2sRegisterkaro!5e0!3m2!1sen!2sin!4v16788865' },
        { id: 'jaipur', name: 'Jaipur', address: 'Address for Jaipur (Placeholder)', reviews: null, mapEmbed: null },
        { id: 'bangalore', name: 'Bangalore', address: 'Address for Bangalore (Placeholder)', reviews: null, mapEmbed: null },
    ];

    const currentMap = locations.find(loc => loc.id === activeLocation);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Location</h2>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        {locations.map(loc => (
                            <button
                                key={loc.id}
                                onClick={() => setActiveLocation(loc.id)}
                                className={`w-full text-left p-4 rounded-lg border transition-colors flex justify-between items-center
                                    ${activeLocation === loc.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                            >
                                RegisterKaro - {loc.name}
                                <FaPlus className={`transform transition-transform ${activeLocation === loc.id ? 'rotate-45' : ''}`} />
                            </button>
                        ))}
                    </div>
                    <div>
                        {currentMap && (
                            <div className="p-4 border rounded-lg shadow-md bg-white">
                                <h3 className="font-semibold text-lg mb-2 text-gray-700">RegisterKaro - {currentMap.name}</h3>
                                <p className="text-sm text-gray-600 mb-1">{currentMap.address}</p>
                                {currentMap.reviews && <p className="text-sm text-gray-600 mb-3">{currentMap.reviews}</p>}
                                <div className="aspect-w-16 aspect-h-9">
                                    {currentMap.mapEmbed ? (
                                        <iframe
                                            src={currentMap.mapEmbed}
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`${currentMap.name} Location`}>
                                        </iframe>
                                    ) : (
                                        <div className="bg-gray-200 flex items-center justify-center rounded h-[300px]">Map Placeholder</div>
                                    )}
                                </div>
                                <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">View larger map</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection; 