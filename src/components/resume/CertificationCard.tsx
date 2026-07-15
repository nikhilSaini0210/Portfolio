import type { Certification } from "@/types/common.types";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { type FC } from "react";
import Card from "../ui/Card";

const CertificationCard: FC<Certification> = ({ name, issuer, date, credentialUrl }) => {
  return (
    <Card className="flex items-start gap-md">
      <div className="bg-success/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-success">
        <BadgeCheck className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-text-primary">{name}</h3>
        <p className="mt-[2px] text-sm text-text-secondary">{issuer}</p>
        <p className="mt-[2px] font-mono text-xs text-text-muted">{date}</p>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-sm inline-flex items-center gap-xs rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            View Credential
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </Card>
  );
};

export default CertificationCard;
