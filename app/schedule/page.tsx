import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Schedule a Consultation</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Online scheduling is temporarily unavailable while we update our calendar. To arrange a complimentary consultation, email{" "}
                  <a className="font-medium text-blue-600 hover:underline" href="mailto:info@dharmafinancialgroup.com">
                    info@dharmafinancialgroup.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border bg-blue-50 p-6 text-center shadow-sm">
                <h2 className="text-2xl font-bold">Online booking is temporarily unavailable</h2>
                <p className="mt-2 text-gray-600">
                  Please email us and we&apos;ll help you arrange a convenient time for your consultation.
                </p>
                <a
                  className="mt-4 inline-flex rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                  href="mailto:info@dharmafinancialgroup.com"
                >
                  Email our team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What to Expect</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here&apos;s what you can expect during your consultation with our financial specialists.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-center text-sm text-gray-500">
                  We&apos;ll discuss your current financial situation, goals, and concerns to understand your unique needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  2
                </div>
                <h3 className="text-xl font-bold">Assessment</h3>
                <p className="text-center text-sm text-gray-500">
                  Our specialists will provide initial insights and identify opportunities for your financial plan.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  3
                </div>
                <h3 className="text-xl font-bold">Next Steps</h3>
                <p className="text-center text-sm text-gray-500">
                  We&apos;ll outline potential strategies and discuss how we can work together to achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
