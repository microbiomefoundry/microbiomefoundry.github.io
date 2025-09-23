import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans antialiased">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-teal-400">Microbiome Foundry</h1>
          <nav>
            <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="https://github.com/microbiomefoundry" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center">
                  GitHub
                  <svg className="ml-1" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.492.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.021.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Pioneering the Future of Microbiome Research
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            The Microbiome Foundry is an open-source initiative dedicated to developing tools, resources, and data for the scientific community.
          </p>
          <a href="#projects" className="inline-block bg-teal-500 hover:bg-teal-600 transition-colors text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105">
            Explore Projects
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">About Us</h3>
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <p className="text-gray-300 leading-relaxed mb-4">
              We believe that collaboration and open access are key to accelerating scientific discovery. The Microbiome Foundry provides a centralized hub for researchers to share methodologies, computational pipelines, and datasets related to microbial communities. Our goal is to lower the barrier to entry for microbiome science and foster a collaborative environment where ideas can flourish.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our work spans a wide range of disciplines, from bioinformatics and machine learning to experimental design and data visualization. We are committed to building robust, reproducible, and scalable solutions that address the unique challenges of microbiome data analysis.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border-t-2 border-teal-500">
              <h4 className="text-xl font-semibold text-white mb-2">Data Curation Pipeline</h4>
              <p className="text-gray-400 mb-4">
                An automated workflow for cleaning, normalizing, and standardizing microbiome datasets from various public repositories.
              </p>
              <a href="#" className="text-teal-400 hover:underline">Learn More →</a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border-t-2 border-teal-500">
              <h4 className="text-xl font-semibold text-white mb-2">Microbiome Atlas</h4>
              <p className="text-gray-400 mb-4">
                An interactive web-based tool for visualizing and exploring the global diversity of human and environmental microbiomes.
              </p>
              <a href="#" className="text-teal-400 hover:underline">Learn More →</a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border-t-2 border-teal-500">
              <h4 className="text-xl font-semibold text-white mb-2">ML-based Predictor</h4>
              <p className="text-gray-400 mb-4">
                A machine learning model to predict host phenotypes (e.g., disease state) from microbiome compositional data.
              </p>
              <a href="#" className="text-teal-400 hover:underline">Learn More →</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 md:px-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Microbiome Foundry. Built with React and Tailwind CSS.
        </p>
      </footer>

    </div>
  );
};

export default App;

