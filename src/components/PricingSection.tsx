const PricingSection = () => {
  const pricingPlans = [
    {
      id: 'individual',
      name: 'Individuals',
      description: 'Create professional, on-brand visuals fast with AI-powered tools and high-quality stock assets.',
      price: '5.75',
      period: 'month',
      discount: '36% off billed annually',
      buttonText: 'Show individual plans',
      buttonVariant: 'outline',
      features: [
        'AI generation and editing of images, videos, icons, mockups, and music',
        'Train custom AI models for on-brand visuals: styles, objects, colors, and characters',
        'Upscale images up to 10K resolution with Magnific and videos up to 4K with Topaz',
        'Access to Premium stock content: 250M+ photos, vectors, templates, and more',
        'Priority speed for image and video generation with ChatGPT, Kling, and Veo 2',
        'Commercial AI license for professionals'
      ]
    },
    {
      id: 'teams',
      name: 'Teams',
      description: 'Collaborate with your team on AI-driven projects and premium stock assets.',
      price: '24.50',
      period: 'per user/month',
      discount: '37% off billed annually',
      buttonText: 'Get Teams plan',
      buttonVariant: 'primary',
      popular: true,
      features: [
        'Everything in individual plans, and:',
        'Control team credit usage',
        'Unified admin and billing',
        'Secured asset storage',
        'Team collaboration and sharing'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Get the best for your organization with a dedicated account manager and priority support.',
      price: 'Custom',
      period: '',
      discount: '',
      buttonText: 'Learn more',
      buttonVariant: 'outline',
      features: [
        'Everything in team plans, and:',
        'Legal indemnification for AI-generated content',
        'Rights over your AI-generated content',
        'SSO and enterprise-level security & compliance',
        'Expert guidance, training, and technical support',
        'Unlimited users, flexible credits',
        '3-month evaluation period'
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Plans that cover your needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your creative workflow and scale your productivity.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-sm border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                plan.popular
                  ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    {plan.price === 'Custom' ? (
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-sm text-gray-500 mr-1">Starting at</span>
                        <span className="text-4xl font-bold text-gray-900">${plan.price}USD</span>
                        <span className="text-gray-500 ml-2">/{plan.period}</span>
                      </>
                    )}
                  </div>
                  {plan.discount && (
                    <p className="text-sm text-green-600 font-medium mt-1">{plan.discount}</p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium text-sm transition-all duration-200 ${
                    plan.buttonVariant === 'primary'
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '800ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Is my content private and secure?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Your content is private and secure. Everything you create is private by default and only accessible to you.
                We have strict agreements in place to protect your data and keep your work secure. Freepik doesn't use anything
                you create or upload to train our AI tools—and the same goes for our third-party providers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                How do credits work?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Credits are only used for generating content with AI tools—not for downloading stock assets or your own creations.
                Each one consumes a different number of credits per generation, and results can vary, from a single image to several.
                If you're on a monthly plan, credits reset every month. Annual plans give you all your credits upfront, with a yearly reset.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Can I use AI-generated content commercially?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Yes, absolutely. You fully own the rights to anything you create with our AI tools—including the ability to use,
                modify, and monetize it. Everything you generate is private by default and only accessible to you. If you're on a
                subscription plan, you're also granted a full commercial license for both AI-generated content and stock assets.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need to attribute Freepik?
              </h4>
              <p className="text-gray-600 leading-relaxed">
                If you're on a Premium, Premium+, or Enterprise plan, you don't need to attribute. For Teams plans, it depends on the tier:
                it's required with the Essential plan, but not with Premium or Premium+. If you're using Freepik for free or on an Essential plan,
                attribution is required.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '1000ms' }}>
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1 billion</div>
                <div className="text-gray-900 font-semibold mb-1">AI images, audio, and videos</div>
                <div className="text-gray-600 text-sm">Powered by Flux, Kling, Runway, ChatGPT, ElevenLabs, and more.</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">200 million</div>
                <div className="text-gray-900 font-semibold mb-1">Highest-quality stock assets</div>
                <div className="text-gray-600 text-sm">Icons, videos, audio, images, vectors, and more ready for your next project.</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">600,000+</div>
                <div className="text-gray-900 font-semibold mb-1">Paying customers and growing fast</div>
                <div className="text-gray-600 text-sm">Unlock all creative possibilities with an all-in-one creative suite.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
