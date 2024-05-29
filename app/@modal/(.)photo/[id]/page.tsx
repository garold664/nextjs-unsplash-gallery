import ImageDetail from '@/app/components/ImageDetail';
import Overlay from '@/app/components/Overlay';
import { getPhoto } from '@/app/lib/unsplash';
import { useRouter } from 'next/navigation';
interface ModalDetailPageProps {
  params: {
    id: string;
  };
}
export default async function ModalDetailPage({
  params: { id },
}: ModalDetailPageProps) {
  const photo = await getPhoto(id);

  // console.log(photo);
  return (
    // <div className="fixed inset-0">
    <Overlay>
      <dialog className="w-[80vw] h-[80vh] rounded-md" open>
        <ImageDetail photo={photo} />
      </dialog>
    </Overlay>
    // </div>
  );
}
