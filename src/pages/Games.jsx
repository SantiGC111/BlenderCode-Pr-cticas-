import React from 'react';
import { motion } from 'framer-motion';

function Games() {
  const games = [
    {
      title: "Cyber Strike",
      image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg",
      description: "Enter a neon-lit cyberpunk world and compete in fast-paced shooting matches",
      rating: "Teen"
    },
    {
      title: "Desert Ops",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      description: "Team-based tactical combat in vast desert environments",
      rating: "Teen"
    },
    {
      title: "Space Warriors",
      image: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg",
      description: "Zero-gravity combat in futuristic space stations",
      rating: "Everyone"
    },
    {
      title: "Zombie Outbreak",
      image: "https://images.pexels.com/photos/7911758/pexels-photo-7911758.jpeg",
      description: "Survive waves of zombies in this intense horror shooter",
      rating: "Mature"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Games
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-500/20"
            >
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{game.title}</h2>
                  <span className={`px-2 py-1 rounded text-sm ${
                    game.rating === "Mature" ? "bg-red-600" :
                    game.rating === "Teen" ? "bg-yellow-600" :
                    "bg-green-600"
                  }`}>
                    {game.rating}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">
                  Play Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games