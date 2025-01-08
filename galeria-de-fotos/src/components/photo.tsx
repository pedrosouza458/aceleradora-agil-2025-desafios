import { sanitizeUnsplashSlug } from "../utils/sanitize-unsplash-slug";

interface PictureProps {
  url: string;
  name: string;
}

export function Photo({ url, name }: PictureProps) {
  return (
    <div>
      <div className="relative overflow-hidden">
      <img
        className="h-60 w-full transform transition-transform duration-300 ease-in-out hover:scale-125"
        src={url}
        alt={name}
      />
      </div>
      <h1 className="text-center font-medium text-lg">{sanitizeUnsplashSlug(name)}</h1>
    </div>
  );
}
