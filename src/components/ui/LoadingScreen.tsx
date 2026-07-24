import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[1200] flex flex-col items-center justify-center bg-[#0A0B0D] text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="flex flex-col items-center space-y-4"
      >
        <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin" />
        <span className="font-display tracking-widest text-[#D4AF37] text-lg uppercase">BE BOSS BARBERS</span>
        <span className="text-xs text-neutral-400 tracking-wider">PORTSMOUTH</span>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
