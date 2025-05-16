import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CtaSection = () => {
    return (
        <section className="py-16 bg-secondary text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your business journey?</h2>
                        <p className="text-lg text-gray-300">
                            Let us help you navigate the complexities of business registration and compliance. Our experts are ready to assist you.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center md:justify-end">
                        <Link to="/contact">
                            <Button variant="primary" size="large" className="bg-white text-secondary hover:bg-gray-100">
                                Contact Us Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection; 