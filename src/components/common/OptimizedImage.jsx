export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  quality = 75,
  ...props
}) {
  // For local images, use Vercel Image Optimization
  const isLocalImage = src.startsWith('/') || src.startsWith('./') || src.startsWith('../');

  // Build Vercel Image Optimization URL
  const getOptimizedUrl = (imageSrc) => {
    if (!isLocalImage) return imageSrc;

    // Use Vercel's Image Optimization: /_next/image?url=...
    // For Vite, we'll just use the image path with proper caching headers
    return imageSrc;
  };

  return (
    <img
      src={getOptimizedUrl(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      decoding="async"
      {...props}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...props.style,
      }}
    />
  );
}
