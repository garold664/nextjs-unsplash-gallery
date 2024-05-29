'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface OverlayProps {
  children: React.ReactNode;
}

export default function Overlay({ children }: OverlayProps) {
  const router = useRouter();
  return (
    <div
      onClick={router.back}
      className="fixed inset-0 bg-zinc-900/20 z-100 backdrop-blur-lg flex items-center justify-center"
    >
      {children}
    </div>
  );
}
