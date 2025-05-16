const EmailContactsSection = () => {
    return (
        <section className="py-12 bg-[#F7F5F2]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-1">For Billing & Payment</h4>
                        <a href="mailto:accounting@registerkaro.in" className="text-blue-600 hover:underline">Email: accounting@registerkaro.in</a>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-1">Joel Dsouza</h4>
                        <p className="text-sm text-gray-500 mb-1">Co-founder</p>
                        <a href="mailto:joel@registerkaro.in" className="text-blue-600 hover:underline">Email: joel@registerkaro.in</a>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-1">For Grievance and Complaints</h4>
                        <a href="mailto:support@registerkaro.in" className="text-blue-600 hover:underline">Email: support@registerkaro.in</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailContactsSection; 