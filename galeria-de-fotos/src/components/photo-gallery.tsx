import { useEffect, useState } from "react";
import { UNSPLASH_API_KEY } from "../api/constants";
import { UnsplashPicture } from "../types/unsplash/unsplash-picture";
import { UnsplashRequestParams } from "../types/unsplash/unsplash-request-params";
import { getPictures } from "../api/get-pictures";
import { Photo } from "./photo";

const params: UnsplashRequestParams = {
  client_id: UNSPLASH_API_KEY,
  query: "nature",
  page: 1,
  per_page: 20,
};

export function PhotoGallery() {
  const [data, setData] = useState<UnsplashPicture[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPictures(params);
      setData(response);
    };

    fetchData();
  }, [data]);
  return (
    <div className="grid grid-cols-4 gap-3">
      {data ? (
        data.map((photo: UnsplashPicture) => (
          <Photo key={photo.id} url={photo.urls.regular} name={ photo.alternative_slugs.pt} />
        ))
      ) : (
        <p>Nenhum produto foi encontrado.</p>
      )}
    </div>
  );
}
