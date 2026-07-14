import type { FC } from "react";
import Badge from "../ui/Badge";

interface TechBadgeProps {
  tech: string;
}
const TechBadge: FC<TechBadgeProps> = ({ tech }) => {
  return <Badge variant="primary">{tech}</Badge>;
};

export default TechBadge;
