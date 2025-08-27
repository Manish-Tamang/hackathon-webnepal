import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative z-10 w-full overflow-hidden bg-gradient-to-br from-[#f8f3e3] via-white to-[#e0f7ea] dark:from-gray-900 dark:via-gray-800 dark:to-[#1a3c34]">
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="space-y-6 max-w-3xl text-center animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="inline-flex items-center rounded-full border border-[#52AF83]/20 px-4 py-1.5 text-sm font-semibold bg-white/70 backdrop-blur-md dark:bg-gray-800/70">
                            <span className="relative flex h-2.5 w-2.5 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52AF83] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#52AF83]"></span>
                            </span>
                            New Courses Launched
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-extrabold leading-tight tracking-tight">
                            Master Web Development
                            <br />
                            <span className="bg-gradient-to-r from-[#52AF83] via-[#3d8b63] to-[#2a6b4a] bg-clip-text text-transparent">
                                The Modern Way
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
                            Join thousands of developers mastering modern web technologies
                            with interactive coding, real-world projects, and AI-driven
                            insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Button
                                asChild
                                className="px-6 py-5 text-base bg-[#52AF83] hover:bg-[#3d8b63] text-white transition-colors rounded-lg"
                            >
                                <Link href="/learn">Start Learning Now</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="px-6 py-5 text-base border-2 border-[#52AF83] text-[#52AF83] hover:bg-[#52AF83]/10 transition-colors rounded-lg"
                            >
                                <Link href="#s">Explore Courses</Link>
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 pt-4 justify-center">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"
                                    ></div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Join <span className="font-bold text-[#52AF83]">2,500+</span>{" "}
                                developers thriving
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
