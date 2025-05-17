import Layout from '../components/layout/Layout';
import ComingSoonContent from '../components/comingsoon/ComingSoonContent';
// import { FaTools } from 'react-icons/fa'; // Example icon

const ComingSoonPage = () => {
    const defaultImageUrl = 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

    return (
        <Layout>
            <ComingSoonContent
                title="Coming Soon!"
                messageLine1="We're working hard to bring you this page."
                messageLine2="Our team is currently developing this section to provide you with an amazing experience. Please check back later!"
                imageUrl={defaultImageUrl}
                imageAltText="Page under construction"
                buttonText="Go to Homepage"
                buttonLink="/"
            // icon={<FaTools className="text-6xl" />} // Example icon prop
            />
        </Layout>
    );
};

export default ComingSoonPage; 