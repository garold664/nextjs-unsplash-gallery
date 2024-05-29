import { Photo } from './types';

const headers = {
  Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
};

export const getPhotos = async () => {
  const url = new URL('https://api.unsplash.com/photos/');

  url.searchParams.set('per_page', '10');
  url.searchParams.set('order_by', 'popular');

  return (await fetch(url, { headers }).then((res) => res.json())) as Photo[];
};

export const getPhoto = async (id: string) => {
  const url = new URL(`https://api.unsplash.com/photos/${id}`);
  return (await fetch(url, { headers }).then((res) => res.json())) as Photo;
};
