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
                    Driven by a shared vision of financial empowerment, Dharma Financial Services was founded to simplify wealth management and help individuals achieve long-term financial stability through tailored solutions. Whether you’re navigating life-changing financial decisions, seeking growth in fluctuating markets, or preparing for a secure future, we are here to provide personalized solutions that align with your goals. We specialize in a broad spectrum of financial services, including stock market investments, real estate opportunities, retirement planning, insurance solutions, college funding strategies, and estate planning.
                    <br /><br />
                    Our expert team combines in-depth market analysis and personalized guidance to help you optimize your wealth for long-term success. Our approach is centered around transparency, collaboration, and client satisfaction. At every step, we prioritize open communication and a deep understanding of your unique needs, crafting solutions that maximize returns while minimizing risks.
                  </p>
                </div>
              </div>
              <Image
                src="/images/finance.jpeg"
                width={550}
                height={550}
                alt="Dharma Financial Services office"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
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
                  We put our clients&apos; needs first, creating personalized solutions that align with their unique goals
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Expert</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is led by experienced professionals dedicated to helping you achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-1 lg:grid-cols-1">
              <TeamMember
                name="Raj Kovvali"
                title="Founder & CEO"
                image="/images/1516242255037.jpeg"
                bio="Raj Kovvali leads Dharma Financial Services with a commitment to transparency, client satisfaction, and long-term financial empowerment."
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
