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
                priority />
        </div>
    )
}

export default PostThumbnail;