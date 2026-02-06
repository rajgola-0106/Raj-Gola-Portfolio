export const RegistrationsSection = () => {
  const events = [
    {
      title: "Annual Tech Fest",
      date: "March 15-17, 2024",
      description: "Join us for three days of innovation, competition, and networking.",
      status: "Open"
    },
    {
      title: "AI Workshop Series",
      date: "February 20, 2024",
      description: "Deep dive into machine learning and artificial intelligence.",
      status: "Limited Spots"
    },
    {
      title: "Hackathon 2024",
      date: "April 5-7, 2024",
      description: "48-hour coding challenge with amazing prizes and mentorship.",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="events" className="py-16 lg:py-24 bg-cosmic-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="cosmic-gradient-text">Upcoming Events</span>
          </h2>
          <p className="text-lg sm:text-xl text-cosmic-light/80 max-w-3xl mx-auto leading-relaxed">
            Don't miss out on our exciting events and workshops
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className="cosmic-card group hover:scale-105 transition-all duration-300"
            >
              <div className="p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl lg:text-2xl font-bold text-cosmic-light">
                    {event.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Open' ? 'bg-green-500/20 text-green-400' :
                    event.status === 'Limited Spots' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <p className="text-cosmic-purple font-medium text-sm lg:text-base">
                  {event.date}
                </p>
                <p className="text-cosmic-light/70 text-sm lg:text-base leading-relaxed">
                  {event.description}
                </p>
                <button className="cosmic-btn-secondary w-full py-2 lg:py-3 text-sm lg:text-base font-medium rounded-lg transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="cosmic-card max-w-2xl mx-auto">
            <div className="p-8 lg:p-12 space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-cosmic-light">
                Ready to Join Us?
              </h3>
              <p className="text-cosmic-light/80 text-base lg:text-lg leading-relaxed">
                Become part of our thriving community and unlock your potential in computer science
              </p>
              <button className="cosmic-btn-primary px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};