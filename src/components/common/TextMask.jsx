import React from 'react';
import { motion } from 'framer-motion';

const TextMask = ({ children, className = "" }) => {
    // Split text into lines/words logic can be complex. 
    // For simplicity and robustness, we assume children is a string or array of strings (lines).

    const lines = Array.isArray(children) ? children : [children];

    return (
        <div className={className}>
            {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        {line}
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default TextMask;
