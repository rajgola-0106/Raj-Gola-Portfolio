export const RoleSection = () => {
  const roles = [
    {
      title: "Technical Excellence",
      description: "Advancing computational thinking and programming skills through hands-on workshops and coding competitions.",
      features: ["Coding Bootcamps", "Algorithm Workshops", "Tech Talks", "Project Mentorship"]
    },
    {
      title: "Community Impact",
      description: "Creating meaningful connections and opportunities for growth within the computer science ecosystem.",
      features: ["Networking Events", "Industry Partnerships", "Career Guidance", "Alumni Network"]
    },
    {
      title: "Innovation Drive",
      description: "Encouraging creative problem-solving and cutting-edge research in emerging technologies.",
      features: ["Research Projects", "Hackathons", "Innovation Labs", "Startup Support"]
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-cosmic-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="cosmic-gradient-text">What We Do</span>
          </h2>
          <p className="text-lg sm:text-xl text-cosmic-light/80 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of computer scientists and technologists
          </p>
        </div>

        {/* Roles grid */}
        <div className="space-y-8 lg:space-y-12">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4 lg:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cosmic-light">
                  {role.title}
                </h3>
                <p className="text-base sm:text-lg text-cosmic-light/80 leading-relaxed">
                  {role.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {role.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 text-cosmic-light/70"
                    >
                      <div className="w-2 h-2 bg-cosmic-purple rounded-full"></div>
                      <span className="text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual element */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="cosmic-card h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-6xl lg:text-8xl cosmic-gradient-text">
                    {index === 0 ? "💻" : index === 1 ? "🌐" : "🔬"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};