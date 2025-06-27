import { useState } from 'react';

const AIToolsSection = () => {
  const [activeTab, setActiveTab] = useState('images');

  const toolCategories = {
    images: [
      {
        id: 'img-generate',
        title: "Generate an AI image",
        description: "Create stunning images from text descriptions",
        image: "https://ext.same-assets.com/165477681/3396582212.jpeg",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/2329402105.svg"
      },
      {
        id: 'img-chat',
        title: "Chat with AI to transform images",
        description: "Use natural language to edit and enhance images",
        image: "https://ext.same-assets.com/165477681/2701014233.jpeg",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/1653335029.svg"
      },
      {
        id: 'img-stock',
        title: "Find high-quality images",
        description: "Browse millions of premium stock photos",
        image: "https://ext.same-assets.com/165477681/190973898.jpeg",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/2628280093.svg"
      },
      {
        id: 'img-edit',
        title: "Edit an image",
        description: "Professional photo editing tools powered by AI",
        image: "https://ext.same-assets.com/165477681/2413890815.jpeg",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/1101916906.svg"
      },
      {
        id: 'img-brand',
        title: "Create on-brand AI images",
        description: "Generate images that match your brand style",
        image: "https://ext.same-assets.com/165477681/1835080268.jpeg",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/1043813665.svg"
      },
      {
        id: 'img-upscale',
        title: "Upscale an image up to 10K",
        description: "Enhance image resolution with AI technology",
        image: "https://ext.same-assets.com/165477681/3298090072.jpeg",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/2499638134.svg"
      }
    ],
    videos: [
      {
        id: 'vid-generate',
        title: "Generate an AI video",
        description: "Create videos from text or images",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/videos/generate-video-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/3777961308.svg"
      },
      {
        id: 'vid-stock',
        title: "Find stock videos",
        description: "Browse our library of premium video content",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/videos/find-video-main.webp",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/2471368854.svg"
      },
      {
        id: 'vid-edit',
        title: "Edit a video",
        description: "Professional video editing with AI assistance",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/videos/edit-video-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/1514411713.svg"
      },
      {
        id: 'vid-upscale',
        title: "Upscale a video up to 4K",
        description: "Enhance video quality with AI upscaling",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/videos/upscale-video-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/3670535243.svg"
      }
    ],
    audio: [
      {
        id: 'audio-voice',
        title: "Generate a voiceover",
        description: "Create natural-sounding AI voices",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/audio/gen-voiceover-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/1674781415.svg"
      },
      {
        id: 'audio-music',
        title: "Find royalty-free stock music",
        description: "Discover music for your projects",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/audio/find-stock-music-main.webp",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/659043323.svg"
      },
      {
        id: 'audio-sfx',
        title: "Generate sound effects",
        description: "Create custom sound effects with AI",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/audio/create-sfx-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/304654919.svg"
      },
      {
        id: 'audio-intro',
        title: "Find intros and outros",
        description: "Perfect audio transitions for your content",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/audio/intro-outros-main.webp",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/718259549.svg"
      }
    ],
    illustrations: [
      {
        id: 'illus-generate',
        title: "Generate AI Illustrations",
        description: "Create unique illustrations with AI",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/illustrations/make-ai-illustration-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/1963394601.svg"
      },
      {
        id: 'illus-vectors',
        title: "Find stock vectors",
        description: "Browse millions of high-quality vector graphics",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/illustrations/stock-vector-main.webp",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/483034415.svg"
      },
      {
        id: 'illus-stock',
        title: "Find stock illustrations",
        description: "Discover professional illustrations",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/illustrations/stock-illus-main.webp",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/757390685.svg"
      },
      {
        id: 'illus-brand',
        title: "Create on-brand AI illustrations",
        description: "Generate illustrations that match your style",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/illustrations/brand-illustration.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/987629962.svg"
      },
      {
        id: 'illus-animate',
        title: "Animate an illustration",
        description: "Bring your illustrations to life with motion",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/illustrations/animate-illustration-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/3360506168.svg"
      },
      {
        id: 'illus-svg',
        title: "Convert any image to SVG",
        description: "Transform raster images into scalable vectors",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/illustrations/onbrand-illustration-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/2937913671.svg"
      }
    ],
    design: [
      {
        id: 'design-assistant',
        title: "Use AI Assistant for graphic design",
        description: "Get design help from AI",
        image: "https://ext.same-assets.com/165477681/2701014233.jpeg",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/669107671.svg"
      },
      {
        id: 'design-templates',
        title: "Find stock templates and PSDs",
        description: "Ready-to-use design templates",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/designs/stock-templates-main.webp",
        buttonText: "Find",
        icon: "https://ext.same-assets.com/165477681/2837977687.svg"
      },
      {
        id: 'design-social',
        title: "Create social media posts",
        description: "Design posts for all social platforms",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/designs/social-media-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/2237476990.svg"
      },
      {
        id: 'design-mockup',
        title: "Generate a mockup",
        description: "Create realistic product mockups instantly",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/designs/mockup-logo.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/24352591.svg"
      },
      {
        id: 'design-banner',
        title: "Create banners, posters, and more",
        description: "Design marketing materials with ease",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/designs/banner-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/2335436187.svg"
      },
      {
        id: 'design-icons',
        title: "Generate AI icons",
        description: "Create custom icons with AI",
        image: "https://cdn-front.freepik.com/home/anon-rvmp/features/designs/design-icon-main.webp",
        buttonText: "Try it",
        icon: "https://ext.same-assets.com/165477681/973199642.svg"
      }
    ]
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The features you need, the simplicity you want
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'images'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'audio'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Audio
            </button>
            <button
              onClick={() => setActiveTab('illustrations')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'illustrations'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Illustrations
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'design'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Design
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories[activeTab as keyof typeof toolCategories]?.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1 group-hover:text-blue-600 transition-colors duration-200">
                    {tool.title}
                  </h3>
                  {tool.icon && (
                    <img src={tool.icon} alt="" className="w-5 h-5 mt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/button">
                  {tool.buttonText}
                  <svg className="ml-1 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
