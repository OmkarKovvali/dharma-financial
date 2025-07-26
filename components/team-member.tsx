import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  title: string
  image: string
  bio: string
}

export default function TeamMember({ name, title, image, bio }: TeamMemberProps) {
  return (
    <Card className="border-0 shadow-sm overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/images/iStock-1254014510.jpg.webp.jpeg"}
          width={200}
          height={200}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 space-y-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-primary font-medium">{title}</p>
        <p className="text-sm text-gray-500">{bio}</p>
      </CardContent>
    </Card>
  )
}
