import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    About Dharma Financial Services
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    We're dedicated to helping individuals and families achieve financial security through personalized
                    planning and expert guidance.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Dharma Financial Services office"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Story</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Legacy of Trust and Excellence</h2>
                  <p className="text-gray-500 md:text-lg">
                    Founded in 2005, Dharma Financial Services was established with a simple mission: to provide honest,
                    transparent financial guidance that puts clients first. Our founder, Sarah Dharma, recognized that
                    many individuals and families were overwhelmed by complex financial decisions and needed a trusted
                    partner to help navigate these challenges.
                  </p>
                  <p className="text-gray-500 md:text-lg">
                    Over the years, we've grown from a small practice to a comprehensive financial planning firm, but
                    our core values remain unchanged. We believe in building lasting relationships with our clients,
                    understanding their unique goals, and creating personalized strategies to help them achieve
                    financial security and peace of mind.
                  </p>
                  <p className="text-gray-500 md:text-lg">
                    Today, our team of experienced specialists continues this tradition of excellence, combining
                    industry expertise with compassionate service to help our clients navigate every stage of their
                    financial journey.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  width={500}
                  height={500}
                  alt="Dharma Financial Services team"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Guiding Principles</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The core values that drive everything we do at Dharma Financial Services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-center text-sm text-gray-500">
                  We uphold the highest ethical standards in all our interactions, providing honest advice and
                  transparent recommendations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Client-Centered</h3>
                <p className="text-center text-sm text-gray-500">
                  We put our clients' needs first, creating personalized solutions that align with their unique goals
                  and values.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Long-Term Focus</h3>
                <p className="text-center text-sm text-gray-500">
                  We build lasting relationships and develop strategies designed for sustainable, long-term financial
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Experts</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced professionals is dedicated to helping you achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TeamMember
                name="Sarah Dharma"
                title="Founder & CEO"
                image="/placeholder.svg?height=300&width=300"
                bio="With over 20 years of experience in financial planning, Sarah founded Dharma Financial Services with a vision to provide honest, client-centered financial guidance."
              />
              <TeamMember
                name="Michael Chen"
                title="Retirement Planning Specialist"
                image="/placeholder.svg?height=300&width=300"
                bio="Michael specializes in creating comprehensive retirement strategies that help clients maintain their lifestyle and achieve their post-career dreams."
              />
              <TeamMember
                name="Priya Patel"
                title="College Planning Expert"
                image="/placeholder.svg?height=300&width=300"
                bio="Priya helps families navigate the complex world of college funding, ensuring education goals are met without compromising other financial priorities."
              />
              <TeamMember
                name="David Rodriguez"
                title="Insurance Solutions Specialist"
                image="/placeholder.svg?height=300&width=300"
                bio="David's expertise in risk management helps clients protect what matters most through carefully selected insurance and protection strategies."
              />
              <TeamMember
                name="Jennifer Kim"
                title="Investment Strategist"
                image="/placeholder.svg?height=300&width=300"
                bio="Jennifer develops personalized investment portfolios designed to help clients grow and preserve wealth through changing market conditions."
              />
              <TeamMember
                name="Robert Johnson"
                title="Estate Planning Advisor"
                image="/placeholder.svg?height=300&width=300"
                bio="Robert specializes in helping clients create comprehensive legacy plans that reflect their values and provide for future generations."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Start Your Financial Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is ready to help you create a personalized financial plan that aligns with your goals and
                values.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
