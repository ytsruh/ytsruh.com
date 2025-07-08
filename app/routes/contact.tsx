import ContactIcons from "~/components/ContactIcons";
import PageTitle from "~/components/PageTitle";

export default function Contact() {
  return (
    <section className="w-full">
      <PageTitle
        title="Contact"
        description="Feel free to to contact me through any of the below methods."
      />
      <ContactIcons />
    </section>
  );
}