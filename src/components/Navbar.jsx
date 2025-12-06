import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './common/Magnetic';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white pointer-events-none">
            <div className="text-xl font-bold tracking-tighter font-montserrat uppercase pointer-events-auto">
                Shreeya Routray
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase pointer-events-auto">
                <Magnetic><a href="#work" className="block p-4 hover:opacity-70 transition-opacity">Work</a></Magnetic>
                <Magnetic><a href="#about" className="block p-4 hover:opacity-70 transition-opacity">About</a></Magnetic>
                <Magnetic><a href="#contact" className="block p-4 hover:opacity-70 transition-opacity">Contact</a></Magnetic>
            </div>
        </nav>
    );
};

export default Navbar;
