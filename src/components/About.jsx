import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextMask from './common/TextMask';
import Parallax from './common/Parallax';
import ImageParallax from './common/ImageParallax';

const capabilities = [
    {
        id: 1,
        title: 'Visual',
        subtitle: 'Editing',
        desc: 'Crafting rhythm and pacing that keeps eyes glued to the screen.',
        src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Sonic',
        subtitle: 'Sound Design',
        desc: 'Immersive audio landscapes that elevate the emotional impact.',
        src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Chromatic',
        subtitle: 'Color Grading',
        desc: 'Setting the perfect mood and tone through color science.',
        src: 'https://images.unsplash.com/photo-1550257322-83446c656919?q=80&w=2618&auto=format&fit=crop'
    }
];

const About = () => {
    return (
        <section id="about" className="py-32 px-4 md:px-8 bg-[#050505] relative z-10">
            <div className="max-w-7xl mx-auto mb-24">
                <h2 className="text-6xl md:text-8xl font-montserrat font-bold uppercase mb-8 leading-[0.85] tracking-tighter text-white">
                    <TextMask>
                        {["Creative", "Capabilities"]}
                    </TextMask>
                </h2>
                <div className="h-[1px] w-full bg-white/20 mt-8" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {capabilities.map((cap, index) => (
                    <div key={cap.id} className={`flex flex-col ${index === 1 ? 'md:mt-24' : index === 2 ? 'md:mt-48' : ''}`}>
                        <Parallax speed={index === 1 ? 1.2 : 1}>
                            <div className="group relative cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                                    <ImageParallax
                                        src={cap.src}
                                        alt={cap.title}
                                        className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                </div>

                                <div className="border-l border-white/20 pl-6 transition-all duration-300 group-hover:border-white group-hover:pl-8">
                                    <span className="text-xs font-mono uppercase text-gray-400 mb-2 block tracking-widest">{cap.subtitle}</span>
                                    <h3 className="text-4xl font-montserrat font-bold uppercase mb-4">{cap.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {cap.desc}
                                    </p>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto mt-40 flex flex-col md:flex-row justify-between items-end">
                <div className="mb-12 md:mb-0">
                    <h2 className="text-5xl md:text-7xl font-montserrat font-bold uppercase leading-[0.9] text-white mb-8">
                        <TextMask>{["Behind", "The Lens"]}</TextMask>
                    </h2>
                    <Parallax speed={0.5}>
                        <div className="text-sm font-mono text-gray-500 uppercase tracking-widest pl-2 border-l border-white/30 hidden md:block">
                            Based in India <br /> Available Worldwide
                        </div>
                    </Parallax>
                </div>

                <div className="max-w-xl text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
                    <TextMask>
                        {[
                            "I'm Shreeya Routray. I turn raw",
                            "footage into compelling narratives.",
                            "My approach focuses on the 'pulse'",
                            "of the content."
                        ]}
                    </TextMask>
                </div>
            </div>
        </section>
    );
};

export default About;
