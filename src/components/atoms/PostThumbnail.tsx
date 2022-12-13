import Image from 'next/image';
import { type FC } from 'react';

type PostThumbnailProps = {
    filename: string;
    alt: string;
}

const PostThumbnail: FC<PostThumbnailProps> = ({ filename, alt }) => {
    return (
        <div className="relative aspect-video rounded">
            <Image 
                src={`/thumbnails/${filename}`} 
                alt={alt} 
                className="object-cover rounded-lg group-hover:ring-4 group-hover:ring-sky-500"
                fill
                priority
                sizes="
                    calc(100vw - 40px),
                    (min-width: 640px) calc(50vw - 80px),
                    (min-width: 1024px) calc(33vw - 120px),
                    (min-width: 1920px) calc(25vw - 160px),
                " 
            />
        </div>
    )
}

export default PostThumbnail;