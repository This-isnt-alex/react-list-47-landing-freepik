const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Tools</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button className="hover:text-white transition-colors text-left">AI Assistant</button></li>
              <li><button className="hover:text-white transition-colors text-left">AI Image Generator</button></li>
              <li><button className="hover:text-white transition-colors text-left">AI Video Generator</button></li>
              <li><button className="hover:text-white transition-colors text-left">AI Voice Generator</button></li>
              <li><button className="hover:text-white transition-colors text-left">All Freepik tools</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button className="hover:text-white transition-colors text-left">Pricing</button></li>
              <li><button className="hover:text-white transition-colors text-left">About us</button></li>
              <li><button className="hover:text-white transition-colors text-left">API</button></li>
              <li><button className="hover:text-white transition-colors text-left">Jobs</button></li>
              <li><button className="hover:text-white transition-colors text-left">Sell content</button></li>
              <li><button className="hover:text-white transition-colors text-left">Brand guidelines</button></li>
              <li><button className="hover:text-white transition-colors text-left">Events</button></li>
              <li><button className="hover:text-white transition-colors text-left">Blog</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button className="hover:text-white transition-colors text-left">Terms of use</button></li>
              <li><button className="hover:text-white transition-colors text-left">License agreement</button></li>
              <li><button className="hover:text-white transition-colors text-left">Privacy policy</button></li>
              <li><button className="hover:text-white transition-colors text-left">Copyright information</button></li>
              <li><button className="hover:text-white transition-colors text-left">Cookies policy</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button className="hover:text-white transition-colors text-left">AI Suite documentation</button></li>
              <li><button className="hover:text-white transition-colors text-left">FAQ</button></li>
              <li><button className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="https://ext.same-assets.com/165477681/3240093620.svg"
                alt="Freepik"
                className="h-8 w-auto"
              />
              <span className="ml-4 text-gray-400 text-sm">
                Copyright © 2010-2025 Freepik Company S.L. All rights reserved.
              </span>
            </div>

            <div className="text-sm text-gray-400">
              <span>Freepik Company projects</span>
              <div className="flex space-x-4 mt-2">
                <button className="hover:text-white transition-colors">Freepik</button>
                <button className="hover:text-white transition-colors">Slidesgo</button>
                <button className="hover:text-white transition-colors">Magnific</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
