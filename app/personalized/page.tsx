import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Target, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PersonalizedPage() {
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
                    Personalized Financial Services
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Tailored solutions designed specifically for your unique financial situation and goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Personalized financial consultation"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Personalized Approach */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Approach</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Truly Personalized Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand that every client has unique needs, goals, and circumstances. Our personalized approach
                  ensures your financial strategy is as individual as you are.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Target className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Goal-Focused Strategy</CardTitle>
                  <CardDescription>
                    We start by understanding your specific financial goals and create a customized roadmap to achieve
                    them.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Family-Centered Planning</CardTitle>
                  <CardDescription>
                    Our strategies consider your entire family's needs, from education funding to multi-generational
                    wealth transfer.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Zap className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Adaptive Solutions</CardTitle>
                  <CardDescription>
                    Life changes, and so should your financial plan. We continuously adapt your strategy as your
                    circumstances evolve.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready for a Personalized Financial Strategy?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can create a financial plan that's uniquely yours.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
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
