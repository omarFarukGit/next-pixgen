import React from "react";
import PhotoCard from "./PhotoCard";
import { getAllData } from "@/lib/data";

const TopGenerations = async () => {
  const photos = await getAllData();
  const TopPhotos = photos.slice(1, 8);
  console.log(TopPhotos);

  return (
    <div className=" mt-5">
      <div className=" max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {TopPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
