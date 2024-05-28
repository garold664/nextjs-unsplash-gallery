import Image from 'next/image';
import Box from './components/Box';
import { getPhotos } from './lib/unsplash';
import Link from 'next/link';

export default async function Home() {
  const photos = await getPhotos();
  // console.log(photos);
  return (
    <div>
      {photos.map((photo) => (
        <Link href={`/photos/${photo.id}`} key={photo.id}>
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description}
            width={400}
            height={400}
          />
        </Link>
      ))}
    </div>
  );
}
