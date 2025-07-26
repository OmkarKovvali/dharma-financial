import Link from "next/link"
import { ArrowRight, Briefcase, GraduationCap, Heart, Home, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function WhoWeServePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Serve</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We work with individuals and families at every stage of life, providing specialized financial guidance
                  tailored to your unique circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Types */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Users className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Young Families</CardTitle>
                  <CardDescription>
                    Starting your financial journey with growing responsibilities and dreams for the future.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• First-time home buyers</li>
                    <li>• New parents planning for children&apos;s education</li>
                    <li>• Building emergency funds and starting retirement savings</li>
                    <li>• Life insurance and protection planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Mid-Career Professionals</CardTitle>
                  <CardDescription>
                    Established in your career and looking to optimize your financial strategy for long-term success.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Maximizing retirement contributions</li>
                    <li>• Tax-efficient investment strategies</li>
                    <li>• College funding for teenagers</li>
                    <li>• Estate planning and wealth preservation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Pre-Retirees</CardTitle>
                  <CardDescription>
                    Approaching retirement and need to ensure your financial plan will support your desired lifestyle.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Retirement income planning</li>
                    <li>• Social Security optimization</li>
                    <li>• Healthcare and long-term care planning</li>
                    <li>• Legacy planning for heirs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Heart className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Retirees</CardTitle>
                  <CardDescription>
                    Enjoying retirement while ensuring your wealth lasts and your legacy is preserved.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Income distribution strategies</li>
                    <li>• Medicare and healthcare planning</li>
                    <li>• Tax-efficient withdrawal strategies</li>
                    <li>• Charitable giving and legacy planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Special Situations */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Special Situations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Life Transitions We Navigate</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                  Major life events require specialized financial guidance. We&apos;re here to help you through these
                important transitions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Home className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">Divorce</h3>
                <p className="text-center text-sm text-gray-500">
                  Rebuilding your financial foundation and securing your independent future.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Heart className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">Widowhood</h3>
                <p className="text-center text-sm text-gray-500">
                  Compassionate guidance through financial decisions during a difficult time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">Job Loss</h3>
                <p className="text-center text-sm text-gray-500">
                  Strategic planning to maintain financial stability during career transitions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Users className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">Inheritance</h3>
                <p className="text-center text-sm text-gray-500">
                  Wise management and integration of inherited assets into your financial plan.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">Business Sale</h3>
                <p className="text-center text-sm text-gray-500">
                  Maximizing the value of your business exit and planning for life after the sale.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <Heart className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold">Disability</h3>
                <p className="text-center text-sm text-gray-500">
                  Adapting your financial plan to accommodate new circumstances and needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Discuss Your Situation?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                No matter where you are in life, we&apos;re here to help you navigate your financial journey.
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
