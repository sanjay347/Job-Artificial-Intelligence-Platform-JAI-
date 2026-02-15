export default function HowItWorks() {
    const steps = [
        {
            id: '01',
            title: 'Upload Your Resume',
            description: 'Start by uploading your existing resume. Our AI analyzes your skills, experience, and education to build your profile.',
        },
        {
            id: '02',
            title: 'Find Your Dream Job',
            description: 'Browse job listings or let us recommend roles that match your profile perfectly. We search across major platforms.',
        },
        {
            id: '03',
            title: 'Tailor & Apply',
            description: 'With one click, generate a tailored resume and cover letter for each application. Stand out with keywords that matter.',
        },
        {
            id: '04',
            title: 'Track Progress',
            description: 'Keep tabs on every application in your dashboard. Get reminders for follow-ups and interview prep tips.',
        },
    ];

    return (
        <section id="how-it-works" className="py-24 sm:py-32 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Workflow</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        How JAI works for you
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-900 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex flex-col items-center text-center group">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-lg border-4 border-indigo-50 dark:border-indigo-900 text-2xl font-bold text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 z-10">
                                {step.id}
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-8 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                                {step.description}
                            </p>

                            {/* Mobile connector line */}
                            {index !== steps.length - 1 && (
                                <div className="lg:hidden absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-gray-200 dark:bg-gray-700"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
