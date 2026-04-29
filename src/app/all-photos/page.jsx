import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import { getAllData } from '@/lib/data';
import React from 'react';

const AllPhotos = async({searchParams}) => {
const photos=await getAllData();
    const {category} = await searchParams;
    console.log(category)


    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos



    return (
        <div>
            <div>
                <p>all photos</p>
                <Category/>
            </div>
            <div className=' grid grid-cols-4'>
               {
                filteredPhotos.map((photo)=>(
                     <PhotoCard key={photo.id} photo={photo}/>
                ))
               }
            </div>
        </div>
    );
};

export default AllPhotos;