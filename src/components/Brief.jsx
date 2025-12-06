import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './common/Magnetic';
import TextMask from './common/TextMask';

const Brief = () => {
    return (
        <section className="h-screen flex flex-col justify-end px-8 pb-12 relative overflow-hidden">
            {/* Background - In real production replace with <video> */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2622&auto=format&fit=crop')] bg-cover bg-center opacity-40"
                />
            </div>

            <div className="max-w-7xl mx-auto w-full z-10 relative">
                <div className="mb-12 mt-40 font-montserrat text-[11vw] leading-[0.8] font-bold uppercase tracking-tighter text-white mix-blend-overlay">
                    <TextMask>
                        {["Capturing", "The Pulse", "Of Creation"]}
                    </TextMask>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/20 pt-8">
                    <div className="max-w-md text-xl md:text-2xl font-light text-gray-200">
                        <TextMask>
                            {["Video & Reels Editor empowering", "brands through visual storytelling."]}
                        </TextMask>
                    </div>
                    <div className="flex gap-4">
                        <Magnetic>
                            <div className="w-24 h-24 rounded-full bg-[#1c1d20] text-white flex items-center justify-center cursor-pointer border border-white/10 hover:bg-white hover:text-black transition-colors duration-300">
                                <span className="text-sm font-medium">SCROLL</span>
                            </div>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brief;
