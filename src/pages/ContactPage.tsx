import Layout from '../components/layout/Layout';
// FaWhatsapp and FaPlus are now imported within their respective components (HeroSection, LocationSection)

// Import custom components
import HeroSection from '../components/contact/HeroSection';
import GetInTouchSection from '../components/contact/GetInTouchSection';
import EmailContactsSection from '../components/contact/EmailContactsSection';
import EmpowerBusinessSection from '../components/contact/EmpowerBusinessSection';
import CareerSection from '../components/contact/CareerSection';
import LocationSection from '../components/contact/LocationSection';

const ContactPage = () => {
    return (
        <Layout>
            <HeroSection />
            <GetInTouchSection />
            <EmailContactsSection />
            <EmpowerBusinessSection />
            <CareerSection />
            <LocationSection />
        </Layout>
    );
};

export default ContactPage;