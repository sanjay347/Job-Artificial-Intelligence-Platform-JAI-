'use client';

import { signIn } from 'next-auth/react';

export default function Hero() {
    return (
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
            {/* Background blobs for glassy effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-purple-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-indigo-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[30%] w-[600px] h-[600px] rounded-full bg-pink-200/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">


                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl drop-shadow-sm">
                        Your AI-Powered <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Job Application Assistant</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        JAI streamlines your job search by organizing applications, tailoring resumes, and tracking your progress. Let AI handle the tedious parts so you can focus on the interview.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <button
                            onClick={() => signIn('google', { callbackUrl: '/onboarding' })}
                            className="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all hover:scale-105 hover:shadow-xl"
                        >
                            Get started for free
                        </button>
                        <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white flex items-center gap-1 hover:gap-2 transition-all">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Abstract Glassy Card Visualization - Detailed Mockup */}
                <div className="mt-16 sm:mt-24 flow-root">
                    <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <div className="rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 w-full overflow-hidden">

                            {/* Fake Browser Header */}
                            <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50/50 dark:bg-slate-800/50 flex items-center gap-2 px-4 py-3">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                <div className="ml-4 flex-1 bg-white dark:bg-slate-950 rounded-md h-6 border border-gray-200 dark:border-slate-700 shadow-sm"></div>
                            </div>

                            {/* Dashboard Content Mockup */}
                            <div className="flex h-[500px]">
                                {/* Sidebar */}
                                <div className="w-64 border-r border-gray-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-4 hidden md:block">
                                    <div className="space-y-4">
                                        <div className="h-8 w-3/4 bg-gray-200/50 dark:bg-slate-700/50 rounded animate-pulse"></div>
                                        <div className="space-y-2 pt-4">
                                            <div className="h-6 w-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded text-sm font-medium flex items-center">
                                                <div className="w-4 h-4 rounded-full bg-indigo-200 dark:bg-indigo-700 mr-2"></div> Dashboard
                                            </div>
                                            <div className="h-6 w-full text-gray-500 dark:text-gray-400 px-3 py-1 rounded text-sm font-medium flex items-center hover:bg-gray-50 dark:hover:bg-slate-800">
                                                <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-700 mr-2"></div> Applications
                                            </div>
                                            <div className="h-6 w-full text-gray-500 dark:text-gray-400 px-3 py-1 rounded text-sm font-medium flex items-center hover:bg-gray-50 dark:hover:bg-slate-800">
                                                <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-slate-700 mr-2"></div> Resumes
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 p-6 bg-gray-50/30 dark:bg-slate-950/30">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {/* Stat Cards */}
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800">
                                                <div className="h-4 w-1/2 bg-gray-100 dark:bg-slate-700 rounded mb-2"></div>
                                                <div className="h-8 w-1/3 bg-indigo-100 dark:bg-indigo-900/30 rounded"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main Chart Area */}
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 h-64 flex items-end justify-between px-8 pb-4 space-x-4">
                                        {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                                            <div key={i} className="w-full bg-indigo-500 rounded-t-lg hover:bg-indigo-400 transition-colors relative group" style={{ height: `${h}%` }}>
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {h}%
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
