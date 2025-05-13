import React from 'react';
import { motion } from 'framer-motion';

function Events() {
  const events = [
    {
      title: "VR Gaming Night",
      description: "Join us for an evening of VR gaming fun! Free entry and refreshments provided.",
      date: "Every Friday",
      time: "6 PM - 10 PM",
      image: "https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg"
    },
    {
      title: "Beginner's Workshop",
      description: "Learn the basics of VR gaming and improve your skills with our expert instructors.",
      date: "Saturdays",
      time: "2 PM - 4 PM",
      image: "https://images.pexels.com/photos/8728295/pexels-photo-8728295.jpeg"
    },
    {
      title: "Corporate Team Building",
      description: "Special events for companies looking to build team spirit through VR gaming.",
      date: "By Appointment",
      time: "Flexible Hours",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
    }
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-500/20"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="space-y-2 text-gray-400">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
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

export default Events