import React, { useEffect } from "react";

export default function LazyImage({ src, alt, dataSrc }) {
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

    const imgElement = document.querySelector(`img[data-src="${dataSrc}"]`);
    if (imgElement) {
      imageObserver.observe(imgElement);
    }

    return () => {
      if (imgElement) {
        imageObserver.unobserve(imgElement);
      }
    };
  }, [dataSrc]);
  
  return <img src={src} alt={alt} data-src={dataSrc} />;
}

