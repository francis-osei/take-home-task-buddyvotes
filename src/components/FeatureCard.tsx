import Image from "next/image";

export default function FeatureCard({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col  gap-[1rem] w-[43.5rem]">
      <div className=" flex items-center justify-center w-[6.742rem] h-[6.6rem] rounded-[2.2rem] bg-[#F2F6FE]">
        <Image src={icon} alt="" width={33} height={33} />
      </div>
      <span className="font-sora font-bold text-[2.4rem] leading-[4.2rem]">
        {title}
      </span>
      <p className="font-gilroy font-normal text-[1.6rem] leading-[2.4rem] text-[#474464]">
        {content}
      </p>
    </div>
  );
}
