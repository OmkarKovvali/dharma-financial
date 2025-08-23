"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Tina CMS interface
    // This will be handled by the Tina CMS CLI when running in dev mode
    window.location.href = "/admin";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Tina CMS Admin</h1>
        <p className="text-gray-600">Redirecting to CMS interface...</p>
      </div>
    </div>
  );
} 