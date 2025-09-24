import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiStar, FiMoon, FiSun, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import TopBar from "../components/topnavbar";

const LandingPage = () => {
  const navigate = useNavigate();
  
  // Load dark mode from localStorage if available
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );

  useEffect(() => {
    // Update localStorage whenever darkMode changes
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const features = [
    { icon: <FiCheckCircle className="w-12 h-12 text-purple-600 mb-4"/>, title: "Easy Task Management", desc: "Quickly add, edit, and delete tasks." },
    { icon: <FiCheckCircle className="w-12 h-12 text-pink-500 mb-4"/>, title: "Categorize & Prioritize", desc: "Organize tasks by category & priority." },
    { icon: <FiStar className="w-12 h-12 text-yellow-500 mb-4"/>, title: "Track Progress", desc: "Monitor your productivity over time." },
  ];

  const steps = [
    { step: "1", title: "Sign Up", desc: "Register quickly and securely to start managing tasks." },
    { step: "2", title: "Add Tasks", desc: "Create tasks, set priorities, and due dates." },
    { step: "3", title: "Stay Productive", desc: "Track progress and complete tasks efficiently." },
  ];

  const plans = [
    { title: "Free", price: "$0", desc: "Basic task management", popular: false },
    { title: "Pro", price: "$9.99/mo", desc: "Advanced features and priority support", popular: true },
    { title: "Enterprise", price: "$29.99/mo", desc: "For teams and organizations", popular: false },
  ];

  return (
    <div className="font-sans transition-colors duration-500">
      {/* Dark Mode Toggle */}
      <TopBar/>
      

      {/* Hero Section */}
<section className="min-h-screen flex flex-col md:flex-row items-center justify-between 
  bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 
  dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 
  text-white dark:text-gray-200 px-8 py-20 md:py-32 relative overflow-hidden transition-colors duration-500">

  {/* Floating Decorations */}
  <motion.div
    className="absolute top-10 left-10 w-40 h-40 bg-white/20 dark:bg-gray-200/10 rounded-full animate-bounce-slow"
    animate={{ y: [0, -20, 0] }}
    transition={{ repeat: Infinity, duration: 6 }}
  />
  <motion.div
    className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-300/30 dark:bg-yellow-400/10 rounded-full animate-bounce-slow"
    animate={{ y: [0, 15, 0] }}
    transition={{ repeat: Infinity, duration: 5 }}
  />

  {/* Text Section */}
  <div className="md:w-1/2 space-y-6 z-10">
    <motion.h1
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight 
        bg-clip-text text-transparent 
        bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 dark:from-yellow-400 dark:via-pink-400 dark:to-purple-500"
    >
      Organize Your <span className="text-white/80 dark:text-gray-200/80">Tasks</span> Effortlessly
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="text-lg md:text-xl text-white/90 dark:text-gray-300"
    >
      Stay on top of your work, personal life, and study goals with our intuitive Task Manager.
    </motion.p>
    <div className="flex gap-4">
      <motion.button whileHover={{ scale: 1.1 }} className="bg-yellow-300 dark:bg-yellow-400 text-purple-700 font-bold px-6 py-3 rounded-xl shadow-lg transition-all" onClick={() => navigate("/register")}>
        Get Started
      </motion.button>
      <motion.button whileHover={{ scale: 1.1 }} className="border border-white dark:border-gray-300 px-6 py-3 rounded-xl hover:bg-white/20 dark:hover:bg-gray-700 transition-all" onClick={() => navigate("/login")}>
        Login
      </motion.button>
    </div>
  </div>

  {/* Circular Image with Shadow and Glow */}
  <motion.div className="md:w-1/2 mt-10 md:mt-0 flex justify-center z-10 relative" 
    animate={{ y: [0, -10, 0] }} 
    transition={{ repeat: Infinity, duration: 3 }}
  >
    {/* Glowing Circle behind image */}
    <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 opacity-30 dark:opacity-50 blur-3xl animate-pulse -z-10"></div>

    {/* Circular Image */}
    <img 
      src="8.jpg" 
      alt="Task Illustration" 
      className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white/30 dark:border-gray-700"
    />
  </motion.div>
</section>


      {/* Features Section */}
      <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-8 transition-colors duration-500">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((f,i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-transform">
              {f.icon}
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {steps.map((s,i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md text-center transition-colors duration-500">
              <div className="text-3xl font-bold text-purple-600 mb-4">{s.step}</div>
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add other sections like Testimonials, Pricing, Newsletter, CTA... */}
      


 <section className="bg-gray-100 dark:bg-gray-800 py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <p className="text-gray-700 dark:text-gray-200 mb-4">“This app completely changed the way I organize my tasks. Highly recommended!”</p>
            <p className="font-bold">– Alice</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <p className="text-gray-700 dark:text-gray-200 mb-4">“Intuitive UI and smooth experience. Love it!”</p>
            <p className="font-bold">– Bob</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
            <p className="text-gray-700 dark:text-gray-200 mb-4">“I never miss a task now. Amazing app!”</p>
            <p className="font-bold">– Carol</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Plans & Pricing</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((p,i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className={`p-8 rounded-2xl shadow-lg text-center ${p.popular ? "bg-gradient-to-r from-yellow-300 to-yellow-400 text-purple-700 scale-105 border-2 border-purple-700" : "bg-white dark:bg-gray-800"}`}>
              <h3 className="font-bold text-2xl mb-2">{p.title}</h3>
              <p className="text-3xl font-extrabold mb-4">{p.price}</p>
              <p className="mb-6">{p.desc}</p>
              <motion.button whileHover={{ scale: 1.1 }} className={`${p.popular ? "bg-purple-700 text-yellow-300" : "bg-purple-600 text-white"} px-6 py-3 rounded-xl transition-all`} onClick={() => navigate("/register")}>
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-8 bg-purple-600 dark:bg-purple-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
        <p className="mb-6">Subscribe to our newsletter for the latest updates and tips.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-lg text-gray-800 flex-1" />
          <button className="bg-yellow-300 text-purple-700 px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2">
            <FiMail /> Subscribe
          </button>
        </div>
      </section>

      {/* Final CTA */}
      
        <section className="py-20 text-center transition-colors duration-500 
  bg-gradient-to-r from-pink-500 via-purple-600 to-red-500 
  dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 text-white dark:text-gray-200">
  
  <h2 className="text-4xl font-bold mb-4">Boost Your Productivity Today!</h2>
  <p className="text-lg mb-8">
    Sign up now and start managing your tasks effortlessly.
  </p>

  <motion.button
    whileHover={{ scale: 1.1 }}
    className="bg-yellow-300 dark:bg-yellow-400 text-purple-700 dark:text-purple-900 font-bold px-8 py-3 rounded-xl shadow-lg transition-all"
    onClick={() => navigate("/register")}
  >
    Get Started
  </motion.button>
</section>

    

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 text-center">
        <p>© 2025 Task Manager. All rights reserved.</p>
        <p>Follow us on social media for updates!</p>
      </footer>

    </div>
  );
};

export default LandingPage;

