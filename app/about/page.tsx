import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Github, Heart, Mail, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"


export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
            <section className="mb-16">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-[#52AF83] via-[#3d8b63] to-[#2a6b4a] bg-clip-text text-transparent">
                        About Web Nepal
                    </h1>
                    <p className="mb-8 text-xl text-muted-foreground">
                        An interactive platform designed to make learning web development accessible, engaging, and effective.
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <Card className="border border-[#52AF83]/20">
                    <CardContent className="p-8">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="mb-6 text-3xl font-bold text-[#2a6b4a]">Our Mission</h2>
                            <p className="mb-4 text-lg text-muted-foreground">
                                WebLearn was created with a simple mission: to provide a hands-on, interactive learning experience for
                                anyone interested in web development, regardless of their background or experience level.
                            </p>
                            <p className="mb-4 text-lg text-muted-foreground">
                                We believe that the best way to learn coding is by doing, which is why our platform combines theory with
                                practice, allowing you to write code and see the results in real-time.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Our AI-powered feedback system provides personalized guidance, helping you understand concepts better and
                                improve your skills faster.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>

            <section className="mb-16">
                <Card className="border border-[#52AF83]/20">
                    <CardContent className="p-8">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="mb-6 text-3xl font-bold text-[#2a6b4a]">What Makes Us Different</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 text-[#52AF83]">
                                            <Code className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Interactive Learning</h3>
                                            <p className="text-muted-foreground">Write code and see results instantly in your browser</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 text-[#52AF83]">
                                            <Users className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Community Focused</h3>
                                            <p className="text-muted-foreground">Learn alongside others and share your progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 text-[#52AF83]">
                                            <Heart className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">AI-Powered Feedback</h3>
                                            <p className="text-muted-foreground">Get instant hints and guidance from our AI tutor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 text-[#52AF83]">
                                            <Github className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Open Source</h3>
                                            <p className="text-muted-foreground">Contribute to our platform and help it grow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <section className="mb-16">
                <Card className="border border-[#52AF83]/20">
                    <CardContent className="p-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-6 text-3xl font-bold text-[#2a6b4a]">Get in Touch</h2>
                            <p className="mb-8 text-lg text-muted-foreground">
                                Have questions, feedback, or just want to say hello? We'd love to hear from you!
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button asChild variant="outline" size="lg" className="border-[#52AF83] text-[#52AF83] hover:bg-[#52AF83] hover:text-white">
                                    <a href="mailto:maneshtamang833@gmailcom">
                                        <Mail className="mr-2 h-4 w-4" /> Email Us
                                    </a>
                                </Button>
                                <Button asChild size="lg" className="bg-[#52AF83] text-white hover:bg-[#3d8b63]">
                                    <Link href="/learn">
                                        Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}