import type { ActivityMonth } from "@/types/common.types";

const generateActivity = (): ActivityMonth[] => {
  const ranges = [
    {
      start: "2023-03",
      end: "2024-04",
      company: "Ideaexecution Technologies",
      intensity: 3 as const,
    },
    { start: "2024-05", end: "2025-03", company: "Fi Elements", intensity: 4 as const },
    { start: "2025-04", end: "2025-08", company: "JustGetLeads", intensity: 3 as const },
    { start: "2025-09", end: "2026-05", company: "ScoreBoat AI Learning", intensity: 4 as const },
  ];

  const months: ActivityMonth[] = [];
  const start = new Date("2023-03-01");
  const end = new Date("2026-05-01");

  for (let d = new Date(start); d <= end; d.setMonth(d.getMonth() + 1)) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const match = ranges.find((r) => key >= r.start && key <= r.end);
    months.push({
      month: key,
      intensity: match?.intensity ?? 0,
      label: match?.company ?? "—",
    });
  }

  return months;
};

export const ACTIVITY_DATA = generateActivity();

export const intensityStyles = [
  "bg-border",
  "bg-primary/25",
  "bg-primary/50",
  "bg-primary/75",
  "bg-primary",
];
