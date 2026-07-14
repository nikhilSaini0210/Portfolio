import type { EducationItem } from "@/types/common.types";
import type { FC } from "react";
import Card from "../ui/Card";
import { GraduationCap } from "lucide-react";

const EducationCard: FC<EducationItem> = ({ degree, institution, duration, location }) => {
  return (
    <Card className="flex items-start gap-md">
      <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary">
        <GraduationCap className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-semibold text-text-primary">{degree}</h4>
        <p className="mt-[2px] text-sm text-text-secondary">{institution}</p>
        <p className="mt-[2px] font-mono text-xs text-text-muted">
          {duration} · {location}
        </p>
      </div>
    </Card>
  );
};

export default EducationCard;
