export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Alumni, Software Engineer at Google",
      content: "Turing Society provided me with the foundation and network that launched my career in tech. The community here is incredible.",
      avatar: "👩‍💻"
    },
    {
      name: "Alex Chen",
      role: "Current Student, CS Major",
      content: "The workshops and mentorship I received through Turing have been invaluable. I've grown so much as a programmer.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Maya Patel",
      role: "Faculty Advisor",
      content: "Watching students collaborate and innovate through Turing Society has been one of the most rewarding experiences of my career.",
      avatar: "👩‍🏫"
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="cosmic-gradient-text">Community Voices</span>
          </h2>
          <p className="text-lg sm:text-xl text-cosmic-light/80 max-w-3xl mx-auto leading-relaxed">
            Hear from our members and see how Turing has impacted their journey
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="cosmic-card group hover:scale-105 transition-all duration-300"
            >
              <div className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="text-4xl lg:text-5xl text-center">{testimonial.avatar}</div>
                <blockquote className="text-cosmic-light/80 italic text-sm lg:text-base leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="text-center">
                  <h4 className="text-cosmic-light font-semibold text-base lg:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-cosmic-light/60 text-sm lg:text-base">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};