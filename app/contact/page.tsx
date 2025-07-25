"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CalBooking from "@/components/cal-booking"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    preferredContact: "email",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Form submitted!",
      description: "Thank you for contacting Dharma Financial Services. We'll be in touch soon.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      preferredContact: "email",
    })
  }

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
                  We're here to answer your questions and help you take the next step in your financial journey.
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
                          <p className="text-sm text-gray-500">(555) 123-4567</p>
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
                          <p className="text-sm text-gray-500">info@dharmafinancial.com</p>
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
                            123 Financial Plaza, Suite 400
                            <br />
                            New York, NY 10001
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="pt-4">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
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
                    Choose how you'd like to connect with us - schedule a consultation or send us a message.
                  </p>

                  <Tabs defaultValue="schedule" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="schedule" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Schedule Meeting
                      </TabsTrigger>
                      <TabsTrigger value="message" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Send Message
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="schedule" className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-semibold mb-2">Schedule Your Consultation</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Book a 30-minute consultation to discuss your financial goals and how we can help.
                        </p>
                        <div className="h-[600px] rounded-lg overflow-hidden border">
                          <CalBooking className="h-full" />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="message" className="space-y-4">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              placeholder="john@example.com"
                              required
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="(555) 123-4567"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="interest">I'm Interested In</Label>
                            <Select onValueChange={handleSelectChange} value={formData.interest}>
                              <SelectTrigger id="interest">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="retirement">Retirement Planning</SelectItem>
                                <SelectItem value="college">College Planning</SelectItem>
                                <SelectItem value="insurance">Insurance Solutions</SelectItem>
                                <SelectItem value="estate">Estate Planning</SelectItem>
                                <SelectItem value="investment">Investment Management</SelectItem>
                                <SelectItem value="other">Other Services</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Contact Method</Label>
                          <RadioGroup
                            defaultValue="email"
                            value={formData.preferredContact}
                            onValueChange={handleRadioChange}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="email-contact" />
                              <Label htmlFor="email-contact">Email</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="phone-contact" />
                              <Label htmlFor="phone-contact">Phone</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                          Submit
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Office Hours</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is available during the following hours, or by appointment.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Weekdays</h3>
                    <p className="text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Weekends</h3>
                    <p className="text-gray-500">
                      Saturday: By Appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
