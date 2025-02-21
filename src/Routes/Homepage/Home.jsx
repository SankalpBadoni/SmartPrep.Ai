import React from "react";
import { motion } from "framer-motion";

const words = ["Welcome", "to", "SmartPrep.Ai"];
const paragraphText = "Access curated YouTube playlists, participate in AI-powered quizzes, and earn rewards for your learning journey.";

// const MotionWord = ({ children }) => (
//   <motion.span
//     initial={{ opacity: 0, x: -20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.6 }}
//     style={{ display: "inline-block", marginRight: "0.3em" }}
//   >
//     {children}
//   </motion.span>
// );

const HomePage = () => {
  const text = "Welcome to SmartPrep.Ai".split(" ");
  return (
    <div className="bg-gray-900 text-white min-h-screen">
       <header className="relative bg-gradient-to-br from-indigo-950 to-gray-800 py-16 px-6 text-center overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, #3b82f6 0%, transparent 20%)", 
            "radial-gradient(circle at 80% 80%, #312e81 0%, transparent 20%)", 
            "radial-gradient(circle at 20% 80%, #4338ca 0%, transparent 20%)",
            "radial-gradient(circle at 80% 20%, #4f46e5 0%, transparent 20%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ zIndex: 1 }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {text.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: i / 2,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          {paragraphText.split(" ").map((word, index) => (
            <motion.span
              key={word + index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8, 
                delay: index * 0.1, 
                ease: "easeInOut", 
              }}
              style={{ display: "inline-block", marginRight: "0.5em" }} 
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.a 
          href="http://localhost:8501" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer no-underline"
        >
          Get Started
        </motion.a>
      </div>
    </header>

      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose SmartPrep.Ai ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Curated Content",
              description:
                "Carefully selected YouTube playlists to enhance your knowledge on various topics.",
              icon: "📚",
            },
            {
              title: "Gamified Learning",
              description:
                "Earn tokens for correct answers and consistent participation, redeemable for rewards.",
              icon: "🎮",
            },
            {
              title: "AI-Powered Quizzes",
              description:
                "Focused quizzes designed to track your progress and emphasize key concepts.",
              icon: "🤖",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-800 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Aarav Patel",
              review:
                "SmartPrep.Ai has transformed the way I study. The quizzes are fun and the rewards keep me motivated!",
            },
            {
              name: "Sanya Mehta",
              review:
                "I love the curated playlists and the gamification aspect. It makes learning so engaging and interactive!",
            },
            {
              name: "Rohan Sharma",
              review:
                "The AI quizzes are spot on. They really help me focus on what’s important. Highly recommend!",
            },
          ].map((review, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <p className="italic mb-4">"{review.review}"</p>
              <h4 className="font-semibold text-yellow-300">- {review.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Learning Adventure?
        </h2>
        <p className="text-lg mb-6">
          Join SmartPrep.Ai today and make your learning journey interactive and
          rewarding!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all"
        >
          Sign Up Now
        </motion.button>
      </footer>
    </div>
  );
};

export default HomePage;
