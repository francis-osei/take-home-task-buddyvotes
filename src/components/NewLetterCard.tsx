import Image from "next/image";

export default function NewsLetterCard({
  photo,
  title,
  alt,
}: {
  photo: string;
  title: string;
  alt: string;
}) {
  return (
    <div className=" w-[40.2rem] h-[37.2rem]">
      <div className="relative">
        <Image
          layout="responsive"
          width={402}
          height={372}
          alt={alt}
          src={photo}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent top-[17.4rem] h-[20rem] to-black flex items-end ">
          <h2 className="font-sora font-semibold text-[2rem] leading-[2.52rem] w-[29.5rem] text-white  ml-[2.1rem] mb-[1.9rem]">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
