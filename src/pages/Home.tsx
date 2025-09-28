import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Fish, Dna as Dna2, Search, Map, Database, BookOpen, Waves, Microscope } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
            <path d="M0,200 Q200,100 400,200 T800,200" stroke="#30345E" strokeWidth="2" />
            <path d="M0,300 Q200,200 400,300 T800,300" stroke="#30345E" strokeWidth="1" />
            <path d="M0,400 Q200,300 400,400 T800,400" stroke="#30345E" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#30345E] mb-8 leading-tight">
            Shark - AI-Driven Marine Insights
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unifying ocean, fisheries, otolith, and DNA data for sustainable marine management 
            through advanced AI-powered analytics and visualization.
          </p>
          <Link to="/ai" className="bg-[#30345E] text-white px-8 py-4 rounded-md font-medium text-lg hover:scale-105 hover:shadow-lg transition-all duration-200 inline-flex items-center space-x-2">
            <span>Try AI Assistant</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Oceanography and Marine Science Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#30345E] mb-6">Oceanography & Marine Science</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Oceanography is the scientific study of the ocean, encompassing its physical, chemical, biological, and geological aspects. 
                Our platform integrates cutting-edge marine science research to provide comprehensive insights into ocean ecosystems, 
                climate patterns, and marine biodiversity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through advanced data analytics and AI-powered tools, we help researchers and marine biologists understand complex 
                ocean dynamics, track species populations, and support sustainable marine conservation efforts across the Indian Ocean region.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <Waves className="w-24 h-24 text-[#3C7EDB] mx-auto mb-4" />
                  <div className="text-[#30345E] font-medium">Ocean Research & Analysis</div>
                  <div className="text-sm text-gray-600 mt-2">Advanced Marine Data Processing</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Microscope className="w-8 h-8 text-[#30345E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Idea Section */}
      <section className="py-20 px-6 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#30345E] text-center mb-16">Our Idea</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-2 hover:border-[#30345E] transition-all duration-300 text-center">
              <Globe className="w-12 h-12 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-xl font-medium text-[#30345E] mb-3">Oceanographic Data</h3>
              <p className="text-gray-600">Ocean currents, salinity levels, and climate patterns for comprehensive marine analysis</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-2 hover:border-[#30345E] transition-all duration-300 text-center">
              <Fish className="w-12 h-12 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-xl font-medium text-[#30345E] mb-3">Fisheries Data</h3>
              <p className="text-gray-600">Stock health monitoring, catch trends, and sustainable fishing practices</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-2 hover:border-[#30345E] transition-all duration-300 text-center">
              <Dna2 className="w-12 h-12 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-xl font-medium text-[#30345E] mb-3">Biodiversity Data</h3>
              <p className="text-gray-600">Environmental DNA analysis, species taxonomy, and biodiversity mapping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientists Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#30345E] text-center mb-16">Our Scientists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Fish className="w-12 h-12 text-[#30345E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#30345E] mb-2">Dr. Priya Sharma</h3>
              <p className="text-sm text-gray-600 mb-3">Marine Biology & Taxonomy</p>
              <div className="text-xs text-gray-500">
                <div>• Species Identification</div>
                <div>• Biodiversity Analysis</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Waves className="w-12 h-12 text-[#30345E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#30345E] mb-2">Dr. Rajesh Kumar</h3>
              <p className="text-sm text-gray-600 mb-3">Oceanography & Climate</p>
              <div className="text-xs text-gray-500">
                <div>• Ocean Dynamics</div>
                <div>• Climate Modeling</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Dna2 className="w-12 h-12 text-[#30345E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#30345E] mb-2">Dr. Meera Nair</h3>
              <p className="text-sm text-gray-600 mb-3">Molecular Biology & eDNA</p>
              <div className="text-xs text-gray-500">
                <div>• Environmental DNA</div>
                <div>• Genetic Analysis</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Microscope className="w-12 h-12 text-[#30345E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#30345E] mb-2">Dr. Arjun Patel</h3>
              <p className="text-sm text-gray-600 mb-3">Fisheries Science & Otoliths</p>
              <div className="text-xs text-gray-500">
                <div>• Age Estimation</div>
                <div>• Stock Assessment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-[#30345E] text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <Search className="w-10 h-10 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#30345E] mb-2">AI Search</h3>
              <p className="text-sm text-gray-600">Intelligent query processing for marine data</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <Map className="w-10 h-10 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#30345E] mb-2">Interactive Maps</h3>
              <p className="text-sm text-gray-600">Real-time visualization of marine ecosystems</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <Database className="w-10 h-10 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#30345E] mb-2">Biodiversity Data</h3>
              <p className="text-sm text-gray-600">Comprehensive species and habitat information</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
              <BookOpen className="w-10 h-10 text-[#3C7EDB] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#30345E] mb-2">API Access</h3>
              <p className="text-sm text-gray-600">Programmatic access to all platform data</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;