import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Microbiome Foundry</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <h2 className="text-5xl font-bold mb-6">Unlock the Power of Microbiome Data</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Explore, visualize, and analyze microbiome datasets with ease.
          Build reproducible workflows and gain insights faster.
        </p>
        <a
          href="#features"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-32 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:bg-opacity-20 transition">
          <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
          <p>Interactive charts and plots for microbiome datasets.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:bg-opacity-20 transition">
          <h3 className="text-2xl font-bold mb-4">Reproducible Workflows</h3>
          <p>Automate analysis pipelines and share results easily.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:bg-opacity-20 transition">
          <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
          <p>Work with teams and integrate data seamlessly.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-32 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Microbiome Foundry</h2>
        <p className="text-lg mb-8">
          Microbiome Foundry is a platform dedicated to helping researchers explore microbiome datasets, create reproducible analyses, and collaborate effectively. Our goal is to make microbiome research faster, easier, and more insightful.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-8 bg-black bg-opacity-20 text-center">
        <p>&copy; 2025 Microbiome Foundry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
