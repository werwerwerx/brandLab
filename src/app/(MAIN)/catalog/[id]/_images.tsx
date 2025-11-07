"use client";
import Image from "next/image";
import { useState } from "react";

export const ImagesGrid = ({ imgUrls }: { imgUrls: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (imgUrls.length === 0) return null;

  return (
    <div className="md:flex-row gap-2 w-full hidden sm:flex max-h-[70vh]">
      <div className="relative aspect-square md:aspect-2/1 w-full md:flex-1 bg-card shadow-lg rounded-xl overflow-hidden">
        <Image
          src={imgUrls[selectedImage]}
          alt="Основное изображение товара"
          fill
          className="object-contain transition-opacity duration-500"
          priority
          sizes="(max-width: 768px) 80vw, 80vw"
        />
      </div>

      {imgUrls.length > 1 && (
        <div className="flex md:grid md:grid-cols-2 flex-col gap-2 w-[17%] md:w-[35%] flex-shrink-0">
          {imgUrls.map((img, index) => (
            <button
              key={index}
              className={`relative aspect-square md:aspect-auto  rounded-md w-full overflow-hidden border transition-all duration-300  ${
                selectedImage === index
                  ? "border-primary"
                  : "border-border "
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={img}
                alt={`Миниатюра ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
