import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

type FaqItemProps = {
    question: string;
    answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-semibold text-secondary-main">{question}</h3>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="mt-2 pr-12">
                    <p className="text-gray-600">{answer}</p>
                </div>
            )}
        </div>
    );
};

// FAQ data organized by categories
const faqData = [
    {
        category: "General",
        questions: [
            {
                question: "What services does Jaadu Services offer?",
                answer: "Jaadu Services provides a comprehensive range of business consultancy services including company registration, GST registration, trademark registration, patent filing, income tax filing, annual compliance, business funding assistance, and digital marketing services."
            },
            {
                question: "How can I contact Jaadu Services?",
                answer: "You can contact us through our website contact form, email at info@jaaduservices.com, or by calling +91 98765 43210. Our office is located at 123 Business Avenue, Tech Park, Mumbai, Maharashtra 400001, India."
            },
            {
                question: "Do you offer services outside India?",
                answer: "Yes, we offer select services for international clients, particularly for those looking to establish a business presence in India or requiring trademark protection in multiple countries."
            },
            {
                question: "What are your payment terms?",
                answer: "We typically require a 50% advance payment to initiate the service, with the remaining 50% due upon completion. For ongoing services, we offer monthly and quarterly payment plans."
            },
            {
                question: "How experienced is your team?",
                answer: "Our team consists of highly experienced professionals with 10+ years of experience in their respective domains. We have successfully served over 250 clients across various industries."
            },
        ]
    },
    {
        category: "Business Registration",
        questions: [
            {
                question: "How long does company registration take?",
                answer: "The company registration process typically takes 7-10 working days, depending on the type of company and the completeness of documentation provided."
            },
            {
                question: "What types of business structures do you help register?",
                answer: "We provide registration services for Private Limited Companies, Limited Liability Partnerships (LLPs), One Person Companies (OPCs), Partnership Firms, Sole Proprietorships, and Section 8 Companies (Non-profit)."
            },
            {
                question: "What documents are required for company registration?",
                answer: "Basic requirements include identity and address proof of directors/partners, property documents for registered office address, passport-size photographs, and digital signatures."
            },
            {
                question: "Can you help with bank account opening after company registration?",
                answer: "Yes, we provide assistance with opening a corporate bank account after your company is registered. We guide you through the documentation and process requirements for different banks."
            },
        ]
    },
    {
        category: "Taxation & Compliance",
        questions: [
            {
                question: "Is GST registration mandatory for my business?",
                answer: "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for some states). It's also required for businesses involved in inter-state supplies or e-commerce operations regardless of turnover."
            },
            {
                question: "What are the annual compliance requirements for a company in India?",
                answer: "Annual compliance requirements include filing annual returns with the Registrar of Companies (ROC), conducting annual general meetings, preparing financial statements, filing income tax returns, GST returns, and maintaining statutory registers."
            },
            {
                question: "Do you provide ongoing tax filing services?",
                answer: "Yes, we offer regular tax filing services including monthly/quarterly GST returns, TDS returns, and annual income tax returns for both businesses and individuals."
            },
            {
                question: "How can you help with tax planning for my business?",
                answer: "Our tax experts can help analyze your business structure and operations to identify legitimate tax-saving opportunities, advise on deductions and exemptions, and ensure compliance with tax regulations while minimizing your tax burden."
            },
        ]
    },
    {
        category: "Intellectual Property",
        questions: [
            {
                question: "What is the difference between trademark, copyright, and patent?",
                answer: "A trademark protects brands, logos, and slogans. Copyright protects original creative works like writings, music, and art. Patents protect inventions, processes, and technological innovations."
            },
            {
                question: "How long does trademark registration take in India?",
                answer: "The complete trademark registration process typically takes 18-24 months, although you receive some legal protection from the date of filing."
            },
            {
                question: "Can I register my trademark internationally?",
                answer: "Yes, we assist with international trademark registration through the Madrid System or by filing directly in specific countries based on your business needs and markets."
            },
            {
                question: "What happens if someone infringes on my trademark?",
                answer: "If someone infringes on your registered trademark, you can take legal action against them. We can assist you with sending cease and desist notices, negotiating settlements, or filing infringement lawsuits as needed."
            },
        ]
    },
];

const FaqPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("General");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter FAQs based on search query
    const filteredFaqs = searchQuery.trim()
        ? faqData.flatMap(category => category.questions.filter(
            faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )).map(faq => ({ ...faq, category: "Search Results" }))
        : faqData.find(category => category.category === selectedCategory)?.questions || [];

    const displayCategory = searchQuery.trim() ? "Search Results" : selectedCategory;

    return (
        <Layout>
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-secondary-main mb-4">Frequently Asked Questions</h1>
                        <p className="text-lg text-gray-600 mb-8">Find answers to common questions about our services</p>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            />
                            <div className="absolute right-3 top-3 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {!searchQuery && (
                            <div className="md:w-1/4">
                                <div className="sticky top-24">
                                    <h2 className="text-xl font-bold text-secondary-main mb-4">Categories</h2>
                                    <div className="space-y-2">
                                        {faqData.map((category) => (
                                            <button
                                                key={category.category}
                                                onClick={() => setSelectedCategory(category.category)}
                                                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${selectedCategory === category.category
                                                        ? 'bg-primary text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {category.category}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={`${searchQuery ? 'w-full' : 'md:w-3/4'}`}>
                            <h2 className="text-2xl font-bold text-secondary-main mb-6">{displayCategory}</h2>

                            {filteredFaqs.length > 0 ? (
                                <div className="bg-white rounded-lg shadow-md">
                                    {filteredFaqs.map((faq, index) => (
                                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                                    <p className="text-gray-600">No results found for "{searchQuery}"</p>
                                    <p className="text-gray-500 mt-2">Try a different search term or browse our categories</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-secondary-main mb-6">Couldn't Find Your Answer?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our team is ready to answer any specific questions you may have about our services. Reach out to us for personalized assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
                                Contact Us
                            </Link>
                            <a href="tel:+919876543210" className="border border-primary text-primary hover:bg-primary-light/10 px-8 py-3 rounded-md font-medium transition-colors inline-block">
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FaqPage; 