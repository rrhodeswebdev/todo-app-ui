export type Task = {
  id: string;
  title: string;
  completed: boolean;
  color: TaskColor;
  createdAt: string;
  updatedAt: string;
};

export type TaskColor =
  | "RED"
  | "ORANGE"
  | "YELLOW"
  | "GREEN"
  | "BLUE"
  | "INDIGO"
  | "PURPLE"
  | "PINK"
  | "BROWN";

export const COLORS_MAP: Record<TaskColor, string> = {
  RED: "#FF3B30",
  ORANGE: "#FF9500",
  YELLOW: "#FFCC00",
  GREEN: "#34C759",
  BLUE: "#007AFF",
  INDIGO: "#5856D6",
  PURPLE: "#AF52DE",
  PINK: "#FF2D55",
  BROWN: "#A2845E",
};

export type NewTask = Omit<
  Task,
  "id" | "createdAt" | "updatedAt" | "completed"
>;
