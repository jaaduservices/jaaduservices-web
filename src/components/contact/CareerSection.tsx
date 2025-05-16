const CareerSection = () => {
    // Placeholder for team member images
    const teamMemberImages = [
        'https://randomuser.me/api/portraits/men/11.jpg',
        'https://randomuser.me/api/portraits/men/12.jpg',
        'https://randomuser.me/api/portraits/men/13.jpg',
        'https://randomuser.me/api/portraits/men/14.jpg',
        'https://randomuser.me/api/portraits/men/15.jpg',
    ];

    return (
        <section className="py-16 bg-blue-800 text-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take your career to the next level?</h2>
                        <p className="mb-6 text-blue-100">
                            Explore exciting career opportunities with RegisterKaro, where innovation, growth, and success come together. Become a part of a team that values your talent, encourages creativity, and supports your professional development.
                        </p>
                        <a href="mailto:hr@registerkaro.in" className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-colors text-lg">
                            Apply today!
                        </a>
                        <p className="mt-4 text-blue-100">Email: <a href="mailto:hr@registerkaro.in" className="font-semibold hover:underline">hr@registerkaro.in</a></p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {teamMemberImages.map((imgSrc, i) => (
                            <img key={i} src={imgSrc} alt={`Team member ${i + 1}`} className="rounded-full w-24 h-24 md:w-28 md:h-28 object-cover border-4 border-blue-500 mx-auto" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSection; 