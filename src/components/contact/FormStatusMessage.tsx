import type { SubmitStatus } from "@/types/common.types";
import { type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface FormStatusMessageProps {
  status: SubmitStatus;
  errorMessage?: string;
}

const FormStatusMessage: FC<FormStatusMessageProps> = ({ status, errorMessage }) => {
  return (
    <AnimatePresence mode="wait">
      {status !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          role="status"
          aria-live="polite"
          className={
            status === "success"
              ? "border-success/20 bg-success/10 flex items-center gap-sm rounded-md border px-md py-sm text-sm text-success"
              : "border-error/20 bg-error/10 flex items-center gap-sm rounded-md border px-md py-sm text-sm text-error"
          }
        >
          {status === "success" ? (
            <>
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Your message has been sent successfully. I&apos;ll get back to you soon!</span>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{errorMessage ?? "Unable to send your message. Please try again later."}</span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormStatusMessage;
