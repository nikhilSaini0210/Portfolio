import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { EmailServiceError, sendContactEmail } from "@/services/email.service";
import type { SubmitStatus } from "@/types/common.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { Send } from "lucide-react";
import FormStatusMessage from "./FormStatusMessage";

const ContactForm: FC = () => {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", honeypot: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    try {
      await sendContactEmail(data);
      setStatus("success");
      reset();
    } catch (error) {
      const message =
        error instanceof EmailServiceError
          ? error.message
          : "Unable to send your message. Please try again later.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-lg">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div className="grid grid-cols-1 gap-lg sm:grid-cols-2">
        <Input
          label="Name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <Input
        label="Subject"
        placeholder="What's this about?"
        error={errors.subject?.message}
        {...register("subject")}
      />

      <Textarea
        label="Message"
        placeholder="Tell me about your project or opportunity..."
        error={errors.message?.message}
        {...register("message")}
      />

      <FormStatusMessage status={status} errorMessage={errorMessage} />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="sm:w-fit"
      >
        {!isSubmitting && <Send className="h-4 w-4" aria-hidden="true" />}
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
