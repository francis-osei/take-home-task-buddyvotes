import NewsLetterpost from "@/components/NewsLetterPost";
import SideNav from "@/components/SideNav";

export default function Dashboard() {
  return (
    <div className="layout">
      <div>
        <SideNav />
      </div>
      <div className="pl-[6.3rem] pr-[12.4rem]">
        <div className="flex items-center justify-between">
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
            photo="/images/newsletter/young-black-boy.jpg"
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
