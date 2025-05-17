const partners = [
    { id: 'google', name: 'Google', domain: 'google.com' },
    { id: 'microsoft', name: 'Microsoft', domain: 'microsoft.com' },
    { id: 'apple', name: 'Apple', domain: 'apple.com' },
    { id: 'amazon', name: 'Amazon', domain: 'amazon.com' },
    { id: 'meta', name: 'Meta (Facebook)', domain: 'meta.com' },
    { id: 'samsung', name: 'Samsung', domain: 'samsung.com' },
    { id: 'intel', name: 'Intel', domain: 'intel.com' },
    { id: 'ibm', name: 'IBM', domain: 'ibm.com' },
    { id: 'cisco', name: 'Cisco', domain: 'cisco.com' },
    { id: 'oracle', name: 'Oracle', domain: 'oracle.com' },
    { id: 'adobe', name: 'Adobe', domain: 'adobe.com' },
    { id: 'sap', name: 'SAP', domain: 'sap.com' },
    { id: 'salesforce', name: 'Salesforce', domain: 'salesforce.com' },
    { id: 'dell', name: 'Dell', domain: 'dell.com' },
    { id: 'hp', name: 'HP', domain: 'hp.com' },
    { id: 'nvidia', name: 'Nvidia', domain: 'nvidia.com' },
    { id: 'qualcomm', name: 'Qualcomm', domain: 'qualcomm.com' },
    { id: 'sony', name: 'Sony', domain: 'sony.com' },
    { id: 'panasonic', name: 'Panasonic', domain: 'panasonic.com' },
    { id: 'lg', name: 'LG', domain: 'lg.com' },
    { id: 'toyota', name: 'Toyota', domain: 'toyota.com' },
    { id: 'cocacola', name: 'Coca-Cola', domain: 'coca-colacompany.com' },
    { id: 'mcdonalds', name: 'McDonald\'s', domain: 'mcdonalds.com' },
    { id: 'nike', name: 'Nike', domain: 'nike.com' },
];

const PartnersSection = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        We <span className="text-orange-500">partner</span> with the best,
                        <br className="hidden md:block" /> so that your business can flow <span className="text-orange-500">seamlessly</span>.
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Your Business needs numerous expertise and that's why we are providing you the best services with the best names in the field.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    {partners.map((partner) => (
                        <div key={partner.id} className="bg-white p-3 md:p-4 rounded-lg shadow-md w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                            <img
                                src={`https://logo.clearbit.com/${partner.domain}`}
                                alt={`${partner.name} logo`}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const parentNode = e.currentTarget.parentNode;
                                    if (parentNode) {
                                        while (parentNode.childNodes.length > 1) {
                                            if (parentNode.lastChild && parentNode.lastChild !== e.currentTarget) {
                                                parentNode.removeChild(parentNode.lastChild);
                                            }
                                        }
                                        const textNode = document.createTextNode(partner.name);
                                        parentNode.appendChild(textNode);
                                    }
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