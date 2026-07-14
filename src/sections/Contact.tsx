import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Card from "@/components/ui/Card";
import type { FC } from "react";

const Contact: FC = () => {
  return (
    <Section id="contact" className="bg-bg-secondary">
      <SectionTitle
        label="Contact"
        title="Let's work together"
        description="I'm currently available for new opportunities and freelance projects."
      />

      <div className="grid grid-cols-1 gap-2xl lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>

        <div className="lg:col-span-3">
          <Card>
            <ContactForm />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
