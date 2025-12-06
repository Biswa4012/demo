import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Magnetic from './common/Magnetic';
import Parallax from './common/Parallax';
import ImageParallax from './common/ImageParallax';

const projects = [
    { id: 1, title: 'Fashion Reel', category: 'Instagram', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop' },
    { id: 2, title: 'Corporate', category: 'Promo', src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop' },
    { id: 3, title: 'Travel Vlog', category: 'YouTube', src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2670&auto=format&fit=crop' },
    { id: 4, title: 'Product TVC', category: 'Commercial', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop' },
];

const Work = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    return (
        <section id="work" className="py-20 px-4 md:px-8 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-16 ml-4">Selected Works</h2>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 w-full">
                    <div className="flex flex-col gap-12 md:gap-32">
                        {projects.slice(0, 2).map((project) => (
                            <ProjectItem key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-12 md:gap-32 md:-mt-32">
                        <Parallax speed={1.5}>
                            {projects.slice(2, 4).map((project) => (
                                <ProjectItem key={project.id} project={project} />
                            ))}
                        </Parallax>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectItem = ({ project }) => {
    return (
        <div className="group w-full cursor-pointer">
            <div className="overflow-hidden rounded-none mb-4 relative aspect-[3/4]">
                <Magnetic>
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="w-24 h-24 bg-[#455CE9] rounded-full flex items-center justify-center text-white text-sm font-bold uppercase transition-transform duration-300 group-hover:scale-110">
                            View
                        </div>
                    </div>
                </Magnetic>
                {/* ImageParallax handles the inner scale/movement */}
                <ImageParallax
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full"
                />
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10 pointer-events-none" />
            </div>
            <div className="flex justify-between items-center px-2">
                <h3 className="text-3xl font-montserrat font-bold uppercase">{project.title}</h3>
                <span className="text-sm font-light uppercase text-gray-400">{project.category}</span>
            </div>
        </div>
    )
}

export default Work;
