import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';

export default function LoginPage() {
    return (
        <main className="min-h-screen relative bg-gray-50 dark:bg-slate-950 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
            {/* Ambient Background Gradients */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70"></div>
            <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-300/20 dark:bg-indigo-900/20 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-[100px]" />
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-pink-100/30 dark:bg-pink-900/10 blur-[80px]" />
            </div>

            <Navbar />
            <div className="space-y-12 sm:space-y-24">
                <Hero />
                {/* Stats removed as requested */}
                <Features />
                <HowItWorks />
                <CallToAction />
            </div>

            <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-12 border-t border-gray-200 dark:border-slate-800 transition-colors">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
                    <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                        &copy; 2026 JAI Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
