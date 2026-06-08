import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface IconProps {
  src: StaticImport | string;
  alt?: string;
  symbol?: StaticImport | string;
}

export default function Icon({ src, alt = "", symbol }: IconProps) {
  return (
    <div className="flex gap-3 group cursor-pointer items-center">
      {symbol && (
        <Image
          src={symbol}
          alt=""
          className="w-6 h-6 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
      )}

      <Image
        src={src}
        alt={alt}
        className="w-28 h-6 object-contain object-left grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  );
}
