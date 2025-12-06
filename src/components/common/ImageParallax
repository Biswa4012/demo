import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImageParallax = ({ src, alt, className = "" }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    // Image moves faster than container to create parallax inside the frame
    const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);

    return (
        <div ref={container} className={`overflow-hidden relative ${className}`}>
            <motion.div style={{ y, scale }} className="w-full h-full">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
};

export default ImageParallax;
