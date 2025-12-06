import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './common/Magnetic';
import TextMask from './common/TextMask';

const Contact = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    });

    return (
        <motion.section
            ref={container}
            id="contact"
            className="min-h-screen flex flex-col justify-between px-8 py-20 bg-[#050505] relative z-0"
        >
            <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
                <motion.div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-[1px] bg-white/30" />
                        <span className="uppercase tracking-widest text-sm text-gray-400">Get in touch</span>
                    </div>
                    <h2 className="text-[10vw] font-montserrat font-bold uppercase leading-[0.8] tracking-tighter mb-12 text-white">
                        <TextMask>
                            {["Let's", "Work", "Together"]}
                        </TextMask>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
                        <Magnetic>
                            <a href="mailto:hello@shreeyaroutray.com" className="bg-[#455CE9] text-white px-8 py-8 rounded-full flex items-center gap-4 text-xl overflow-hidden hover:bg-[#3346b8] transition-colors">
                                <span>hello@shreeyaroutray.com</span>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#" className="border border-white/20 text-white px-8 py-8 rounded-full flex items-center gap-4 text-xl hover:bg-white hover:text-black transition-colors">
                                <span>+91 987 654 3210</span>
                            </a>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-between items-end border-t border-white/10 pt-8 uppercase text-sm text-gray-400 font-medium tracking-wider">
                <div className="flex gap-4">
                    <Magnetic><a href="#" className="hover:text-white transition-colors p-2">Instagram</a></Magnetic>
                    <Magnetic><a href="#" className="hover:text-white transition-colors p-2">LinkedIn</a></Magnetic>
                    <Magnetic><a href="#" className="hover:text-white transition-colors p-2">Behance</a></Magnetic>
                </div>
                <div className="text-right">
                    &copy; {new Date().getFullYear()} Shreeya Routray
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
