import { Header } from "../components/header";
import { PhotoGallery } from "../components/photo-gallery";
import { SearchBar } from "../components/search-bar";

export function PhotoGalleryPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <PhotoGallery />
    </div>
  );
}
