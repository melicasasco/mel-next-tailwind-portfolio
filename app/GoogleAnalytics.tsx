"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-BFEGKVJSZ9', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [pathname]);

  return null;
} 