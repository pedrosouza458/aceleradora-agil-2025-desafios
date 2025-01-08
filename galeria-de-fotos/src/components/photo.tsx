import { sanitizeUnsplashSlug } from "../utils/sanitize-unsplash-slug"

interface PictureProps {
  url: string;
  name: string;
}

export function Photo({ url, name }: PictureProps) {
  return (
    <div>
      <img className="h-60 w-full" src={url} alt={name} />
      <h1>{sanitizeUnsplashSlug(name)}</h1>
    </div>
  );
}
