import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 font-inter">
      {/* Header */}
      <header className="flex justify-between items-center p-6 mx-auto text-white bg-slate-800">
        <h1 className="text-2xl font-bold">Microbiome Foundry</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <h2 className="text-5xl font-bold mb-6">Transform Microbiome Data into Discovery</h2>
        <p className="text-lg mb-8 max-w-5xl mx-auto">
          Real world shotgun metagenomics profiling platform.
          The Microbiome Foundry state-of-the-art informatics provides an unmatched resource for developing a better understanding of the molecular mechanisms of various microbiomes and helps researchers and biotech and biopharmaceutical 
          companies to derive unique insights to support commercial and product development objectives, target identification and other research initiatives.
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
          <h3 className="text-2xl font-bold mb-4 text-black">Annotations</h3>
          <p className="text-gray-800">All of the provided datasets are annotated with ontology systems (ENVO, UBERON, MONDO) at the sample level and annotated with the KEGG database at the functional level.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:bg-opacity-20 transition">
          <h3 className="text-2xl font-bold mb-4 text-black">Curated datasets</h3>
          <p className="text-gray-800">Provided AI ready datasets are curated and interoperable, sharing the same structure.</p>
        </div>
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg hover:bg-opacity-20 transition">
          <h3 className="text-2xl font-bold mb-4 text-black">Collaboration and data accessibility</h3>
          <p className="text-gray-800">Data easily accessible through AWS S3 storage.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mt-32 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Microbiome Foundry</h2>
        <p className="text-lg mb-8">
          The Microbiome Foundry is a platform dedicated to provide comprehensive datasets of shotgun metagenomics curated datasets to make microbiome research faster, easier, and more insightful.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-8 bg-slate-800 bg-opacity-20 text-center text-white">
        <p>&copy; 2025 Microbiome Foundry. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
