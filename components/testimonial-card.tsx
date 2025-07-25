import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
}

export default function TestimonialCard({ quote, author, title }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6 space-y-4">
        <QuoteIcon className="h-8 w-8 text-primary/40" />
        <p className="text-gray-700 italic">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </CardContent>
    </Card>
  )
}
