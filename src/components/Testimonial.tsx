import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-[12.4rem] bg-[#052326] px-10">
      <figure className="flex flex-wrap gap-[5rem] items-center justify-center">
        <div className="flex flex-col  gap-[2.6rem] text-white">
          <p className="font-sora font-semibold text-[4rem] text-white leading-[5.04rem] max-w-[81.3rem]">
            “ We appreciate the school&apos;s emphasis on diversity, equity, and
            inclusion. Our daughter has been exposed to a wide range of cultures
            and perspectives. ”
          </p>

          <figcaption className="font-gilroy font-medium text-[2rem] leading-[2.354rem]">
            Mr. Nathan Offei Ansah, Parent
          </figcaption>
        </div>
        <div className="max-w-[27rem] max-h-[29.1rem]">
          <Image
            layout="responsive"
            width={432}
            height={466}
            src="/images/testimonial/nathan-offei-ansah.jpg"
            alt="Photo of Mr. Nathan Offei Ansah"
          />
        </div>
      </figure>
    </section>
  );
}
