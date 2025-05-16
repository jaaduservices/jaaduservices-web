import Card from '../ui/Card';

const testimonials = [
    {
        id: 1,
        name: 'Rahul Sharma',
        position: 'Founder, TechSolutions',
        content: 'Jaadu Services made the entire process of company registration seamless. Their team was professional, responsive, and guided us through every step. Highly recommended!',
        image: '/images/testimonials/person1.jpg',
    },
    {
        id: 2,
        name: 'Priya Patel',
        position: 'CEO, FashionHub',
        content: 'We were struggling with GST registration until we found Jaadu Services. Their expertise and attention to detail helped us get registered quickly without any hassles.',
        image: '/images/testimonials/person2.jpg',
    },
    {
        id: 3,
        name: 'Amit Singh',
        position: 'Director, FoodDelights',
        content: 'The team at Jaadu Services is exceptional. They helped us with FSSAI registration and provided valuable guidance on compliance requirements for our food business.',
        image: '/images/testimonials/person3.jpg',
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Customers Have to Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about our services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} variant="elevated" className="h-full">
                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 mb-6 flex-grow">{testimonial.content}</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = '/placeholder.svg';
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection; 