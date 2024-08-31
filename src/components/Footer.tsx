import ContactInformation from "./ContactInformation";
import Logo from "./Logo";
import QuickLink from "./QuickLink";
import SubscribeToNewsLetter from "./SubscribeToNewsLetter";

export default function Footer() {
  return (
    <>
      <div className=" bg-[#05060F] pt-[5.2rem] pb-[4.7rem] text-[1.6rem] font-normal  px-[7.5rem] text-white font-gilroy">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-[1.1rem]">
            <Logo />
            <span>Building Future Leaders.</span>
          </div>
          <QuickLink />
          <div className="flex flex-col gap-[2rem]">
            <ContactInformation />
            <SubscribeToNewsLetter />
          </div>
        </div>
        <div className="flex justify-between mt-[4.4rem] border-t-[.05rem] p-[1.8rem] pb-[.3rem]">
          <span>
            © 2023
            <span className="font-semibold italic leading-[2.4rem]">
              &nbsp; deutscheinternationalschool
            </span>
            . All rights reserved. Designed and developed by Degriti
          </span>
          <div className="flex gap-[1.3rem]">
            <span>Pirvacy Policy</span>
            <span>Terms and Condition</span>
            <span>Cookies Policies</span>
          </div>
        </div>
      </div>
    </>
  );
}
