import { useEffect } from "react";
import { motion, AnimatePresence, Variants, Easing } from "framer-motion";

interface IntroSplashProps {
  onComplete: () => void;
  isVisible: boolean;
}

const letters = "Claura".split("");
const customEase: Easing = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const letterVariants: Variants = {
  hidden: { 
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

export const IntroSplash = ({ onComplete, isVisible }: IntroSplashProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 2.5,
            filter: "blur(20px)",
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8F3ED] overflow-hidden cursor-pointer"
          onClick={onComplete}
        >
          {/* Floating orb 1 */}
          <motion.div
            initial={{ scale: 0, x: 100 }}
            animate={{ 
              scale: 1, 
              x: 0,
              y: [0, -20, 0],
            }}
            transition={{ 
              scale: { duration: 1, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-[400px] h-[400px] rounded-full opacity-40"
            style={{
              background: "radial-gradient(circle, #A48D7F 0%, transparent 70%)",
              top: "15%",
              right: "15%",
            }}
          />

          {/* Floating orb 2 */}
          <motion.div
            initial={{ scale: 0, x: -100 }}
            animate={{ 
              scale: 1, 
              x: 0,
              y: [0, 15, 0],
            }}
            transition={{ 
              scale: { duration: 1, delay: 0.4 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-[350px] h-[350px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, #EAE0D5 0%, transparent 70%)",
              bottom: "20%",
              left: "10%",
            }}
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Top accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
              className="h-[1px] bg-[#2D241E]/25 mb-10"
            />

            {/* Main Claura text */}
            <div className="overflow-hidden">
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="font-halant text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-normal tracking-tight text-[#2D241E] flex"
              >
                {letters.map((letter, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </div>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: customEase }}
              className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#2D241E]/30 to-transparent mt-8 origin-center"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-8 text-sm tracking-[0.4em] uppercase text-[#7A6F68] font-light"
            >
              AI Consulting
            </motion.p>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-16 flex items-center gap-1"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-[#2D241E]/40"
                />
              ))}
            </motion.div>
          </div>

          {/* Corner frames */}
          {[
            "top-8 left-8 border-l border-t",
            "top-8 right-8 border-r border-t",
            "bottom-8 left-8 border-l border-b",
            "bottom-8 right-8 border-r border-b",
          ].map((position, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: "easeOut" }}
              className={`absolute w-10 h-10 ${position} border-[#2D241E]/15`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
