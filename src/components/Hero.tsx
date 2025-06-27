const Hero = () => {
  return (
    <section className="bg-white pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main headline */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Creative work, reimagined with AI
              <br />
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">All in one place</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '200ms' }}>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              One suite with AI tools you trust and premium stock assets you'll love.
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '400ms' }}>
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 mb-16 shadow-lg hover:shadow-xl">
              Get started for free
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Hero Images */}
          <div className="relative max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '600ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
              {/* Left top image */}
              <div className="hidden md:block transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://ext.same-assets.com/165477681/1196191231.jpeg"
                  alt="AI Generated Content"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              {/* Center large image */}
              <div className="col-span-1 md:col-span-1 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://ext.same-assets.com/165477681/4270166414.jpeg"
                  alt="Creative Design"
                  className="w-full h-72 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>

              {/* Bottom left image */}
              <div className="col-span-1 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://ext.same-assets.com/165477681/380968356.jpeg"
                  alt="Design Tools"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '800ms' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              You bring the vision. We help you go further.
            </h2>
            <p className="text-gray-600 mb-12">
              Join 600,000 creative teams, marketers, and designers worldwide.
            </p>

            {/* Company logos */}
            <div className="flex items-center justify-center space-x-8 md:space-x-16 opacity-60">
              <img src="https://ext.same-assets.com/165477681/3829219086.svg" alt="Google" className="h-8 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://ext.same-assets.com/165477681/410630706.svg" alt="Nubank" className="h-8 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://ext.same-assets.com/165477681/3742612609.svg" alt="HelloFresh" className="h-8 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://ext.same-assets.com/165477681/2530950166.svg" alt="Coca-Cola" className="h-8 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://ext.same-assets.com/165477681/2142907369.svg" alt="Ogilvy" className="h-8 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
