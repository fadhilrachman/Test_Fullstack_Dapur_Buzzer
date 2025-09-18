"use client";

import clsx from "clsx";
import { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
  rounded?: string; // applied to the outer wrapper
  className?: string; // applied to the <img>
  containerClassName?: string; // classes for the wrapper (e.g., aspect-[4/5])
};

const Image = (props: ImageProps) => {
  const {
    alt = "",
    src,
    className,
    rounded,
    containerClassName,
    ...rest
  } = props as any;

  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse" : "",
        rounded,
        containerClassName
      )}
    >
      <img
        data-testid="image"
        className={clsx(
          // Defaults: avoid fixed height to prevent distortion
          "block w-full h-auto duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          className
        )}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
