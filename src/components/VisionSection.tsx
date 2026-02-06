export const VisionSection = () => {
  const visionItems = [
    {
      title: "Innovation Hub",
      description: "Fostering creativity and technological advancement through collaborative projects and research initiatives.",
      icon: "🚀"
    },
    {
      title: "Learning Excellence",
      description: "Providing comprehensive educational resources and mentorship for students at all levels.",
      icon: "📚"
    },
    {
      title: "Community Building",
      description: "Creating a supportive network of tech enthusiasts, professionals, and future leaders.",
      icon: "🤝"
    }
  ];

  return (
    <section id="vision" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="cosmic-gradient-text">Our Vision</span>
          </h2>
          <p className="text-lg sm:text-xl text-cosmic-light/80 max-w-3xl mx-auto leading-relaxed">
            Building the future of technology education and innovation
          </p>
        </div>

        {/* Vision grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="cosmic-card group hover:scale-105 transition-all duration-300"
            >
              <div className="text-center p-6 lg:p-8">
                <div className="text-4xl lg:text-5xl mb-4 lg:mb-6">{item.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-cosmic-light mb-3 lg:mb-4">
                  {item.title}
                </h3>
                <p className="text-cosmic-light/70 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};