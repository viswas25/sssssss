import React, { useState } from 'react';

interface ProductImagesProps {
  images: string[];
  name: string;
}

export default function ProductImages({ images, name }: ProductImagesProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
        <img
          src={mainImage}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
              mainImage === image ? 'ring-2 ring-black' : ''
            }`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}