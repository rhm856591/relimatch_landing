export default function Home() {
  return (
    <div>
      <main className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center space-y-5">
            <h1 className="text-2xl md:text-6xl font-bold mb-4">We Are Launching Soon...</h1>
            <h2 className="text-4xl md:text-3xl font-bold mb-6">Connect with Top Influencers</h2>
            <p className="text-lg md:text-xl mb-8">
              The ultimate platform to connect brands and influencers for effective promotions.
            </p>
            <div className="flex justify-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                If you have any questions, please contact us at{' relimatch@gmail.com'}
              </h1>
            </div>
            <div>
              <a
                href="#features"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore Features
              </a>
              <a
                href="#signup"
                className="ml-4 bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl text-black font-bold text-center mb-12">Platform Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4 text-black">Curated Influencer List</h3>
                <p className="text-gray-700">
                  Discover influencers filtered by industry, audience, and engagement rates.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4 text-black">Seamless Connections</h3>
                <p className="text-gray-700">
                  Easily reach out to influencers and negotiate collaborations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4 text-black">Transparent Pricing</h3>
                <p className="text-gray-700">
                  View influencer rates upfront for hassle-free budgeting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section id="signup" className="bg-indigo-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Sign up now to discover and connect with top influencers for your next campaign.
            </p>
            <a
              href="#"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Sign Up Now
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 ReliMatch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
