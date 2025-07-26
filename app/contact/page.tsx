"use client"

import Image from "next/image"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CalBooking from "@/components/cal-booking"

export default function ContactPage() {



  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We&apos;re here to answer your questions and help you take the next step in your financial journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                    Get in Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                  <p className="text-gray-500 md:text-lg">
                    Have questions or ready to start planning your financial future? Reach out to our team using any of
                    the methods below.
                  </p>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="flex items-center space-x-4 p-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-gray-500">703-346-7372</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex items-center space-x-4 p-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <Mail className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-gray-500">rkovvali@gmail.com</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="flex items-center space-x-4 p-4">
                        <div className="rounded-full bg-blue-100 p-2">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Office</h3>
                          <p className="text-sm text-gray-500">
                            22375 Broderick Dr. S220
                            <br />
                            Sterling, VA 20166
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="pt-4">
                    <Image
                      src="/images/office-building.png"
                      width={500}
                      height={300}
                      alt="Dharma Financial Services office"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                    Contact Options
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Started Today</h2>
                  <p className="text-gray-500 md:text-lg">
                    Choose how you&apos;d like to connect with us - schedule a consultation or send us a message.
                  </p>

                  <Tabs defaultValue="schedule" className="w-full">
                    <TabsList className="grid w-full grid-cols-1">
                      <TabsTrigger value="schedule" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Schedule Meeting
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="schedule" className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-semibold mb-2">Schedule Your Consultation</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Book a 30-minute consultation to discuss your financial goals and how we can help.
                        </p>
                        <div className="h-[600px] rounded-lg overflow-hidden border">
                          <CalBooking />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
