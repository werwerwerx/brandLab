import { Container } from "@/shared/components/container";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="p-2 w-full overflow-hidden relative rounded brightness-50 aspect-10/1 hover:aspect-1/1 hover:brightness-120  transition-all duration-500">
        <Image
          src={
            "https://img.ostin.com/upload/content/contentgate/prod/ru_ostin/clp/desk__w__new__051125(2).webp"
          }
          alt="девушки баннер"
          fill
          objectFit="cover"
          className=""
        />
      </div>
    </>
  );
}
