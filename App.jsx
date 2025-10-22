import React, { useState, useMemo } from 'react';
// Assuming lucide-react icons are available for a professional look
const Zap = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const Settings = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44a2 2 0 0 0-2 2.44v.22a2 2 0 0 0-2 2.44v.44a2 2 0 0 0 2 2.44v.22a2 2 0 0 0 2 2.44v.44a2 2 0 0 0 2 2.44v.22a2 2 0 0 0 2 2.44v.44a2 2 0 0 0 2 2.44v-.22a2 2 0 0 0 2-2.44v-.44a2 2 0 0 0 2-2.44v-.22a2 2 0 0 0 2-2.44v-.44a2 2 0 0 0-2-2.44v-.22a2 2 0 0 0-2-2.44v-.44a2 2 0 0 0-2-2.44z"/><circle cx="12" cy="12" r="3"/></svg>;
const TrendingUp = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const Check = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;


/**
 * @typedef {Object} CardData
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {React.ComponentType} icon
 */

/**
 * Renders an interactive feature card.
 * Demonstrates clean component separation and optimized content calculation via useMemo.
 *
 * @param {Object} props
 * @param {CardData} props.card
 * @param {boolean} props.isActive
 * @param {function(number): void} props.onClick
 */
const FeatureCard = React.memo(({ card, isActive, onClick }) => {
    // Advanced technique: useMemo to ensure that the CTA text calculation (or any heavy logic)
    // only runs when the card title changes, simulating performance optimization.
    const ctaText = useMemo(() => {
        // Simple example of computed, derived state.
        const base = "Explore";
        if (card.title.includes('Performance')) {
            return `Boost ${base}`;
        }
        return `Learn More`;
    }, [card.title]);

    const activeClasses = isActive
        ? 'ring-4 ring-blue-500 shadow-xl bg-white border-blue-500 transform scale-[1.02] transition-all duration-300'
        : 'hover:border-blue-300 hover:shadow-lg transition-all duration-300';

    return (
        <div
            className={`cursor-pointer border-2 border-gray-100 rounded-xl p-6 flex flex-col items-start space-y-4 ${activeClasses}`}
            onClick={() => onClick(card.id)}
            aria-label={`Activate card: ${card.title}`}
        >
            <card.icon className={`w-8 h-8 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
            <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
            <p className="text-sm text-gray-600 flex-grow">{card.description}</p>
            <button
                className={`w-full text-center py-2 rounded-lg font-medium text-white transition-colors duration-200 mt-4
                    ${isActive
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-700 hover:bg-gray-800'
                    }`}
            >
                {ctaText} {isActive && <Check className="inline w-4 h-4 ml-1" />}
            </button>
        </div>
    );
});

FeatureCard.displayName = 'FeatureCard';


/**
 * Main application component, simulating the structure of a high-level Next.js page.
 * @returns {JSX.Element}
 */
export default function App() {
    // State to manage which card is currently active/selected
    /** @type {[number | null, React.Dispatch<React.SetStateAction<number | null>>]} */
    const [activeCardId, setActiveCardId] = useState(null);

    /** @type {CardData[]} */
    const features = [
        {
            id: 1,
            title: "Instant Performance",
            description: "Leverage advanced caching and server-side logic for sub-second load times, essential for high-conversion sites.",
            icon: Zap,
        },
        {
            id: 2,
            title: "Configurable Architecture",
            description: "Built on a flexible, modular component system that allows for rapid scaling and future-proofing your codebase.",
            icon: Settings,
        },
        {
            id: 3,
            title: "Scalable Growth Path",
            description: "Designed to handle massive traffic spikes and data loads without compromising speed or reliability. Start small, grow limitless.",
            icon: TrendingUp,
        },
    ];

    /**
     * Toggles the active state of a card.
     * @param {number} id - The ID of the card clicked.
     */
    const handleCardClick = (id) => {
        setActiveCardId(prevId => prevId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Tailwind Configuration for "Inter" font */}
            <style dangerouslySetInnerHTML={{ __html: `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                html {
                    font-family: 'Inter', sans-serif;
                    scroll-behavior: smooth;
                }
            `}} />

            {/* --- Header / Navigation --- */}
            <header className="sticky top-0 z-10 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-extrabold text-gray-900">
                        {/* High-Level Branding for SEO/Accessibility */}
                        <span aria-label="Project Fusion">Fusion.</span>
                    </div>
                    <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
                        <a href="#features" className="hover:text-blue-600 transition duration-150">Features</a>
                        <a href="#cta-main" className="hover:text-blue-600 transition duration-150">Pricing</a>
                        <a href="#cta-main" className="hover:text-blue-600 transition duration-150">Contact</a>
                    </nav>
                    <a href="#cta-main" className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 shadow-md">
                        Get Started
                    </a>
                </div>
            </header>

            <main className="flex-grow">
                {/* --- Hero Section with Primary CTA --- */}
                <section className="bg-gray-100 py-20 sm:py-28 text-center" id="hero">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            Build <span className="text-blue-600">Optimized</span> Web Experiences
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our architecture is designed by industry experts for maximal performance, scalability, and developer experience.
                        </p>
                        {/* Primary CTA (Call to Action) */}
                        <a id="cta-main" href="#" className="inline-block px-10 py-4 text-lg font-bold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                            Launch Your Project Now
                        </a>
                        <p className="mt-4 text-sm text-gray-500">No credit card required. Instant deployment.</p>
                    </div>
                </section>

                {/* --- Feature Cards Section (Interactivity Demo) --- */}
                <section className="py-20 sm:py-32" id="features">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-sm font-semibold uppercase text-blue-600 tracking-wider">CORE FEATURES</span>
                            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                                Click on any card to see its active state and CTA update.
                            </h2>
                        </div>

                        {/* Responsive Grid for Cards: 1 column on mobile, 3 on desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map(card => (
                                <FeatureCard
                                    key={card.id}
                                    card={card}
                                    isActive={activeCardId === card.id}
                                    onClick={handleCardClick}
                                />
                            ))}
                        </div>

                         {/* Secondary CTA Below Cards */}
                         <div className="mt-20 text-center p-8 bg-blue-50 rounded-xl shadow-inner">
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                Ready to ditch the boilerplate?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Stop wasting time on setup and start building with a framework that actually scales.
                            </p>
                            <a href="#" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md">
                                See Documentation &rarr;
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- Footer --- */}
            <footer className="bg-gray-800 text-white py-8 mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2025 Fusion. All Rights Reserved. | <a href="#" className="underline hover:text-white">Privacy Policy</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
