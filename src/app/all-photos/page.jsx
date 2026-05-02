import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import { getAllData } from "@/lib/data";
import React from "react";

const AllPhotos = async ({ searchParams }) => {
  const photos = await getAllData();
  const { category } = await searchParams;
  console.log(category);

  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() == category.toLowerCase(),
      )
    : photos;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className=" flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 px-2">
        <p className="  text-2xl font-semibold ">All photos</p>
        <p>
          <Category />
        </p>
      </div>
      <div className=" max-w-7xl mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
