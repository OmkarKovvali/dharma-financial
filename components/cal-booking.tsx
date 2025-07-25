"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

interface CalBookingProps {
  calLink?: string
  namespace?: string
  className?: string
}

export default function CalBooking({
  calLink = "omkar-kovvali-nsjc49/30min",
  namespace = "30min",
  className = "",
}: CalBookingProps) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace })
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [namespace])

  return (
    <div className={`w-full ${className}`}>
      <Cal
        namespace={namespace}
        calLink={calLink}
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
        config={{
          layout: "month_view",
        }}
      />
    </div>
  )
}
