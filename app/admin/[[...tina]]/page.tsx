"use client";

export default function AdminPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Tina CMS Admin</h1>
        <p className="text-gray-600 mb-4">
          The CMS interface should be available at the root admin path.
        </p>
        <p className="text-sm text-gray-500">
          If you're seeing this, the Tina CMS may need to be configured differently.
        </p>
      </div>
    </div>
  );
} 