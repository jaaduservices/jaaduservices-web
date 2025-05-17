import Layout from '../components/layout/Layout';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutContentSection from '../components/about/AboutContentSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import AboutCtaSection from '../components/about/AboutCtaSection';

const AboutPage = () => {
    const heroBgUrl = 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'; // Cityscape for hero
    const aboutUsVideoEmbedUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder YouTube Video ID

    return (
        <Layout>
            <AboutHeroSection
                heroBgUrl={heroBgUrl}
                title="Register Your Business Quickly and Fulfill Your Business Requirements"
            />
            <AboutContentSection videoEmbedUrl={aboutUsVideoEmbedUrl} />
            <WhyChooseUsSection />
            <AboutCtaSection
                title="Ready to Get Started?"
                description="Join hundreds of satisfied clients who trust Jaadu Services for their business needs."
                buttonText="Contact Us Today"
                buttonLink="/contact"
            />
        </Layout>
    );
};

export default AboutPage; 