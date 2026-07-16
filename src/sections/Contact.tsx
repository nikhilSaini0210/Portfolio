import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Card from "@/components/ui/Card";
import type { FC } from "react";

const Contact: FC = () => {
  return (
    <Section id="contact" className="relative overflow-hidden bg-bg-secondary">
      <div
        className="bg-primary/10 pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="bg-accent/10 pointer-events-none absolute -right-20 top-1/4 h-64 w-64 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <SectionTitle
        label="Contact"
        title="Let's work together"
        description="I'm currently available for new opportunities and freelance projects."
      />

      <div className="relative grid grid-cols-1 gap-2xl lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>

        <motion.div
          className="lg:col-span-3"
          whileInView={{ opacity: [0, 1], y: [16, 0] }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="from-primary/20 to-accent/20 relative rounded-lg bg-gradient-to-br via-transparent p-[1px]">
            <Card className="rounded-lg bg-surface">
              <ContactForm />
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
