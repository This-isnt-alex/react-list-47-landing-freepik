import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const aiSuiteItems = [
    {
      category: "Image Generation",
      items: [
        { name: "AI Image Generator", icon: "https://ext.same-assets.com/165477681/2329402105.svg" },
        { name: "Reimagine image", icon: "https://ext.same-assets.com/165477681/1653335029.svg" },
        { name: "Background Generator", icon: "https://ext.same-assets.com/165477681/2628280093.svg" }
      ]
    },
    {
      category: "Image Edition",
      items: [
        { name: "Image Editor", icon: "https://ext.same-assets.com/165477681/1101916906.svg" },
        { name: "Background Remover", icon: "https://ext.same-assets.com/165477681/3029347877.svg" },
        { name: "Upscale image", icon: "https://ext.same-assets.com/165477681/2499638134.svg" },
        { name: "Expand image", icon: "https://ext.same-assets.com/165477681/1251514094.svg" }
      ]
    },
    {
      category: "Video & Audio",
      items: [
        { name: "AI Video Generator", icon: "https://ext.same-assets.com/165477681/3777961308.svg" },
        { name: "Video Editor", icon: "https://ext.same-assets.com/165477681/276418563.svg", isNew: true },
        { name: "Text to speech", icon: "https://ext.same-assets.com/165477681/1674781415.svg" }
      ]
    }
  ];

  const stockItems = [
    {
      category: "Content Types",
      items: [
        { name: "Photos", count: "50M+" },
        { name: "Vectors", count: "30M+" },
        { name: "Illustrations", count: "15M+" },
        { name: "Videos", count: "5M+" },
        { name: "Audio", count: "2M+" },
        { name: "Icons", count: "10M+" }
      ]
    },
    {
      category: "Resources",
      items: [
        { name: "Templates", count: "1M+" },
        { name: "Mockups", count: "500K+" },
        { name: "PSD", count: "200K+" },
        { name: "3D Models", count: "100K+" },
        { name: "Fonts", count: "50K+" }
      ]
    }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://ext.same-assets.com/165477681/2539395329.svg"
                alt="Freepik"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* AI Suite Dropdown */}
            <div
              className="relative group"
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => handleDropdownToggle('ai-suite')}
                onClick={() => handleDropdownToggle('ai-suite')}
              >
                <img src="https://ext.same-assets.com/165477681/275092033.svg" alt="" className="w-4 h-4 mr-2" />
                AI Suite
                <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'ai-suite' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* AI Suite Dropdown Menu */}
              {activeDropdown === 'ai-suite' && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                  <div className="grid grid-cols-1 gap-4 px-4">
                    {aiSuiteItems.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="flex items-center mb-3">
                          <img src={`https://ext.same-assets.com/165477681/${categoryIndex === 0 ? '479816196' : categoryIndex === 1 ? '4033715557' : '3705570030'}.svg`} alt="" className="w-4 h-4 mr-2" />
                          <h4 className="text-sm font-semibold text-gray-900">{category.category}</h4>
                        </div>
                        <div className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              className="flex items-center w-full text-left p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 group"
                            >
                              <img src={item.icon} alt="" className="w-4 h-4 mr-3 opacity-70" />
                              <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name}</span>
                              {item.isNew && (
                                <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">New</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stock Dropdown */}
            <div
              className="relative group"
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => handleDropdownToggle('stock')}
                onClick={() => handleDropdownToggle('stock')}
              >
                <img src="https://ext.same-assets.com/165477681/2686577112.svg" alt="" className="w-4 h-4 mr-2" />
                Stock
                <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'stock' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Stock Dropdown Menu */}
              {activeDropdown === 'stock' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {stockItems.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">{category.category}</h4>
                        <div className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-50 rounded-md transition-colors duration-150 group"
                            >
                              <span className="text-sm text-gray-700 group-hover:text-blue-600">{item.name}</span>
                              {item.count && (
                                <span className="text-xs text-gray-400">{item.count}</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Company
              </button>
            </div>

            {/* Events */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Events
                <span className="ml-1 bg-red-100 text-red-600 text-xs px-1 rounded">NEW</span>
              </button>
            </div>

            {/* Enterprise */}
            <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Enterprise
            </button>

            {/* Pricing */}
            <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Pricing
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign in */}
            <button className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors duration-200">
              Sign in
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-5 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors duration-200">
                AI Suite
              </button>
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors duration-200">
                Stock
              </button>
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors duration-200">
                Company
              </button>
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors duration-200">
                Events
              </button>
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors duration-200">
                Enterprise
              </button>
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors duration-200">
                Pricing
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
