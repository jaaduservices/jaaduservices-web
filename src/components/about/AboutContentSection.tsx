interface AboutContentSectionProps {
    videoEmbedUrl: string;
    // You can add more props for text content if it needs to be dynamic
}

const AboutContentSection: React.FC<AboutContentSectionProps> = ({ videoEmbedUrl }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="lg:w-2/5">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary-main mb-6">About Us</h2>
                        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                            Jaadu Services is a renowned group of individual professionals that has established itself as a market leader in
                            guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services
                            rendered by professionals independently. We assist entrepreneurs and start-ups in providing consultations for
                            their businesses. We have a tailor-made solution in the best interests of your business, and we provide a
                            guaranteed and satisfactory service.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We have a group of independent professionals and no member firm has any authority to obligate or bind
                            Jaadu Services or any other member firm vis-a-vis third parties, nor does Jaadu Services have any such authority to
                            obligate or bind any member firm. The professionals on our platform also do not advertise nor solicit business from
                            potential clients. One thing that is unique about Jaadu Services is that clients themselves post their queries or come
                            with their cases on our platform looking for highly qualified experts. Ultimately, the client finds who he or she wants
                            to engage as their experts.
                        </p>
                    </div>
                    <div className="lg:w-3/5 mt-8 lg:mt-0">
                        <div className="rounded-lg shadow-2xl overflow-hidden border-4 border-gray-200">
                            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}> {/* 16:9 aspect ratio enforcer */}
                                <iframe
                                    src={videoEmbedUrl}
                                    title="About Jaadu Services Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} // Iframe fills the aspect ratio container
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContentSection; 