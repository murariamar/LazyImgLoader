import React, { useEffect, useRef } from 'react';

export const LazyImage = ({ src }) => {
  const observerRef = useRef(null);
  const imgRef = useRef(null);

  const observerCallback = entries => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;
      const currentObserver = observerRef.current;
      if (isIntersecting && currentObserver) {
        if (entry.target.getAttribute('data-src')) {
          entry.target.setAttribute(
            'src',
            entry.target.getAttribute('data-src')
          );
          entry.target.removeAttribute('data-src');
        }
        currentObserver.disconnect();
      }
    });
  };

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      // Start loading the image 10px before it appears on screen
      const rootMargin = '10px';
      observerRef.current = new IntersectionObserver(observerCallback, {
        rootMargin
      });
      if (imgRef.current) {
        observerRef.current.observe(imgRef.current);
      }
    }
    return () => {
      // cleanup observer
      const currentObserver = observerRef.current;
      if (currentObserver) {
        currentObserver.disconnect();
        currentObserver = null;
      }
    };
  }, []);
  return <img data-src={src} ref={imgRef} className="image-container__item" />;
};
