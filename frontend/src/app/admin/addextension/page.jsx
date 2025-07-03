'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectAddExtension() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/admin/manage-extensions');
  }, [router]);
  return null;
} 