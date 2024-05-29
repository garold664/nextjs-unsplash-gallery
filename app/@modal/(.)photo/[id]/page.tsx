'use client';
import ImageDetail from '@/app/components/ImageDetail';
import { getPhoto } from '@/app/lib/unsplash';
import { useRouter } from 'next/navigation';
interface ModalDetailPageProps {
  params: {
    id: string;
  };
}
export default async function ModalDetailPage({
  params,
}: ModalDetailPageProps) {
  const router = useRouter();
  const photo = await getPhoto(params.id);

  return (
    <div
      onClick={router.back}
      className="fixed inset-0 bg-zinc-900/20 z-100 backdrop-blur-lg flex items-center justify-center"
    >
      <dialog className="w-[80vw] h-[80vh] rounded-md" open>
        <ImageDetail photo={photo} />
      </dialog>
    </div>
  );
}
