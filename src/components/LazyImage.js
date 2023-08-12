import React, { useEffect, useRef } from "react";

export default function LazyImage({ src, alt, dataSrc }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const highQualitySrc = img.getAttribute("data-src");
          img.src = highQualitySrc;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    };

    const imageObserver = new IntersectionObserver(handleIntersection, options);

    if (imgRef.current) {
      imageObserver.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        imageObserver.unobserve(imgRef.current);
      }
    };
  }, []);

  return <img ref={imgRef} src={src} alt={alt} data-src={dataSrc} />;
}
