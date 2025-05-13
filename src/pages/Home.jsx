import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
            alt="VR Gaming"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Enter the Virtual Arena
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Experience next-gen VR shooting competitions
          </p>
          <a 
            href="#games" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition"
          >
            Play Now
          </a>
        </motion.div>
      </div>

      {/* Featured Games */}
      <section id="games" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cyber Strike",
                image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg",
                description: "Fast-paced cyberpunk shooter"
              },
              {
                title: "Desert Ops",
                image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
                description: "Tactical team-based combat"
              },
              {
                title: "Space Warriors",
                image: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg",
                description: "Zero-gravity combat"
              }
            ].map((game, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-500/20"
              >
                <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-400">{game.description}</p>
                  <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">
                    Play Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-4">Summer Championship</h3>
              <p className="text-gray-400 mb-4">Win a luxury cruise vacation!</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400">Prize Pool: $10,000</span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">
                  Register Now
                </button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-lg border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-4">Pro League Finals</h3>
              <p className="text-gray-400 mb-4">Compete with the best players!</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400">Prize Pool: $25,000</span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">
                  Register Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home