export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0">
        <div className="cosmic-particles"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-6 lg:space-y-8">
          {/* Main heading with responsive typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="text-cosmic-light">Welcome to </span>
            <span className="cosmic-gradient-text animate-pulse">TURING</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cosmic-light/80 font-medium max-w-4xl mx-auto leading-relaxed">
            The Computer Science Society of Acharya Narendra Dev College
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-cosmic-light/70 max-w-3xl mx-auto leading-relaxed">
            Empowering minds through technology, innovation, and collaborative learning
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 lg:pt-8">
            <button className="cosmic-btn-primary w-full sm:w-auto px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Join Our Community
            </button>
            <button className="cosmic-btn-secondary w-full sm:w-auto px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Explore Events
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cosmic-purple/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cosmic-purple rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};