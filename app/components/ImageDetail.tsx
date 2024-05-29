import React from 'react';
import { Photo } from '../lib/types';
import Image from 'next/image';

interface ImageDetailProps {
  photo: Photo;
}

export default function ImageDetail({ photo }: ImageDetailProps) {
  return (
    <div className="flex  flex-col items-center justify-center">
      <h1 className="font-bold text-2xl text-center my-10">
        {photo.alt_description}
      </h1>
      <Image
        src={photo.urls.regular}
        alt={photo.alt_description}
        width={1000}
        height={1000}
      />
    </div>
  );
}
