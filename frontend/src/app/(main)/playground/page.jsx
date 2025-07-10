import React from 'react';

export default function PlaygroundPage() {

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Playground (Protected)</h1>
      <p>Welcome, {user?.email} ({user?.type})!</p>
      <p>This page is protected and only visible to authenticated users.</p>
    </div>
  );
} 