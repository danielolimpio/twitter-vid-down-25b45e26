import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  showSkeleton?: boolean;
}

export function ImageWithSkeleton({
  containerClassName,
  skeletonClassName,
  className,
  showSkeleton = true,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {!loaded && showSkeleton && (
        <Skeleton className={cn("absolute inset-0 z-0", skeletonClassName)} />
      )}
      <img
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </div>
  );
}
