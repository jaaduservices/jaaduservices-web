interface ComingSoonContentProps {
    title: string;
    messageLine1: string;
    messageLine2: string;
    imageUrl: string;
    imageAltText?: string;
    buttonText: string;
    buttonLink: string;
    // icon?: React.ReactNode; // Optional icon element
}

const ComingSoonContent: React.FC<ComingSoonContentProps> = ({
    title,
    messageLine1,
    messageLine2,
    imageUrl,
    imageAltText = "Coming Soon",
    buttonText,
    buttonLink,
    // icon
}) => {
    return (
        <section
            className="relative flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-100 py-12 px-4"
        >
            <div className="relative z-10 text-center bg-white p-8 md:p-16 rounded-xl shadow-2xl max-w-2xl mx-auto">
                {/* {icon && <div className="mb-6 text-orange-500 mx-auto flex justify-center">{icon}</div>} */}

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                    {messageLine1}
                </p>
                <p className="text-md text-gray-600 mb-8">
                    {messageLine2}
                </p>
                <img
                    src={imageUrl}
                    alt={imageAltText}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
                />
                <a
                    href={buttonLink} // Changed to href for anchor tag, assuming ComingSoonContent won't use react-router-dom Link itself
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                >
                    {buttonText}
                </a>
            </div>
        </section>
    );
};

export default ComingSoonContent; 