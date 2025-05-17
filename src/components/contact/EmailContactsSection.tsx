const EmailContactsSection = () => {
    const contacts = [
        {
            title: "For Billing & Payment",
            email: "accounting@registerkaro.in",
            description: null,
        },
        {
            title: "Joel Dsouza",
            email: "joel@registerkaro.in",
            description: "Co-founder",
        },
        {
            title: "For Grievance and Complaints",
            email: "support@registerkaro.in",
            description: null,
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    {contacts.map((contact, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="text-xl font-semibold text-gray-800 mb-1">{contact.title}</h4>
                            {contact.description && (
                                <p className="text-sm text-gray-500 mb-1">{contact.description}</p>
                            )}
                            <a href={`mailto:${contact.email}`} className="text-orange-600 hover:text-orange-700 hover:underline font-medium">
                                Email: {contact.email}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmailContactsSection; 