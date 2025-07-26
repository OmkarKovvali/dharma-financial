"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"week_view"});
    })();
  }, [])
  
  return (
    <Cal 
      namespace="30min"
      calLink="dharmafinancial/30min"
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"week_view"}}
    />
  );
}
