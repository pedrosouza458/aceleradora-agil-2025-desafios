export function sanitizeUnsplashSlug(slug: string): string {
  const parts = slug.split('-');
  parts.pop(); 
  const sanitized = parts
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(' ');

  return sanitized;
}
