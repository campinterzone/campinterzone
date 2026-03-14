import Image from "next/image";

interface FramedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Optional white inner mat between image and frame border */
  mat?: boolean;
}

/**
 * Polaroid / museum frame image wrapper.
 * Design rules:
 * - 4px solid #1E120A border (espresso)
 * - No border-radius, no shadow
 * - Optional white inner mat (8px padding, canvas background)
 */
export default function FramedImage({
  src,
  alt,
  width,
  height,
  className = "",
  mat = false,
}: FramedImageProps) {
  return (
    <div
      className={`inline-block border-4 border-[#1E120A] ${mat ? "p-2 bg-[#EDE8DF]" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block"
        style={{ display: "block" }}
      />
    </div>
  );
}
