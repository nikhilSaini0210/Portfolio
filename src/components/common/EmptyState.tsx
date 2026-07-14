import { cn } from "@/lib/cn";
import { Inbox } from "lucide-react";
import type { FC, ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ icon, title, description, action, className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-3xl text-center", className)}>
      <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-bg-secondary text-text-muted">
        {icon ?? <Inbox className="h-7 w-7" aria-hidden="true" />}
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      {description && <p className="mt-xs max-w-sm text-sm text-text-secondary">{description}</p>}
      {action && <div className="mt-lg">{action}</div>}
    </div>
  );
};

export default EmptyState;
