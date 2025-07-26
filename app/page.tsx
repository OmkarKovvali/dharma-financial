import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, BookOpen, CheckCircle, Clock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.jpeg"
              fill
              alt="Professional consultation"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 container px-4 md:px-6 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Building Your Financial Future,
                <br />
                <span className="text-blue-400">Under One Roof</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive financial solutions designed to help you achieve your goals and secure your family&apos;s
                future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/schedule">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Financial Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of financial services tailored to your unique needs and goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Clock className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Retirement Planning</CardTitle>
                  <CardDescription>
                    Secure your future with personalized retirement strategies designed to provide financial
                    independence.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>401(k) & IRA Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>Pension Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>Social Security Maximization</span>
                    </li>
                  </ul>
                  <Link href="/services#retirement" className="mt-4 inline-flex items-center text-blue-600">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>College Planning</CardTitle>
                  <CardDescription>
                    Prepare for your children&apos;s education with strategic savings and investment plans.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>529 College Savings Plans</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>FAFSA & Financial Aid Guidance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>Education Investment Strategies</span>
                    </li>
                  </ul>
                  <Link href="/services#college" className="mt-4 inline-flex items-center text-blue-600">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Shield className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Insurance Solutions</CardTitle>
                  <CardDescription>
                    Protect what matters most with comprehensive insurance coverage tailored to your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>Life Insurance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>Long-Term Care Insurance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                      <span>Medicare Insurance</span>
                    </li>
                  </ul>
                  <Link href="/services#insurance" className="mt-4 inline-flex items-center text-blue-600">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Why Choose Dharma
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Financial Journey, Our Expertise
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  At Dharma Financial Services, we combine industry expertise with personalized attention to help you
                  navigate life&apos;s financial complexities.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-2">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Data-Driven Strategies</h3>
                      <p className="text-sm text-gray-500">
                        We use advanced analytics to create personalized financial strategies that adapt to market
                        changes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Fiduciary Responsibility</h3>
                      <p className="text-sm text-gray-500">
                        We always act in your best interest, providing transparent advice and recommendations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-blue-100 p-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Lifelong Partnership</h3>
                      <p className="text-sm text-gray-500">
                        We build lasting relationships, guiding you through every financial milestone in your life.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/difference-between-money-finance-funds-717X404.jpg-2.webp"
                  width={500}
                  height={500}
                  alt="Dharma Financial Services team"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* 
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Client Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from clients who have transformed their financial future with Dharma Financial Services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <TestimonialCard
                quote="Dharma helped me create a retirement plan that gave me confidence in my financial future. Their personalized approach made all the difference."
                author="Michael R."
                title="Retirement Client"
              />
              <TestimonialCard
                quote="The college planning services at Dharma ensured my children could attend their dream schools without compromising our retirement savings."
                author="Sarah J."
                title="College Planning Client"
              />
              <TestimonialCard
                quote="Their insurance recommendations provided my family with protection and peace of mind. The team at Dharma truly cares about their clients."
                author="David L."
                title="Insurance Client"
              />
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Secure Your Financial Future?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a complimentary consultation with one of our financial specialists today.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/schedule">
                <Button size="lg" variant="secondary">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  Learn More About Us
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
