import React from 'react';
import { motion } from 'framer-motion';

function Tournaments() {
  const tournaments = [
    {
      title: "Summer Championship",
      game: "Cyber Strike",
      prize: "Luxury Cruise Vacation",
      date: "August 15-20, 2024",
      prizePool: "$10,000",
      image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg"
    },
    {
      title: "Pro League Finals",
      game: "Desert Ops",
      prize: "Cash Prize + Trophy",
      date: "September 1-3, 2024",
      prizePool: "$25,000",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
    },
    {
      title: "Space Warriors Championship",
      game: "Space Warriors",
      prize: "Gaming Setup + Cash Prize",
      date: "October 10-12, 2024",
      prizePool: "$15,000",
      image: "https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Tournaments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-500/20"
            >
              <img src={tournament.image} alt={tournament.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{tournament.title}</h2>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Game:</strong> {tournament.game}</p>
                  <p><strong>Prize:</strong> {tournament.prize}</p>
                  <p><strong>Date:</strong> {tournament.date}</p>
                  <p><strong>Prize Pool:</strong> {tournament.prizePool}</p>
                </div>
                <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tournaments