import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Card from "@/components/ui/Card";
import type { FC } from "react";
import SectionBackground from "@/components/common/SectionBackground";
import { Mail } from "lucide-react";

const Contact: FC = () => {
  return (
    <Section id="contact" className="relative overflow-hidden bg-bg-secondary">
      <SectionBackground variant="waves" hue="hue-3" />

      <div className="relative">
        <SectionTitle
          label="Contact"
          icon={Mail}
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
      </div>
    </Section>
  );
};

export default Contact;
