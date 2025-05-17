// Consider adding an icon for careers, e.g., from react-icons/fa
// import { FaBriefcase } from 'react-icons/fa';

const CareerSection = () => {
    // Using a placeholder image from Unsplash for the background effect or a relevant illustrative image.
    // This could be an office environment, a team, or something abstract representing growth.
    const careerImageUrl = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

    return (
        <section className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white p-8 md:p-12 rounded-xl shadow-xl">
                    <div className="md:w-1/2">
                        {/* Optional: Icon above title */}
                        {/* <FaBriefcase className="text-5xl text-orange-500 mb-4" /> */}
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">Join Our Team!</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We're looking for passionate individuals to help us drive innovation and deliver excellence. If you're ready to grow your career and make an impact, explore our current openings.
                        </p>
                        <p className="text-gray-700 mb-2">Interested in making a difference?</p>
                        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-start md:items-center">
                            <a
                                href="mailto:hr@registerkaro.in?subject=Career%20Opportunity%20Inquiry"
                                className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 text-lg"
                            >
                                Send Your CV
                            </a>
                            <a
                                href="/careers" // Link to a dedicated careers page if available
                                className="inline-block bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300 text-lg"
                            >
                                View Openings
                            </a>
                        </div>
                        <p className="mt-6 text-gray-600">Or reach out directly via <a href="mailto:hr@registerkaro.in" className="text-orange-600 font-semibold hover:underline">hr@registerkaro.in</a>.</p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <img
                            src={careerImageUrl}
                            alt="Join our team at RegisterKaro"
                            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSection; 