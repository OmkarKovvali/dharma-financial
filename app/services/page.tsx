import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Clock,
  CreditCard,
  DollarSign,
  HeartPulse,
  Home,
  PiggyBank,
  Shield,
  Umbrella,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Financial Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Comprehensive financial planning solutions tailored to your unique needs and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Retirement Planning */}
        <section id="retirement" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Retirement Planning
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Secure Your Future</h2>
                  <p className="text-gray-500 md:text-lg">
                    Our retirement planning services help you build a secure financial future, ensuring you can maintain
                    your lifestyle and pursue your passions during your retirement years.
                  </p>
                  <p className="text-gray-500 md:text-lg">
                    We create personalized retirement strategies that consider your unique goals, timeline, and risk
                    tolerance, helping you navigate the complexities of retirement planning with confidence.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Retirement Planning Services Include:</h3>
                    <ul className="grid gap-2">
                      <li className="flex items-center">
                        <Clock className="mr-2 h-5 w-5 text-primary" />
                        <span>Retirement Income Planning</span>
                      </li>
                      <li className="flex items-center">
                        <PiggyBank className="mr-2 h-5 w-5 text-primary" />
                        <span>401(k) & IRA Optimization</span>
                      </li>
                      <li className="flex items-center">
                        <Calculator className="mr-2 h-5 w-5 text-primary" />
                        <span>Social Security Maximization</span>
                      </li>
                      <li className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-primary" />
                        <span>Pension Analysis & Planning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link href="/contact">
                      <Button>
                        Schedule a Retirement Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/retirement-feature-1080x675.jpg"
                  width={500}
                  height={500}
                  alt="Retirement planning"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* College Planning */}
        <section id="college" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center order-last lg:order-first">
                <Image
                  src="/images/100408_Yard_045-1200x630.jpg.webp"
                  width={500}
                  height={500}
                  alt="College planning"
                  className="rounded-xl object-cover"
                />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    College Planning
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Fund Their Future</h2>
                  <p className="text-gray-500 md:text-lg">
                    Our college planning services help families prepare for the rising costs of higher education without
                    compromising other financial goals, such as retirement.
                  </p>
                  <p className="text-gray-500 md:text-lg">
                    We develop strategic savings and investment plans that maximize financial aid opportunities while
                    building the resources needed to fund your children&apos;s education.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our College Planning Services Include:</h3>
                    <ul className="grid gap-2">
                      <li className="flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-primary" />
                        <span>529 College Savings Plans</span>
                      </li>
                      <li className="flex items-center">
                        <Calculator className="mr-2 h-5 w-5 text-primary" />
                        <span>FAFSA & Financial Aid Guidance</span>
                      </li>
                      <li className="flex items-center">
                        <DollarSign className="mr-2 h-5 w-5 text-primary" />
                        <span>Education Investment Strategies</span>
                      </li>
                      <li className="flex items-center">
                        <CreditCard className="mr-2 h-5 w-5 text-primary" />
                        <span>Student Loan Planning</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link href="/contact">
                      <Button>
                        Schedule a College Planning Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Products */}
        <section id="insurance" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Insurance Solutions
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Protect What Matters</h2>
                  <p className="text-gray-500 md:text-lg">
                    Our insurance planning services help you protect your family, assets, and financial future from
                    unexpected events and challenges.
                  </p>
                  <p className="text-gray-500 md:text-lg">
                    We analyze your unique situation to recommend appropriate coverage options that provide peace of
                    mind and financial security for you and your loved ones.
                  </p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Our Insurance Solutions Include:</h3>
                    <ul className="grid gap-2">
                      <li className="flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-primary" />
                        <span>Life Insurance</span>
                      </li>
                      <li className="flex items-center">
                        <HeartPulse className="mr-2 h-5 w-5 text-primary" />
                        <span>Long-Term Care Insurance</span>
                      </li>
                      <li className="flex items-center">
                        <Umbrella className="mr-2 h-5 w-5 text-primary" />
                        <span>Disability Income Protection</span>
                      </li>
                      <li className="flex items-center">
                        <Home className="mr-2 h-5 w-5 text-primary" />
                        <span>Property & Casualty Insurance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link href="/contact">
                      <Button>
                        Schedule an Insurance Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/insurance.webp"
                  width={500}
                  height={500}
                  alt="Insurance solutions"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Additional Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Financial Solutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Beyond our core services, we offer a range of financial solutions to address your complete financial
                  picture.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Estate Planning</CardTitle>
                  <CardDescription>
                    Create a legacy that reflects your values and provides for future generations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Will & Trust Planning</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Legacy Planning</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Charitable Giving Strategies</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Tax Planning</CardTitle>
                  <CardDescription>
                    Minimize your tax burden through strategic planning and investment decisions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Tax-Efficient Investing</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Income Tax Planning</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Tax Loss Harvesting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Investment Management</CardTitle>
                  <CardDescription>
                    Grow and preserve your wealth with personalized investment strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Portfolio Construction</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Risk Management</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Ongoing Portfolio Monitoring</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Business Planning</CardTitle>
                  <CardDescription>
                    Solutions for business owners to protect and grow their enterprises.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Succession Planning</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Key Person Insurance</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Employee Benefits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Debt Management</CardTitle>
                  <CardDescription>
                    Strategies to reduce debt and improve your overall financial health.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Debt Reduction Strategies</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Mortgage Analysis</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Student Loan Optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Financial Education</CardTitle>
                  <CardDescription>Resources to help you make informed financial decisions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Financial Workshops</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>One-on-One Coaching</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-primary" />
                      <span>Educational Resources</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Process</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How We Work With You</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our collaborative approach ensures we develop financial strategies that align with your unique goals
                  and values.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-center text-sm text-gray-500">
                  We begin by understanding your current financial situation, goals, and concerns.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold">Analysis</h3>
                <p className="text-center text-sm text-gray-500">
                  Our team analyzes your financial information to identify opportunities and potential challenges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold">Strategy</h3>
                <p className="text-center text-sm text-gray-500">
                  We develop a personalized financial plan designed to help you achieve your specific goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  4
                </div>
                <h3 className="text-xl font-bold">Implementation</h3>
                <p className="text-center text-sm text-gray-500">
                  We work with you to implement your plan and provide ongoing support and adjustments as needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Take Control of Your Financial Future?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a complimentary consultation with one of our financial advisors today.
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
