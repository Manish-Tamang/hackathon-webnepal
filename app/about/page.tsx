import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Github, Heart, Mail, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FaCodeCompare } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { RiFeedbackFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


export default function AboutPage() {
    return (
      <>
        <Header />

        <main className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <section className="mb-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-[#52AF83] via-[#3d8b63] to-[#2a6b4a] bg-clip-text text-transparent">
                About Web Nepal
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                An interactive platform designed to make learning web
                development accessible, engaging, and effective.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <Card>
              <CardContent className="p-8">
                <div className="mx-auto max-w-3xl">
                  <h2 className="mb-6 text-3xl font-bold text-[#2a6b4a]">
                    Our Mission
                  </h2>
                  <p className="mb-4 text-lg text-muted-foreground">
                    WebLearn was created with a simple mission: to provide a
                    hands-on, interactive learning experience for anyone
                    interested in web development, regardless of their
                    background or experience level.
                  </p>
                  <p className="mb-4 text-lg text-muted-foreground">
                    We believe that the best way to learn coding is by doing,
                    which is why our platform combines theory with practice,
                    allowing you to write code and see the results in real-time.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Our AI-powered feedback system provides personalized
                    guidance, helping you understand concepts better and improve
                    your skills faster.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <Card className="">
              <CardContent className="p-8">
                <div className="mx-auto max-w-3xl">
                  <h2 className="mb-6 text-3xl font-bold text-[#2a6b4a]">
                    What Makes Us Different
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 text-[#52AF83]">
                          <FaCodeCompare className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Interactive Learning</h3>
                          <p className="text-muted-foreground">
                            Write code and see results instantly in your browser
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 text-[#52AF83]">
                          <BsPeopleFill className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Community Focused</h3>
                          <p className="text-muted-foreground">
                            Learn alongside others and share your progress
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 text-[#52AF83]">
                          <RiFeedbackFill className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">AI-Powered Feedback</h3>
                          <p className="text-muted-foreground">
                            Get instant hints and guidance from our AI tutor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 text-[#52AF83]">
                          <FaGithub className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">Open Source</h3>
                          <p className="text-muted-foreground">
                            Contribute to our platform and help it grow
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          {/* Team Section */}
          <section className="mt-20 mb-10 ">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900">Our Team</h3>
              <p className="mt-3 text-gray-600">
                The people building Web Nepal.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
              {[
                {
                  name: "Manish gole tamang",
                  role: "Fullstack Developer ",
                  image: "/img/Manish Gole Tamang.jpg",
                },
                {
                  name: "Nux Gajurel",
                  role: "Front-end Developer ",
                  image: "/img/Nuxgajurel.jpg",
                },
                {
                  name: "Bipan Deuja",
                  role: "Front-end Developer ",
                  image: "/img/bpindeuja.jpg",
                },
                {
                  name: "Imohang Chamling Rai",
                  role: "Assistant Developer ",
                  image: "/img/imo.jpg",
                },
              ].map((member) => (
                <article
                  key={member.name}
                  className="rounded-[4px] bg-white p-6 text-center  ring-1 ring-gray-100"
                >
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-emerald-100">
                    <img
                      src={member.image}
                      alt={`Team member ${member.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-sm text-emerald-700">{member.role}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="mb-16">
            <Card className="border rounded-[4px] border-[#52AF83]/20">
              <CardContent className="p-8">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="mb-6 text-3xl font-bold text-[#2a6b4a]">
                    Get in Touch
                  </h2>
                  <p className="mb-8 text-lg text-muted-foreground">
                    Have questions, feedback, or just want to say hello?
                    We&#8217;d love to hear from you!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-[#52AF83] text-[#52AF83] hover:bg-[#52AF83] hover:text-white"
                    >
                      <a href="mailto:maneshtamang833@gmailcom">
                        <Mail className="mr-2 h-4 w-4" /> Email Us
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#52AF83] text-white hover:bg-[#3d8b63]"
                    >
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
        <Footer />
      </>
    );
}