import ContactInformationItem from "./ContactInformationItem";

export default function ContactInformation() {
  return (
    <div className="flex flex-col gap-[1.5rem]">
      <span className="font-semibold  text-[2rem]">Contact Information</span>

      <div className="flex flex-col gap-[1.2rem]">
        <ContactInformationItem
          icon="icon-message"
          item="deutscheinternationalschool@gmail.com"
        />
        <ContactInformationItem icon="icon-call" item="+233245679328" />
        <ContactInformationItem
          icon="icon-location"
          item="Asamankese, near the Pentecost church"
        />
      </div>
    </div>
  );
}
