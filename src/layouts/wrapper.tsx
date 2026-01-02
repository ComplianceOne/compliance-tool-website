'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ScrollToTop from '@/components/scroll-to-top/scroll-to-top';
import Preloader from '@/components/preloader/preloader';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap.bundle.min');
}

// Props Type
interface WrapperProps {
  children: React.ReactNode;
  scrollBackToTop?: boolean;
}

const Wrapper = ({ children, scrollBackToTop = true }: WrapperProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const pathname = usePathname();

  // Handle initial loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_ANIMATION_TIMEOUT);

    return () => clearTimeout(timer);
  }, []);

  // Handle route change loading state
  useEffect(() => {
    if (pathname) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, LOADING_ANIMATION_TIMEOUT);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div role="status" aria-live="polite">
          <Preloader />
        </div>
      )}

      {/* Content */}
      <div className={isLoading ? 'content-hidden' : 'content-visible'}>
        {children}
        {scrollBackToTop && <ScrollToTop threshold={200} />}
      </div>
    </>
  );
};

export default Wrapper;
