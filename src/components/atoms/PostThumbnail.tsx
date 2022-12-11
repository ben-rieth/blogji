import Image from 'next/image';
import { type FC } from 'react';

type PostThumbnailProps = {
    filename: string;
    alt: string;
}

const PostThumbnail: FC<PostThumbnailProps> = ({ filename, alt }) => {
    return (
        <div className="relative w-64 h-64">
            <Image 
                src={`/thumbnails/${filename}`} 
                alt={alt} 
                className="object-cover"
                fill />
        </div>
    )
}

export default PostThumbnail;