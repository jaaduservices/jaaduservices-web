import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import PricingPlansSection from '../components/sections/PricingPlansSection';
import GrowYourBusinessSection from '../components/sections/GrowYourBusinessSection';
import WhatWeDoSection from '../components/sections/WhatWeDoSection';
import ContactUsSection from '../components/sections/ContactUsSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';
import PartnersSection from '../components/sections/PartnersSection';

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <PricingPlansSection />
            <GrowYourBusinessSection />
            <WhatWeDoSection />
            <TestimonialsSection />
            <PartnersSection />
            <CtaSection />
            <ContactUsSection />
        </Layout>
    );
};

export default HomePage; 