import Image from 'next/image';
import Box from './components/Box';
import { getPhotos } from './lib/unsplash';
import Link from 'next/link';

export default async function Home() {
  const photos = await getPhotos();
  // console.log(photos);
  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {photos.map((photo) => (
        <div className="shadow-xl rounded  overflow-hidden" key={photo.id}>
          <Link href={`/photo/${photo.id}`}>
            <Image
              src={photo.urls.regular}
              alt={photo.alt_description}
              width={400}
              height={400}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
