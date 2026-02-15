'use client';

import { signIn } from 'next-auth/react';

export default function CallToAction() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gradient-to-b from-gray-900 via-gray-900/90 to-black"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to land your dream job?
                        <br />
                        Start using JAI today.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Join thousands of users who are saving time and applying with confidence. No credit card required to get started.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            onClick={() => signIn('google', { callbackUrl: '/onboarding' })}
                            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
                        >
                            Get started for free
                        </button>
                        <a href="#how-it-works" className="text-sm font-semibold leading-6 text-white group">
                            Learn more <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
