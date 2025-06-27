const CreativeUseCases = () => {
  const useCases = [
    {
      id: 'auto-resize',
      title: "Auto-resize for each platform",
      description: "Make your design fit every social format, fast.",
      image: "https://ext.same-assets.com/165477681/3790655893.jpeg",
      buttonText: "Try it",
      category: "Social Media"
    },
    {
      id: 'brand-stories',
      title: "Create on-brand stories and reels",
      description: "Stay true to your brand style in every post.",
      image: "https://ext.same-assets.com/165477681/3567960790.jpeg",
      buttonText: "Try it",
      category: "Social Media"
    },
    {
      id: 'remove-background',
      title: "Remove background to highlight subjects",
      description: "Clean up your content and keep the focus on your subject.",
      image: "https://ext.same-assets.com/165477681/1705545165.jpeg",
      buttonText: "Try it",
      category: "Photography"
    },
    {
      id: 'social-posts',
      title: "Generate social media posts",
      description: "Need content fast? Get scroll-worthy posts in seconds.",
      image: "https://ext.same-assets.com/165477681/3653521694.jpeg",
      buttonText: "Try it",
      category: "Social Media"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All in a single creative suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ideation to execution, everything you need to create professional content at scale.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full backdrop-blur-sm bg-white/80">
                    {useCase.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {useCase.description}
                </p>

                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group/button transition-all duration-200">
                  {useCase.buttonText}
                  <svg className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-indigo-400/5 to-purple-400/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Boost your professional workflow and productivity
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who trust Freepik to scale their creative work with AI-powered tools.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start creating for free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeUseCases;
