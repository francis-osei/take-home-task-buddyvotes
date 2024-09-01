import NewsLetterpost from "@/components/NewsLetterPost";
import SideNav from "@/components/SideNav";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="layout">
      <div className="small  flex flex-shrink items-center pr-[11.5rem] gap-[45.6rem] mt-[3rem] justify-end top-full">
        <a
          href="#"
          className="font-gilroy font-medium text-[1.6rem] leading-[2.4rem] border-[.1rem] px-[2.6rem] py-[1rem] rounded-[1.9rem] border-black"
        >
          Visit Wesbsite
        </a>
        <div className="flex items-center gap-[.7rem]">
          <div className="rounded-full bg-[#F7F9FC] p-[1.3rem]">
            <svg className="w-[1.9rem] h-[2.2rem]">
              <use xlinkHref="/icons/svg/sprite.svg#icon-notification"></use>
            </svg>
          </div>
          <div className="w-[4.6rem] h-[4.6rem]">
            <Image
              src="/page/Ellipse-3.jpg"
              width={46}
              height={46}
              alt="photo of the user"
            />
          </div>
        </div>
      </div>
      <div className=" md:mt-[3.1rem]  ">
        <SideNav />
      </div>
      <div className="small md:pl-[6.3rem] md:pr-[12.4rem] md:mt-[3.1rem] sm:pl-[2rem] sm:pr-[2rem]">
        <div className="flex  flex-wrap gap-y-10 items-center justify-between">
          <span className=" font-gilroy font-semibold text-[2.4rem] leading-[2.4rem]">
            Newsletters
          </span>
          <button className="font-gilroy font-semibold text-[1.6rem] leading-[2.4rem] py-[1rem] px-[6rem] text-white rounded-[.8rem] bg-[#582BE8]">
            New Post
          </button>
        </div>

        <div className="mt-[3.4rem] flex gap-[7.9rem] border-b-[.2rem] border-dashed border-[#DCE0E4]">
          <span className=" text-[1.6rem] font-medium leading-[2.4rem] text-[#582BE8] border-b-[.2rem] p-[.9rem] border-[#582BE8]">
            Published
          </span>
          <span className="text-[1.6rem]  font-medium p-[.9rem]">Draft</span>
        </div>
        <div className=" flex flex-col mt-[2.8rem] gap-[2.8rem]">
          <NewsLetterpost
            title="Lorem ipsum dolor sit amet consectetur."
            content="Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem ac proin. Augue mauris aliquet ac sodales sit. Penatibus ac odio hendrerit posuere pharetra integer aliquet. Commodo donec tincidunt id sed at "
            photo="/images/newsletter/rectangle-14.jpg"
          />
          <NewsLetterpost
            title="Lorem ipsum dolor sit amet consectetur."
            content="Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem ac proin. Augue mauris aliquet ac sodales sit. Penatibus ac odio hendrerit posuere pharetra integer aliquet. Commodo donec tincidunt id sed at "
            photo="/images/newsletter/young-black-boy.jpg"
          />
        </div>
      </div>
    </div>
  );
}
