import ImageDetail from '@/app/components/ImageDetail';
import { getPhoto } from '@/app/lib/unsplash';
import React from 'react';

interface PhotoDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PhotoDetailPage({
  params: { id },
}: PhotoDetailPageProps) {
  // console.log(id);
  const photo = await getPhoto(id);
  return <ImageDetail photo={photo} />;
}
